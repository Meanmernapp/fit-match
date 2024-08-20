"use client";
import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';
import { Modal } from 'react-bootstrap';
import { BiChevronsDown } from "react-icons/bi";
import Typed from 'typed.js';

export default function Banner() {
  const typedElement = useRef(null);
  const [show, setShow] = useState(false);

  useEffect(() => {
    const options = {
      strings: [
        "Group Personal Training",
        "At-Home Personal Training",
        "Mobility Training Nutrition (General)",
        "Physique and Bodybuilding",
        "Pilates",
        "Powerlifting",
        "Prenatal and Postpartum",
        "Running Coach",
        "Senior Fitness",
        "Sports Nutrition",
        "Sports Performance Enhancement Coaching",
        "Strength and Conditioning",
        "Stretching and Flexibility",
        "Virtual Coaching",
        "Weight Loss",
        "Weightlifting",
        "Wellness",
        "Yoga",
        "Youth Exercise"
      ],
      typeSpeed: 50,
      backSpeed: 50,
      loop: true
    };

    const typed = new Typed(typedElement.current, options);

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <>
      <section className="banner_section">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-12" data-aos="fade-up" data-aos-duration="1500">
              <div className="banner_text">
                <div className="type-wrap">
                  <span ref={typedElement} style={{ whiteSpace: 'pre' }} className="typed">
                  </span>
                </div>
                <h1><span>Smash Your Fitness Goals w/</span> FitMatch</h1>
                <p>
                  {/* At FitMatch, we help you find a personal trainer with the <span className='vipText'>skillset</span> you need at the <span className='vipText'>price point</span> you want. */}
                  At FitMatch, we help you find a personal trainer at your <b> desired price point and with the skills </b> you need.
                </p>
              </div>

              <div className="trial_box">
                <form action="#">
                  <div className="form-group">
                    <Link href={"/signup"}><button className="btn">Get Started Today</button></Link>
                  </div>
                </form>
              </div>

            </div>

            <div className="col-lg-6 col-md-12">
              <div className="banner_slider">
                <div className="left_icon">
                  <img src="images/smallStar.png" alt="image" />
                </div>
                <div className="right_icon">
                  <img src="images/bigstar.png" alt="image" />
                </div>

                <div className="img video_player" data-aos="fade-up" data-aos-duration="1500">
                  <img src="images/customer.jpeg" alt="image" className="hero_img" />
                  <a className="popup-youtube play-button play_icon" onClick={() => setShow(true)}><img src="images/play_white.svg" alt="img" /></a>
                </div>
              </div>
            </div>
          </div>
          <div className="spinBlock">
            <span className="star2"><img src="images/smallStar.png" alt="image" /></span>
            <div className="spin_box" id="scrollButton">
              <span className="downsign">
                <BiChevronsDown />
              </span>
              <div id="circle">
                <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="300px" height="300px" viewBox="0 0 300 300" xmlSpace="preserve">
                  <defs>
                    <path id="circlePath" d="M 150, 150 m -60, 0 a 60,60 0 0,1 120,0 a 60,60 0 0,1 -120,0 " />
                  </defs>
                  <circle cx="150" cy="100" r="75" fill="none" />
                  <g>
                    <use xlinkHref="#circlePath" fill="none" />
                    <text fill="#dcdcdc">
                      <textPath xlinkHref="#circlePath">PROSPECTIVE CLIENTS  •  PERSONAL TRAINERS  •  </textPath>
                    </text>
                  </g>
                </svg>
              </div>
            </div>
            <span className="star2"><img src="images/smallStar.png" alt="image" /></span>
          </div>
        </div>
      </section>


      <Modal
        show={show}
        onHide={() => setShow(false)}
        backdrop="static"
        keyboard={false}
        size="lg"
      >
        <Modal.Header closeButton>
          {/* <Modal.Title>Find Personal Trainer</Modal.Title> */}
        </Modal.Header>
        <Modal.Body>
          <div className="video-container">
          <video src='/images/fitvideo.mp4' width={'100%'} autoPlay />
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
}