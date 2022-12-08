/* eslint-disable no-unused-vars */
import './App.css';
import Header from './components/header/Header';
import Main from './components/main/Main';
import Footer from './components/footer/Footer';
import Overlay from './components/overlay/Overlay';
import { useEffect, useState } from 'react';
import React from 'react';
import { data } from './util/mock';
import { Routes, Route } from 'react-router-dom';
import { Favorites } from './components/favorites/Favorites';

export const AppContext = React.createContext({});

function App() {
  const [overlayOpen, setoverlayOpen] = useState(false);
  const [tyrs, setTypes] = useState([]);
  const [overlayItems, setOverlayItems] = useState([]);
  const [search, setSearch] = useState('');
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    async function axiosData() {
      const tursData = await data('tyrs');

      setTypes(tursData);

      const overData = await data('cart');
      setOverlayItems(overData);

      const favoritesData = await data('favorites');
      setFavorites(favoritesData);
    }
    axiosData();
  }, []);

  const isAdded = (guid) =>
    overlayItems.some((objIsAdded) => objIsAdded.guid === guid);

  const isFav = (guid) => favorites.some((objIsFav) => objIsFav.guid === guid);

  return (
    <AppContext.Provider
      value={{
        overlayItems,
        setOverlayItems,
        favorites,
        setFavorites,
        items: tyrs,
        setSearch,
        search,
        isAdded,
        isFav,
      }}>
      <div className='App'>
        <div className='container'>
          {overlayOpen && (
            <Overlay closeOverlay={() => setoverlayOpen(false)} />
          )}
          <Header openOverlay={() => setoverlayOpen(true)} />
          <Routes>
            <Route path='/favorites' element={<Favorites />} />
            <Route path='/' element={<Main />} />
          </Routes>
          <Footer />
        </div>
      </div>
    </AppContext.Provider>
  );
}

export default App;
