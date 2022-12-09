import { Link } from 'react-router-dom';
import style from './Banner.module.css';

const Banner = () => (
  <section className={style.section__banner}>
    <h2 className={style.banner__title}>Покупайте туры он-лайн</h2>
    <p className={style.banner__decsription}>без комиссии!</p>
    <Link className={(style.btn, style.banner__btn)} to={'/form'}>
      Оставить заявку
    </Link>
  </section>
);

export default Banner;
