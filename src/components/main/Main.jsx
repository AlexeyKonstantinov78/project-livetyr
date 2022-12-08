/* eslint-disable react/prop-types */
import style from './Main.module.css';
import Banner from './banner/Banner';
import Tours from './tours/Tours';
import CardsTours from './cardsTours/CardsTours';
import { AppContext } from '../../App';
import { useContext } from 'react';
import { OnSlider } from '../Slider/OnSlider';

const Main = () => {
  const { items } = useContext(AppContext);

  return (
    <main className={style.main}>
      <Banner />
      <OnSlider />
      <Tours />
      {items && (
        <CardsTours />
      )}
    </main>
  );
};

export default Main;
