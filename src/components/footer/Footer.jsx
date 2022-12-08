import style from './Footer.module.css';

const Footer = () => (
  <footer className={style.footer}>
    <h1 className={(style.title, style.footer__title)}>Live-tyr</h1>
    <nav className={style.nav}>
      <ul className={style.nav__items_footer}>
        <li className={style.nav__items_footer}>
          <a href="#" className={style.nav__link}>
            Единстевенный многоканальный номер +7(495) 151-88-08
          </a>
        </li>
        <li className={style.nav__items_footer}>
          <a href="#" className={style.nav__link}>
            Уполноммоченные агенства ООО &quot;
            Туристическая   компания КаприС&quot;
          </a>
        </li>
      </ul>
    </nav>
  </footer>
);

export default Footer;
