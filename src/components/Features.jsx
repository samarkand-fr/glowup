
import FeatureItem from './FeatureItem';
import featureImage from "../assets/images/beauty-2.jpg";

function Features() {
  return (
    <section id="features">
      <div className="title-text">
        <p>GlowUp</p>
        <h1>Unleash Your Inner Radiance</h1>
      </div>
      <div className="features-box">
        <div className="features">
          <FeatureItem 
            title="Personalized Skincare" 
            icon="fa-magic" 
            text="Get a customized skincare routine tailored to your unique skin type and concerns." 
            iconClassName="custom-icon-class"
            animationDelay="0s"
          />
          <FeatureItem 
            title="Track Progress" 
            icon="fa-line-chart" 
            text="Monitor your skin's improvement over time with our advanced tracking tools." 
            iconClassName="custom-icon-class"
            animationDelay="0.5s"
          />
          <FeatureItem 
            title="Expert Support" 
            icon="fa-user-md" 
            text="Access to certified dermatologists for professional advice and consultations." 
            iconClassName="custom-icon-class"
            animationDelay="1s"
          />
        </div>
        <div className="features-img">
          <img src={featureImage} alt="Beauty App Interface" />
        </div>
      </div>
    </section>
  );
}

export default Features;


