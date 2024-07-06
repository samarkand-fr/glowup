// import bannerPart1 from '../../assets/images/banner-part1.jpg';
// import bannerPart2 from '../../assets/images/banner-part2.jpg';
// import bannerPart3 from '../../assets/images/banner-part3.jpg';
// import bannerPart4 from '../../assets/images/banner-part4.jpg';
// import fullBanner from '../../assets/images/banner.jpg';
// import './styles.css';

// function Banner() {
//   return (
//     <section id="banner">
//       <div className="banner-img">
//         <img src={bannerPart1} alt="Banner Part 1" className="banner-part part1" />
//         <img src={bannerPart2} alt="Banner Part 2" className="banner-part part2" />
//         <img src={bannerPart3} alt="Banner Part 3" className="banner-part part3" />
//         <img src={bannerPart4} alt="Banner Part 4" className="banner-part part4" />
//         <img src={fullBanner} alt="Full Banner" className="full-banner" />
//       </div>
//       <h2 className="logo">
//         <em>GlowUp</em>
//       </h2>
//       <div className="banner-text">
//         <h1>Reveal Your Natural Beauty</h1>
//         <p>Enhance Your Skin, Enhance Your Confidence</p>
//         <div className="banner-btn">
//           <a href="#service">
//             <span></span>Discover
//           </a>
//           <a href="#testimonials">
//             <span></span>Read More
//           </a>
//         </div>
//       </div>
//     </section>
//   );
// }

// export default Banner;
import  { useEffect } from 'react';
import bannerPart1 from '../../assets/images/banner-part1.jpg';
import bannerPart2 from '../../assets/images/banner-part2.jpg';
import bannerPart3 from '../../assets/images/banner-part3.jpg';
import bannerPart4 from '../../assets/images/banner-part4.jpg';
import fullBanner from '../../assets/images/banner.jpg';
import './styles.css';

function Banner() {
  useEffect(() => {
    const letters = document.querySelectorAll('.logo .letter');
    letters.forEach(letter => {
      letter.style.opacity = '1'; // letters are visible
    });
  }, []);

  return (
    <section id="banner">
      <div className="banner-img">
        <img src={bannerPart1} alt="Banner Part 1" className="banner-part part1" />
        <img src={bannerPart2} alt="Banner Part 2" className="banner-part part2" />
        <img src={bannerPart3} alt="Banner Part 3" className="banner-part part3" />
        <img src={bannerPart4} alt="Banner Part 4" className="banner-part part4" />
        <img src={fullBanner} alt="Full Banner" className="full-banner" />
      </div>
      <div className="logo">
        <span className="letter" style={{ left: '0%' }}>G</span>
        <span className="letter" style={{ left: '10%' }}>l</span>
        <span className="letter" style={{ left: '20%' }}>o</span>
        <span className="letter" style={{ left: '30%' }}>w</span>
        <span className="letter" style={{ left: '40%' }}>U</span>
        <span className="letter" style={{ left: '50%' }}>p</span>
      </div>
      <div className="banner-text">
        <h1>Reveal Your Natural Beauty</h1>
        <p>Enhance Your Skin, Enhance Your Confidence</p>
        <div className="banner-btn">
          <a href="#service">
            <span></span>Discover
          </a>
          <a href="#testimonials">
            <span></span>Read More
          </a>
        </div>
      </div>
    </section>
  );
}

export default Banner;
