"use client";
import { useState } from 'react';
import 'react-tabs/style/react-tabs.css';

export default function privacy_policy() {
  const [isLoading, setIsLoading] = useState(false);

  return (
    <>
       {isLoading && (
        <div id="preloader">
          <div id="loader"></div>
        </div>
      )}
      <div className='sub-banner'>
        <div className="banner_text sub-banner-content">
          <h2> Privacy Policy</h2>
          <p>
            Home / Privacy Policy
          </p>
        </div>
      </div>
      <div className='terms container my-5 py-5'>
        Last updated on April 14, 2024 <br />
        This Privacy Policy (“Policy”) describes how FitMatch, Inc. and its affiliates and subsidiaries (collectively,
        “FitMatch”, “we”, or “us”) collects, uses, and discloses, personal information about individuals who use our
        website (“Site”). <br /><br />
        {/* TABLE OF CONTENTS
        1. COLLECTION, USE, AND DISCLOSURE OF PERSONAL INFORMATION
        2. TRACKING TECHNOLOGIES AND COOKIES
        3. INFORMATION FROM OR ABOUT OTHER PARTIES
        4. COMMUNICATIONS
        5. INFORMATION RETENTION
        6. TARGETED ADVERTISING, SALES, AND SHARING OF PERSONAL INFORMATION
        7. UNITED STATES PRIVACY RIGHTS
        a.
        b.
        California Privacy Rights
        Other State Privacy Rights
        8. SWEEPSTAKES, CONTESTS, AND PROMOTIONS
        9. CHILDREN'S PRIVACY
        10. INTERNATIONAL VISITORS
        11. SECURITY
        12. YOUR CHOICES
        13. CONTACT US
        14. CHANGES TO THIS POLICY */}
        <p>
          <b>1. COLLECTION, USE, AND DISCLOSURE OF PERSONAL INFORMATION</b><br />
          In this Policy, “Personal Information” (a/k/a “Personal Data”) means information that identifies, relates to,
          describes, is reasonably capable of being associated with, or could reasonably be linked, directly or indirectly,
          with you. Personal Information does not include information that is publicly available as defined by applicable
          privacy legislation or is anonymized.<br />
          We collect Personal Information directly from you that you voluntarily share with us through the Site,
          indirectly from you through technology (e.g., your activity on the Site), and from FitMatch service providers,
          service professionals, and business partners.<br />
          In the past twelve months, FitMatch has processed the following categories of Personal Information for the
          following purposes:
        </p>

        <table className='privacyPolicy my-5'>
          <thead>
            <tr>
              <th>Personal Information</th>
              <th>How and Why We Use
                Personal Information</th>
              <th>How and Why We Disclose
                Personal Information  </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <p>
                  Identifiers and Non-Public
                  Personal Information **
                  Examples:
                </p>


                • Full name <br />
                • Contact details (email
                address, mailing
                address, phone number)<br />
                • User account information<br />
                • Credit or debit card (or
                other financial
                information such as
                digital payment accounts)<br />
                • Device identifier IP
                address<br />
                • More about payment
                card information:
                Although users can
                submit payment
                information to pay for a
                service through the Site,
                we do not receive this
                information
              </td>
              <td>
                • Process and fulfill your
                service requests and
                orders, managing
                payments, and
                addressing complaints<br />
                • Communicate with you
                and send you information
                about our Site, and
                promotions<br />
                • Administer and fulfill our
                sweepstakes, contests,
                and other promotions<br />
                • Help us better
                understand your needs
                and preferences to
                provide consistent,
                personalized services<br />
                • Enhance your experience
                by tailoring our content or
                personalizing our Site<br />
                • Help us evaluate,
                maintain, and improve
                our Site<br />
                • Protect the security or
                integrity of our Site and
                our business, including
                by protecting against,
                detecting, or investigating
                malicious, deceptive,
                fraudulent, or illegal
                activity
              </td>
              <td>
                <b>Service providers</b>   that assist
                with our business operations,
                including through processing
                payments, assisting with our
                customer service,
                communications delivery,
                analytics, marketing, and
                maintaining the security and
                stability of our Site and internal
                networks<br />
                <b>Service professionals</b>  that
                perform and fulfill your service
                requests from the Site <br />
                <b>Service professional
                  companies</b>   if you are an
                employee, contractor, or other
                affiliate of any company
                participating on the Site as a
                service professional, we may
                disclose your Personal
                Information with that company
              </td>
            </tr>
            <tr>
              <td>
                <p>
                  <b>Inferences and Customer
                    Profiles</b>    <br />
                  Examples:
                </p>
                • Information you provide
                voluntarily via surveys,
                ratings, or reviews
                included in our Site
              </td>
              <td>
                • Process and fulfill your
                service requests and
                orders, managing
                payments, and
                addressing complaints<br />
                • Communicate with you
                and send you information
                about our Site, and
                promotions<br />
                • Administer and fulfill our
                sweepstakes, contests,
                and other promotions<br />
                • Help us better
                understand your needs
                and preferences to
                provide consistent,
                personalized services<br />
                • Enhance your experience
                by tailoring our content or
                personalizing our Site<br />
                • Help us evaluate,
                maintain, and improve
                our Site<br />
                • Protect the security or
                integrity of our Site and
                our business, including
                by protecting against,
                detecting, or investigating
                malicious, deceptive,
                fraudulent, or illegal
                activity
              </td>
              <td>
                <b>Service providers</b>
                that assist
                with our business operations,
                including through processing
                payments, assisting with our
                customer service,
                communications delivery,
                analytics, marketing, and
                maintaining the security and
                stability of our Site and internal
                networks <br />
                <b>Service professionals</b>  that
                perform and fulfill your service
                requests from the Site <br />
                <b>Service professional
                  companies</b>  if you are an
                employee, contractor, or other
                affiliate of any company
                participating on the Site as a
                service professional, we may
                disclose your Personal
                Information with that company
              </td>
            </tr>
            <tr>
              <td>
                <p>
                  <b>Internet Activity Information</b> <br />
                  Examples:
                </p>
                • Browsing and search
                history on our Site<br />
                • Information about how
                you interact with our Site
                and ads
              </td>
              <td>

                • Process and fulfill your
                service requests and
                orders, managing
                payments, and
                addressing complaints
                <br />
                • Communicate with you

                and send you information
                about our Site, and
                promotions<br />
                • Administer and fulfill our
                sweepstakes, contests,
                and other promotions<br />
                • Help us better
                understand your needs
                and preferences to
                provide consistent,
                personalized services<br />
                • Enhance your experience
                by tailoring our content or
                personalizing our Site<br />
                • Help us evaluate,
                maintain, and improve
                our Site<br />
                • Protect the security or
                integrity of our Site and
                our business, including
                by protecting against,
                detecting, or investigating
                malicious, deceptive,
                fraudulent, or illegal
                activity
              </td>
              <td>
                <b>Service providers</b>   that assist
                with our business operations,
                including through processing
                payments, assisting with our
                customer service,
                communications delivery,

                analytics, marketing, and
                maintaining the security and
                stability of our Site and internal
                networks<br />
                <b>Service professionals</b>  that
                perform and fulfill your service
                requests from the Site<br />
                <b>Service professional
                  companies</b>   if you are an
                employee, contractor, or other
                affiliate of any company
                participating on the Site as a
                service professional, we may
                disclose your Personal
                Information with that company
              </td>
            </tr>
            <tr>
              <td>
                <p>
                  <b>Geolocation Data</b>   <br />
                  Examples:
                </p>

                • Approximate location
                inferred from IP address
                or interaction with
                geotargeted ads<br />
                • Precise location of
                service professionals by
                using global positioning
                system (GPS)
                information sent from the
                Service Providers
                dashboard **<br /><br />
                **For more information on when this
                information is collected, how we use
                it, and with whom it is shared,
                services professionals should refer
                to the Service Professional
                Agreement available on the service
                professional portal
              </td>
              <td>
                • Process and fulfill your
                service requests and
                orders, managing
                payments, and
                addressing complaints<br />
                • Communicate with you
                and send you information
                about our Site, and
                promotions<br />
                • Administer and fulfill our
                sweepstakes, contests,
                and other promotions<br />
                • Help us better
                understand your needs
                and preferences to
                provide consistent,
                personalized services<br />
                • Enhance your experience
                by tailoring our content or
                personalizing our Site<br />
                • Help us evaluate,
                maintain, and improve
                our Site<br />
                • Protect the security or
                integrity of our Site and
                our business, including
                by protecting against,
                detecting, or investigating
                malicious, deceptive,
                fraudulent, or illegal
                activity
              </td>
              <td>
                <b>Service providers</b>  that assist
                with our business operations,
                including through processing
                payments, assisting with our
                customer service,
                communications delivery,
                analytics, marketing, and
                maintaining the security and
                stability of our Site and internal
                networks  <br />
                <b>Service professionals</b>   that
                perform and fulfill your service
                requests from the Site
                <br />
                <b>Service professional
                  companies</b>
                if you are an
                employee, contractor, or other
                affiliate of any company
                participating on the Site as a
                service professional, we may
                disclose your Personal
                Information with that company
              </td>
            </tr>
            <tr>
              <td>
                <p>
                  <b>Audio and Visual Information</b>   <br />
                  Examples:
                </p>

                • Photos you give us
              </td>
              <td>
                • Process and fulfill your
                service requests and
                orders, managing
                payments, and
                addressing complaints<br />
                • Communicate with you
                and send you information
                about our Site, and
                promotions<br />
                • Administer and fulfill our
                sweepstakes, contests,
                and other promotions<br />
                • Help us better
                understand your needs
                and preferences to
                provide consistent,
                personalized services<br />
                • Enhance your experience
                by tailoring our content or
                personalizing our Site<br />
                • Help us evaluate,
                maintain, and improve
                our Site<br />
                • Protect the security or
                integrity of our Site and
                our business, including
                by protecting against,
                detecting, or investigating
                malicious, deceptive,
                fraudulent, or illegal
                activity
              </td>
              <td>
                <b>Service providers</b>  that assist
                with our business operations,
                including through processing
                payments, assisting with our
                customer service,
                communications delivery,
                analytics, marketing, and
                maintaining the security and
                stability of our Site and internal
                networks  <br />
                <b>Service professionals</b>   that
                perform and fulfill your service
                requests from the Site<br />
                <b>Service professional
                  companies</b>   if you are an
                employee, contractor, or other
                affiliate of any company
                participating on the Site as a
                service professional, we may
                disclose your Personal
                Information with that company
              </td>
            </tr>
            <tr>
              <td>
                <b>Professional or Employment-
                  Related Information</b>    <br />
                <span className='text-underline'>
                  We may collect the following if
                  you choose to provide them: </span>   <br />
                • Work experience<br />
                • Skills<br />
                • LinkedIn/Professional
                profiles<br />
                • Any other information
                you provide regarding
                your background
                **this section applies only to
                FitMatch service professionals
              </td>
              <td>
                • Process and fulfill your
                service requests and
                orders, managing
                payments, and
                addressing complaints<br />
                • Communicate with you
                and send you information
                about our Site, and
                promotions<br />
                • Administer and fulfill our
                sweepstakes, contests,
                and other promotions<br />
                • Help us better
                understand your needs
                and preferences to
                provide consistent,
                personalized services<br />
                • Enhance your experience
                by tailoring our content or
                personalizing our Site<br />
                • Help us evaluate,
                maintain, and improve
                our Site<br />
                • Protect the security or
                integrity of our Site and
                our business, including
                by protecting against,
                detecting, or investigating
                malicious, deceptive,
                fraudulent, or illegal
                activity
              </td>
              <td>
                <b>Service providers</b>   that assist
                with our business operations,
                including through processing
                payments, assisting with our
                customer service,
                communications delivery,
                analytics, marketing, and
                maintaining the security and
                stability of our Site and internal
                networks <br />
                <b>Service professionals</b>   that
                perform and fulfill your service
                requests from the Site  <br />
                <b>Service professional
                  companies</b>   if you are an
                employee, contractor, or other
                affiliate of any company
                participating on the Site as a
                service professional, we may
                disclose your Personal
                Information with that company
              </td>
            </tr>

            <tr>
              <td>
                <b>Legally Protected
                  Characteristics</b>
                <br />
                <span className='text-underline'> We may collect the following if
                  you choose to provide them:</span>   <br />

                • Gender
              </td>
              <td>
                • Process and fulfill your
                service requests and
                orders, managing
                payments, and
                addressing complaints<br />
                • Communicate with you
                and send you information
                about our Site, and
                promotions<br />
                • Administer and fulfill our
                sweepstakes, contests,
                and other promotions<br />
                • Help us better
                understand your needs
                and preferences to
                provide consistent,
                personalized services<br />
                • Enhance your experience
                by tailoring our content or
                personalizing our Site<br />
                • Help us evaluate,
                maintain, and improve
                our Site<br />
                • Protect the security or
                integrity of our Site and
                our business, including
                by protecting against,
                detecting, or investigating
                malicious, deceptive,
                fraudulent, or illegal
                activity
              </td>
              <td>

                <b>Service providers</b>   that assist
                with our business operations,
                including through processing
                payments, assisting with our
                customer service,
                communications delivery,
                analytics, marketing, and
                maintaining the security and
                stability of our Site and internal
                networks  <br />
                <b>Service professionals</b>    that
                perform and fulfill your service
                requests from the Site  <br />
                <b>Service professional
                  companies</b>  if you are an
                employee, contractor, or other
                affiliate of any company
                participating on the Site as a
                service professional, we may
                disclose your Personal
                Information with that company
              </td>
            </tr>

            <tr>
              <td>
                <b>Sensitive Personal
                  Information</b>
                <br />
                <span className='text-underline'>
                  We may collect the following if
                  you choose to provide them: </span> <br />
                • Precise geolocation<br />
                • a consumer’s account
                log‐in, financial account,
                debit card, or credit card
                number<br />
                • the contents of a
                consumer’s mail, email,
                and text messages,
                unless the business is
                the intended recipient of
                the communication
                Sensitive Personal Information is
                only used for legally permitted
                purposes.
              </td>
              <td>
                • Process and fulfill your
                service requests and
                orders, managing
                payments, and
                addressing complaints<br />
                • Communicate with you
                and send you information
                about our Site, and
                promotions<br />
                • Administer and fulfill our
                sweepstakes, contests,
                and other promotions<br />
                • Help us better
                understand your needs
                and preferences to
                provide consistent,
                personalized services<br />
                • Enhance your experience
                by tailoring our content or
                personalizing our Site<br />
                • Help us evaluate,
                maintain, and improve
                our Site<br />
                • Protect the security or
                integrity of our Site and
                our business, including
                by protecting against,
                detecting, or investigating
                malicious, deceptive,
                fraudulent, or illegal
                activity
              </td>
              <td>
                <b>Service providers</b>   that assist
                with our business operations,
                including through processing
                payments, assisting with our
                customer service,
                communications delivery,
                analytics, marketing, and
                maintaining the security and
                stability of our Site and internal
                networks   <br />
                <b>Service professionals</b>   that
                perform and fulfill your service
                requests from the Site  <br />
                <b> Service professional
                  companies</b>   if you are an
                employee, contractor, or other
                affiliate of any company
                participating on the Site as a
                service professional, we may
                disclose your Personal
                Information with that company
              </td>
            </tr>
          </tbody>
        </table>


        <p>
          In addition to the uses and disclosures of Personal Information described in the chart above, we may use and
          disclose any Personal Information as reasonably necessary to comply with regulatory and legal requirements,
          cooperate with and respond to law enforcement requests, or as otherwise required by applicable law, court
          order, or governmental regulations. We also use Personal Information we collect to maintain appropriate
          records for internal administrative purposes, to protect our rights and interests or those of others, to resolve any
          disputes, to enforce our policies, or to prevent harm. Any Personal Information we collect may be provided to
          our professional advisors, including accountants, auditors, consultants, and lawyers, when reasonably
          necessary for our professional advisors to perform services for us and give us appropriate advice. All Personal
          Information we collect may be transferred to another company in the event of a sale, merger, or other
          acquisition of some or all of our assets or business or as part of the negotiation or evaluation of such sale,
          merger, or other acquisition.
        </p>
        <p>
          <b> 2. TRACKING TECHNOLOGIES AND COOKIES</b><br />
          We collect information through technology to enhance our ability to serve you. When you access and use the
          Site, or contact us or our service providers, we and, in some cases, our service providers collect information
          about you or how you interact with the Site. We describe below a few of the methods we use to collect
          information through technology. <br />
          When you visit the Site, we collect your Internet Protocol (IP) address. An IP address is often associated with
          the portal you used to enter the internet, like your internet service provider (ISP), company, association, or
          university. While an IP address may reveal your ISP or geographic area, we cannot determine your identity
          solely based upon your IP address. However, we may link the last IP address you used to access the Site to
          Personal Information you provide us. We may also collect a unique identifier for your computer, mobile device,
          or other device used to access the Site (“Device Identifier”). A Device Identifier is a number that is
          automatically assigned to the device you used to access the Site. We may link the Device Identifier to other
          information about your visit, such as what pages you viewed, and to Personal Information you provide us,
          such as your name. In addition to these methods, we may also collect information about how you interact with
          the Site through advertising partners and data enrichment tools.
        </p>

        <p className='mb-2'>  <b>a. Do We Use Cookies?</b><br />
          Cookies are small files that a website transfers to your device through a web browser that enables the
          website’s systems to recognize your device and to capture and remember certain information. You can find
          more information about cookies at: www.allaboutcookies.org. In general, our Site use cookies:<br /> (1) where
          necessary to run our Site,<br /> (2) to optimize the functionality of our Site, including by personalizing content for
          you and remembering your preferences (e.g., your choice of language or region),<br /> (3) for analytics purposes—
          for example, to help us understand how our Site are used, <br />(4) to deliver advertisements relevant to you— for
          example, the cookies remember that you visited our Site after you leave. Sometimes they collect information
          about what pages of our Site you visited, and this information is shared with our advertising vendors, such as
          AppNexus, Google, Nanigans, Facebook, and Twitter.<br />
          Many advertisers and service providers that perform advertising-related services for us participate in voluntary
          programs that provide tools to opt-out of such interest-based advertising such as the Digital Advertising
          Alliance’s (“DAA”) Self-Regulatory Program for Online Behavioral Advertising. To learn more about how you
          can exercise certain choices regarding interest-based advertising for DAA members, visit
          https://youradchoices.com/ and http://www.aboutads.info/appchoices for information on the DAA’s opt-out
          program for mobile apps. Some of these companies also are members of the Network Advertising Initiative
          (“NAI”). To learn more about the NAI and your opt-out options for their members, see
          http://www.networkadvertising.org/choices/ . Please be aware that, even if you are able to opt out of certain
          kinds of interest-based advertising, you may continue to receive other types of ads (e.g., from other ad
          networks).<br />
          Our Services uses analytics technologies, including Google Analytics, to support the operation and
          performance of our Site and to analyze your interactions and experiences with our Site, including the features
          you engage with, how you navigate, and your clicks, cursor movement, and scrolling activity, and general
          information about Site traffic data, performance, and related statistics. You may exercise choices regarding the
          use of cookies from Google Analytics by going to https://tools.google.com/dlpage/gaoptout or downloading the
          Google Analytics Opt-out Browser Add-on.<br />
          Rejecting Cookies Through Browser Settings: Most browsers will tell you how to prevent your browser from
          accepting new cookies, how to have the browser notify you when you receive a new cookie, and how to
          disable cookies altogether. For more information on using browser settings to reject cookies, please visit
          www.allaboutcookies.org. You should note that rejecting cookies in your browser settings may mean that any
          preferences you set on the Site will be lost and that the Site may not work as well.
        </p>

        <p className='mb-2'>  <b> b. Web Beacons</b><br />
          We may include small graphic images or other web programming code, called web beacons (also known as
          “pixel tags”, “web bugs” or “clear GIFs”), on our Site and in our messages. The web beacons are minute
          graphics with a unique identifier. They are used to track the online movements of Site users. In contrast to
          cookies, which are stored in a user's computer hard drive, web beacons are embedded invisibly on webpages
          and are about the size of the period at the end of this sentence. Web beacons help us better manage content
          on the Site by informing us what content is effective, monitoring how users navigate the Site, counting users
          of the Site, and counting how many e-mails sent by us were actually opened.
        </p>

        <p className='mb-2'>  <b>c. Session Monitoring</b><br />
          Some of the technologies used on our Site allow us and our service providers to monitor and analyze how
          visitors use our Site in order to better understand user behavior and improve our Site. When you interact with us
          online, information related to your browsing behavior may be collected by us and our service providers.
        </p>
        <p className='mb-2'>  <b>d. Your 'Do Not Track' Browser Setting</b><br />
          We do not support the Do Not Track (“DNT”) browser setting. DNT is a preference you can set in your
          browser's settings to let the websites you visit know that you do not want the websites collecting your Personal
          Information. We do track your online activities over time and across third-party websites or online services. For
          example, we use web beacons to help us determine what links or advertisers brought you to our Site. We also
          use third-party service providers to display advertisements to you on other websites based on your activities
          while on the Site.
        </p>


        <p className='mb-2 mb-3'>  <b>e. Social Networking Sites</b><br />
          If you login to the Site through a social networking site, such as Facebook, we may collect your Facebook
          authentication token and account identification number and use that information to provide you with access to
          your account on the Site.
        </p>


        <p className='mb-0'>
          <b>  3. INFORMATION FROM OR ABOUT OTHER PARTIES</b>
        </p>
        <p className='mb-2'>  <b>a. Information You Provide About An External Party
          Referrals</b><br />
          If you choose to use our referral service to tell a friend about the Site, we may collect your friend's name and
          email address. We will automatically send your friend a one-time email inviting them to visit our Site. We store
          this information only to send this one-time email and to track the success of our referral program. We do not use
          this information for any other marketing purpose unless we obtain consent from that person, or we explicitly say
          otherwise. Please be aware that when you refer a friend, your e-mail address may be included in the message
          sent to your friend.<br />
          Ratings
          The Services may display profiles of service professionals who participate on the Site. These profiles may
          include the service professional’s name, and ratings and reviews about the service professional provided by
          their customers. Service professional profiles may be visible to all users of the Site.
          The Services may provide you with an opportunity to give ratings and reviews regarding service professionals
          or service requests. If you provide a rating or review about a service professional, we may post your first name,
          the initial of your last name, and the name of your neighborhood along with your rating or review on the service
          professional’s profile on the Site and on booking partners’ websites. In addition, service professionals may use
          your ratings and reviews, as well as this personal information about you, in their own marketing materials.
        </p>

        <p className='mb-2'>  <b>b. Information External Parties Provide About You</b><br />
          We may supplement the information we collect about you through the Site with records received from third parties
          in order to enhance our ability to serve you, to tailor our content to you, and to offer you information that we
          believe may be of interest to you.
        </p>

        <p className='mb-1 mb-3'>  <b>c. Information You Provide to a Third-Party / Third-Party Sites</b><br />
          The Services include links operated by third parties (“Third-Party Sites”) and plug-ins (such as Twitter
          buttons) from Third-Party Sites. We do not control any Third-Party Sites and are not responsible for any
          information they may collect. The information collection practices of Third-Party Sites are governed by that
          website's privacy policy. We recommend that you read the Third-Party Site's privacy policy if you choose to
          provide any personal information or click on a plug-in.<br />
          Some Third-Party Sites link to the Site and share information with the Site. For example, in some cases, you
          can book our service through one of our booking partners, in that case, you might provide booking information,
          such as your name, telephone number, email address, and booking address, to the booking partner. Booking
          partners may share the booking information with us.
        </p>


        <p>
          <b>  4. COMMUNICATIONS</b><br />
          a. SMS Text Messaging Disclosure
          By using the Site, you expressly consent and agree to accept and receive communications from us, including
          via text message, calls, and push notifications to the cellular telephone number you provided to us. Standard
          text messaging charges applied by your cell phone carrier will apply to text messages we send. By consenting
          to being contacted by us, you understand and agree that you may receive communications, including
          marketing communications generated by automatic telephone dialing systems which will deliver prerecorded
          messages, sent by or on behalf of FitMatch, its affiliated companies and/or Users/Professionals, including but
          not limited to: operational communications concerning your account or use of the Site, updates concerning
          new and existing features on the Site, communications concerning promotions run by us, and news concerning
          FitMatch and industry developments.<br />
          You acknowledge that you are not required to consent to receive promotional messages as a condition of
          using the Site. If a contact number you have provided to us is no longer your number, you agree to notify us
          promptly that you can no longer be reached at that number. You represent that you have received, and are
          authorized to convey to us, the consent of any authorized users on your account to be contacted by us as
          described in this Section. You agree that all consents provided in this Section will survive cancellation of your
          account. You may opt-out of receiving promotional or marketing texts or calls from us at any time. You may
          opt-out of receiving all text (SMS) messages from us (including informational or transactional messages) by
          replying with the word “STOP” to a text message from us; however, you acknowledge that opting out of
          receiving all texts may impact your use of the Site.
        </p>
        <p>
          <b>        5. INFORMATION RETENTION</b><br />
          We keep the categories of personal information described above for as long as is necessary for the purposes
          described in this Policy or otherwise authorized by law. This generally means holding the information for as
          long as one of the following apply:<br />
          Your personal information is reasonably necessary to manage our operations, to manage your
          relationship with us, or to satisfy another purpose for which we collected the information;
          Your personal information is reasonably necessary to carry out a disclosed purpose that is reasonably
          compatible with the context in which the personal information was collected; or
          The personal information is reasonably required to protect or defend our rights or property (which will
          generally relate to applicable laws that limit actions in a particular case)
          Where personal information is collected and used for more than one purpose, we will retain it until the
          purpose with the latest period expires.
        </p>

        <p>
          <b>  6. TARGETED ADVERTISING, SALES, AND SHARING OF PERSONAL INFORMATION</b><br />
          Although we do not sell personal information in exchange for money, some of the ways in which we share
          personal information for targeted advertising may be considered “sales” or “sharing” under U.S. state privacy
          laws. Listed below are the categories of personal information we share for purposes of targeted/cross-context
          behavioral advertising or otherwise “sell” for non-monetary consideration:
          • Identifiers <br />
          • Personal Records <br />
          • Internet or other electronic network activity information<br />
          • Geolocation Data (inferred from your IP address)<br />
          • Inferences<br />
          All the above categories exclude text messaging originator opt-in data and consent; this information will not be shared with any third
          parties for their own marketing reasons.<br />
          The types of third parties to which personal information is sold or shared are third-party advertisers and some
          analytics vendors. The purposes for which we sell/share this information include: showing you relevant ads
          while you browse the internet or use social media; marketing, advertising, certain types of analytics, or similar
          purposes. We do not have actual knowledge that we sell or share the personal information of consumers under
          16 years of age. If you would like to opt out, please see the information below.
        </p>


        <p>
          <b>7. UNITED STATES PRIVACY RIGHTS</b><br />
          If you are a resident of California, Colorado, Connecticut, or Virginia you have the right to submit certain
          requests relating to your Personal Information as described below. To exercise any of these rights, please
          submit a request to us via email at privacyofficer@FitMatch.com including the email address that you have
          used to transact with FitMatch. You may designate an authorized agent to make a request on your behalf;
          however, you will still need to verify your identity directly with us before your request can be processed. Any
          request you submit to us is subject to an identification and residency verification process (“Verifiable
          Consumer Request”). We will not fulfill your request unless you have provided sufficient information for us to
          reasonably verify you are the consumer about whom we collected Personal Information. An authorized agent
          may submit a request on your behalf by emailing us at the email listed above. We will typically not charge a
          fee to fully respond to your requests, but we may charge a reasonable fee, or refuse to act upon a request, if
          your request is excessive, repetitive, unfounded, or overly burdensome.
        </p>


        <p className='mb-2'>
          <b>a. California Privacy Rights</b><br />
          This section supplements the other parts of our Policy and provides disclosures for California residents under
          the California Consumer Privacy Act (the “CCPA”).<br />
          Right to Know: You have the right to know about your Personal Information. You also have the right to obtain a
          transportable copy of your Personal Information. Your right to know request may be made no more than twice
          in a 12-month period.<br />
          Your right to know request may encapsulate the following:
          The categories of Personal Information we have collected about you
          The categories of sources from which the Personal Information was collected
          Our business or commercial purposes for collecting, selling, or sharing your Personal Information
          The categories of third parties to which we disclosed your Personal Information
          The categories of Personal Information we sold or shared about you and the categories of third
          parties to which each category of Personal Information was sold or shared
          The categories of Personal Information we disclosed about you for a business purpose and the
          categories of persons to which it was disclosed
          The specific pieces of Personal Information we have collected about you
          Right to Correct Personal Information: You may request that we correct Personal Information that we maintain
          about you if you believe such Personal Information is inaccurate. Upon receipt of a verifiable request to correct
          inaccurate Personal Information, we will use commercially reasonable efforts to correct the information as you
          direct.<br />
          Right to Request Deletion of Personal Information: You may request that we delete your Personal Information
          that we have collected directly from you and are currently maintaining. Please note, however, that we may
          have a legal basis for retaining such Personal Information under applicable law, despite your request.
          Opt-Out Rights: You have the right to opt out of the selling or sharing of your Personal Information via tracking
          technologies (e.g., cookies) on the Site by clicking on the “Do Not Sell or Share My Personal Information” link
          in the footer of the Site. If you choose to use an opt-out browser signal, such as the Global Privacy Control,
          you will be opted out of cookie-based sales and shares. Please note that visiting our Sites with an opt-out
          browser signal enabled will have the effect of opting you out of sales and sharing with respect to our Sites. You
          will need to turn on the signal for each browser that you use.
          Right to Limit Use and Disclosure of Your Sensitive Personal Information: In the event that we use sensitive
          Personal Information to infer characteristics about you, you may direct us to limit the use and disclosure of
          your sensitive Personal Information to uses and disclosures that are reasonably necessary to provide our
          goods and services. We do not use or disclose sensitive Personal Information to infer characteristics, nor do
          we use or disclose sensitive Personal Information for other purposes not listed here.
          Right to Non-Discrimination for the Exercise of Your Privacy Rights: If you choose to exercise any of your
          privacy rights under California law you also have the right not to receive discriminatory treatment by us.
          Notice of Financial Incentive<br />
          From time to time, we offer discounts and promotions (“Programs”) that provide benefits to those who choose
          to participate. Participation requires you to provide some Personal Information, such as Identifiers (e.g., email
          addresses, phone numbers, and/or zip codes). The full terms and conditions of our Programs will be set forth
          where the opportunity to sign up is offered.
          We have made a good faith estimate that the value of consumers’ Personal Information provided in connection
          with our Programs is equivalent to the relevant expenses related to the collection and retention of that
          Personal Information. By joining our Programs, you consent to any associated financial incentive. You have the
          right to withdraw from the financial incentive at any time by discontinuing our Programs in the manner
          provided.<br />
          Unless you specifically request, submission of a request to delete your Personal Information will not erase
          information required for you to continue to participate in our Programs. Should you wish to delete your
          Personal Information associated with our Programs (and thereby cancel your participation in our Program),
          please contact us at customerservice@fitmatch.us. In addition, we may offer you financial incentives for the
          collection, sale and retention and use of your Personal Information as permitted by the CCPA. The material
          aspects of any financial incentive will be explained and described in its terms. Please note that participating in
          incentive programs is entirely optional, you will have to affirmatively opt-in to the Program and you can opt-out
          of each Program (i.e., terminate participation and forgo the ongoing incentives) prospectively by following the
          instructions in the applicable Program description and terms. We may add or change incentive Programs
          and/or their terms by posting notice on the Program descriptions and terms, so check them regularly.
          California Shine the Light
          Separately from the CCPA, the California Shine the Light law permits customers in California to request certain
          details about how their personal information is “shared” with third parties as defined in the Shine the Light law,
          and in some cases affiliates, if personal information is shared for those third parties’ or affiliates’ own direct
          marketing purposes. We share personal information with third parties or affiliates for those third parties’ or
          affiliates’ own direct marketing purposes. Californians may request information about our personal information
          sharing by contacting us at customerservice@fitmatch.us. Please include “California Shine the Light Request” in
          the subject line and in the body of your message. Please note that “Shine the Light” rights and CCPA rights are
          granted by different laws and must be exercised separately.
        </p>

        <p className='mb-2'>
          <b>b. Other State Privacy Rights</b><br />

          This section supplements the other parts of our Policy and provides additional information for residents of
          Virginia, Colorado, and Connecticut. If you are a resident of California, please review our California-specific
          disclosures above.<br />
          We may process your Personal Information for targeted advertising and some of the ways that we disclose
          Personal Information may constitute a sale (as the term is defined in the applicable state privacy laws).
          If you are a resident of Virginia, Colorado, and Connecticut, subject to certain conditions and restrictions set
          out in the applicable laws, you have the following rights with regard to your Personal Information:
          Right to Access. You have the right to request access to and obtain a copy of any Personal Information that we
          may hold about you.<br />
          Right to Correct. You have the right to request that we correct inaccuracies in your Personal Information.
          Right to Delete. You have the right to request that we delete Personal Information that we have collected from
          or obtained about you.<br />
          Right to Opt Out of Targeted Advertising. You have the right to request that we stop disclosures of your
          Personal Information for targeted advertising via cookies and tracking technologies by adjusting your cookie
          preferences through the “Do Not Sell or Share My Personal Information” link in the footer of this page.
          Right to Opt Out of Sales. You have the right to opt out of our Sales of your Personal Information.
          Right to Opt Out of Profiling. You have the right to opt out of profiling in furtherance of decisions that produce
          legal or similarly significant effects. We do not use Personal Information to conduct profiling.
          Right to Appeal. If you are unsatisfied with our actions related to the exercise of one of your privacy rights
          above, you may appeal our decision (Virginia, Colorado, and Connecticut only).
        </p>
        <p className='mb-1 mb-3'>
          <b>c. Nevada Privacy Rights</b><br />
          Under Nevada law, Nevada residents may opt out of the sale of certain “covered information” collected by
          operators of websites or online services. We currently do not sell covered information, as “sale” is defined by
          such law.
        </p>

        <p>
          <b> 8. SWEEPSTAKES, CONTESTS, AND PROMOTIONS</b><br />
          We may offer sweepstakes, contests, and other promotions (collectively “Promotion”) through the Site that
          may require providing Personal Information to register. By participating in a Promotion, you are agreeing to the
          official rules that govern that Promotion, which may contain specific requirements of you, including, allowing
          the sponsor of the Promotion to use your name, voice and/or likeness in advertising or marketing associated
          with the Promotion. Please read the official rules carefully. If you choose to enter a Promotion, Personal
          Information may be disclosed to third parties or the public in connection with the administration of such
          Promotion, including, in connection with winner selection, prize fulfillment, and as required by law or permitted
          by the Promotion's official rules, such as on a winners' list.
        </p>
        <p>
          <b>9. CHILDREN'S PRIVACY</b><br />
          We do not collect any information from anyone under 16 years of age. The Services we offer are all directed to
          people who are at least 16 years old or older. If you are under the age of 16, you are not authorized to use the
          Site.
        </p>
        <p>
          <b>10. INTERNATIONAL VISITORS</b><br />
          FitMatch operates and is based in the United States. If you are using our Site outside the United States,
          please be aware that the information described in this Policy may be transferred to, or processed and stored
          in, the United States and other countries, which may employ greater or less restrictive data protection laws.
          Please be aware that the data protection laws and regulations that apply to your personal information
          transferred to the United States or other countries may be different from the laws in your country. In all cases,
          we will take appropriate measures to protect your personal information in accordance with the standards
          described in this Policy.
        </p>

        <p>
          <b>11. SECURITY</b><br />
          The security and confidentiality of your Personal Information is important to us. We have implemented
          commercially reasonable technical, administrative, and physical security measures to protect your Personal
          Information from unauthorized access or disclosure and improper use. It is important for you to protect against
          unauthorized access to your account password and to your computer. Be sure to log out of your account or to
          close your browser after you have completed your visit to our Site. Please note that despite our reasonable
          efforts, no security measure is perfect or impenetrable, therefore we cannot guarantee the absolute security of
          your Personal Information.
        </p>


        <p>
          <b>12. YOUR CHOICES</b><br />
          You may contact customerservice@fitmatch.us to update, correct, or delete your Personal Information. You
          may also update, correct, and delete some of your Personal Information through your account on the Site.
          You may opt out of marketing emails by clicking the “unsubscribe” link at the bottom of emails we send or by
          sending an email to customerservice@fitmatch.us.
        </p>

        <p>
          <b>13. CONTACT US</b><br />
          If you have any questions about this Policy, we'll do our best to answer them promptly. Here's how to contact
          us:<br />
          Email:
          customerservice@fitmatch.us<br />
          Mailing Address:<br />
          Attn: Privacy Officer<br />
          FitMatch, LLC.<br />
          1440 W. Taylor Street, #347<br />
          Chicago, IL 60607.<br />
        </p>

        <p>
          <b>14. CHANGES TO THIS POLICY</b><br />
          If we change this Policy, we will post those changes on this page and will modify the “Last Updated” date at the
          top of this Policy. If we materially change this Policy in a way that affects how we use or disclose your Personal
          Information, we will notify you by prominently posting a notice of such changes before making them.
        </p>
      </div>
    </>
  );
}
