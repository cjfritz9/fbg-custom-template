import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export const POST = async (req: NextRequest) => {
  const body = await req.json();
  console.log(body);
  const mailerConfig = {
    service: process.env.MAILER_SERVICE!,
    // host: process.env.MAILER_HOST!,
    // secure: true,
    // secureConnection: false,
    // tls: {
    //   ciphers: process.env.MAILER_TLS_CIPHERS!
    // },
    // requireTLS: true,
    // port: +process.env.MAILER_PORT!,
    debug: true,
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
  await new Promise((resolve, reject) => {
    transporter.verify((error, success) => {
      if (error) {
        console.log(error);
        reject(error);
        return NextResponse.json({ error: 'Error(s) logged to server' });
      } else {
        console.log('Server is ready to take messages');
        resolve(success);
      }
    });
  });
  const response = await new Promise((resolve, reject) => {
    transporter.sendMail(
      {
        from: 'noreply.fullblastgear@gmail.com',
        to: 'noreply.fullblastgear@gmail.com',
        subject: 'New Web Support Request',
        text: `<p>${body.message}</p>`
      },
      (err, info) => {
        if (err) {
          console.log(err);
          console.log(info);
          reject(err);
          return NextResponse.json({ error: 'Error(s) logged to server' });
        } else {
          resolve(info);
          return NextResponse.json({ success: 'Message sent successfully' });
        }
      }
    );
  });
  console.log(response)
};
