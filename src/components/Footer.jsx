import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faApple, faAndroid, faFacebook, faInstagram, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { faPaperPlane, faPhone } from '@fortawesome/free-solid-svg-icons';
import beautyfooter from '../assets/images/beauty-footer.png'

function Footer() {
  return (
    <section id="footer">
      <img src={beautyfooter} alt="Beauty Footer" className="footer-img" />
      <div className="title-text">
        <p>Contact</p>
        <h1>Get Glowing Today</h1>
      </div>
      <div className="footer-row">
        <div className="footer-left">
          <h1>App Availability</h1>
          <p><FontAwesomeIcon icon={faApple} className='fa' /> Available on iOS App Store</p>
          <p><FontAwesomeIcon icon={faAndroid} className='fa' /> Available on Google Play Store</p>
        </div>
        <div className="footer-right">
          <h1>Get in Touch</h1>
          <p>info@glowupapp.com <FontAwesomeIcon icon={faPaperPlane} className='fa' /></p>
          <p>+331 45 66 70 13 <FontAwesomeIcon icon={faPhone} className='fa' /></p>
        </div>
      </div>
      <div className="social-link">
        <FontAwesomeIcon icon={faFacebook} className='fa'/>
        <FontAwesomeIcon icon={faInstagram} className='fa'/>
        <FontAwesomeIcon icon={faTwitter} className='fa'/>
        <FontAwesomeIcon icon={faYoutube} className='fa'/>
        <p>&copy; 2023 GlowUp App. All rights reserved.</p>
      </div>
    </section>
  );
}

export default Footer;