import Link from 'next/link';
import React from 'react';

const PrivacyPage: React.FC = () => {
  return (
    <div className='flex flex-col items-center bg-base-100 text-primary lg:py-8 lg:px-8 xl:py-16 xl:px-28'>
      <div className='max-w-[1280px]'>
        <div className='flex flex-col px-4 text-center lg:text-left lg:p-0 gap-4'>
          <h3 className='text-xl font-semibold my-2'>YOUR PRIVACY MATTERS</h3>
          <p>
            This Privacy Policy is meant to help You the user (<b>“You,”</b> or{' '}
            <b>“Your”</b>) understand what data We collect, why We collect it,
            and what We do with it. Please take the time to read it carefully.
          </p>
          <p>
            This website (the <b>“Site”</b>) is owned and operated by Full Blast
            Enterprises LLC, a Colorado limited liability company with its
            principal office at 9809 Cypress Pt. Cir., Lone Tree, CO 80124 (
            <b>“FBE,”</b> <b>“Our,”</b> <b>“Us,”</b> or <b>“We”</b>). FBE is
            responsible for the processing of Your collected personal
            information and data. By interacting with FBE through the use of Our
            Site, mobile applications, products, and “Services,” as defined in
            Our Terms of Use (<b>“TOU”</b>), You consent to the use of
            information that is collected or submitted as described in this
            Privacy Policy and Our TOU, which are incorporated into this Privacy
            Policy by reference. We may change or add to this Privacy Policy and
            the TOU, so We encourage You to review them periodically. All
            capitalized terms used in this Privacy Policy but not defined within
            it have the meanings assigned to them in the TOU.
          </p>
          <h3 className='text-xl font-semibold my-2'>INFORMATION WE COLLECT</h3>
          <p>
            We collect information to provide better Services to Our users,
            clients, and consumers and so We can make decisions about ways to
            make Our consumer community better. When You interact with FBE
            through Our Services, Site, or apps, We may collect personally
            identifiable information (<b>“Personal Data”</b>) and other
            information from You, as further described below. We may use this
            information for registration and administration of Your account,
            processing Your orders, for communications with You, Your
            participation in research and surveys, customer support and
            technical assistance, anything You upload or post to or through the
            Services or Site, and for employment/work applications You submit.
            The type of information We collect will depend on the manner in
            which You use Our Site and Services.
          </p>
          <ul className='list-disc ml-5'>
            <li>
              Information You Give Us: We collect Personal Data from You when
              You voluntarily provide such information. Personal information may
              generally include: name, age or date of birth, postal address,
              email address, passwords, screen names, and account names,
              wireless device address, text message address, geolocation
              information, and payment card and other payment information. We
              collect Personal Data via Our Site in a variety of circumstances,
              including when You contact Us with inquiries, respond to a survey,
              register for access to Our Services, purchase products, or use
              certain Services. By voluntarily providing Us with Personal Data,
              You are consenting to Our use of it in accordance with this
              Privacy Policy and Our TOU. By providing Personal Data in
              connection with use of Our Site, Services, or apps, and depending
              on the type and scope of Your use, You acknowledge and agree Your
              Personal Data may be transferred from Your current location to the
              offices and servers of FBE and to any authorized third-parties,
              including but not limited to Google, Google Analytics,
              Squarespace, GoDaddy, Microsoft, Quickbooks, Mail Chimp, Venmo,
              Stripe, Paypal, Square, LinkedIn, Facebook, Instagram, or Our
              other advertising, storage, digital, or management partners as
              applies from time-to-time. Each of these third-party providers
              maintains its own privacy policy and terms of service. We do not
              control and are not responsible for those privacy policies or
              terms of service. Please visit those sites to review their
              individual policies and terms.
            </li>
            <li>
              Contact Information: When You enter Your information through the
              use of Our Site, Services, or apps, You enter it willingly in
              agreement with Our TOU for such participation. We will collect and
              store the information You populate, regardless of whether You pay
              for Services, to include: Your contact email address, name,
              address, website URL, phone number and other metadata assigned to
              You; We obtain this data You enter to create Your profile, screen
              and to verify Your information.
            </li>
            <li>
              Other Information: Non-Identifiable Data: When You interact with
              FBE through the Site or Our Services, We receive and store certain
              personally non-identifiable information. Such information, which
              is collected passively using various technologies, cannot
              presently be used to specifically identify You. FBE may store such
              information itself or such information may be included in
              databases owned and maintained by FBE’s affiliates, agents, or
              service providers. The Services may use such information and pool
              it with other information to track, for example, the total number
              of visitors to Our Site, the number of visitors to each page of
              Our Site, and the domain names of Our visitors’ Internet service
              providers. There is not any available Personal Data in this
              process.
            </li>
            <li>
              Aggregated Personal Data: In an ongoing effort to better
              understand and serve the users of the Site and Our Services, FBE
              may conduct research on its customer demographics, interests, and
              behavior based on the Personal Data and other information provided
              to us. This research may be compiled and analyzed on an aggregate
              basis, and FBE may share it with FBE’s affiliates, agents, and
              business partners. This aggregate information does not identify
              You personally. FBE may also disclose aggregated user statistics
              to describe Our Services to current and prospective business
              partners, and to other third-parties for other lawful purposes.
            </li>
            <li>
              Location Information: Our Services and third-parties that are
              integrated into Our Site may collect and use Your actual location
              information (for example, by using the GPS on Your mobile device,
              IP address, and other sensors that may provide FBE with
              information on nearby devices, Wi-Fi access points, and cell
              towers, or when You submit materials to the Site that may contain
              geographic information in the materials’ metadata) to provide
              certain functionality for Our Site and Services. We may also use
              Your location information in an aggregate way, as described above
              in the “Aggregated Personal Data” section.
            </li>
            <li>
              Website Usage Information: We may allow third-party service
              providers, including but not limited to those listed above, to use
              cookies or similar technologies to collect information about Your
              browsing activities over time and across different websites
              following Your use of the Services. Examples of the types of
              tracking technologies deployed on Our websites may include the
              following:
            </li>
          </ul>
          <p>
            Analytics: We may use third-party web analytics services that use
            cookies to help Us analyze how users use Our Site and to enhance
            Your experience when You use the Services. When You visit Our site,
            the pages You look at, and a short text file called a cookie
            (detailed more thoroughly below), are downloaded to Your computer.
            We do not sell, give, or trade the statistics stored by cookies to
            any third-parties for data-mining or marketing purposes. To learn
            more about Google Analytics’ use of this data, please visit:
          </p>
          <Link
            href='https://marketingplatform.google.com/about/analytics/'
            className='underline break-all'
          >
            https://marketingplatform.google.com/about/analytics/
          </Link>
          <p>
            To opt out of Google Analytics for display advertising or customize
            Google display network ads, visit the{' '}
            <Link
              href='https://adssettings.google.com/authenticated'
              className='underline break-all'
            >
              Google Ads Settings
            </Link>{' '}
            page.
          </p>
          <p>
            Online Advertising and Marketing Partners: We may utilize and
            integrate third-party advertising services and technologies. (
            <i>e.g.</i>, ad networks and ad servers such as Facebook, Google Ad
            Words, and others) that use cookies and other technologies to
            deliver relevant content and advertising for Us, as well as on other
            websites You visit and other applications You use. The ads may be
            based on various factors such as the content of the page You are
            visiting, information You enter such as Your searches, demographic
            data, and other information We collect from You. These ads may be
            based on Your current activity or Your activity over time and across
            other websites and online services. Please see the following for
            more information about tailoring browser advertising and how You can
            generally control cookies related to it:
          </p>
          <p>
            <Link
              href='http://optout.networkadvertising.org/#!/'
              className='underline break-all'
            >
              Network Advertising Initiative’s Consumer Opt-Out link
            </Link>
          </p>
          <p>
            <Link
              href='http://optout.aboutads.info/#!/'
              className='underline break-all'
            >
              Digital Advertising Alliance’s Consumer Opt-Out link
            </Link>
          </p>
          <p>
            <Link
              href='http://www.youronlinechoices.eu/'
              className='underline break-all'
            >
              Your Online Choices
            </Link>
          </p>
          <p>
            We neither have access to, nor does this Privacy Policy relate to,
            the use of cookies or other tracking technologies that may be placed
            on the device You use to access the Site or Services by
            non-affiliated third-party advertising network services. We are not
            responsible for any choices You make using these mechanisms or the
            continued availability or accuracy of these mechanisms. Please note
            that if You exercise the opt-out choices above, You will still see
            advertising when You use the Services, but it will not be tailored
            to You based on Your online behavior over time. For a current list
            of the third-party company services We utilize that may or may not
            collect Your browsing activities, please contact Our Data Protection
            Officer, as detailed below.
          </p>
          <h3 className='text-xl font-semibold my-2'>
            DO NOT TRACK DISCLOSURE
          </h3>
          <p>
            “Do Not Track” (<b>“DNT”</b>) is a privacy preference that users can
            set in certain web browsers. We are committed to providing You with
            meaningful choices about the information collected on Our website
            for third-party purposes. We therefore provide a variety of opt-out
            mechanisms listed above. However, We do not currently recognize or
            respond to browser-initiated DNT signals. Please visit the{' '}
            <Link
              href='https://allaboutdnt.com/'
              className='underline break-all'
            >
              Future of Privacy Forum’s
            </Link>{' '}
            website for more information on Do Not Track.
          </p>
          <h3 className='text-xl font-semibold my-2'>
            HOW WE USE INFORMATION WE COLLECT
          </h3>
          <p>
            We use the information We collect to provide, maintain, protect, and
            improve Our Services, to develop new Services, and to protect FBE
            and Our users. We also use this information to offer You tailored
            content, like giving You more relevant search results and ads. We
            use information collected from cookies and other technologies to
            improve Your user experience and the overall quality of Our
            Services. We use user contact information (name, email, address) for
            educational and promotional purposes, such as sharing offers and new
            techniques and other educational information with You. If You
            provide Personal Data to obtain access to the Site or Our Services,
            We will use Your Personal Data to provide You with access to such
            Services and to monitor Your use of such Services. FBE and its
            affiliates may use this information to contact You in the future to
            tell You about Services We believe will be of interest to You. Each
            marketing communication We send will contain instructions permitting
            the recipient to “opt out” of receiving future marketing
            communications. In addition, if at any time You wish not to receive
            any future marketing communications or You wish to have Your name
            deleted from Our mailing lists, please contact Us as indicated
            below.
          </p>
          <p>
            We may also use contact information to suggest connections and to
            enable You to invite others to use Our Services and connect with
            You. It is Your choice whether to invite someone to Our Services.
            For clarity, if an invitee accepts the invitation, then the invitee
            shall be subject to the terms of this Privacy Policy and Our TOU. If
            We intend to use any Personal Data in any manner that is not
            consistent with this Privacy Policy, You will be informed of such
            anticipated use prior to or at the time at which the Personal Data
            is collected. We retain Your Personal Data for as long as necessary
            to fulfill the purposes described in this Privacy Policy, unless
            otherwise required by law. For example, We keep Your account profile
            information for as long as You keep Your Site account, but We may
            keep other information longer to comply with legal obligations.
          </p>
          <h3 className='text-xl font-semibold my-2'>
            OUR DISCLOSURE OF YOUR PERSONAL DATA AND OTHER INFORMATION
          </h3>
          <p>
            We do not sell Your information. We consider this information to be
            a vital part of Our relationship with You. There are, however,
            certain circumstances in which We may share Your Personal Data with
            certain third-parties without further notice to You, as discussed
            above and set forth below:
          </p>
          <ul className='list-disc ml-5'>
            <li>
              Business Transfers: As We develop Our business, We might sell or
              buy businesses or assets. In the event of a corporate sale,
              merger, reorganization, acquisition, dissolution, liquidation, or
              similar event, Personal Data may be part of the transferred or
              affected assets. We reserve the right to transfer all Personal
              Data in Our possession to a successor entity in the event of a
              merger, acquisition, bankruptcy, or other sale of all or a portion
              of Our assets. Other than to the extent ordered by a bankruptcy or
              other court, the use and disclosure of all transferred Personal
              Data will be subject to this Privacy Policy, or to a new privacy
              policy upon notice to You and where You do not affirmatively
              opt-out. Personal Data submitted or collected after a transfer may
              be subject to a new privacy policy of the successor entity.
            </li>
            <li>
              Related Companies: We may also share Your Personal Data with any
              affiliate companies for purposes consistent with this Privacy
              Policy, as discussed in this Privacy Policy.
            </li>
            <li>
              Agents, Consultants, and Related Third-Parties: FBE, like many
              businesses, sometimes hires other companies to perform certain
              business-related functions. Examples of such functions include
              mailing information, maintaining databases, analytics, and
              processing payments. When We employ another entity to perform a
              function of this nature, We only provide them with the information
              that they need to perform their specific function.
            </li>
            <li>
              Legal Requirements: FBE may disclose Your Personal Data if
              required to do so by law or in the good faith belief that such
              action is necessary to: (i) comply with any applicable law, legal
              process, judgment, order, or enforceable governmental request;
              (ii) protect and defend the rights or property of FBE, including
              the enforcement of applicable TOU, including investigation of
              potential violations; (iii) act in urgent circumstances to protect
              the personal safety of users of Our Services or the public,
              including the detection, prevention, or to otherwise address
              fraud, security, or technical issues; or, (iv) protect against
              legal liability.
            </li>
            <li>
              Consent. We may also disclose Your information in other ways You
              direct Us to and when We have Your consent.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPage;
