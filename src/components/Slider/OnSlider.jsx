import Slider from 'react-slick';
import style from './OnSlider.module.css';
import './slider.css';

export const OnSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 3000,
    autoplaySpeed: 2000,
    cssEase: 'linear',
  };

  return (
    <section>
      <div className={style.slider_div}>
        <Slider {...settings}>
          <div>
            <img src="./img/first.jpg" alt="" width={500} height={200} />
          </div>
          <div>
            <img src="./img/four.jpg" alt="" width={500} height={200} />
          </div>
          <div>
            <img src="./img/second.jpg" alt="" width={500} height={200} />
          </div>
          <div>
            <img src="./img/three.jpg" alt="" width={500} height={200} />
          </div>
        </Slider>
      </div>
    </section>
  );
};
