"use client";
import Link from "next/link";
import { FaHandshake, FaUsers } from "react-icons/fa6";
import { HiDocumentPlus } from "react-icons/hi2";
import { MdSwitchAccount } from "react-icons/md";

export default function HowItWorks() {
  return (
    <section className="how_it_section white_text">
      <div className="how_it_inner" data-aos="fade-in" data-aos-duration="1500">
        <div className="dotes_blue"><img src="images/blue_dotes.png" alt="image" /></div>
        <div className="container">
          <div className="section_title" data-aos="fade-up" data-aos-duration="1500">
            <span className="title_badge">Quick & easy</span>
            {/* <h2>How it works in 4 steps</h2> */}
          </div>
          <div className="row">
            <div className="col-md-3">
              <div className="steps_block step_border" data-aos="fade-up" data-aos-duration="1500">
                <span className="step">01</span>
                <div className="steps">
                  <div className="icon">
                    <span className="icon_container">
                      <MdSwitchAccount size={30} />
                    </span>
                  </div>
                  <div className="text">
                    <h3>Create an account</h3>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="steps_block step_border" data-aos="fade-up" data-aos-duration="1500">
                <span className="step">02</span>
                <div className="steps">
                  <div className="icon">
                    <span className="icon_container">
                      <HiDocumentPlus size={30} />
                    </span>
                  </div>
                  <div className="text">
                    <h3>Submit a request for personal trainer </h3>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="steps_block step_border" data-aos="fade-up" data-aos-duration="1500">
                <span className="step">03</span>
                <div className="steps">
                  <div className="icon">
                    <span className="icon_container">
                      <FaUsers size={30} />
                    </span>

                  </div>
                  <div className="text">
                    <h3>Select the best suited trainers for YOU </h3>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="steps_block" data-aos="fade-up" data-aos-duration="1500">
                <span className="step">04</span>
                <div className="steps">
                  <div className="icon">
                    <span className="icon_container">
                      <FaHandshake size={30} />
                    </span>
                  </div>
                  <div className="text">
                    <h3>Get matched!</h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="text-center">
            <div className="btn_block">
              <Link href="/signup" className="btn puprple_btn ms-0">Get Started Now</Link>
              <div className="btn_bottom"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
