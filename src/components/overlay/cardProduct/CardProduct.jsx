/* eslint-disable react/prop-types */
import style from './CardProduct.module.css';
import PropTypes from 'prop-types';
import { deleteDataId } from '../../../util/mock';
import { data } from '../../../util/mock';

const CardProduct = ({
  item: { id, guid, title, price, img },
  setOverlayItems,
}) => {
  const onDelete = (id) => {
    deleteDataId(id, 'cart').then(
      (response) => {
        if (response.status) {
          data('cart').then((res) => {
            setOverlayItems(res);
          });
        } else {
          console.log(response);
          alert(response.message);
        }
      }
    );
  };

  return (
    <div className={style.overlay__product_item}>
      <img
        className={style.overlay__productImg}
        src={img}
        width='60'
        alt='банер'
      />
      <h3 className={style.overlay__productTitle}>
        {title}
        <br />
        <span className={style.overlay__productPrice}>{price}</span>
      </h3>
      <button
        className={style.overlay__product_btn}
        onClick={() => {
          onDelete(id);
        }}>
        X
      </button>
    </div>
  );
};

export default CardProduct;

CardProduct.propTypes = {
  id: PropTypes.number,
  title: PropTypes.string,
  price: PropTypes.string,
  img: PropTypes.string,
  deleteOverlay: PropTypes.func,
};
