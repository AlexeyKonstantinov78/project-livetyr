/* eslint-disable react/prop-types */
import style from './Cards.module.css';
import PropTypes from 'prop-types';
import { useState, useContext } from 'react';
import { data, deleteDataId } from '../../../util/mock';
import { AppContext } from '../../../App';

const Cards = ({
  item: { id, guid, img, title, text1, text2, price },
  favBtn,
  addItem,
}) => {
  const { setFavorites } = useContext(AppContext);

  const [added, setAdded] = useState(false);

  const onClickAdded = () => {
    setAdded(!added);
    addItem({ id, guid, img, title, text1, text2, price });
  };

  // const onClickFav = () => {
  //   favBtn({ id, guid, img, title, text1, text2, price });
  // };

  const deleteFav = (id) => {
    deleteDataId(id, 'favorites').then(
      (response) => {
        if (response.status) {
          data('favorites').then((res) => {
            setFavorites(res);
          });
        } else {
          console.log(response);
          alert(response.message);
        }
      }
    );
  };

  return (
    <li className={style.card__tours_item}>
      <button className={style.card__toursBtn} onClick={() => {
        deleteFav(id);
      }}>
        Удваить из избранных
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
        <button className={style.card__tours_btn} onClick={onClickAdded}>
          {added ? (
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
