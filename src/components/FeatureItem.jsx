import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagic, faLineChart, faUserMd } from '@fortawesome/free-solid-svg-icons';

const iconMap = {
  'fa-magic': faMagic,
  'fa-line-chart': faLineChart,
  'fa-user-md': faUserMd,
};

function FeatureItem({ title, icon, text, iconClassName, animationDelay }) {
  return (
    <div className="feature-item" style={{ animationDelay }}>
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

FeatureItem.defaultProps = {
  iconClassName: '',
  animationDelay: '0s',
};

export default FeatureItem;
