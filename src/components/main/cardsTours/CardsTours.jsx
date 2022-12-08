/* eslint-disable react/prop-types */
import style from './CardsTours.module.css';
import Cards from './cards/Cards';
import { dataPost, data } from '../../../util/mock';
import { AppContext } from '../../../App';
import { useContext } from 'react';

const CardsTours = () => {
  const {
    items,
    setOverlayItems,
    setSearch,
    search,
    setFavorites
  } = useContext(AppContext);

  const onAddOverlay = (obj) => {
    dataPost('cart', obj).then((response) => {
      if (response.status) {
        data('cart').then((res) => {
          setOverlayItems(res);
        });
      } else {
        console.log(response);
      }
    });
  };

  const onClickSearch = (inputValue) => {
    setSearch(inputValue.target.value);
  };

  const onAddFavorites = (obj) => {
    dataPost('favorites', obj).then((response) => {
      if (response.status) {
        data('favorites').then((res) => {
          setFavorites(res);
        });
      } else {
        console.log(response);
      }
    });
  };

  return (
    <section className={style.section__card_tours}>
      <div className={style.card_tours_flex}>
        <h2 className={style.card__tours_title}>Туры:</h2>
        <div className={style.card__tours_search}>
          <img
            className={style.card__tours_searchImg}
            src='/img/search.png'
            width='25'
            height='auto'
            alt='поиск'
          />
          <input
            className={style.card__tours_searchInput}
            placeholder='поиск'
            id='name'
            onChange={onClickSearch}
            value={search}></input>
        </div>
      </div>
      <ul className={style.card__tours_items}>
        {items
          .filter((item) =>
            item.title.toLowerCase().includes(search.toLowerCase())
          )
          .map((item) => (
            <Cards
              key={item.id}
              item={item}
              favBtn={(favObj) => {
                onAddFavorites(favObj);
              }}
              addItem={(cartObj) => {
                onAddOverlay(cartObj);
              }}
            />
          ))}
      </ul>
    </section>
  );
};

export default CardsTours;
