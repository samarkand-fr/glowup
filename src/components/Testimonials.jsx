import  { useEffect } from 'react';
import user1 from "../assets/images/user1.jpg";
import user2 from "../assets/images/user2.jpg";
import user3 from "../assets/images/user3.jpg";
import TestimonialItem from './TestimonialItem'

function Testimonials() {
  useEffect(() => {
    const elements = document.querySelectorAll('.title-text p, .title-text h1');
    elements.forEach((element, index) => {
      element.style.animationDelay = `${index * 3.5}s`;
    });
  }, []);

  return (
    <section id="testimonials">
      <div className="title-text">
        <p>User Reviews</p>
        <h1>What Our Users Say</h1>
      </div>
      <div className="testimonial-row">
        <TestimonialItem 
          image={user1}
          name="Sarah Miller" 
          username="@sarahmiller" 
          text="GlowUp has completely transformed my skincare routine. My skin looks better than ever!" 
        />
        <TestimonialItem 
          image={user2}
          name="Whitney Thompson" 
          username="@whitneythompson" 
          text="The personalized recommendations are spot-on. I've never felt more confident about my skin." 
        />
        <TestimonialItem 
          image={user3}
          name="Emily Chen" 
          username="@emilychen" 
          text="The virtual makeover feature is so fun and helpful. I love trying new looks before buying products!" 
        />
      </div>
    </section>
  );
}


export default Testimonials;
