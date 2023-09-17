import "./Termstopic.css";
import communityLogo from "src/Assets/Images/logo1.svg";
import plusicon from "src/Assets/Icons/plus.png";
import minusicon from "src/Assets/Icons/minus.png";
import { useState } from "react";
import Privacy from "./Privacy";
import Disclaimer from "./Disclaimer";

const Termstopic = () => {
  // Expand and collapse function for terms of use topic sections and icons
  const [isExpanded33, setIsExpanded33] = useState(false);
  const [isExpanded44, setIsExpanded44] = useState(false);
  const [isExpanded55, setIsExpanded55] = useState(false);
  const [isExpanded66, setIsExpanded66] = useState(false);
  const [isExpanded77, setIsExpanded77] = useState(false);
  const [isExpanded88, setIsExpanded88] = useState(false);

  const handleToggle33 = () => {
    setIsExpanded33(!isExpanded33);
    const header3b = document.querySelector(".header32");
    header3b.classList.toggle("header3-remove");
  };

  const handleToggle44 = () => {
    setIsExpanded44(!isExpanded44);
    const header3c = document.querySelector(".header33");
    header3c.classList.toggle("header3-remove");
  };

  const handleToggle55 = () => {
    setIsExpanded55(!isExpanded55);
    const header3d = document.querySelector(".header34");
    header3d.classList.toggle("header3-remove");
  };

  const handleToggle66 = () => {
    setIsExpanded66(!isExpanded66);
    const header3e = document.querySelector(".header35");
    header3e.classList.toggle("header3-remove");
  };

  const handleToggle77 = () => {
    setIsExpanded77(!isExpanded77);
    const header3f = document.querySelector(".header36");
    header3f.classList.toggle("header3-remove");
  };

  const handleToggle88 = () => {
    setIsExpanded88(!isExpanded88);
    const header3g = document.querySelector(".header37");
    header3g.classList.toggle("header3-remove");
  };
  return (
    // Terms of use Topic headers and icons
    <>
      <div className="terms1">
        <img src={communityLogo} alt="ihealth-logo" />
      </div>

      <div>
        <div className="terms3">
          <h3>iHealth and Wellness Foundation, Inc.</h3>

          <h4>Terms of Use</h4>

          <p>Effective: May 23, 2023</p>
        </div>

        <div className="terms4">
          <p>
            We connect patients with complex diseases to high-quality medical
            and wellness providers and resources through an integrated platform,
            empowering patients to take charge of their health while fostering
            collaboration among all stakeholders to improve healthcare outcomes.
            <br />
            <br />
            By using this website, you agree to the following terms and
            conditions:
            <br />
            <br />
          </p>

          <ul>
            <li>
              <span>Content:</span> All content provided on this website is for
              informational purposes only. We do not provide medical advice,
              diagnosis, or treatment. You should always consult your healthcare
              provider before making any healthcare decisions. We make no
              warranties, express or implied, regarding the accuracy,
              completeness, or reliability of any content on this website. We
              reserve the right to modify or remove any content at any time
              without prior notice.
              <br />
            </li>
            <br />
            <li>
              <span>Use of Information:</span>
              The information on this website is intended to be used as a
              resource to connect patients with complex diseases and health and
              wellness providers. Any information obtained through this website
              should not be used for commercial purposes. You agree to use the
              website only for lawful purposes and in compliance with all
              applicable laws and regulations. You agree not to use the website
              in any way that could damage, disable, overburden, or impair the
              website or interfere with any other party's use and enjoyment of
              the website. By using our website, you agree to indemnify and hold
              us harmless from any claims arising out of your use of the
              website.
            </li>
          </ul>
        </div>
        <div className="terms5" id="privacy-policy">
          {/* Terms of use topic section */}
          <Privacy />

          {/* Disclaimer section */}

          <Disclaimer />

          {/* Correction of Site Errors section */}

          <div className="expand-div">
            <h3 className="header32" onClick={handleToggle33}>
              Correction of Site Errors
            </h3>

            {/* expand and collapse icon */}
            <img
              onClick={handleToggle33}
              src={isExpanded33 ? minusicon : plusicon}
              alt="expand-icon"
              className="after"
            />
          </div>

          {isExpanded33 && (
            <div>
              <p>
                The information on the Site may contain typographical errors or
                inaccuracies. We reserve the right to update any information we
                see fit at any time without prior notice. Please note that such
                errors may relate to product information, pricing, and
                availability. In these instances, we shall have the right to
                terminate any orders involving pricing errors or inaccuracies.
                We apologize for any inconveniences.
              </p>
              <br />
            </div>
          )}

          {/* Indemnity section */}
          <div className="expand-div">
            <h3 className="header33" onClick={handleToggle44}>
              Indemnity
            </h3>

            {/* expand and collapse icon */}
            <img
              onClick={handleToggle44}
              src={isExpanded44 ? minusicon : plusicon}
              alt="expand-icon"
              className="after"
            />
          </div>

          {isExpanded44 && (
            <div>
              <p>
                You agree to indemnify and hold iHealth and Wellness Foundation,
                Inc., (the “Organization” and its officers, directors, agents,
                subsidiaries, joint ventures, and employees) harmless from any
                claim or demand, as well as losses, expenses, damages and costs,
                resulting from any violation of these Terms or your use of the
                Services (including negligent or wrongful conduct).
              </p>
              <br />
            </div>
          )}

          {/* Termination section */}
          <div className="expand-div">
            <h3 className="header34" onClick={handleToggle55}>
              Termination
            </h3>

            {/* expand and collapse icon */}
            <img
              onClick={handleToggle55}
              src={isExpanded55 ? minusicon : plusicon}
              alt="expand-icon"
              className="after"
            />
          </div>

          {isExpanded55 && (
            <div>
              <p>
                We may terminate your access to and use of the Services, at our
                sole discretion, at any time and without notice to you.
              </p>
              <br />
            </div>
          )}

          {/* Third Party Links section */}

          <div className="expand-div">
            <h3 className="header35" onClick={handleToggle66}>
              Third Party Links
            </h3>

            {/* expand and collapse icon */}
            <img
              onClick={handleToggle66}
              src={isExpanded66 ? minusicon : plusicon}
              alt="expand-icon"
              className="after"
            />
          </div>
          {isExpanded66 && (
            <div>
              <p>
                The Services may contain links to third-party websites or
                resources. We provide these links only as a convenience and are
                not responsible for the content, products or services on or
                available from those websites or resources or links displayed on
                such websites. You acknowledge sole responsibility for and
                assume all risk arising from your use of any third-party
                websites or resources.
              </p>
              <br />
            </div>
          )}

          {/* Use of Services */}
          <div className="expand-div">
            <h3 className="header36" onClick={handleToggle77}>
              Use of Services
            </h3>

            {/* expand and collapse icon */}
            <img
              onClick={handleToggle77}
              src={isExpanded77 ? minusicon : plusicon}
              alt="expand-icon"
              className="after"
            />
          </div>
          {isExpanded77 && (
            <div>
              <p>
                You agree that you won’t do any of the following things:
                <br />
                <br />
                Use, display, mirror, or frame the Services, or any individual
                element within the Services, iHealth and Wellness (the
                “Organization”)’s name, any iHealth and Wellness (the
                “Organization”) trademark, logo, or other proprietary
                information (including through the use of meta tags or the
                like), or the layout and design of any page or form contained on
                a page, without our express written consent;
                <br />
                <br />
                Attempt to access or search the Services or Content or download
                Content from the Services through the use of any engine,
                software, tool, agent, device or mechanism (including spiders,
                robots, crawlers, data mining tools or the like) other than the
                software and/or search agents provided by iHealth and Wellness
                (the “Organization”) or other generally available third-party
                web browsers;
                <br />
                <br />
                Send any unsolicited or unauthorized advertising, promotional
                materials, email, junk mail, spam, chain letters or other form
                of solicitation;
                <br />
                <br />
                Use the Services or Content, or any portion thereof, for any
                commercial purpose or for the benefit of any third party or in
                any manner not permitted by these Terms;
                <br />
                <br />
                Attempt to interfere in any way with the Services or the
                networks or network security hosting the Services, or attempt to
                use the Services to gain unauthorized access to any other
                computer system;
                <br />
                <br />
                Collect or store any personally identifiable information from
                the Services from other users of the Services without their
                express permission;
                <br />
                <br />
                Impersonate or misrepresent your affiliation with any person or
                entity;
                <br />
                <br />
                Violate any applicable law or regulation; or Encourage or enable
                any other third party or individual to do anything listed above.
                Although we’re not obligated to monitor access to or use of the
                Services or Content or to review or edit any Content, we have
                the right to do so for the purpose of operating the Services, to
                ensure compliance with these Terms, and to comply with
                applicable law or other legal requirements.
                <br />
                <br />
                We reserve the right, but are not obligated, to remove or
                disable access to any Content, at any time and without notice,
                including, but not limited to, if we, at our sole discretion,
                consider any Content to be objectionable or in violation of
                these Terms.
                <br />
                <br />
                We have the right to investigate violations of these Terms or
                conduct that affects the Services.
                <br />
                <br />
                We may also consult and cooperate with law enforcement
                authorities to prosecute users who violate the law.
              </p>
            </div>
          )}

          {/* LIMITATION OF LIABILITY section */}
          <div className="header3a">
            <h3>LIMITATION OF LIABILITY</h3>

            <p>
              iHEALTH AND WELLNESS (THE “ORGANIZATION”) NOR ANY OTHER PARTY (AND
              THE HEIRS, EXECUTORS AND ADMINISTRATORS OF SUCH PERSON) INVOLVED
              IN CREATING, PRODUCING, OR DELIVERING THE SERVICES WILL BE LIABLE
              FOR ANY INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES,
              INCLUDING LOST PROFITS, LOSS OF DATA OR GOODWILL, SERVICE
              INTERRUPTION, COMPUTER DAMAGE OR SYSTEM FAILURE OR THE COST OF
              SUBSTITUTE SERVICES ARISING OUT OF OR IN CONNECTION WITH THESE
              TERMS OR FROM THE USE OF OR INABILITY TO USE THE SERVICES, WHETHER
              BASED ON WARRANTY, CONTRACT, TORT (INCLUDING NEGLIGENCE), PRODUCT
              LIABILITY OR ANY OTHER LEGAL THEORY, AND WHETHER OR NOT iHEALTH
              AND WELLNESS (THE “ORGANIZATION”) HAS BEEN INFORMED OF THE
              POSSIBILITY OF SUCH DAMAGE, EVEN IF A LIMITED REMEDY SET FORTH
              HEREIN IS FOUND TO HAVE FAILED OF ITS ESSENTIAL PURPOSE. SOME
              JURISDICTIONS DO NOT ALLOW THE EXCLUSION OR LIMITATION OF
              LIABILITY FOR CONSEQUENTIAL OR INCIDENTAL DAMAGES, SO THE ABOVE
              LIMITATION MAY NOT APPLY TO YOU.
              <br />
              <br />
              IN NO EVENT WILL iHEALTH AND WELLNESS (THE “ORGANIZATION”)’S TOTAL
              LIABILITY ARISING OUT OF OR IN CONNECTION WITH THESE TERMS OR FROM
              THE USE OF OR INABILITY TO USE THE SERVICES OR CONTENT EXCEED THE
              AMOUNTS YOU HAVE PAID TO iHEALTH AND WELLNESS (THE “ORGANIZATION”)
              FOR USE OF THE SERVICES OR CONTENT OR ONE HUNDRED DOLLARS ($100),
              IF YOU HAVE NOT HAD ANY PAYMENT OBLIGATIONS TO iHEALTH AND
              WELLNESS (THE “ORGANIZATION”), AS APPLICABLE. THE EXCLUSIONS AND
              LIMITATIONS OF DAMAGES SET FORTH ABOVE ARE FUNDAMENTAL ELEMENTS OF
              THE BASIS OF THE BARGAIN BETWEEN iHEALTH AND WELLNESS (THE
              “ORGANIZATION”) AND YOU.
            </p>
          </div>

          {/* Binding Individual Arbitration section */}

          <div className="expand-div">
            <h3 className="header37" onClick={handleToggle88}>
              Binding Individual Arbitration
            </h3>

            {/* expand and collapse icon */}
            <img
              onClick={handleToggle88}
              src={isExpanded88 ? minusicon : plusicon}
              alt="expand-icon"
              className="after"
            />
          </div>
          {isExpanded88 && (
            <div>
              <p>
                You and iHealth and Wellness (the “Organization”) agree that any
                and all Disputes, except those that are resolved informally or
                brought in a small claims court, will be arbitrated by a neutral
                arbitrator who has the power to award the same individual
                damages and individual relief that a court can. “Disputes” are
                defined as any claim, controversy, or dispute between you and
                iHealth and Wellness (the “Organization”), its processors,
                suppliers or licensors (or their respective affiliates, agents,
                directors or employees), whether based on past, present, or
                future events, including any claims relating in any way to these
                Terms or the Services, or any other aspect of our relationship.
                <br />
                <br />
                ANY ARBITRATION UNDER THESE TERMS WILL ONLY BE ON AN INDIVIDUAL
                BASIS; CLASS ARBITRATIONS, CLASS ACTIONS, REPRESENTATIVE
                ACTIONS, AND CONSOLIDATION WITH OTHER ARBITRATIONS ARE NOT
                PERMITTED. YOU WAIVE ANY RIGHT TO HAVE YOUR CASE DECIDED BY A
                JURY AND YOU WAIVE ANY RIGHT TO PARTICIPATE IN A CLASS ACTION
                AGAINST iHEALTH AND WELLNESS (THE “ORGANIZATION”).
                <br />
                <br />
                If any provision of this arbitration agreement is found
                unenforceable, the unenforceable provision will be severed, and
                the remaining arbitration terms will be enforced (but in no case
                will there be a class or representative arbitration). Before an
                arbitration is commenced, you or iHealth and Wellness (the
                “Organization”) must first send to the other party a written
                Notice (“Notice”). Any Notice to iHealth and Wellness (the
                “Organization”) should be sent by email to
                onehealthconnectapp@gmail.com AND certified mail to: iHealth and
                Wellness Foundation, Inc., 115 Broadway St. Fl 5,New York,NY
                10006, USA. Any Notice sent to you will be sent to the address
                on file for your account. The Notice must: (i) include your name
                and account number; (ii) describe the nature and basis of the
                Dispute; and (iii) set forth the specific relief sought. Both
                parties agree that they will attempt to resolve a dispute
                through an informal negotiation within thirty (30) days from the
                date the Notice is sent. After that thirty (30) day period and
                not before, either party may commence arbitration. If we are not
                able to resolve the Dispute by informal negotiation or, as
                provided below, in a small claims court, all Disputes will be
                resolved finally and exclusively by binding individual
                arbitration with a single arbitrator (the “Arbitrator”)
                administered by the American Arbitration Association
                (https://www.adr.org) according to this Section and the Consumer
                Arbitration Rules through the Procedures for the Resolution of
                Disputes through Document Submission (the “AAA Rules”),
                including Rule D-3(b), except you and iHealth and Wellness
                Foundation, Inc. will have the right to file early or summary
                dispositive motions and so long as the claim is arbitrable under
                the AAA Rules. The Arbitrator shall be responsible for
                determining all threshold arbitrability issues, including issues
                relating to whether these Terms (or any aspect thereof) are
                enforceable, unconscionable or illusory and any defense to
                arbitration, including waiver, delay, laches, or estoppel.
                Subject to applicable jurisdictional requirements, you may elect
                to pursue your claim in your local small-claims court rather
                than through arbitration so long as your matter remains in small
                claims court and proceeds only on an individual (non-class or
                non-representative) basis.
              </p>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Termstopic;
