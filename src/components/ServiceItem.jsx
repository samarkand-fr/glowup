
// eslint-disable-next-line react/prop-types
function ServiceItem({ image, title, description }) {
    return (
      <div className="single-service">
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
  
 export default ServiceItem 