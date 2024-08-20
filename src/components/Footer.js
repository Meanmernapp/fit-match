import { BiLogoFacebook, BiLogoInstagram } from "react-icons/bi";

export default function Footer() {
  return (
    <footer className="white_text" data-aos="fade-in" data-aos-duration="1500">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <div className="logo_side">
              <div className="logo">
                <a href="#">
                  <img src="images/logo.png" alt="Logo" />
                </a>
              </div>
              <ul className="contact_info">
                <li><a href="mailto:">customerservice@fitmatch.us</a></li>
                {/* <li><a href="tel: ">+1-900-123 4567</a></li> */}
              </ul>
              <ul className="social_media">
                <li><a href="https://www.facebook.com/profile.php?id=61555944431008" target="_blank"><BiLogoFacebook className="socIcon" /> </a></li>
                {/* <li><a href="#"><i className="icofont-twitter"></i></a></li> */}
                <li><a href="https://www.instagram.com/fitmatchus/" target="_blank"><BiLogoInstagram className="socIcon" /> </a></li>
                {/* <li><a href="#"><i className="icofont-pinterest"></i></a></li> */}
              </ul>
            </div>
          </div>
          {/* <div className="col-md-6 d-flex">
        <div className="news_letter mt-auto mx-auto">
          <h3>Subscribe newsletter</h3>
          <p>Be the first to recieve all latest post in your inbox</p>
          <form>
            <div className="form-group">
              <input type="email" className="form-control" placeholder="Enter your email">
              <button className="btn"><i className="icofont-paper-plane"></i></button>
            </div>
            <p className="note">By clicking send link you agree to receive message.</p>
          </form>
        </div>
      </div> */}
        </div>
      </div>
      <div className="footer_bottom">
        <div className="container">
          <div className="ft_inner">
            <div className="copy_text">
              <p>© Copyrights 2024. All rights reserved.</p>
            </div>
            <ul className="links">
              <li><a href="/account">Account</a></li>
              <li>
              <a href="mailto:customerservice@fitmatch.us">Contact</a>
              </li>
              <li><a href="/terms_conditions">Terms </a></li>
              <li><a href="/privacy_policy">Privacy</a></li>
            </ul>
            <div className="design_by">
              <p>Crafted by <a href="#" target="blank">FitMatch</a></p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
