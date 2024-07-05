import { useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import './styles.css';

function ServiceItem({ image, title, description, animationClass }) {
  const serviceItemRef = useRef(null);

  useEffect(() => {
    const currentRef = serviceItemRef.current;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          currentRef.classList.add('visible');
          observer.disconnect();
        }
      },
      {
        threshold: 0.1,
      }
    );

    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (observer && currentRef) {
        observer.unobserve(currentRef);
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
