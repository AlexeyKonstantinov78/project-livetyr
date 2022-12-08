import style from './Overlay.module.css';
import CardProduct from './cardProduct/CardProduct';
import PropTypes from 'prop-types';
import { AppContext } from '../../App';
import { useContext } from 'react';

const Overlay = ({ closeOverlay }) => {
  const { overlayItems, setOverlayItems } = useContext(AppContext);

  const summProduct = (arr) =>
    arr.reduce((acc, item) => acc + parseFloat(item.price), 0);

  return (
    <div className={style.overlay}>
      <div className={style.overlay__product}>
        <div className={style.overlay__title_blok}>
          <h2 className={style.overlay__title}>Заявки
          </h2>
          <button className={style.overlay__btn} onClick={closeOverlay}>
            X
          </button>
        </div>
        <div className={style.overlay__product_flex}>
          <div className={style.overlay__product_list}>
            {overlayItems && overlayItems.map((item) => (
              <CardProduct
                key={item.id}
                item={item}
                setOverlayItems={setOverlayItems}
              />
            ))}
          </div>

          <div className={style.overlay__total_price}>
            <p className={style.overlay__total_price_p}>Итог:</p>
            <p className={style.overlay__total_price_sum}>
              {overlayItems && summProduct(overlayItems)}
            </p>
            {overlayItems &&
              summProduct(overlayItems) > 0 ? (
                <button
                  className={style.overlay__total_price_btn}>
                  Оставить заявку
                </button>) : (
                  <button
                    className={style.overlay__total_price_btn}
                    disabled="disabled">
                    Заявок нет
                  </button>
                )
            }
          </div>
        </div>
      </div>
    </div>
  );
};

export default Overlay;

Overlay.propTypes = {
  closeOverlay: PropTypes.func,
  overlayItems: PropTypes.array,
  setOverlayItems: PropTypes.func,
};
