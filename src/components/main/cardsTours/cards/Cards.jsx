/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import style from './Cards.module.css';
import PropTypes from 'prop-types';
import { useState } from 'react';
import { deleteDataId, data } from '../../../../util/mock';
import { AppContext } from '../../../../App';
import { useContext } from 'react';

const Cards = ({
  item: { id, guid, img, title, text1, text2, price },
  favBtn,
  addItem,
}) => {
  const {
    setOverlayItems,
    setFavorites,
    isAdded,
    isFav,
  } = useContext(AppContext);

  const [added, setAdded] = useState(isAdded);
  const [fav, setFav] = useState(isFav);

  const onClickAdded = () => {
    setAdded(!added);
    addItem({ id, guid, img, title, text1, text2, price });
  };

  const onClickFav = () => {
    setFav(!fav);
    favBtn({ id, guid, img, title, text1, text2, price });
  };

  const deleteOverlay = (id) => {
    deleteDataId(id, 'cart').then(
      (response) => {
        if (response.status) {
          data('cart').then((res) => {
            setOverlayItems(res);
          });
          setAdded(!added);
        } else {
          console.log(response);
          alert(response.message);
        }
      }
    );
  };

  const deleteFav = (id) => {
    deleteDataId(id, 'favorites').then(
      (response) => {
        if (response.status) {
          data('favorites').then((res) => {
            setFavorites(res);
          });
          setFav(!fav);
        } else {
          console.log(response);
          alert(response.message);
        }
      }
    );
  };

  return (
    <li className={style.card__tours_item}>
      <button className={style.card__toursBtn} onClick={!isFav(guid) ?
        (onClickFav) : (() => deleteFav(id))}>
        {!isFav(guid) ? (
          'Добавить в избранные'
        ) : (
          <img
            className={style.img}
            width='13'
            height='13'
            src='/img/icon.png'
            alt='галочка'
          />
        )}
      </button>
      <img
        className={style.card__tours_img}
        src={img}
        alt='фон'
        width='150'
        height='auto'
      />
      <h3 className={style.card__tours_h3}>{title}</h3>
      <p className={style.card__tours_text}>{text1}</p>
      <p className={style.card__tours_text}>{text2}</p>
      <div className={style.card__tours_divprice}>
        <span className={style.card__tours_textprice}>Цена:</span>
        <span className={style.card__tours_price}>{price}</span>
        <button className={style.card__tours_btn} onClick={!isAdded(guid) ?
          (onClickAdded) : (() => deleteOverlay(id))}>
          {isAdded(guid) ? (
            <img width='13' height='13' src='/img/icon.png' alt='галочка' />
          ) : (
            'Оставить заявку'
          )}
        </button>
      </div>
    </li>
  );
};

export default Cards;

Cards.propTypes = {
  id: PropTypes.number,
  guid: PropTypes.string,
  img: PropTypes.string,
  title: PropTypes.string,
  text1: PropTypes.string,
  text2: PropTypes.string,
  price: PropTypes.string,
  onClickPlus: PropTypes.func,
  favBtn: PropTypes.func,
  addItem: PropTypes.func,
};
