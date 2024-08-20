"use client";
import Slider from "react-slick";
import "../../assets/css/slick-theme.min.css";
import "../../assets/css/slick.min.css";

export default function Why() {
  var whySettings = {
    dots: false,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    speed: 4000,
    autoplaySpeed: 4000,
    cssEase: "linear",
    variableWidth: true,
    pauseOnHover: false
  };
  return (
    <div className="page_wrapper">
      <div className="text_list_section row_am" data-aos="fade-in" data-aos-duration="1500">
        <div className="container">
          <span className="title_badge down_fix">Why choose our app</span>
        </div>
        <div className="slider_block whySlider">
          <Slider {...whySettings}>
            <div className="item">
              <div className="text_block">
                <span>Group Personal Training</span>
                <span className="mark_star">•</span>
              </div>
            </div>
            <div className="item">
              <div className="text_block">
                <span>At-Home Personal Training</span>
                <span className="mark_star">•</span>
              </div>
            </div>
            <div className="item">
              <div className="text_block">
                <span>Mobility Training Nutrition (General)</span>
                <span className="mark_star">•</span>
              </div>
            </div>
            <div className="item">
              <div className="text_block">
                <span>Physique and Bodybuilding</span>
                <span className="mark_star">•</span>
              </div>
            </div>
            <div className="item">
              <div className="text_block">
                <span>Pilates</span>
                <span className="mark_star">•</span>
              </div>
            </div>
            <div className="item">
              <div className="text_block">
                <span>Powerlifting</span>
                <span className="mark_star">•</span>
              </div>
            </div>
            <div className="item">
              <div className="text_block">
                <span>Prenatal and Postpartum</span>
                <span className="mark_star">•</span>
              </div>
            </div>
            <div className="item">
              <div className="text_block">
                <span>Running Coach</span>
                <span className="mark_star">•</span>
              </div>
            </div>
            <div className="item">
              <div className="text_block">
                <span>Senior Fitness</span>
                <span className="mark_star">•</span>
              </div>
            </div>
            <div className="item">
              <div className="text_block">
                <span>Sports Nutrition</span>
                <span className="mark_star">•</span>
              </div>
            </div>
            <div className="item">
              <div className="text_block">
                <span>Sports Performance Enhancement Coaching</span>
                <span className="mark_star">•</span>
              </div>
            </div>
            <div className="item">
              <div className="text_block">
                <span>Strength and Conditioning</span>
                <span className="mark_star">•</span>
              </div>
            </div>
            <div className="item">
              <div className="text_block">
                <span>Stretching and Flexibility</span>
                <span className="mark_star">•</span>
              </div>
            </div>
            <div className="item">
              <div className="text_block">
                <span>Virtual Coaching</span>
                <span className="mark_star">•</span>
              </div>
            </div>
            <div className="item">
              <div className="text_block">
                <span>Weight Loss</span>
                <span className="mark_star">•</span>
              </div>
            </div>
            <div className="item">
              <div className="text_block">
                <span>Weightlifting</span>
                <span className="mark_star">•</span>
              </div>
            </div>
            <div className="item">
              <div className="text_block">
                <span>Wellness</span>
                <span className="mark_star">•</span>
              </div>
            </div>
            <div className="item">
              <div className="text_block">
                <span>Yoga</span>
                <span className="mark_star">•</span>
              </div>
            </div>
            <div className="item">
              <div className="text_block">
                <span> Youth Exercise</span>
                <span className="mark_star">•</span>
              </div>
            </div>
          </Slider>
        </div>
      </div>
    </div>
  );
}
