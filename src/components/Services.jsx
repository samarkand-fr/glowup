import customizedImage from "../assets/images/beauty-3.jpg" 
import recommendationImage from "../assets/images/beauty-4.jpg" 
import makeoverImage from "../assets/images/beauty-5.jpg" 
import analysImage from "../assets/images/beauty-6.jpg" 
import ServiceItem from "./ServiceItem"

function Services() {
  return (
    <section id="service">
      <div className="title-text">
        <p>Services</p>
        <h1>Enhance Your Beauty Routine</h1>
      </div>
      <div className="service-box">
        <ServiceItem 
          image={customizedImage}
          title="Customized Routines" 
          description="Get a personalized skincare routine based on your skin type and concerns." 
        />
        <ServiceItem 
          image={recommendationImage}
          title="Product Recommendations" 
          description="Discover the best products for your skin, tailored to your needs and preferences." 
        />
        <ServiceItem 
          image={makeoverImage}
          title="Virtual Makeover" 
          description="Try on different makeup looks with our AR-powered virtual makeover tool." 
        />
        <ServiceItem 
          image={analysImage}
          title="AI Skin Analysis" 
          description="Get an in-depth analysis of your skin condition using our AI technology." 
        />
      </div>
    </section>
  );
}

export default Services;
