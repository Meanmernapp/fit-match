"use client";
import FirstStep from '@/components/Signup/FirstStep';
import SecondStep from '@/components/Signup/SecondStep';
import { useState } from 'react';

export default function signup() {
  const [isLoading, setIsLoading] = useState(false);
  const [userType, setUserType] = useState('');
  const [firstStep, setFirstStep] = useState(true);




  return (
    <section className="signup_section h100full">
       {isLoading && (
        <div id="preloader">
          <div id="loader"></div>
        </div>
      )}
      <div className="container my-auto">
        <div className="form_block">
          <div className="form_side">
            <div className="section_title mb-0">
              <span className="title_badge">Get Started</span>
              <h2><span>Create</span> an account</h2>
              {/* <p>Complete all fields below. Worried about providing your email and number? We get it – but at FitMatch, we will never send you spam.</p> */}

              {firstStep ? (
                <FirstStep setFirstStep={() => setFirstStep(false)} userType={userType} setUserType={setUserType} />
              ) : (
                <SecondStep userType={userType} />
              )}
            </div>

          </div>
          <div className="side_screen">
            {/* <div className="dotes_blue"><img src="images/blue_dotes.png" alt="image" /></div> */}
            <div className="left_icon">
              <img src="images/smallStar.png" alt="image" />
            </div>
            <div className="right_icon">
              <img src="images/bigstar.png" alt="image" />
            </div>
            <div className="scrren">
              {
                userType === "Customer" ?
                  <img src="images/customer.jpeg" alt="image" />
                  :
                  userType === "Trainer" ? <img src="images/trainer.jpeg" alt="image" /> :  <img src="images/trainer.jpeg" alt="image" />
              }

            </div>
          </div>
        </div>
      </div>
    </section >
  );
}
