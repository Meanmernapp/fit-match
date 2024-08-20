import {
  Accordion,
  AccordionItem,
  AccordionItemButton,
  AccordionItemHeading,
  AccordionItemPanel,
} from "react-accessible-accordion";
import "react-accessible-accordion/dist/fancy-example.css"; // Import the default CSS for the accordion styles

export default function Faq() {
  return (
    <section className="row_am faq_section">
      <div className="container">
        <div
          className="section_title"
          data-aos="fade-up"
          data-aos-duration="1500"
        >
          <span className="title_badge">Question & Answer</span>
          <h2>
            <span>FAQs</span> - Frequently Asked Questions
          </h2>
        </div>
        <Accordion>
          <div className="row">
            <div className="col-md-6">
              <AccordionItem>
                <AccordionItemHeading>
                  <AccordionItemButton>
                    1. How do I find a personal trainer?
                  </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                  <p>
                    <a href="/signup">Sign-up</a> and create a profile. Once you
                    do, we will send you requests that you are a match for!
                  </p>
                </AccordionItemPanel>
              </AccordionItem>
              <AccordionItem>
                <AccordionItemHeading>
                  <AccordionItemButton>
                    2. How long does it take to find a personal trainer?
                  </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                  <p>
                    Not long at all! When you submit a request, trainers are
                    immediately displayed that have the skills you’re looking
                    for!{" "}
                  </p>
                </AccordionItemPanel>
              </AccordionItem>
              <AccordionItem>
                <AccordionItemHeading>
                  <AccordionItemButton>
                    3. Is it free to find a personal trainer?
                  </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                  <p>
                    Yes – there is NO cost to find a personal trainer.{" "}
                    <a href="/signup">Sign-up</a> today!
                  </p>
                </AccordionItemPanel>
              </AccordionItem>
            </div>
            <div className="col-md-6">
              <AccordionItem>
                <AccordionItemHeading>
                  <AccordionItemButton>
                    4. As a personal trainer, how do I find a prospective
                    client?
                  </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                  <p>
                    <a href="/signup">Sign-up</a> and create a profile.Once you do, we will send you requests that you are a match for!and create a profile.
                  </p>
                </AccordionItemPanel>
              </AccordionItem>
              <AccordionItem>
                <AccordionItemHeading>
                  <AccordionItemButton>
                    5. What is the cost to find perspective clients as a
                    personal trainer?
                  </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                  <p>Pricing starts at just $59!</p>
                </AccordionItemPanel>
              </AccordionItem>
              <AccordionItem>
                <AccordionItemHeading>
                  <AccordionItemButton>
                    6. Experiencing technical issues on the site?
                  </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                  <p>
                    Email us at{" "}
                    <a
                      href="mailto:customerservice@fitmatch.us"
                      className="text-underline"
                      target="_blank"
                    >
                      customerservice@fitmatch.us.
                    </a>{" "}
                  </p>
                </AccordionItemPanel>
              </AccordionItem>
            </div>
          </div>
        </Accordion>
      </div>
    </section>
  );
}
