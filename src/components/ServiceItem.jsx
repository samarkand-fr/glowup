import  { useRef, useEffect } from 'react';
import PropTypes from 'prop-types';

function ServiceItem({ image, title, description, animationClass }) {
  const serviceItemRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          serviceItemRef.current.classList.add('visible');
          observer.disconnect();
        }
      },
      {
        threshold: 0.1,
      }
    );

    if (serviceItemRef.current) {
      observer.observe(serviceItemRef.current);
    }

    return () => {
      if (observer && serviceItemRef.current) {
        observer.unobserve(serviceItemRef.current);
      }
    };
  }, []);

  return (
    <div ref={serviceItemRef} className={`single-service ${animationClass}`}>
      <img src={image} alt={title} />
      <div className="overlay"></div>
      <div className="service-desc">
        <h3>{title}</h3>
        <hr />
        <p>{description}</p>
      </div>
    </div>
  );
}

ServiceItem.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  animationClass: PropTypes.string.isRequired,
};

export default ServiceItem;
