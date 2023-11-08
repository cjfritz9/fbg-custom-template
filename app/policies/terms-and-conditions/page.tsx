import { Metadata } from 'next';
import Link from 'next/link';
import React from 'react';

export const metadata: Metadata = {
  title: { default: 'Terms And Conditions', template: '%s | Full Blast Gear' },
  description:
    'Understand our policies and commitments on the Policies page at Full Blast Gear. We value transparency, integrity, and your satisfaction. Learn about our privacy, return, and customer service policies to ensure a seamless experience with our unique firearm cleaning solutions.'
};

const TermsAndConditionsPage: React.FC = () => {
  return (
    <div className='flex flex-col items-center bg-base-100 text-primary lg:py-8 lg:px-8 xl:py-16 xl:px-28'>
      <div className='max-w-[1280px]'>
        <div className='flex flex-col px-4 text-center lg:text-left lg:p-0 gap-4'>
          <h3 className='text-xl font-semibold my-2'>TERMS OF USE</h3>
          <p>
            We welcome and thank you for visiting www.fullblastgear.com Full
            Blast Enterprises LLC (“FBE,” “Our,” “Us,” or “We”), a Colorado
            limited liability company with its principal office at 9809 Cypress
            Pt. Cir., Lone Tree, CO 80124, owns and operates this website (the
            “Site”). These Terms of Use (“TOU”) and conditions describe all
            users’ (“User,” “You,” “Your”) rights and responsibilities with
            regard to the Site, the Services We provide, and Our Goods, as those
            terms are described below. These TOU are applicable to all websites,
            apps, Services, and Goods We provide. Your access to and use of the
            Site is subject to these TOU, Our Privacy Policy, as well as all
            applicable laws and regulations. You understand and agree that these
            TOU are entered into between You and FBE. IF YOU DO NOT ACCEPT AND
            AGREE TO BE BOUND BY THESE TOU, YOU ARE NOT AUTHORIZED TO ACCESS OR
            OTHERWISE USE THE SITE, SERVICES, GOODS, OR ANY INFORMATION OR
            CONTENT PROVIDED BY US OR THROUGH THE SITE OR SERVICES.
          </p>
          <p>
            We reserve the right to review, amend, edit, alter, or remove any
            part of these TOU in Our sole discretion at any time and without
            prior notice to You. You should check these TOU from time-to-time to
            determine if any changes have been made. We will attempt to notify
            You regarding any changes, including by contacting You at the email
            address You have provided Us. Any changes to these TOU are effective
            thirty (30) days after posting them to the Site. Unless otherwise
            indicated, any new Content (as defined below) is also subject to
            these TOU upon posting to the Site. IF YOU DISAGREE WITH THESE TOU,
            YOUR SOLE AND EXCLUSIVE REMEDY IS TO DISCONTINUE YOUR USE OF THE
            SITE OR SERVICES, subject to applicable legal obligations. Your
            continued use of the Site or Services after a change has been posted
            constitutes Your acceptance of the changes. Our employees do not
            have the right to modify these TOU orally or otherwise. If any of
            Our employees offers to modify the provisions of these TOU except
            using the process described above, he or she is not acting as an
            agent for Us or speaking on Our behalf.
          </p>
          <p>
            These Terms contain provisions that govern how claims You and Us (or
            any of Our predecessors, successors, licensees, and permitted
            assigns) have against each other relating to the Site or Our
            Services or Goods are resolved (see the section on “Arbitration”
            below), including an obligation to arbitrate disputes, which will,
            subject to limited exceptions, require You to submit claims You have
            against Us to binding arbitration, unless You opt-out in accordance
            with the below “Arbitration” section.
          </p>
          <h3 className='text-xl font-semibold my-2'>SERVICES</h3>
          <p>Our “Services” include the following:</p>
          <ul className='list-decimal ml-4'>
            <li>
              Retail, online sales of proprietary and third-party products
              (collectively, <b>“Goods”</b>).{' '}
            </li>
            <li>Providing a website to facilitate the above retail sales.</li>
            <li>
              The receipt, processing, and fulfillment of customer orders of
              Goods, and work with third-party shipping providers to deliver
              ordered Goods to customers.
            </li>
            <li>
              Providing access or presenting a number of informational and
              educational materials, tools, and resources (collectively, the{' '}
              <b>“Materials”</b>) through Our Site and Services about sporting
              goods and sporting activities.
            </li>
            <li>Providing Users access to the Site and Our apps.</li>
          </ul>
          <h3 className='text-xl font-semibold my-2'>
            CONTENT, PRICING, AND ACCURACY{' '}
          </h3>
          <p>
            All features, content, availability, specifications, products and
            prices of products and Services described or depicted on the Site
            (collectively, <b>“Content”</b>) are subject to change at any time
            without notice. The inclusion of any products or services on a Site
            at a particular time does not imply or warrant that these products
            or services will be available at any time. Certain weights,
            measurements and similar descriptions are approximate and are
            provided for convenience purposes only. We attempt to ensure that
            information on the Site is complete, accurate, and up-to-date,
            including applicable colors of Goods; however, the actual color You
            see depends on Your device set-up, and We cannot guarantee that Your
            device will accurately display such colors. Despite Our efforts, the
            information on the Site may occasionally be inaccurate, incomplete,
            or out-of-date. We make no representation as to the completeness,
            accuracy, or currency of any information on the Site. For example,
            products or services included on a Site may be unavailable, may have
            different attributes than those listed, or may carry a different
            price than what is stated on the Site. In the event of a pricing
            error or discrepancy on a Site with respect to products or services,
            We reserve the right to cancel any orders (or partial orders) for
            such products or services.
          </p>
          <h3 className='text-xl font-semibold my-2'>
            SHIPPING CHARGES AND LIMITATIONS
          </h3>
          <p>
            When a product order is placed for delivery, it will be shipped to
            the address designated by the purchaser, as long as such shipping
            address is compliant with the shipping restrictions contained on the
            Site. All deliveries of product purchases from a Site are made
            pursuant to a shipment contract. As a result, risk of loss and title
            for products purchased from a Site pass to You upon delivery to the
            carrier. You are responsible for filing any claims with carriers for
            damaged or lost shipments. Shipping charges may exceed actual
            shipping costs. After placing Your order, We will send You a
            confirmation email or text message (as elected). Please consult Your
            confirmation communication for Your specific estimated delivery
            time. All delivery/shipping times are estimates. We do not make any
            guarantee that Your order will be delivered at any specific time. We
            will not have any liability for any order delays.
          </p>
          <h3 className='text-xl font-semibold my-2'>
            CONFIRMATION, CANCELLATION AND COUPONS
          </h3>
          <p>
            While it is Our practice to confirm online orders via email, the
            receipt of an email order confirmation does not constitute Our
            acceptance of an order nor Our confirmation of an offer to sell a
            product or service. We reserve the right, without prior notice and
            at any time: (a) to limit the order quantity on any Good or Service
            or to refuse Service or fulfillment of any order to any customer;
            (b) to discontinue any Good or Service; (c) to bar any User from
            making or completing a transaction; and (d) to limit or impose
            conditions on the honoring of any coupon, coupon code, promotional
            code, or other similar promotion.
          </p>
          <p>
            For clarification, orders may be limited or canceled at any time
            including after receipt of a confirmation or shipping email. We also
            may require additional information or verification of information
            prior to the acceptance or shipment of any order.
          </p>
          <p>
            For products purchased from Our Site using a credit card, an
            authorization may be placed on Your credit card when You place an
            order. You will be charged for an item (and Your purchase of such
            item will be complete) when the item in Your order is shipped.
            Partial shipment or partial cancellation of orders may occur.
          </p>
          <p>
            For products purchased from Our Site using a gift card, the full
            amount of the purchase price will be applied to Your gift card when
            You place the order. If an order for an item purchased with a gift
            card is canceled, the amount applicable to the canceled item will be
            restored to Your gift card or You will be issued a new gift card for
            such amount.
          </p>
          <h3 className='text-xl font-semibold my-2'>
            PAYMENT AND REFUND REQUESTS
          </h3>
          <p>
            You agree to pay all fees due for Services and Goods requested,
            purchased, or ordered. You will see a prompt for Your payment
            details, such as Your credit card information and any promotional or
            coupon codes You may have. By entering Your payment information and
            submitting Your request, You authorize us, Our affiliates, or Our
            third-party payment processors to charge the amount due. In the
            event Your credit card expires or FBE, Our affiliates, or Our
            third-party payment processors are unable to process Your payment,
            You may receive notice for You to provide an alternative payment
            method. FBE does not have any obligation to provide any Services,
            Goods, or to fulfill any orders unless and until full payment has
            been received or verified, as applicable.
          </p>
          <p>
            If You dispute any charges, You must let Us know within thirty (30)
            calendar days after the date We charge You. To request a credit or
            refund, You must submit a claim by email at:{' '}
            <Link href='mailto: info@fullblastgear.com' className='underline break-all'>
              info@fullblastgear.com
            </Link>
            . The email must contain the following information: (i) the words{' '}
            <b>“Refund Request”</b> in the subject line; (ii) a detailed reason
            for the refund request, including the invoice number, if applicable;
            and (iii) the name and reasonable contact information for You or
            Your contact representative. Failure to provide the request and
            other information as required above may disqualify Your request for
            a refund. All approved refunds will be issued within thirty (30)
            calendar days of approval. Approved refunds will be paid using the
            payment method on file for the refunded party, or via any other
            method We determine is appropriate in Our sole and exclusive
            discretion.
          </p>
          <h3 className='text-xl font-semibold my-2'>
            USER REGISTRATION AND ACCOUNTS
          </h3>
          <p>
            You may have to register a <b>“User Account”</b> to access certain
            parts of the Site or Our Services. As part of that registration, You
            will create a username and password and become a{' '}
            <b>“Registered User.”</b> If You are a Registered User, You agree to
            provide information that is accurate, complete, and correct, and to
            accurately maintain and update any information about Yourself that
            You have provided to FBE. If You do not maintain such information,
            or if FBE has reasonable grounds to suspect Your information is
            incorrect, outdated, or false, or that Your account is compromised
            by malware or spyware, FBE has the right to suspend, delete, or
            terminate Your account and Your use of the User Account and
            Services. Should this need arise, We will make reasonable efforts to
            inform You of any modifications made, via the email address listed
            for Your account. You also agree to immediately notify Us of any
            unauthorized use of Your username, password, User Account, or of any
            other breach of security that You become aware of involving or
            relating to the Services by emailing FBE at info@fullblastgear.com.
            FBE may take any and all actions it deems necessary or reasonable to
            maintain the security of the Site, Services and Your User Account.
          </p>
          <p>
            You agree to keep confidential Your username and password and to
            exit from Your User Account at the end of each session. You are
            responsible for all activities that occur under Your User Account
            and for maintaining the confidentiality of Your password. If You
            think Your User Account has been compromised, You are exclusively
            responsible for promptly changing Your password. You may not
            transfer or share Your password to Your User Account with anyone, or
            create more than one User Account. You may not use anyone else’s
            User Account at any time. FBE EXPLICITLY DISCLAIMS LIABILITY FOR ANY
            AND ALL LOSSES AND DAMAGES ARISING FROM YOUR FAILURE TO COMPLY WITH
            THIS SECTION. You acknowledge and agree:
          </p>
          <ul className='list-decimal ml-6'>
            <li>
              All or any part of the Site may not be accessible at any time, for
              any period, or for any reason; and
            </li>
            <li>
              FBE will not be liable if for any reason all or any part of the
              Site is unavailable at any time or for any period.
            </li>
          </ul>
          <p>
            We reserve the right, including if We become aware that You are
            under the age of eighteen (18) (or age of majority if higher in Your
            place of residence), to terminate Your account or registration, at
            any time. We do not sell products or services to children and do not
            permit children to have accounts. We sell products and services to
            adults, who can purchase items with a credit card or other payment
            method. If You are under the age of eighteen (18) (or age of
            majority if higher in Your place of residence), You may not have an
            account and You may use the Site only with the involvement of a
            parent or guardian.
          </p>
          <h3 className='text-xl font-semibold my-2'>
            TECHNOLOGICAL AND FINANCIAL REQUIREMENTS FOR USE
          </h3>
          <p>
            You must have compatible computing or mobile devices, access to the
            Internet, and certain necessary software in order to use the Site.
            Fees and charges may apply to Your use of mobile services and to the
            Internet. You are individually and solely responsible for any such
            fees, costs, or expenses You incur in relation to Your use of the
            Site or Services.
          </p>
          <h3 className='text-xl font-semibold my-2'>PRIVACY POLICY</h3>
          <p>
            Our Privacy Policy applies to Your access and use of the Site,
            including any personal information provided via the Site or via any
            other aspect of the Site. The terms and conditions of Our Privacy
            Policy are hereby incorporated by reference into these TOU. In
            addition, the Privacy Policy is subject to the terms and conditions
            of these TOU, and in the event of a conflict between these TOU and
            the Privacy Policy, these TOU shall govern and prevail.
          </p>
          <h3 className='text-xl font-semibold my-2'>
            OWNERSHIP OF INFORMATION SUBMITTED THROUGH THE SITE
          </h3>
          <p>
            With the exception of any personal data or information You submit
            maintained in accordance with Our Privacy Policy, You understand and
            agree that any information You provide to FBE on or through the Site
            or Services, whether by direct entry, submission, email, or
            otherwise, including, but not limited to, data, questions, comments,
            forum communications, or suggestions, will be treated as
            non-confidential and non-proprietary and will become the property of
            FBE. Such information may be used for any purpose, including,
            without limitation, reproduction, solicitation, disclosure,
            transmission, publication, broadcast, and posting without notice to
            You or payment for it. FBE shall be free to use any ideas, concepts,
            know-how, or techniques contained in any communication You send to
            FBE via the Services or by any other means for any purpose
            whatsoever, including, without limitation, developing and marketing
            products using such information.
          </p>
          <p>
            To the extent the foregoing provision does not apply, or is deemed
            by a court of appropriate jurisdiction not to apply to any personal
            data or information subject to the foregoing paragraph, and to the
            extent permitted by law, You: (1) understand and agree that any such
            information provided by You may be used, copied or displayed by FBE,
            FBE may create derivative works of any such data, and FBE may
            provide such data to Our service providers, Our successors and
            assigns in performance of their services; and (2) grant FBE Our
            service providers, Our successors and assigns, and affiliated
            service providers, a fully transferable, royalty-free, and
            sublicensable right and license to use, reproduce, modify, analyze,
            perform, display, distribute, and otherwise disclose to
            third-parties any data or information You submit on or through the
            Site for the purposes of providing the Services to You; conducting
            research or analyses of such data; and designing, developing,
            implementing, modifying or improving new, current, or future
            features, products and services of FBE using such data.
          </p>
          <h3 className='text-xl font-semibold my-2'>
            OWNERSHIP OF SITE CONTENT, TRADEMARKS
          </h3>
          <p>
            As between FBE and You, FBE is the sole and exclusive owner of all
            right, title, and interest in and to the Site and its Content,
            features, and functionality (including, without limitation, all
            information, intellectual property such as trademarks and
            copyrights, software, text, displays, images, video, audio, design,
            selection, arrangement and look and feel), all intellectual property
            rights therein, and any suggestions, ideas or other feedback
            provided by You. You are not permitted to reproduce, publish,
            distribute, modify, create derivative works of, publicly display,
            publicly perform, republish, download, store, transmit, sell or
            participate in any sale of, or exploit in any way, in whole or in
            part, any of the material on Our Site except as generally and
            ordinarily permitted through the Site according to these TOU. Any
            copy, modification, revision, enhancement, adaptation, translation,
            or derivative work of the Site or Content shall be owned solely and
            exclusively by FBE or its licensors, including all intellectual
            property rights therein. You may not access or use for any
            commercial purposes any part of the Site or Content.
          </p>
          <p>
            Nothing in these TOU or on the Site may be construed as granting, by
            implication, estoppel, or otherwise, any license or right to use any
            of the Site or the intellectual property within or on it, except as
            expressly stated herein. Certain names, logos, and other materials
            displayed in and through the Site may constitute trademarks, trade
            names, service marks or logos (“Marks”) of FBE or its affiliates.
            You are not authorized to use any such Marks without the express
            written permission of FBE. Ownership of all such Marks and the
            goodwill associated with them remains with Us or Our affiliates.
          </p>
          <h3 className='text-xl font-semibold my-2'>YOUR CONSENT</h3>
          <p>
            You agree that Your use of the Site and any uses of any Services or
            materials related to the Site are subject to Your agreement with all
            of these TOU as well as Our Privacy Policy, which is incorporated
            into these TOU by reference. You agree You will not violate any
            local, state, federal, or international laws in using this Site or
            accessing any Material within or through the Site.
          </p>
          <h3 className='text-xl font-semibold my-2'>ACCEPTABLE USE</h3>
          <p>
            Subject to Your compliance with these TOU, FBE grants You, the Site
            User, a personal, limited, revocable, non-exclusive,
            non-transferable, royalty-free license to view, download, access,
            and use the Site solely for Your personal and non-commercial use,
            and solely as permitted under these TOU and Our Privacy Policy. Any
            unlawful use of this Site or use inconsistent with these TOU is
            prohibited and will result in, at a minimum, an automatic
            termination of this license. FBE and its affiliates expressly
            reserve all rights, title, and interests not expressly granted under
            this license. We further reserve the right, in Our sole and
            exclusive discretion, to deny or suspend use of the Site or Services
            to anyone for any reason.
          </p>
          <p>
            Except as FBE expressly authorizes, You agree You will not, directly
            or indirectly, and will not attempt to: (a) impersonate any person
            or entity or otherwise misrepresent Your affiliation with any person
            or entity; (b) use the Site, Goods, or Services to violate any
            local, state, national, or international law; (c) reverse engineer,
            disassemble, decompile, or translate any Goods, or software or other
            components of the Site; (d) distribute, input, upload, transmit, or
            otherwise run or propagate any virus, application, Trojan horse, or
            any other harmful computer code that could damage or alter a
            computer, portable device, computer network, communication network,
            data, or Our Site, or any other system, device, or property; (e)
            access or use the Site, Goods, or Services in any manner or for any
            purpose that infringes, misappropriates, or otherwise violates any
            intellectual property right or other right of any third-party; (f)
            license, sublicense, sell, resell, transfer, assign, distribute, or
            otherwise commercially exploit or make available to any third-party
            the Site, Goods, Services, or related materials in any way; (g) use
            or access the Site, Services, or Goods to create or develop
            competing products or services or for any other purpose that is to
            FBE or its affiliates’ detriment or commercial disadvantage; (h)
            take any action or use the Site, Services, or Goods in any manner
            that could damage, destroy, disrupt, disable, impair, overburden,
            interfere with, or otherwise impede or harm in any manner Our Site
            or any content, in whole or in part; (i) disrupt, interfere with,
            violate the security of, or attempt to gain unauthorized access to
            Our Site or any computer network; (j) bypass, breach, avoid, remove,
            deactivate, impair, descramble, or otherwise circumvent any security
            device, protection, or technological measure FBE or its service
            providers implement or have implemented to protect the Site; (k)
            remove, delete, alter, or obscure any trademarks, specifications,
            warranties, or disclaimers, or any copyright, trademark, patent, or
            other intellectual property or proprietary rights notices from Our
            Site, Our Services, the Goods or any Content made available to You
            on or through Our Site; (l) use any manual process or automated
            device to monitor or copy any content made available on or through
            Our Site for any unauthorized purpose except as permitted by this
            section; (m) copy, duplicate, download, store in a retrieval system,
            publish, transmit, or otherwise reproduce, transfer, distribute,
            store, disseminate, aggregate, use as a component of or as the basis
            for a database or otherwise use in any form or by any means any
            data, text, reports, or other materials related to FBE or
            third-party content from the Site; (n) engage in or use any data
            mining, robots, scraping, or similar data gathering or extraction
            methods; (o) ​use the Site, Services, or Goods in any manner that is
            unlawful, harassing, abusive, tortious, threatening, harmful,
            invasive of another’s privacy, vulgar, defamatory, false,
            intentionally misleading, trade libelous, pornographic, obscene,
            patently offensive (e.g., material that promotes racism, bigotry, or
            manifests hatred or physical harm of any kind against any group or
            individual), or otherwise post objectionable material of any kind or
            nature or which is harmful to minors in any way; (p) otherwise use
            the Site, Services, or Goods in any manner that exceeds the scope of
            the license granted above; or (q) encourage or enable any other
            individual to undertake any of the conduct listed in this section.
            If FBE blocks You from accessing the Site, Our apps, or the Services
            (including by blocking Your IP address), You agree not to implement
            any measures to circumvent such blocking (e.g., by masking Your IP
            address or using a proxy IP address).
          </p>
          <h3 className='text-xl font-semibold my-2'>
            SPECIAL ADMONITIONS FOR INTERNATIONAL USE AND EXPORT/IMPORT
            COMPLIANCE
          </h3>
          <p>
            Recognizing the global nature of the Internet, You agree to comply
            with all applicable rules and laws regarding online conduct and
            acceptable content. Use of the Services or Goods may be subject to
            the export and import laws of the United States and other countries.
            You agree to comply with all applicable export and import laws and
            regulations, including without limitation the Export Administration
            Regulations: see{' '}
            <Link
              href='https://www.bis.doc.gov/index.php/regulations/export-administration-regulations-ear'
              className='underline break-all'
            >
              https://www.bis.doc.gov/index.php/regulations/export-administration-regulations-ear
            </Link>
            ) and sanctions control programs of the United States (see{' '}
            <Link
              href='https://www.treasury.gov/resource-center/sanctions/Programs/Pages/Programs.aspx'
              className='underline break-all'
            >
              https://www.treasury.gov/resource-center/sanctions/Programs/Pages/Programs.aspx
            </Link>
            ). In particular, You represent and warrant that You: (a) are not a
            prohibited party identified on any government export exclusion lists
            (see{' '}
            <Link
              href='https://www.bis.doc.gov/index.php/policy-guidance/lists-of-parties-of-concern'
              className='underline break-all'
            >
              https://www.bis.doc.gov/index.php/policy-guidance/lists-of-parties-of-concern
            </Link>
            ) or a member of a government of any other export-prohibited
            countries as identified in applicable export and import laws and
            regulations; (b) will not transfer software, technology, and other
            technical data via the Services to export-prohibited parties or
            countries; (c) will not use the Services or Goods for military,
            nuclear, missile, chemical or biological weaponry end uses in
            violation of U.S. export laws; and (d) will not transfer upload, or
            post via the Services, any software, technology or other technical
            data in violation of the U.S. or other applicable export or import
            laws.
          </p>
          <h3 className='text-xl font-semibold my-2'>USER OBLIGATION</h3>
          <p>
            In consideration of Your use of the Site and Our Services, You
            represent You are of legal age to form a binding contract and are
            not a person barred from using, receiving, or accepting Our Services
            or purchasing the Goods under the laws of the United States or other
            applicable jurisdictions, such as the European Union. If You are
            under 13 years of age, You are not authorized to use the Site. If
            You are between the ages of 13 and 18 years old, You may use the
            Site solely with the approval of Your parent or legal guardian.
          </p>
          <h3 className='text-xl font-semibold my-2'>
            LINKS TO THIRD-PARTY WEBSITES
          </h3>
          <p>
            The Site may contain hyperlinks or references to other websites,
            posts, blogs, videos, or other third-party online material
            (collectively, the <b>“Linked Sites”</b>). Linked Sites may not be
            under Our control, and We are therefore not responsible for the
            information, products, or services described on Linked Sites, or for
            the content of any Linked Site, including, without limitation, any
            link contained in a Linked Site, or any changes or updates to a
            Linked Site. We are providing these Linked Sites to You only as a
            convenience, and the inclusion of any link does not necessarily
            imply endorsement of the Linked Site or any association with its
            operators. Your use of these Linked Sites is at Your Own risk, and
            You agree and understand We are not liable to You in any way, either
            directly or indirectly, for any content, errors, damage, or loss
            caused by or in connection with use of or reliance on information
            contained in or provided to Linked Sites.
          </p>
          <h3 className='text-xl font-semibold my-2'>
            SITE ACCESS; TERMINATION
          </h3>
          <p>
            The TOU will remain in full force and effect as long as You continue
            to access or use the Site or Services. You may terminate the TOU at
            any time by discontinuing the use of the Site. Your permission to
            use the Site, Services, and Our apps automatically terminate if You
            violate these TOU. FBE reserves the right to prohibit, restrict,
            suspend, discontinue, or terminate Your access to the Site or Our
            Services, and any rights or licenses granted in association with
            them, in whole or in part, with or without prior notice, at any
            time, and based in FBE’s sole and exclusive discretion. Including
            but not limited to for Your violation of these TOU. The following
            provisions survive the expiration or termination of these TOU for
            any reason whatsoever: Disclaimer of Warranties; Limitation of
            Liability; Indemnification; Governing Law, Dispute Resolution,
            Arbitration, Venue, and Severability of Provisions; No Waiver; and
            Assignment. Subject to applicable law, FBE reserves the right to
            maintain, delete, or destroy all communications and materials posted
            or uploaded to the Site pursuant to its internal record retention or
            content destruction policies, where applicable. After such
            termination, FBE will have no further obligation to provide the
            Services.
          </p>
          <p>
            ATTENTION CALIFORNIA RESIDENTS − PROPOSITION 65 WARNING.
            California’s{' '}
            <Link href='https://www.p65warnings.ca.gov' className='underline break-all'>
              Proposition 65
            </Link>{' '}
            (“Prop 65”) entitles California consumers to receive special
            warnings for products that contain chemicals known to the State of
            California to cause cancer and birth defects or other reproductive
            harm if those products expose consumers to such chemicals above
            certain threshold levels. We are as concerned about product safety
            as You are and We take all reasonable steps to comply with
            applicable safety and health requirements. As part of Our Services,
            We may facilitate transactions involving goods that may contain
            chemicals subject to Prop 65. We do not handle these goods and are
            not responsible for warnings associated with them. Please check all
            products in any way related to the Services as You deem fit for
            their appropriate Prop 65 disclosure documentation. Please refer to
            California’s official governmental page on Prop 65 for more
            information:{' '}
            <Link
              href='https://oehha.ca.gov/proposition-65'
              className='underline break-all'
            >
              https://oehha.ca.gov/proposition-65
            </Link>
            .
          </p>
          <h3 className='text-xl font-semibold my-2'>
            DISCLAIMER OF WARRANTIES
          </h3>
          <p>
            YOU EXPRESSLY AGREE YOUR USE OF THE SITE, SERVICES, APPS, AND GOODS
            IS AT YOUR OWN RISK. FBE DOES NOT MAKE ANY WARRANTIES OR
            REPRESENTATIONS AS TO THE PROVISION OF THE SITE, OUR SERVICES, THE
            GOODS, THE ACCURACY OR COMPLETENESS OF THE SITE OR OUR SERVICES’
            CONTENT, OR INFORMATION LINKED THROUGH THE SITE, INCLUDING LINKED
            SITES, OR OUR SERVICES. YOU ACKNOWLEDGE AND AGREE FBE PROVIDES THE
            SITE AND SERVICES ON AN “AS IS” AND “AS AVAILABLE” BASIS.
          </p>
          <p>
            UNLESS OTHERWISE SPECIFICALLY INDICATED, FBE AND ITS AFFILIATES, AND
            THEIR RESPECTIVE OFFICERS, DIRECTORS, MANAGERS, PARTNERS, MEMBERS,
            EMPLOYEES, AND AGENTS (collectively, Our <b>“Related Persons”</b>)
            MAKE NO REPRESENTATIONS OR WARRANTIES AND EXPRESSLY DISCLAIM ANY AND
            ALL WARRANTIES OF ANY KIND, WHETHER EXPRESS OR IMPLIED, WITH RESPECT
            TO THE SITE, SERVICES, OUR APPS, AND THE GOODS, INCLUDING, BUT NOT
            LIMITED TO ANY REPRESENTATIONS OR WARRANTIES WITH RESPECT TO
            MERCHANTABILITY, FITNESS FOR A PARTICULAR USE OR PURPOSE,
            NONINFRINGEMENT, TITLE, AVAILABILITY, SECURITY, OPERABILITY,
            CONDITION, QUIET ENJOYMENT, VALUE, ACCURACY OF DATA, FREEDOM FROM
            VIRUSES OR MALWARE, COMPLETENESS, TIMELINESS, FUNCTIONALITY,
            RELIABILITY, SEQUENCING OR SPEED OF DELIVERY OR SYSTEM INTEGRATION.
            WE MAKE NO WARRANTIES OR REPRESENTATIONS THAT YOUR USE OF THE SITE
            OR SERVICES WILL NOT INFRINGE THE RIGHTS OF THIRD-PARTIES.
          </p>
          <p>
            TO THE FULLEST EXTENT OF APPLICABLE LAW, NEITHER FBE NOR ITS RELATED
            PERSONS WILL BE LIABLE FOR ANY LOSS OR DAMAGE CAUSED BY THIRD-PARTY
            GOODS OR YOUR RELIANCE ON INFORMATION OBTAINED THROUGH THE SITE. IT
            IS YOUR RESPONSIBILITY TO EVALUATE THE ACCURACY, COMPLETENESS,
            TIMELINESS, RELIABILITY OR USEFULNESS OF THE GOODS OR SITE.
            FURTHERMORE, FBE DOES NOT GUARANTEE THAT THE SITE OR SERVICES WILL
            BE UNINTERRUPTED, OR FREE FROM ERROR, DEFECT, LOSS, DELAY IN
            OPERATION, CORRUPTION, CYBER ATTACK, VIRUSES, INTERFERENCE, HACKING,
            MALWARE, OR OTHER SECURITY INTRUSION, AND FBE DISCLAIMS ANY
            LIABILITY RELATING THERETO.
          </p>
          <p>
            YOU UNDERSTAND AND AGREE THAT ANY CONTENT, MATERIAL, OR INFORMATION
            OBTAINED THROUGH THE USE OF THE SITE ARE USED AT YOUR SOLE RISK AND
            THAT YOU WILL BE SOLELY RESPONSIBLE FOR ANY DAMAGE TO YOUR COMPUTER
            OR MOBILE PHONE OR LOSS OF DATA THAT RESULTS FROM THE DOWNLOAD OF
            SUCH CONTENT, MATERIAL OR INFORMATION.
          </p>
          <h3 className='text-xl font-semibold my-2'>
            LIMITATION OF LIABILITY
          </h3>
          <p>
            YOU EXPRESSLY UNDERSTAND THAT TO THE EXTENT PERMITTED UNDER
            APPLICABLE LAW, AND EXCEPT AS SET FORTH IN THIS SECTION, IN NO EVENT
            WILL FBE OR ITS RELATED PERSONS OR LICENSEES BE LIABLE TO YOU OR TO
            ANY PARTY FOR ANY CLAIMS, LIABILITIES, LOSSES, COSTS OR DAMAGES
            UNDER ANY LEGAL OR EQUITABLE THEORY, WHETHER IN TORT (INCLUDING
            NEGLIGENCE AND STRICT LIABILITY), CONTRACT, WARRANTY, STATUTE OR
            OTHERWISE, INCLUDING, BUT NOT LIMITED TO, ANY INDIRECT, INCIDENTAL,
            SPECIAL, CONSEQUENTIAL, PUNITIVE OR EXEMPLARY DAMAGES, INCLUDING BUT
            NOT LIMITED TO, DAMAGES FOR LOSS OF REVENUES, PROFITS, GOODWILL, USE
            OR DATA, SERVICE INTERRUPTION, COMPUTER OR MOBILE PHONE DAMAGE, OR
            SYSTEM FAILURE, OR THE COST OF SUBSTITUTE GOODS OR SERVICES, OR FOR
            ANY DAMAGES FOR PERSONAL OR BODILY INJURY OR EMOTIONAL DISTRESS,
            INCLUDING DEATH, ARISING OUT OF OR IN CONNECTION WITH ANY ACCESS,
            USE OF (OR INABILITY TO USE) THE SITE, OUR SERVICES, OUR APPS, OR
            THE GOODS, OR OTHER INTANGIBLE LOSSES ARISING OUT OF OR RELATED TO
            YOUR SUCH USES. THIS IS TRUE EVEN IF FBE OR RELATED PERSONS HAVE
            BEEN ADVISED OF THE POSSIBILITY OF SUCH DAMAGES OR LOSSES. THE
            FOREGOING LIMITATIONS DO NOT APPLY TO: (i) CLAIMS FOR PERSONAL
            INJURY OR DEATH CAUSED BY OUR NEGLIGENT ACTS; OR (ii) DAMAGES
            ARISING FROM OUR INTENTIONAL, WILLFUL, OR RECKLESS MISCONDUCT.
            NOTHING IN THESE TERMS PURPORTS TO EXCLUDE ATTORNEY FEES OR DAMAGES
            WHERE MANDATED BY STATUTE.
          </p>
          <p>
            The foregoing sections entitled, “DISCLAIMER OF WARRANTIES” and
            “LIMITATION OF LIABILITY” are intended only as permitted by
            applicable law. If any portion of these sections is held to be
            invalid, the invalidity of that portion(s) shall not affect the
            validity of the remaining portions of the applicable sections. To
            the extent that We may not, as a matter of applicable law, disclaim
            any implied warranty or limit liabilities, the scope and duration of
            such warranty and the extent of Our liability will be the minimum
            permitted under applicable law.​
          </p>
          <h3 className='text-xl font-semibold my-2'>INDEMNIFICATION</h3>
          <p>
            You agree to indemnify, defend, and hold FBE and its subsidiaries,
            and their directors, officers, employees, contractors, licensors,
            suppliers, representatives, proprietors, partners, shareholders,
            servants, principals, agents, predecessors, successors, assigns,
            accountants, and attorneys, harmless from and against any and all
            third-party suits, actions, claims, proceedings, damages,
            settlements, judgments, injuries, liabilities, obligations, losses,
            risks, costs, and expenses (including, without limitation,
            reasonable attorney fees, litigation expenses, and accounting fees),
            relating to or arising from, or alleged to arise from, Your use of
            the Goods or Content, or materials or features otherwise available
            on the Site, Our apps, or Services, in an unauthorized manner, or
            fraudulently, or in violation of law, or by willful misconduct, or
            for or in relation to any breach by You of these TOU.
          </p>
          <h3 className='text-xl font-semibold my-2'>
            GOVERNING LAW, DISPUTE RESOLUTION, ARBITRATION, VENUE, AND
            SEVERABILITY OF PROVISIONS
          </h3>
          <p>
            PLEASE READ THIS SECTION CAREFULLY BECAUSE IT REQUIRES YOU AND FBE
            TO RESOLVE ALL DISPUTES BETWEEN THEM THROUGH BINDING, INDIVIDUAL
            ARBITRATION AND LIMITS THE MANNER IN WHICH YOU CAN SEEK RELIEF FROM
            FBE. THIS SECTION SHALL BE REFERRED TO HEREIN AS THE “AGREEMENT TO
            ARBITRATE.”
          </p>
          <p>
            These TOU and Your use of the Site shall be governed by the laws of
            the State of Colorado, without giving effect to the principles of
            conflict of laws of any jurisdiction. Any dispute arising under or
            relating in any way to these TOU will be resolved exclusively by
            final and binding arbitration in Denver, Colorado under the rules of
            the American Arbitration Association, except that either party may
            bring a claim related to intellectual property rights, or seek
            temporary and preliminary specific performance and injunctive
            relief, in any court of competent jurisdiction. Judgment on an
            arbitration award may be entered in any court having jurisdiction.
            The courts located in Denver, Colorado shall have exclusive personal
            jurisdiction, subject matter jurisdiction, and venue for any
            permissible claim. This arbitration agreement is reciprocally
            binding on all parties such that both You and We are required to
            arbitrate claims. Any arbitrator’s award shall consist of a written
            statement stating the disposition of each claim. The award will also
            provide a concise written statement of the arbitrator’s essential
            findings and conclusions on which the award is based. The parties
            understand that, absent this mandatory provision, they would have
            the right to sue in court. Court proceedings generally provide
            greater discovery rights, a judge or jury trial, and could provide
            greater opportunity for appellate review. They further understand
            that, in some instances, the costs of arbitration could exceed the
            costs of litigation.
          </p>
          <p>
            THE PARTIES AGREE THAT BY ENTERING INTO THESE TERMS, IN PARTICULAR
            THE AGREEMENT TO ARBITRATE, EACH IS ARE WAIVING THE RIGHT TO TRIAL
            BY JURY, AND YOU ARE WAIVING YOUR RIGHT TO PARTICIPATE IN A CLASS
            ACTION. YOU UNDERSTAND AND AGREE YOU MAY ONLY BRING CLAIMS AGAINST
            US IN YOUR INDIVIDUAL CAPACITY, AND NOT AS A PLAINTIFF OR CLASS
            MEMBER IN ANY PURPORTED CLASS OR REPRESENTATIVE PROCEEDING. YOU
            ACKNOWLEDGE THAT BY ENTERING INTO THESE TERMS, YOU INTEND TO BE
            LEGALLY BOUND AND, IN ADDITION TO OTHER GOOD AND VALUABLE
            CONSIDERATION, YOU AGREE THAT OUR AGREEMENT TO ARBITRATE CLAIMS
            CONSTITUTES CONSIDERATION FOR SUCH WAIVER. THE CLASS ACTION WAIVER
            IS AN ESSENTIAL ELEMENT OF THIS AGREEMENT TO ARBITRATE AND CAN NOT
            BE SEVERED FROM THIS AGREEMENT TO ARBITRATE.
          </p>
          <p>
            30-Day Right to Opt-Out. You have the right to opt-out and not be
            bound by the arbitration and class action waiver provisions set
            forth in this Section by sending written notice of Your decision to
            opt-out to the following address via certified mail: Full Blast
            Enterprises LLC, 9809 Cypress Pt. Cir., Lone Tree, CO 80124,
            Attention: Legal Department. The notice must be sent within thirty
            (30) days of Your first use of a Site after the effective date of
            these Terms, otherwise You shall be bound to arbitrate disputes in
            accordance with the terms of the applicable Sections. If You opt-out
            of these arbitration provisions, We also will not be bound by them.
          </p>
          <h3 className='text-xl font-semibold my-2'>ADMISSIBILITY</h3>
          <p>
            A printed version of these TOU shall be admissible in judicial and
            administrative proceedings and in arbitration proceedings based upon
            or relating to these TOU to the same extent and subject to the same
            conditions as other business documents and records originally
            generated and maintained in printed form.
          </p>
          <h3 className='text-xl font-semibold my-2'>NO WAIVER</h3>
          <p>
            No waiver by FBE of any term or condition set forth in these TOU
            shall be deemed a further or continuing waiver of such term or
            condition or a waiver of any other term or condition, and any
            failure by FBE to assert a right or provision under these TOU shall
            not constitute a waiver of such right or provision.
          </p>
          <h3 className='text-xl font-semibold my-2'>
            THE PARTIES’ RELATIONSHIP
          </h3>
          <p>
            Neither these TOU, nor any Content, materials or features of the
            Services create any partnership, joint venture, employment,
            fiduciary, or agency relationship between Us and You. You may not
            enter into any contract on Our behalf or bind Us in any way.
          </p>
          <h3 className='text-xl font-semibold my-2'>
            REMEDIES; ADDITIONAL PROVISIONS
          </h3>
          <p>
            You agree any violation, or threatened violation, by You of these
            TOU constitutes an unlawful and unfair business practice that will
            cause Us irreparable and unquantifiable harm. You also agree
            monetary damages would be inadequate for such harm and consent to
            Our obtaining any injunctive or equitable relief that We deem
            necessary or appropriate. These remedies are in addition to any
            other remedies We may have at law or in equity.
          </p>
          <p>
            All parts of these TOU apply to the maximum extent permitted by law.
            FBE and You both agree that if a party cannot enforce a part of this
            contract as written, then that part will be replaced with terms that
            most closely match the intent of the part the party cannot enforce,
            to the extent permitted by law. The invalidity of part of these TOU
            will not affect the validity and enforceability of the remaining
            provisions. The section headings are for convenience only and do not
            have any force or effect.
          </p>
          <h3 className='text-xl font-semibold my-2'>ASSIGNMENT</h3>
          <p>
            You may not assign any of Your rights under these TOU, and any such
            attempt will be null and void. FBE and its affiliates may, in their
            sole and exclusive discretion, transfer, without further consent
            from or notification to You, all contractual rights and obligations
            pursuant to these TOU if some or all of the business of FBE is
            transferred to another entity by way of merger, sale of its assets,
            or otherwise.
          </p>
          <h3 className='text-xl font-semibold my-2'>
            REPORTING A COPYRIGHT VIOLATION
          </h3>
          <p>
            Notification of Claimed Copyright Infringement. If You have
            objections to copyrighted content or material made available on or
            through Our Site, You may submit a notification to Our Designated
            Agent at the following address:{' '}
            <Link href='mailto: info@fullblastgear.com' className='underline break-all'>
              info@fullblastgear.com
            </Link>
            . Any notification to FBE under 17 U.S.C. § 512(c) alleging
            copyright infringement must include the following information:
          </p>
          <ul className='list-disc ml-5'>
            <li>
              An electronic or physical signature of the person authorized to
              act on behalf of the owner of the exclusive right being infringed;
            </li>
            <li>
              An identification of the copyrighted work or other intellectual
              property that You claim has been infringed or, if multiple
              copyrighted works are covered by a single notification, a
              representative list of such works;
            </li>
            <li>
              An identification of the content or material that You claim is
              infringing and where it is located on Our Site or Services;
            </li>
            <li>
              Information sufficient for FBE to contact You, such as Your
              address, telephone number, and email address;
            </li>
            <li>
              A statement by You that You have a good-faith belief that the use
              of the content or material of which You are complaining is not
              authorized by the copyright owner, its agent, or the law; and
            </li>
            <li>
              A signed statement by You that the above information in Your
              notice is accurate and that, under penalty of perjury, You are the
              copyright owner or authorized to act on the copyright owner’s
              behalf.
            </li>
          </ul>
          <h3 className='text-xl font-semibold my-2'>HOW TO CONTACT US</h3>
          <p>
            Please contact Us at the below addresses to report any violations of
            these TOU, to ask questions, or to provide comments regarding Our
            Services or the Site.
          </p>
          <ul>
            <li>Full Blast Enterprises LLC</li>
            <li>9809 Cypress Pt. Cir.</li>
            <li>Lone Tree, CO 80124</li>
            <li>
              <Link href='tel: +18003189030' className='underline break-all'>
                (800) 318-9030
              </Link>
            </li>
            <li>
              <Link href='mailto: info@fullblastgear.com' className='underline break-all'>
                info@fullblastgear.com
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default TermsAndConditionsPage;
