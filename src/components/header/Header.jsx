import style from './Header.module.css';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { AppContext } from '../../App';
import { useContext } from 'react';

const Header = ({ openOverlay }) => {
  const { overlayItems } = useContext(AppContext);
  return (
    <header className={style.header}>
      <Link className={style.nav__link} to={'/'}>
        <h1 className={style.title}>Live-tyr</h1>
      </Link>
      <nav className={style.nav}>
        <ul className={style.nav__items}>
          <li className={style.nav__item}>
            <Link to={'/favorites'} className={style.nav__link}>
              Избранные
            </Link>
          </li>
          <li className={style.nav__item}>
            <a
              href='#'
              className={style.nav__link + ' ' + style.statement}
              onClick={openOverlay}>
              Заявки {(overlayItems.length > 0) && <p>{overlayItems.length}</p>}
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;

Header.propTypes = {
  openOverlay: PropTypes.func,
};
