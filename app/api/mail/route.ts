import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export const POST = async (req: NextRequest) => {
  const body = await req.json();
  const mailerConfig = {
    service: process.env.MAILER_SERVICE!,
    // LEFT IN FOR POTENTIAL FUTURE GODADDY SETUP
    // __________________________________________
    // host: process.env.MAILER_HOST!,
    // secure: true,
    // secureConnection: false,
    // tls: {
    //   ciphers: process.env.MAILER_TLS_CIPHERS!
    // },
    // requireTLS: true,
    // port: +process.env.MAILER_PORT!,
    // debug: true,
    auth: {
      type: 'OAuth2',
      user: process.env.MAILER_USER!,
      pass: process.env.MAILER_PASS!,
      clientId: process.env.MAILER_OAUTH_CLIENT_ID!,
      clientSecret: process.env.MAILER_OAUTH_CLIENT_SECRET!,
      refreshToken: process.env.MAILER_OAUTH_REFRESH_TOKEN!
    }
  };
  //@ts-ignore
  const transporter = nodemailer.createTransport(mailerConfig);
  const verificationResponse = await new Promise((resolve, reject) => {
    transporter.verify((error, success) => {
      if (error) {
        console.log(error);
        reject(error);
      } else {
        console.log('Server is ready to take messages');
        resolve(success);
      }
    });
  });
  if (!verificationResponse) {
    return NextResponse.json({ error: 'Error(s) logged to server' });
  }
  const response: any = await new Promise((resolve, reject) => {
    transporter.sendMail(
      {
        from: 'noreply.fullblastgear@gmail.com',
        to: process.env.MAILER_RECIPIENT!,
        subject: body.subject,
        html: `
        <div>
          <h2>New Contact Form Response for Full Blast Gear</h3>
          <br/>
          <h3>From:</h3>
          <p>${body.firstName} ${body.lastName}</p>
          <p>${body.email}</p>
          ${
            body.orderNumber
              ? `
            <h3>Order Number:</h3>
            <p>${body.orderNumber}</p>
            `
              : ''
          }
          <h3>Message:</h3>
          <p>${body.message}</p>
        </div>
        `
      },
      (err, info) => {
        if (err) {
          console.log(err);
          console.log(info);
          reject(err);
        } else {
          resolve(info);
        }
      }
    );
  });
  if (response.accepted.length > 0) {
    return NextResponse.json({ success: 'Message sent' });
  } else {
    return NextResponse.json({ error: 'Error(s) logged to server' });
  }
};
