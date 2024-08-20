"use client";
import { useState } from 'react';
import 'react-tabs/style/react-tabs.css';

export default function terms_conditions() {
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
          <h2> Terms & Conditions</h2>
          <p>
            Home / Terms & Conditions
          </p>
        </div>
      </div>
      <div className='terms container my-5 py-5'>
        FitMatch Terms of Use <br />
        Last updated on April 14, 2024<br />
        FitMatch, LLC. (“FitMatch”) helps consumers research, hire, and review personal, fitness trainers
        (“Service Providers”). The following Terms of Use outline your obligations when using the FitMatch
        website and service.<br /><br />
        <p>
          <b>1. ACCEPTANCE OF TERMS</b> <br />
          The FitMatch website available at https://fitmatch.us and the various content, features, and
          services offered on and in connection with the site and application (collectively, the “Site and
          Service”) are owned and operated by FitMatch and can only be accessed and used by you under the
          Terms of Use described below (“Terms of Use”). PLEASE READ THESE TERMS OF USE CAREFULLY.
          BY ACCESSING, DOWNLOADING, OR USING THE SITE AND SERVICE, YOU AGREE TO BECOME
          BOUND BY THESE TERMS AND CONDITIONS. IF YOU DO NOT AGREE TO ALL THE TERMS AND
          CONDITIONS, THEN YOU MAY NOT ACCESS AND USE THE SITE AND SERVICE.
        </p>

        <p><b>2. MODIFICATIONS OF TERMS OF USE</b> <br />
          FitMatch may, in its sole discretion, modify these Terms of Use at any time effective upon posting
          the modified Terms of Use on and in connection with the Site and Service, with or without
          additional notice to you. You are responsible for regularly reviewing information posted on the Site
          and Service to obtain timely notice of such changes. If you do not agree to the amended terms, you
          agree to immediately stop using the Site and Service and to provide FitMatch notice to remove you
          from any distribution lists or other communication list that are available to you through your use of
          the Site and Service. YOUR CONTINUED USE OF THE SITE AND SERVICES AFTER SUCH POSTING
          (OR OTHER NOTIFICATION, IF ANY) MEANS YOU ACCEPT AND AGREE TO BE BOUND BY THE
          MODIFIED TERMS OF USE.</p>

        <p> <b>3. USE OF THE SITE AND SERVICES</b> <br />
          Subject to full compliance with these Terms of Use, FitMatch grants authorized users a
          nonexclusive, nontransferable, non-sublicensable, terminable license to access and use the Site
          and Service for your personal use. You agree to not access, reproduce, duplicate, copy, sell, re-sell,
          modify, distribute, transmit, or otherwise exploit the Sites or Services or any of their content for any
          purpose except for your personal use and as described in these Terms of Use, without the express
          written consent of FitMatch. FitMatch may modify, update, suspend or discontinue the Site and
          Service, in whole or in part, at our sole discretion for any or no reason, at any time and with or
          without notice. FitMatch shall not be liable to any user or other third party for any such
          modification, update, suspension or discontinuance. </p>

        <p><b>4. USER CONDUCT</b> <br />
          As a condition of your access and use of the Site and Service and your submission or access to any
          ratings, reviews, communications, information, data, text, photographs, audio clips, audiovisual
          works, or other materials on the Site and Service (collectively, the “Content”), you agree not to use
          the Site and Service for any purpose that is unlawful or prohibited by these Terms of Use, or any
          other purpose not reasonably intended by FitMatch. By way of example, and not as a limitation, you
          agree not to:</p>


        <p className='mb-1'>1. violate these Terms of Use, other applicable agreement with FitMatch, and any applicable
          local, state, national or international law, and any rules and regulations having the force of law;</p>

        <p className='mb-1'>2. use the Site and Service in any manner that violates any relevant law or that infringes,
          misappropriates or violates any third party’s rights, including, but not limited to, transmitting any
          Content that may infringe, misappropriate or violate a third party’s rights of publicity, contractual
          rights, fiduciary rights or intellectual property rights;</p>

        <p className='mb-1'>3. use the Site and Service or its Content for any purposes not authorized by these Terms of
          Use, including commercial, political, or religious purposes, including the submission or
          transmission of any Content that contains advertisements, promotional materials, junk mail, or any
          other form of solicitation;</p>

        <p className='mb-1'>4. reproduce, duplicate, copy, modify, sell, re-sell or exploit any Content or the Site and
          Service for any commercial, educational, or any other non-personal purpose or any for any purpose
          unrelated to your personal purchasing decisions, without the express written consent of FitMatch,
          which consent may be withheld by FitMatch in our sole discretion;</p>

        <p className='mb-1'>5. post irrelevant Content, repeatedly post the same or similar Content or otherwise impose
          an unreasonable or disproportionately large load on our infrastructure, interfere or attempt to
          interfere with the proper working of the Site and Service or any activities conducted on the Site and
          Service;</p>
        <p className='mb-1'>6. harass, threaten, intimidate, impersonate, or attempt to impersonate, any other person,
          falsify your contact or other information, misrepresent a relationship with any person or entity,
          including misrepresenting a relationship with FitMatch, or otherwise attempt to mislead others as
          to the identity of the sender or the origin of a review or rating;</p>

        <p className='mb-1'>7. knowingly provide or submit false or misleading information;</p>

        <p className='mb-1'>8. use the Site and Service if you are under the age of eighteen (18);</p>

        <p className='mb-1'>9. take any action that would undermine the review and rating process under the Site and
          Service;</p>

        <p className='mb-1'>10. attempt to gain unauthorized access to the Site and Service, other user accounts, or
          other computer systems or networks connected to the Site and Service;</p>

        <p className='mb-1'> 11. use the Site and Service in any way that could interfere with the rights of FitMatch or the
          rights of other users of the Site and Service;</p>

        <p className='mb-1'>12. attempt to gain unauthorized access to any portion or feature of the Site and Service, or
          any other systems or networks connected to the Site and Service or to any server used by FitMatch
          by hacking, password ‘mining’ or any other illegitimate or unauthorized means, including
          attempting to obtain password, account, or any other personal or private information from any
          other Site and Service user;</p>
        <p className='mb-1'>13. sell, share, or otherwise transfer your account username, password, other information,
          or your rights or obligations under these Terms of Use;</p>

        <p className='mb-1'>14. transmit or submit any transmission or other materials that are encrypted or that
          contains viruses, Trojan horses, worms, time bombs, spiders, cancelbots or other computer
          programming routines that is likely or intended to damage, interfere with, disrupt, impair, disable or
          otherwise overburden the Site and Service;</p>

        <p className='mb-1'>15. access, download, monitor, or copy any information contained on our Site and Service
          through artificial means (including but not limited to use any ‘deep-link’, ‘scraper’, ‘robot’, ‘spider’ or
          other automatic device, program, algorithm or methodology, or any similar or equivalent automatic
          or manual process, or in any way reproduce or circumvent the navigational structure or
          presentation of the Site and Service or any content, to obtain or attempt to obtain any Content,
          materials, documents or information through any means not purposely made available through the
          Site and Service; or</p>

        <p className='mb-1 mb-3'>16. probe, scan or test the vulnerability of the Site and Service or any network connected to
          the Site and Service, nor breach the security or authentication measures on or of the Site and
          Service or any network connected to the Site and Service. You may not reverse look-up, trace or
          seek to trace any information on any other user of the Site and Service, or any other customer of
          FitMatch, including any FitMatch account not owned by you, to its source, or exploit the Site and
          Service or any service or information made available or offered by or through the Site and Service,
          in any way where the purpose is to reveal any information, including but not limited to personal
          identification or information other than your own information, except as expressly authorized by
          FitMatch and provided for by the Site and Service.</p>
        <p> <b>5. FITMATCH’S SERVICES</b> <br />
          When using, accessing, or purchasing particular services or features of the Site and Service, you
          shall be subject to any posted agreements, guidelines, or rules applicable to such services or
          features that may be posted from time to time. All such agreements, guidelines, or rules are hereby
          incorporated by reference into the Terms of Use.</p>

        <p> <b>6. REGISTRATION INFORMATION</b> <br />
          We may require that you create an account to use or access certain parts of the Site and Service
          and use certain products and features. We may require that you provide login information such as a
          username and password to access and utilize your account. As a condition of your use of the Sites
          and Service, you agree to (a) provide FitMatch with true, accurate, current and complete
          information as prompted by the FitMatch’s registration forms, when registering for or using the Site
          and Service and (b) update and maintain the truthfulness, accuracy and completeness of such
          information. You are responsible for maintaining the confidentiality of any password or other
          account information not generally available to others and are fully responsible for all activities that
          occur under your username and password. While there are limited, legitimate reasons for creating
          multiple accounts, creating serial or overlapping accounts may result in account termination.
          Please contact us if you have questions about managing multiple accounts.</p>

        <p><b>7. SUBMITTING CONTENT</b> <br />
          As a condition of submitting any Content or other materials to the Sites or Services, you agree that:</p>
        <p className='mb-1'>1. you grant to FitMatch a royalty free, perpetual, irrevocable, worldwide, nonexclusive,
          transferable, and sublicensable license to use, reproduce, copy, adapt, modify, merge, distribute,
          publicly display, create derivative works from, incorporate such Content into other works;</p>
        <p className='mb-1'>2. you grant to FitMatch all rights necessary to publish or refrain from publishing your name
          and address in connection with your Content; sublicense through multiple tiers the Content, and
          acknowledge that this license cannot be terminated by you once your Content is submitted to the
          Site and Service;</p>
        <p className='mb-1'> 3. you grant to FitMatch all rights necessary to prohibit the subsequent aggregation, display,
          copying, duplication, reproduction, distribution, or exploitation of your Content by any other party;</p>


        <p className='mb-1'>4. your name and report information may be made available to the public and to the Service
          Providers on which you report;</p>

        <p className='mb-1'>  5. you represent that you own or have secured all legal rights necessary for the Content
          submitted by you to be used by you, FitMatch, and others as described and otherwise
          contemplated in these Terms of Use;</p>

        <p className='mb-1'> 6. you represent and warrant that each person identified, depicted, or shown in in your
          Content, if any, (and if a minor, the parent or guardian of the minor) has provided consent to the use
          of the Content consistent with these Terms of Use;</p>
        <p className='mb-1'> 7. you are solely responsible for your reviews and ratings;</p>


        <p className='mb-1'>  8. FitMatch may, in its sole discretion, choose to remove or not to remove reviews and
          ratings once published;</p>

        <p className='mb-1'>9. you will not submit any reviews that may be considered by FitMatch to be infringing,
          harassing, libelous, abusive, threatening, obscene, profane, hateful, offensive, harmful, vulgar,
          distasteful, defamatory, or otherwise violates any relevant law or right of any other party, or racially,
          ethnically or otherwise objectionable;</p>

        <p className='mb-1'> 10. all of your reviews and ratings will either be based upon (i) your actual first-hand
          experiences with the Service Providers you are reviewing or (ii) as provided below, an individual and
          that individual’s actual first-hand experience with a health care or wellness provider whereby you
          have the legal authority to disclose such health information and experience of such individual;</p>

        <p className='mb-1'>11. all of your reviews and ratings of the Service Providers that you are rating will be
          accurate, honest, truthful, and complete in all respects;</p>

        <p className='mb-1'>12. you do not work for, own any interest in or serve on the board of directors of, any of the
          Service Providers for which you submit reviews and ratings; you are not in any way related (by
          blood, adoption or marriage, if the Service Provider is an individual) to any of the Service Providers
          for which you submit reviews or ratings;</p>

        <p className='mb-1'> 13. you have not received any form of compensation to post reviews and ratings;</p>

        <p className='mb-1'> 14. you will submit thorough and thoughtful reviews of the Service Providers you review (for
          example, submitting a review describing a service contractor as “He/She is great.” Without
          additional commentary is not a thorough and thoughtful review);</p>

        <p className='mb-1'>15. you will not submit reviews that comment on other users or the reviews of other users;</p>
        <p className='mb-1'>16. you will not submit reviews with hyperlinks; or</p>
        <p className='mb-1 mb-3'>17. the reviews and ratings that you provide do not reflect the views of FitMatch, its officers,
          managers, owners, employees, agents, designees or other users.</p>


        <p>

          <b>8. PUBLICATION AND DISTRIBUTION OF CONTENT</b> <br />
          FitMatch does not guarantee the accuracy, integrity, quality or appropriateness of any Content
          transmitted to or through the Service. You acknowledge that FitMatch simply acts as a passive
          conduit and an interactive computer service provider for the publication and distribution of Content
          and for the publication and distribution of any content posted by Service Providers in response to
          Content (“Service Provider Content”). You understand that all Content and Service Provider
          Content posted on, transmitted through or linked through the Service, are the sole responsibility of
          the person from whom such Content originated. You understand that FitMatch does not control
          and is not responsible for Content or Service Provider Content made available through the Service,
          and that by using the Service, You may be exposed to Content that is inaccurate, misleading, or
          offensive. You agree that You must evaluate and make Your own judgment, and bear all risks
          associated with, the use of any Content and Service Provider Content. You further acknowledge
          that FitMatch has no obligation to screen, preview, monitor or approve any Content or Service
          Provider Content, or Content posted or submitted by any other FitMatch member or any Service
          Provider. However, FitMatch reserves the right to review and delete any Content that, in its sole
          judgment, violates the terms and conditions of this Agreement. By using the Service, You agree that
          it is solely YOUR RESPONSIBILITY to evaluate Your risks to bear associated with the use, accuracy,
          usefulness, completeness or appropriateness of any Content that You submit, receive, access,
          transmit or otherwise convey through the Service. Under no circumstances will FitMatch be liable in
          any way for any Content or Service Provider Content, including, but not limited to, any Content or
          Service Provider Content that contains any errors, omissions, defamatory statements, or
          confidential or private information (including, but not limited to, health information) or for any loss
          or damage of any kind incurred as a result of the use of any Content or Service Provider Content
          submitted, accessed, transmitted or otherwise conveyed via the Service. You waive the right to
          bring or assert any claim against FitMatch relating to Content or Service Provider Content, and
          release FitMatch from any and all liability for or relating to any Content or Service Provider Content.
          You may, however, report Content that you believe violates these Terms of Use or is otherwise
          unlawful by visiting Member Support (for copyright complaints, please see below). Please note that
          you may be liable for damages (including costs and attorneys’ fees) for unlawful
          misrepresentations. If you are uncertain whether an activity is unlawful, we recommend seeking
          advice of an attorney. You agree that FitMatch may establish general practices, policies and limits,
          which may or may not be published, concerning the use of the Site and Service, including without
          limitation, the time that reviews and ratings will be retained, the maximum number of reviews and
          ratings that may be sent from an account, the length of reviews and ratings sent, and the maximum
          number of times and the maximum duration for which you may access the Site and Service in a
          given period of time. You agree that FitMatch has no responsibility or liability for the deletion or
          failure to store any Content or other materials maintained or transmitted by or through the Site and
          Service. You agree that FitMatch has the right to change these general practices and limits at any
          time, in its sole discretion, with or without notice.
        </p>


        <p>
          <b>9. SERVICE PROVIDERS</b> <br />
          FitMatch does not endorse and is not responsible or liable for any Content, data, advertising,
          products, goods or services available or unavailable from, or through, any third party or Service
          Provider (which includes, but is not limited to, health care and wellness providers). You agree that
          should you use or rely on such Content, data, advertisement, products, goods or services, available
          or unavailable from, or through any third party or Service Provider (which includes, but is not limited
          to, health care and wellness providers), FitMatch is not responsible or liable, indirectly or directly,
          for any damage or loss caused or alleged to be caused by or in connection with such use or
          reliance. Your dealings with, or participation in promotions of any Service Provider (which includes,
          but is not limited to, health care and wellness providers), and any other terms, conditions,
          representations or warranties associated with such dealings, are between you and such Service
          Provider (which includes, but is not limited to, health care and wellness providers) exclusively and
          do not involve FitMatch. You should make whatever investigation or other resources that you deem
          necessary or appropriate before hiring or engaging Service Providers (which includes, but is not
          limited to, health care and wellness providers). Third parties and Service Providers may link or
          otherwise direct Internet users to our Site and Service for the purpose of utilizing one or more of the
          services we provide on behalf of others. Additionally, we may provide links or otherwise direct you
          to third party or Service Provider websites. FitMatch does not control or operate any such third party
          or Service Provider websites. Any information you provide to these third party or Service Provider
          websites while on these third party or Service Provider websites is subject to the respective policies
          of those third parties or Service Providers, and not FitMatch’s policies. It is your responsibility to
          review such third party or Service Provider policies, including any relevant privacy policies. You
          agree that FitMatch will not be responsible or liable for, and does not endorse any content,
          advertising, goods or services provided on or through these outside websites or for your use or
          inability to use such websites. FitMatch does not make any representations or warranties as to the
          security of any information (including, without limitation, credit card and other personal
          information) you might be requested to give to any third party or Service Provider sites. You use
          these third party or Service Provider websites at your own risk. You agree that FitMatch is not
          responsible for the accessibility or unavailability of any Service Provider (which includes, but is not
          limited to, health care and wellness providers) or for your interactions and dealings with them,
          waive the right to bring or assert any claim against FitMatch relating to any interactions or dealings
          with any Service Provider (which includes, but is not limited to, health care and wellness providers),
          and release FitMatch from any and all liability for or relating to any interactions or dealings with
          Service Providers (which includes, but is not limited to, health care and wellness providers).
          Without limiting the foregoing, your correspondence or business dealings with, consumption of
          products or services of, or participation in promotions of, third parties or Service Providers found on
          or through the use of the Site and Service, including payment for and delivery or fulfillment of
          related goods or services, and any other terms, conditions, warranties, or representations
          associated with such dealings, are solely between you and such third party. You agree that FitMatch
          shall not be responsible or liable, directly or indirectly, for any loss or damage of any sort incurred
          as the result of any such dealings or as the result of the presence of such third parties or Service
          Providers on the FitMatch Site and Service.
        </p>
        <p>
          <b>10. TERMINATION </b> <br />
          FitMatch may terminate your privilege to use or access the Site and Service immediately and
          without notice for any reason whatsoever. Upon such termination, you must immediately cease
          accessing or using the Site and Service and agree not access or make use of, or attempt to use, the
          Site and Service. Furthermore, you acknowledge that FitMatch reserves the right to take action --
          technical, legal or otherwise -- to block, nullify or deny your ability to access the Site and Service.
          You understand that FitMatch may exercise this right in its sole discretion, and this right shall be in
          addition to and not in substitution for any other rights and remedies available to FitMatch. All
          provisions of these Terms of Use which by their nature should survive termination shall survive the
          termination of your access to the Site and Service, including, without limitation, provision regarding
          ownership, warranty disclaimers, indemnity, and limitations of liability.
        </p>
        <p>
          <b>11. NOTICE FOR CALIFORNIA USERS</b> <br />
          Under California Civil Code Section 1789.3, California web users are entitled to the following
          specific consumer rights notice: The Services are provided by FitMatch, LLC., 1440 W. Taylor Street,
          #347 Chicago, IL 60607. If You have any questions, concerns, or complaints regarding the Services,
          please contact FitMatch by either via email at customerservice@fitmatch.us or sending a letter,
          f
          irst class certified mail, FitMatch, LLC., 1440 W. Taylor Street, #347 Chicago, IL 60607, Attn:
          Customer Service.
          Caifornia residents may reach the Complaint Assistance Unit of the Division of Consumer Services
          of the California Department of Consumer Affairs may be contacted in writing at 1625 N. Market
          Blvd., Suite S-202, Sacramento, California 95834, or by telephone at (916) 445-1254 or (800) 952
          5210 or Hearing Impaired at TDD (800) 326-2297 or TDD (916) 322-1700.
        </p>
        <p>
          <b>12. TRADEMARKS AND COPYRIGHTS</b> <br />
          FitMatch, and other Site and Service graphics, logos, designs, page headers, button icons, scripts,
          and service names are the trademarks or trade dress of FitMatch in the U.S. and/or other countries.
          These trademarks and trade dress may not be used, including as part of trademarks and/or as part
          of domain names, keyword advertisements, or email addresses, or in connection with any product
          or service in any manner that is likely to cause confusion. You should assume all Content and
          material made available on the Site and Service is protect by copyright law. Aside from user
          submitted Content, all other materials and other information on the Site and Service, including, but
          not limited to, all text, graphics, logos, icons, images, audio and video clips, downloads, data
          compilations and software are the exclusive property of FitMatch and/or its licensors and are
          protected by all United States and international copyright laws.
        </p>
        <p>
          <b>13. NOTICES</b> <br />
          You agree that FitMatch may communicate any notices to You under these Terms of Use, through
          electronic mail, regular mail or posting the notices on the Site. All notices to FitMatch will be
          provided by sending a letter, first class certified mail, to FitMatch, LLC., 1440 W. Taylor Street, #347
          Chicago, IL 60607, Attn: Customer Service. Such notices will be deemed delivered upon the earlier
          of the verification of delivery or two (2) business days after being sent.
          In accordance with the Digital Millennium Copyright Act of 1998, Title 17 of the United States Code,
          Section 512 (“DMCA”), FitMatch will respond promptly to claims of copyright or trademark
          infringement that are reported to the agent that we have designated to receive notifications of
          claims infringement (its “Designated Agent”).
          Our Designated Agent is:
          FitMatch, LLC.
          1440 W. Taylor Street, #347
          Chicago, IL 60607.
          Attn: Designated Agent
          Email: customerservice@fitmatch.us.
          If You are a copyright or trademark owner (or authorized to act on behalf of the copyright or
          trademark owner) and believe that Your work’s copyright or trademark has been infringed, please
          report Your notice of infringement to us by providing our Designated Agent with a written
          notification of claimed infringement that includes substantially the following:
          1. a physical or electronic signature of a person authorized to act on behalf of the owner of
          an exclusive right that is allegedly infringed;
          2. identification of the copyrighted work or trademark claimed to have been infringed, or, if
          multiple copyrighted works or trademarks at a single online site are covered by a single notification,
          a representative list of such works at that site;
          3. identification of the material that is claimed to be infringing or to be the subject of
          infringing activity and that is to be removed or access to which is to be disabled, and information
          reasonably sufficient to permit us to locate the material;
          4. information reasonably sufficient to permit us to contact You, such as an address,
          telephone number, and, if available, an electronic mail address at which You may be contacted;
          5. a statement that You have a good faith belief that use of the material in the manner
          complained of is not authorized by the copyright or trademark owner, its agent, or the law; and
          6. a statement that the information in the notification is accurate, and under penalty of
          perjury, that You are authorized to act on behalf of the owner of an exclusive right that is allegedly
          infringed. FitMatch will investigate notices of copyright and trademark infringement and take
          appropriate actions under the DMCA. Inquiries that do not follow this procedure may not receive a
          response.
        </p>
        <p>

          <b>14. DELAYS AND ACCESSIBILITY</b> <br />
          The Site and Service may be subject to limitations, delays, failure, and other problems inherent in
          the use of the Internet and electronic communications. FitMatch is not responsible for any delays,
          failures or other damage resulting from such problems.
        </p>
        <p>
          <b>15. USER FEEDBACK</b> <br />
          FitMatch appreciates hearing from you, as well as our other users, and welcomes your comments
          regarding our Site and Service. Please be advised, however, that our policy does not permit us to
          accept or consider creative ideas, suggestions, or materials other than those which we have
          specifically requested. Although we do value your feedback on our Site and Service, please be
          specific in your comments regarding our services and do not submit creative ideas, suggestions or
          materials. If, despite our request, you send us creative suggestions, ideas, drawings, concepts or
          other information (collectively, the “Submissions”), such Submissions will be the property of
          FitMatch. In addition, none of the Submissions will be subject to any obligations of confidentiality
          and FitMatch will not be liable for any future use or disclosure of such Submissions.
        </p>
        <p>
          <b>16. WARRANTIES AND DISCLAIMERS</b> <br />
          You acknowledge that FitMatch has no control over, and no duty to take any action regarding: which
          users gain access to or use the Site and Service; what effects the content on or in connection with
          the Site and Service may have on you; how you may interpret or use the content on or in connection
          with the Site and Service; or what actions you may take as a result of having been exposed to the
          content on or in connection with the Site and Service. You release FitMatch from all liability for you
          having acquired or not acquired content or information through the Site and Service. The Site and
          Service may contain, or direct you to sites containing, information that some people may find
          offensive or inappropriate. FitMatch makes no representations concerning any content contained in
          or accessed through the Site and Service, and FitMatch will not be responsible or liable for the
          accuracy, copyright compliance, legality or decency of material contained in or accessed through
          the Site and Service. FitMatch makes no guarantee or warranty, express or implied, as to the
          reliability, accuracy, timeliness or completeness of that information and assumes no responsibility
          for any errors or omissions therein. YOU ACCESS AND USE THE SITE AND SERVICE AT YOUR OWN
          RISK. THE SITE AND SERVICE ARE PROVIDED ON AN ‘AS IS, AS AVAILABLE’ BASIS WITHOUT
          WARRANTY OF ANY KIND AND ANY AND ALL WARRANTIES OF MERCHANTABILITY OR FITNESS
          FOR A PARTICULAR PURPOSE OR NON-INFRINGEMENT ARE SPECIFICALLY DISCLAIMED. NEITHER
          FITMATCH NOR ITS AFFILIATES, EMPLOYEES, AGENTS OR THIRD PARTY CONTENT PROVIDERS
          SHALL BE LIABLE FOR ANY LOSS RESULTING FROM USE OR UNAVAILABILITY OF INFORMATION OR
          CONTENT ON OR IN CONNECTION WITH THE SITE AND SERVICE, INCLUDING BUT NOT LIMITED
          TO ANY LOST PROFITS, LOSS OR DAMAGE TO DATA, OR ANY DIRECT, INDIRECT, SPECIAL,
          CONSEQUENTIAL, COMPENSATORY OR INCIDENTAL DAMAGES, EVEN IF THEY HAVE BEEN
          ADVISED OF THE POSSIBILITY OF SUCH DAMAGES. THIS DISCLAIMER IS APPLICABLE TO ANY
          DAMAGE OR INJURY RESULTING FROM NEGLIGENCE OR OMISSION OF FITMATCH, COMPUTER
          VIRUS OR OTHER SIMILAR ITEM, TELECOMMUNICATIONS ERRORS, OR UNAUTHORIZED ACCESS
          TO, OR USE OF USER INFORMATION THROUGH THEFT OR ANY OTHER MEANS. WE ARE NOT
          LIABLE FOR CRIMINAL, TORTUOUS, OR NEGLIGENT ACTIONS OR OMISSIONS OF THIRD PARTIES
          THAT AFFECT THE SITE AND SERVICE. IN NO EVENT WILL FITMATCH OR ANY OF ITS DIRECTORS,
          OFFICERS, AFFILIATES, AGENTS, EMPLOYEES, ASSIGNS OR THIRD-PARTY CONTENT PROVIDERS
          BE HELD LIABLE FOR ANY TORTUOUS OR ILLEGAL CONDUCT OF OTHER USERS. IN NO EVENT
          WILL FITMATCH OR ANY OF ITS AFFILIATES, AGENTS, EMPLOYEES OR ASSIGNS BE HELD LIABLE
          FOR ANY DAMAGE TO EQUIPMENT, HARDWARE OR OTHER PROPERTY OF USER OR PERSONAL
          INJURY THAT ARISES IN CONNECTION WITH USE OF THE SITE AND SERVICE. ANY MATERIAL
          ACCESSED, DOWNLOADED, OR OTHERWISE OBTAINED THROUGH THE USE OF THE SITE AND
          SERVICE IS DONE AT YOUR OWN DISCRETION AND RISK AND YOU WILL BE SOLELY RESPONSIBLE
          FOR ANY DAMAGE TO YOUR COMPUTER SYSTEM OR LOSS OF DATA THAT RESULTS FROM THE
          DOWNLOAD OF ANY SUCH MATERIAL. NO ADVICE OR INFORMATION, WHETHER ORAL OR
          WRITTEN, OBTAINED BY YOU FROM FITMATCH OR THROUGH OR FROM THE SITES AND/OR
          SERVICES SHALL CREATE ANY WARRANTY NOT EXPRESSLY STATED IN THE TERMS. EXCEPT AS
          OTHERWISE EXPRESSLY PROVIDED IN THE TERMS, FITMATCH DOES NOT REPRESENT OR
          WARRANT THAT (I) THE SITES AND/OR SERVICES WILL MEET YOUR REQUIREMENTS, (II) THE SITES
          AND/OR SERVICES WILL BE UNINTERRUPTED, TIMELY, SECURE, OR ERROR-FREE, (III) THE
          RESULTS THAT MAY BE OBTAINED FROM THE USE OF THE SITES AND/OR SERVICES WILL BE
          ACCURATE OR RELIABLE, (IV) THE QUALITY OF ANY PRODUCTS, SERVICES, INFORMATION, OR
          OTHER MATERIAL PURCHASED OR OBTAINED BY YOU THROUGH THE SITES WILL MEET YOUR
          EXPECTATIONS, AND (V) ANY ERRORS IN THE SOFTWARE WILL BE CORRECTED. YOU AGREE THAT
          FROM TIME TO TIME WE MAY REMOVE THE SERVICE FOR INDEFINITE PERIODS OF TIME, OR
          CANCEL THE SERVICE AT ANY TIME, WITHOUT NOTICE TO YOU. BECAUSE SOME JURISDICTIONS
          DO NOT ALLOW THE EXCLUSION OF IMPLIED WARRANTIES, THE ABOVE EXCLUSION OF IMPLIED
          WARRANTIES MAY NOT APPLY TO YOU. BECAUSE SOME STATES OR JURISDICTIONS DO NOT
          ALLOW THE EXCLUSION OR THE LIMITATION OF LIABILITY FOR CONSEQUENTIAL OR INCIDENTAL
          DAMAGES, IN SUCH STATES OR JURISDICTIONS, FITMATCH’S LIABILITY SHALL BE LIMITED TO THE
          EXTENT PERMITTED BY LAW. FITMATCH SHALL USE REASONABLE EFFORTS TO PROTECT
          INFORMATION SUBMITTED BY YOU IN CONNECTION WITH THE SERVICES, BUT YOU
          ACKNOWLEDGE AND AGREE THAT YOUR SUBMISSION OF SUCH INFORMATION IS AT YOUR SOLE
          RISK, AND FITMATCH HEREBY DISCLAIMS ANY AND ALL LIABILITY TO YOU FOR ANY LOSS OR
          LIABILITY RELATING TO SUCH INFORMATION IN ANY WAY. FitMatch has no control over and no duty
          to take any action regarding: other users’ behavior; what effects Content may have on you; how you
          may interpret or use Content; or what actions you may take as a result of having been exposed to
          Content. You release FitMatch from all liability for you having acquired or not acquired Content
          through the Site and Service. FitMatch makes no representations concerning any Content,
          including the accuracy thereof, contained in or accessed through the Site and Service, and
          FitMatch will not be responsible or liable for the accuracy, copyright compliance, legality or
          decency of material contained in or accessed through the Site and Service. The Site and Service
          may display links to other Internet sites or resources. Because FitMatch has no control over such
          sites and resources, you acknowledge and agree that FitMatch is not responsible for the availability
          of such external sites or resources and does not endorse and is not responsible or liable for any
          content, advertising, products or other materials on or available from such sites or resources. You
          further acknowledge and agree that FitMatch shall not be responsible or liable, directly or indirectly,
          for any damage or loss caused or alleged to be caused by or in connection with use of or reliance on
          any such content, goods or services available on or through any such site or resource.
        </p>
        <p>
          <b>17. INDEMNITY</b> <br />
          You agree to indemnify, defend and hold harmless FitMatch, its officers, managers, owners,
          employees, agents, designees, users, successors, assigns, service providers and suppliers from
          and against all losses, liabilities, expenses, damages, claims, demands and costs, including
          reasonable attorneys’ fees and court costs due to or arising from: (a) any violation of these Terms of
          Use by you; (b) the inaccurate or untruthful Content or other information provided by you to
          FitMatch or that you submit, transmit or otherwise make available through the Service; or (c) any
          intentional or willful violation of any rights of another or harm you may have caused to another.
          FitMatch will have sole control of the defense of any such damage or claim.
        </p>
        <p>
          <b>18. LIMITATIONS OF LIABILITY </b> <br />
          YOU EXPRESSLY UNDERSTAND AND AGREE THAT FITMATCH WILL NOT BE LIABLE FOR ANY
          DIRECT, INDIRECT, INCIDENTAL, SPECIAL, PUNITIVE, COMPENSATORY, CONSEQUENTIAL OR
          EXEMPLARY DAMAGES (EVEN IF FITMATCH HAS BEEN ADVISED OF THE POSSIBILITY OF SUCH
          DAMAGES) (COLLECTIVELY, “DAMAGES”), RESULTING FROM: (A) THE USE OR INABILITY TO USE
          THE SERVICE; (B) THE COST OF ANY GOODS AND/OR SERVICES PURCHASED OR OBTAINED AS A
          RESULT OF THE USE OF THE SERVICE; (C) DISCLOSURE OF, UNAUTHORIZED ACCESS TO OR
          ALTERATION OF YOUR INFORMATION OR CONTENT; (D) CONTENT YOU SUBMIT, RECEIVE,
          ACCESS, TRANSMIT OR OTHERWISE CONVEY THROUGH THE SERVICE; (E) STATEMENTS OR
          CONDUCT OF ANY SERVICE PROVIDERS OR OTHER THIRD PARTY THROUGH THE SERVICE; (F)
          ANY OTHER MATTER RELATING TO THE SERVICE; (G) ANY BREACH OF THIS AGREEMENT BY
          FITMATCH OR THE FAILURE OF FITMATCH TO PROVIDE THE SERVICE UNDER THIS AGREEMENT OR
          (H) ANY OTHER DEALINGS OR INTERACTIONS YOU HAVE WITH ANY SERVICE PROVIDERS (OR ANY
          OF THEIR REPRESENTATIVES OR AGENTS). THESE LIMITATIONS SHALL APPLY TO THE FULLEST
          EXTENT PERMITTED BY LAW. In some jurisdictions, limitations of liability are not permitted. In such
          jurisdictions, some of the foregoing limitations may not apply to You. You understand and agree that
          Your unlimited access to the Content on the Website or in the Magazine represents a substantial
          portion of the value You receive from Your FitMatch’s Membership Fee. THEREFORE, TO THE
          EXTENT FITMATCH IS FOUND LIABLE FOR ANYTHING RELATED TO THIS AGREEMENT OR THE USE
          OF THE SERVICE, FITMATCH’S LIABILITY FOR DAMAGES WILL NOT EXCEED THE EQUIVALENT OF
          ONE (1) MONTH OF YOUR MEMBERSHIP FEE (I.E., THE AMOUNT OF YOUR ANNUAL MEMBERSHIP
          FEE DIVIDED BY TWELVE). YOU EXPRESSLY ACKNOWLEDGE AND AGREE THAT FITMATCH
          CONTRACTS WITH A THIRD PARTY TO PROCESS YOUR PAYMENT OF MEMBERSHIP FEES TO
          FITMATCH THROUGH THE USE OF A CREDIT CARD (A “CREDIT CARD PROCESSOR”). YOU
          UNDERSTAND AND AGREE THAT NEITHER A CREDIT CARD PROCESSOR NOR ANY OTHER PARTY
          INVOLVED IN THE CREDIT CARD PROCESSING PROCESS FOR FITMATCH, INCLUDING, BUT NOT
          LIMITED TO, THE COMPANY ISSUING THE CREDIT CARD TO YOU AND THE MERCHANT BANK
          (COLLECTIVELY, THE “RELEASED PARTIES”) SHALL BE LIABLE FOR ANY DAMAGES (AS DEFINED
          HEREIN AND SUBJECT TO THE LIMITATIONS SET FORTH IN THIS SECTION SUFFERED BY YOU AS A
          RESULT OF THE FAILURE OF FITMATCH TO PROVIDE SERVICES TO YOU UNDER THIS AGREEMENT
          OR ANY BREACH OF THIS AGREEMENT BY FITMATCH. YOU HEREBY RELEASE EACH OF THE
          RELEASED PARTIES FROM ANY AND ALL DAMAGES YOU MAY SUFFER AS A RESULT OF THE
          FAILURE OF FITMATCH TO PROVIDE SERVICES TO YOU UNDER THIS AGREEMENT OR ANY BREACH
          OF THIS AGREEMENT BY FITMATCH. YOU AGREE TO INDEMNIFY AND HOLD HARMLESS EACH OF
          THE RELEASED PARTIES FOR ANY AND ALL DAMAGES IT MAY SUFFER AS A RESULT OF YOUR
          BREACH OF THIS SECTION. YOU HEREBY UNDERSTAND AND AGREE THAT FITMATCH SHALL BE
          SOLELY LIABLE FOR THE PAYMENT OF ANY DAMAGES TO YOU UNDER THIS AGREEMENT.
        </p>
        <p>
          <b>19. BREACH OF TERMS OF USE AND LIQUIDATED DAMAGES</b> <br />
          You understand that the content in each report or record on FitMatch has significant value to
          FitMatch and that the damage caused to FitMatch for any violation of these Terms of Use pertaining
          to a report or record will be difficult to accurately estimate. Thus, you shall be liable to pay us the
          following amounts as liquidated damages, and you agree that the liquidated damages are a
          reasonable estimate of FitMatch’s damages for the specified breaches of these Terms of Use: If you
          post Content in violation of these Terms of Use, you agree to promptly pay FitMatch One Thousand
          Dollars ($1,000) for each item of Content posted in violation of these Terms of Use. We may (but
          shall not be required to) to issue you a warning before assessing damages. If you display, copy,
          duplicate, reproduce, sell, re-sell or exploit for any purpose any Content in violation of these Terms
          of Use, you agree to pay One Hundred Dollars ($100) for each record or report that you displayed,
          copied, duplicated, reproduced, sold, re-sold or exploited for any purpose. If you use computer
          programming routines that are intended to aggregate records or reports from the Site and Service or
          otherwise damage, interfere with, disrupt, impair, disable or otherwise overburden the Site and
          Service, you agree to pay One Hundred Dollars ($100) for each report or record that is aggregated,
          disrupted, damaged or otherwise affected by you. Except as set forth in the foregoing
          subparagraphs (a) through (c), inclusive, you agree to pay the actual damages suffered by FitMatch,
          including, but not limited to attorneys’ fees and court costs, to the extent such actual damages can
          be reasonably calculated. Notwithstanding any other provision of these Terms of Use, we reserve
          the right to seek the remedy of specific performance of any term contained herein, or a preliminary
          or permanent injunction against the breach of any such term or in aid of the exercise of any power
          granted in these Terms of Use, or any combination thereof.
        </p>
        <p>
          <b>20. ENTIRE AGREEMENT</b> <br />
          These Terms of Use and other agreements, rules, and policies incorporated by reference to these
          Terms including, without limitation, the Privacy Policy, constitutes the entire agreement between
          you and FitMatch. It supersedes any prior or contemporaneous negotiations, discussions or
          agreements, whether written or oral, between you and FitMatch regarding the subject matter
          contained in these Terms of Use. Additional terms and conditions may exist between you and third
          parties, including but not limited to, Service Providers and others. You represent and warrant that
          those third-party agreements do not interfere with your obligations and duties to FitMatch under
          these Terms of Use.
        </p>
        <p>
          <b>21. MUTUAL ARBITRATION AGREEMENT</b> <br />        </p>
        <p className='mb-1'> 1. Informal Negotiations. To expedite resolution and reduce the cost of any dispute,
          controversy or claim, past, present, or future, between you and FitMatch, including without
          limitation any dispute or claim related to or arising out of this Agreement ("Dispute"), you and
          FitMatch may attempt to negotiate any Dispute informally (the "Informal Negotiations") before
          initiating any arbitration or court proceeding. Such Informal Negotiations will commence upon
          written notice. Your address for any notices under this Section is your physical address that you
          have provided to FitMatch. FitMatch's address for such notices is: FitMatch, LLC., Attn: Legal
          Department, 1440 W. Taylor Street, #347 Chicago, IL 60607.
        </p>
        <p className='mb-1'>
          2. Arbitration. If a Dispute is not resolved through Informal Negotiations, you and FitMatch
          agree to resolve any and all Disputes (except those Disputes expressly excluded below) through
          final and binding arbitration ("Arbitration Agreement"). This Arbitration Agreement shall be governed
          by the Federal Arbitration Act and evidences a transaction involving commerce. The arbitration will
          be commenced and conducted before a single arbitrator under the Commercial Arbitration Rules
          (the "AAA Rules") of the American Arbitration Association ("AAA") and, where appropriate, the AAA's
          Supplementary Procedures for Consumer Related Disputes ("AAA Consumer Rules"), both of which
          are available at the AAA website (www.adr.org). Your arbitration fees and your share of arbitrator
          compensation will be governed by the AAA Rules (and, where appropriate, limited by the AAA
          Consumer Rules). If you are unable to pay such costs, FitMatch will pay all arbitration fees and
          expenses. Each party will pay the fees for his/her or its own attorneys, subject to any remedies to
          which that party may later be entitled under applicable law. The arbitrator will make a decision in
          writing. Additionally, the arbitrator, and not any federal, state, or local court or agency, shall have
          the exclusive authority to resolve any dispute relating to the interpretation, applicability,
          enforceability, or formation of this Arbitration Agreement. However, the preceding sentence shall
          not apply to the "Class Action Waiver" described in Subsection (4) below.
        </p> <p className='mb-1'>
          3. Excluded Disputes. You and FitMatch agree that the following Disputes are excluded from
          this Arbitration Agreement: (1) any Dispute seeking to enforce or protect, or concerning the validity
          of, any of your or our intellectual property rights; (2) individual claims in small claims court; (3) any
          claim that an applicable federal statute expressly states cannot be arbitrated; and (4) any claim for
          injunctive relief.
        </p> <p className='mb-1'>
          4. WAIVER OF RIGHT TO BE A PLAINTIFF OR CLASS MEMBER IN A CLASS ACTION. To fullest
          extent permitted by applicable law, You and FitMatch agree to bring any Dispute in arbitration on an
          individual basis only, and not as a class or collective action. There will be no right or authority for
          any Dispute to be brought, heard or arbitrated as a class or collective action ("Class Action
          Waiver"). Regardless of anything else in this Arbitration Agreement and/or the applicable AAA Rules
          or AAA Consumer Rules, the interpretation, applicability, enforceability or formation of the Class
          Action Waiver may only be determined by a court and not an arbitrator.
        </p> <p className='mb-1'>
          5. Rules/Standards Governing Arbitration Proceeding. A party who wishes to arbitrate a
          Dispute covered by this Arbitration Agreement must initiate an arbitration proceeding no later than
          the expiration of the statute of limitations that applicable law prescribes for the claim asserted. The
          arbitrator shall apply the statute of limitations that would have applied if the Dispute had been
          brought in court. The arbitrator may award any remedy to which a party is entitled under applicable
          law, but remedies shall be limited to those that would be available to a party in their individual
          capacity, and no remedies that otherwise would be available to an individual under applicable law
          will be forfeited. The arbitrator is without authority to apply any different substantive law. The
          parties have the right to conduct adequate civil discovery and present witnesses and evidence as
          needed to present their cases and defenses, and any dispute in this regard shall be decided by the
          arbitrator. The location of the arbitration proceeding shall take place in the city or county where you
          reside, unless each party agrees otherwise. A court of competent jurisdiction shall have the
          authority to enter judgment upon the arbitrator's decision/award.
        </p>
        <p className='mb-1 mb-3'>
          6. Severability. You and FitMatch agree that if any portion of this Section entitled "Mutual
          Arbitration Agreement" is found illegal or unenforceable, that portion will be severed, and the
          remainder of this Section will be given full force and effect.
        </p>

        <p>
          <b>22. GOVERNING LAW</b> <br />
          This Agreement shall be governed by and construed in accordance with the laws of the State of
          Illinois, without giving effect to any choice or conflict of law provision or rule (either of the State of
          Illinois or any other jurisdiction) that would cause the application of the laws of any jurisdiction
          other than the State of Illinois.
        </p>
        <p>
          <b>23. MISCELLANEOUS</b> <br />
          If you breach any term of these Terms of Use or other agreement with FitMatch, FitMatch may
          pursue any legal or equitable remedy available, including but not limited to, direct, consequential,
          and punitive damages and injunctive relief. FitMatch’s remedies are cumulative and not exclusive.
          Failure of FitMatch to exercise any remedy or enforce any portion of the Terms of Use at any time
          shall not operate as a waiver of any remedy or of the right to enforce any portion of the Agreement
          at any time thereafter. If any provision of the Terms of Use is found to be unenforceable or invalid,
          that provision shall be limited or eliminated to the minimum extent necessary so that the Terms
          shall otherwise remain in full force and effect and enforceable. These Terms of Use are not
          assignable, transferable or sublicensable by you except with FitMatch’s prior written consent. We
          may transfer, assign or delegate the Terms and its rights and obligations without consent. Users of
          this Site and Service are responsible for compliance with all applicable regulations and laws. No
          joint venture, partnership, employment or agency relationship exists between you and FitMatch as a
          result of these Terms of Use or use of the Site and Service. You acknowledge and agree that each of
          the Released Parties shall be an intended third-party beneficiary of these Terms of Use.
        </p>
      </div>
      <div className='terms container my-5 py-5' id='Code_of_Conduct'>
        <div className='text-center mb-5'>
                  <h3>Code of Conduct</h3>
        <p>Last updated on April 14, 2024</p>
        </div>

        <p>
          FitMatch, LLC. ("FitMatch") is honored to connect customers and personal, fitness trainers to complete
          personal, fitness training sessions and we strive to provide each with the best experience possible. To that end,
          we require that all trainers and customers uphold our core values. <b>FitMatch reserves the right to remove all
            users who fail to follow this code of conduct from our site and platform.</b>
        </p>
        <p> <b> Be Respectful</b> <br />  Respect each other and each other’s property. If there is a conflict, respectfully work together to resolve it.
       
        </p>
       
        <p> <b> Be Fair</b> <br />
        As a trainer, ensure that you are providing good customer service and producing quality work at a fair price. As a
        customer, be considerate of trainers’ time and money. Also, be fair in giving trainers the reviews they have
        earned and deserve.
        </p>
        <p> <b>Be Professional</b> <br />
        Present yourself in a professional manner. Communicate clearly and often and do your part to ensure each
        other’s comfort in every situation.
        </p>
        <p> <b>Be Honest</b> <br />
        Honor your agreements and be honest about your expectations and limitations. As a trainer, be honest if a
        request is outside your skillset or certification(s). As a customer, be honest if you have no intention of
        completing a session. Always be upfront if a session is not going as agreed upon or planned.
        </p>
        <p> <b>Be Reliable</b> <br />
         Answer calls, texts, and emails in a timely manner. Show that you value each other’s time by being present and
        punctual for all appointments. Never leave someone wondering how to reach you or where you are.
        </p>
      </div>
    </>
  );
}
