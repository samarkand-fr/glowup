import PropTypes from 'prop-types';
function TestimonialItem({ image, name, username, text }) {
    return (
      <div className="testimonial-col">
        <div className="user">
          <img src={image} alt={name} />
          <div className="user-info">
            <h4>{name}<i className="fa fa-star"></i></h4>
            <small>{username}</small>
          </div>
        </div>
        <p>{text}</p>
      </div>
    );
}
  
TestimonialItem.propTypes = {
    image: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    username: PropTypes.string.isRequired,
    text: PropTypes.string,
  };
  
 export default TestimonialItem 