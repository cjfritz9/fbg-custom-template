import { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = {
  title: { default: 'Cookies', template: '%s | Full Blast USA' },
  description:
    'Understand our policies and commitments on the Policies page at Full Blast USA. We value transparency, integrity, and your satisfaction. Learn about our privacy, return, and customer service policies to ensure a seamless experience with our unique firearm cleaning solutions.'
};

const CookiesPage: React.FC = () => {
  return (
    <div className='flex flex-col items-center bg-base-100 text-primary lg:py-8 lg:px-8 xl:py-16 xl:px-28'>
      <div className='max-w-[1280px]'>
        <div className='flex flex-col px-4 text-center lg:text-left lg:p-0 gap-4'>
          <h3 className='text-xl font-semibold my-2'>
            OUR USE OF COOKIE AND SIMILAR ONLINE TOOLS
          </h3>
          <p>
            We may use cookies, server logs, tags, tracking pixels, and other
            similar tracking technologies to receive and store certain types of
            information whenever You interact with Us or third-parties that use
            Our Services, as described in this Privacy Policy. Examples of
            information generally provided by these search technologies include
            but are not limited to: pages You visit, ads You click on, type of
            browser, device, or hardware You use, purchase information, IP
            location, and search terms.
          </p>
          <ul className='list-disc ml-5'>
            <li>
              A web server log is a file where website activity is stored.
            </li>
            <li>
              A cookie is a small text file that is placed on Your computer or
              mobile device when You visit a site, that enables Us to: (i)
              recognize Your computer/device; (ii) store Your preferences and
              settings; (iii) understand the parts of the Services You have
              visited and used; (iv), enhance Your user experience by delivering
              and measuring the effectiveness of content and advertising
              tailored to Your interests; (v) perform searches and analytics;
              and (vi) assist with security and administrative functions.
            </li>
            <li>
              Tracking pixels (sometimes referred to as web beacons or clear
              GIFs) are tiny electronic tags with a unique identifier embedded
              in websites, online ads or email that are designed to: (1) collect
              usage information like ad impressions or clicks and email open
              rates; (2) measure popularity of the Services and associated
              advertising; and (3) access user cookies.
            </li>
          </ul>
          <p>
            All tracking technologies detailed within this Privacy Policy may be
            deployed by Us or Our third-party service providers on Our behalf.
            By using Our Site or Services, You agree to Our use of the above
            tracking technologies. You may refuse to supply Personal Data or opt
            out of data tracking by contacting Us at the information below, with
            the understanding it may prevent You from using the Site, the
            Services, or engaging in certain Site- or FBE-related activities, in
            whole or in part. Your browser can also help You manage these
            tracking technologies. You can choose to have Your computer warn You
            each time a cookie is being sent, or You can choose to turn off or
            block all cookies. These options are generally available through the
            settings menu on each browser and device You use. Each browser is a
            little different, so look at Your browser “Help” menu to learn the
            correct way to modify the use of these technologies. Please note, if
            You turn them off, You may not have access to many features of Our
            Site and Services.
          </p>
          <ul className='list-decimal ml-4'>
            <li>
              Your Choices, Generally. You may instruct Us not to use Your
              contact information to contact You by email, mail, or phone
              regarding products, services, promotions and special events that
              might appeal to Your interests by contacting Us using the
              information below. In commercial email messages, You can also opt
              out by following the instructions located at the bottom of each
              email. Please note, regardless of Your request, We may still use
              and share certain information as permitted by this Privacy Policy
              or as required by applicable law. For example, You may not opt out
              of certain operational emails, such as those reflecting Our
              relationship or transactions with You.
            </li>
            <li>
              Privacy Information for California Residents. If You are a
              California resident, We are providing some additional information
              regarding how We collect, use, and share Your “personal
              information” in association with the California Consumer Privacy
              Act (“CCPA”) and the California Privacy Rights Act (“CPRA”)).
            </li>
            <li>
              Categories of personal information We collect. Throughout this
              Policy, We discuss in detail the specific pieces of personal
              information We collect from and about Our users. Under the CCPA,
              We are also required to provide You with the “categories” of
              personal information We collect. The categories We collect are:
              identifiers (such as name, age or date of birth, postal address,
              email address, passwords, screen names, and account names);
              commercial information (such as transaction data); financial data
              (such as credit card information); internet or other network or
              device activity (e.g., IP address, browsing history, or app
              usage); general and precise geolocation information; inference
              data about You (e.g., the products and services You might be
              interested in based on other products and services You use); and
              legally protected classifications (e.g., gender); and other
              information that identifies or can be reasonably associated with
              You. We do not collect personal health information, sexual
              orientation, religious information, or genetic data.
            </li>
            <li>
              How We use and share these categories of personal information. We
              use and share the categories of personal information We collect
              from and about You consistent with the various business purposes
              We discuss throughout this Policy. Please note the CCPA, as
              amended by Proposition 24 (2020), sets forth certain obligations
              for businesses that “sell” personal information to third-parties.
              We do not engage in such activity and have not engaged in such
              activity in the past twelve months.
            </li>

            <li>
              Your California Privacy Rights. If You are a California resident,
              the CCPA allows You to make certain requests about Your personal
              information. Specifically, the CCPA allows You to request Us to:
            </li>
            <ul className='list-disc ml-8'>
              <li>
                Inform You about the categories of personal information We
                collect or disclose about You; the categories of sources of such
                information; the business or commercial purpose for collecting
                Your personal information; and the categories of third-parties
                with whom We share or disclose personal information.
              </li>
              <li>
                Provide access to or a copy of certain information We hold about
                You.
              </li>
              <li>Delete certain information We have about You.</li>
              <li>Request that We not share Your Personal Data.</li>
              <li>Correct Your inaccurate Personal Data.</li>
              <li>
                Request We limit Our use of Your sensitive personal information,
                including precise geolocation, race, ethnicity, religion,
                genetic data, private communications, sexual orientation, and
                specified health information. To be clear, We do not collect
                much of this information, as defined in Proposition 24 (2020),
                and as described above.
              </li>
            </ul>
          </ul>
          <p>
            Please note that certain information may be exempt from such
            requests under California law. For example, We need certain
            information in order to provide the Services to You. We also will
            take reasonable steps to verify Your identity before responding to a
            request. If You are a California resident and You would like to
            exercise any of Your data rights under California law, please
            contact Us at info@fullblastgear.com. Please include Your full name,
            email address, and residential address associated with Your use of
            Our Services, along with the rights You would like to exercise, so
            that We can process Your request in an efficient manner.
          </p>
          <ol className='list-decimal ml-4'>
            <li>
              Right to Non-Discrimination. The CCPA further provides You with
              the right to not be discriminated against (as provided for in
              applicable law) for exercising Your rights. In regard to and as a
              result of Your exercise of this right, We may not then:
            </li>
            <ul className='list-disc ml-8'>
              <li>deny You goods or services that We would not otherwise;</li>
              <li>
                charge You different prices for services, whether through
                denying benefits or imposing penalties;
              </li>
              <li>
                provide You with a different level or quality of services; and
              </li>
              <li>threaten You with any of the above.</li>
            </ul>
          </ol>
          <ol className='list-decimal ml-4'>
            <li>
              Shine the Light Disclosure. The California “Shine the Light” law
              gives residents of California the right under certain
              circumstances to request information from Us regarding the manner
              in which We share certain categories of personal information (as
              defined in the Shine the Light law) with third-parties for their
              direct marketing purposes. We do not share Your personal
              information with third-parties for their own direct marketing
              purposes.
            </li>
            <li>
              Retention of Personal Data. We retain Your Personal Data for as
              long as necessary to fulfill the purposes described in this
              Privacy Policy, unless otherwise required by law. For example, We
              keep Your account profile information for as long as You keep Your
              Site account, but We may keep other information longer to comply
              with legal obligations. We do not retain Personal Data for any
              length of time longer than reasonably necessary for the purposes
              detailed in this Privacy Policy.
            </li>
            <li>
              Privacy Information for Nevada Residents. Under Nevada law,
              certain Nevada consumers may opt out of the sale of “personally
              identifiable information” for monetary consideration (as such
              terms are defined under Nevada law) to a person for that person to
              license or sell such information to additional persons. We do not
              engage in such activity. If You are a Nevada resident who has
              purchased Services from us, however, You may submit a request to
              opt out of any potential future sales under Nevada law by emailing
              Us at info@fullblastgear.com. Please include Your full name, email
              address, and residential address associated with Your use of Our
              Services, along with the rights You would like to exercise, so
              that We can process Your request in an efficient manner. Please
              note We will take reasonable steps to verify Your identity and the
              authenticity of the request. Once verified, We will maintain Your
              request in the event Our practices change.
            </li>
            <li>Exclusions:</li>
            <ul className='list-disc ml-6'>
              <li>
                This Privacy Policy only applies to Personal Data FBE collects
                through its Services, Site, and apps. This Privacy Policy does
                not apply to any unsolicited information You provide. All
                unsolicited information is deemed to be non-confidential, and
                FBE is free to reproduce, use, disclose, and distribute such
                information to others without royalty, limitation, or
                attribution.
              </li>
            </ul>
          </ol>
          <h3 className='text-xl font-semibold my-2'>
            CHILDREN UNDER THE AGES OF 16 OR 13
          </h3>
          <p>
            FBE does not knowingly collect Personal Data from children under the
            age of 16 without permission, and does not knowingly collect any
            Personal Data from minors under 13. If You are under the age of 16,
            please do not submit any Personal Data through the Site, Our apps,
            or the Services without first providing Us permission. We encourage
            parents and legal guardians to monitor their children’s Internet
            usage and to help enforce Our Privacy Policy by instructing their
            children never to provide Personal Data on the Site without their
            permission. If You are a minor under the age of 16, or a parent or
            legal guardian and have reason to believe a child under the age of
            16 has provided Us Personal Data without consent, or a child under
            13 has provided any Personal Data to FBE through the Site or the
            Services, please contact Us at the information below and We will
            endeavor to delete that information from Our databases.
          </p>
          <h3 className='text-xl font-semibold my-2'>
            LINKS TO OTHER WEBSITES
          </h3>
          <p>
            This Privacy Policy applies only to Our Site and Services. Our Site
            and Services may contain links to other websites not operated or
            controlled by FBE (the “Other Sites”). The policies and procedures
            described here do not apply to the Other Sites. The links from the
            Site and Services do not imply that FBE endorses or has reviewed the
            Other Sites. You should contact and review those sites directly for
            information on their privacy policies.
          </p>
          <h3 className='text-xl font-semibold my-2'>
            PROTECTION AND SECURITY OF PERSONAL DATA
          </h3>
          <p>
            FBE takes reasonable steps to protect the Personal Data provided via
            Our Site and Services from loss, misuse, and unauthorized access,
            disclosure, alteration, or destruction. No Internet or email
            transmission, however, is ever fully secure or error free. In
            particular, email sent to or from Our Site or Services may not be
            secure. We have no liability for disclosure of Your information due
            to errors or unauthorized acts of third-parties during or after
            transmission. If You create an account on Our Site, You are
            responsible for maintaining the confidentiality of Your account
            password and for any activity that occurs under Your account. Please
            notify Us of any unauthorized use of Your password or account.
          </p>
          <p>
            Based on the foregoing, You should take special care in selecting
            Your password and in deciding what information You send to Us via
            email or the Internet. Please keep all of this in mind when
            disclosing any Personal Data to FBE. If We believe that the security
            of Your Personal Data in Our care may have been compromised, We will
            attempt to promptly notify You within 72 hours. If We have Your
            email address, We may notify You by email using the most recent
            email address You have provided us. Please keep Your email address
            and other contact information in Your account up-to-date. You
            consent to Our use of email as a means of such notification. If You
            prefer for Us to use the U.S. Postal Service to notify You in this
            situation, please email Us at info@fullblastgear.com (please include
            Your name, mailing address, and email address). You can make this
            election at any time, and it will apply to notifications We make
            after a reasonable time thereafter for Us to process Your request.
          </p>
        </div>
      </div>
    </div>
  );
};

export default CookiesPage;
