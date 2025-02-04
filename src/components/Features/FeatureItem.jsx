import { useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagic, faLineChart, faUserMd } from '@fortawesome/free-solid-svg-icons';
import './styles.css';

const iconMap = {
  'fa-magic': faMagic,
  'fa-line-chart': faLineChart,
  'fa-user-md': faUserMd,
};

function FeatureItem({ title, icon, text, iconClassName = '', animationDelay = '0s' }) {
  const featureItemRef = useRef(null);

  useEffect(() => {
    const currentRef = featureItemRef.current;

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
    <div ref={featureItemRef} className="feature-item" style={{ animationDelay }}>
      <h1>{title}</h1>
      <div className="features-desc">
        <div className="features-icon">
          <FontAwesomeIcon icon={iconMap[icon]} className={iconClassName} />
        </div>
        <div className="features-text">
          {text}
        </div>
      </div>
    </div>
  );
}

FeatureItem.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  iconClassName: PropTypes.string,
  animationDelay: PropTypes.string,
};

export default FeatureItem;
