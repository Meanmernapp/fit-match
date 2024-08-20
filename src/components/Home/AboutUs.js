"use client";
import "../../assets/css/slick-theme.min.css";
import "../../assets/css/slick.min.css";

export default function AboutUs() {
  var settings = {
    dots: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 4000,
    autoplaySpeed: 4000,
    cssEase: "linear",
    margin:10,
    padding:10,
  //  variableWidth: true,
     pauseOnHover: false
  };
  return (
    <section className="about_us_section">
      <div className="container">
      <div className="section_title" data-aos="fade-up" data-aos-duration="1500">
          {/* <span className="title_badge">About us</span> */}
          <h2>Get Results <br /> <span>With Our Personal Trainers </span> </h2>
          <p>Here at FitMatch, we have highly skilled personal trainers at various price points.<br /> Areas of expertise include Strength Training, Weight Loss, Powerlifting, Running and more. </p>
        </div>
      </div>
      {/* <div className="about_slider row_am" data-aos="fade-in" data-aos-duration="1500">
      <Slider {...settings}>
          <div className="item">
            <div className="abt_slides">
              <img src="images/abtslide_1.png" alt="image" />
            </div>
          </div>
          <div className="item">
            <div className="abt_slides">
              <img src="images/abtslide_2.png" alt="image" />
            </div>
          </div>
          <div className="item">
            <div className="abt_slides">
              <img src="images/abtslide_3.png" alt="image" />
            </div>
          </div>
          <div className="item">
            <div className="abt_slides">
              <img src="images/abtslide_4.png" alt="image" />
            </div>
          </div>
          <div className="item">
            <div className="abt_slides">
              <img src="images/abtslide_5.png" alt="image" />
            </div>
          </div>
          <div className="item">
            <div className="abt_slides">
              <img src="images/abtslide_4.png" alt="image" />
            </div>
          </div>
        </Slider>
      </div> */}
      <div className="container mt-5">
      <div className="row abt_text" data-aos="fade-up" data-aos-duration="1500">
          <div className="col-md-5">
            <h2><span>Our story</span> behind the success of FitMatch</h2>
          </div>
          <div className="col-md-7">
            <p>Prior to FitMatch, we felt there was a void in the online marketplace space for a simple, effective solution to connect individuals with personal trainers. With this, our co-founders combined their backgrounds in personal training and software development, respectively, to create a tool that does just that. In just four simple steps, individuals are matched with experienced, qualified personal trainers that have the skillset they seek.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
