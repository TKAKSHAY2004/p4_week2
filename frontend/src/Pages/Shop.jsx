import React, { useContext } from 'react';
import NewCollections from '../Components/NewCollections/NewCollections';
import Popular from '../Components/Popular/Popular';
import PopularOffers from '../Components/Offers/Offers'; // Import Offers component
import NewsLetter from '../Components/NewsLetter/NewsLetter'; // Corrected import statement
import { ShopContext } from '../Context/ShopContext';
import Hero from '../Components/Hero/Hero';

const Shop = ({ gender }) => {
  const { products } = useContext(ShopContext);

  const newCollections = products.slice(-8);
  const popularInWomen = products.filter(product => product.category === 'women').slice(0, 4);

  return (
    <div>
      <Hero /> {/* Add the Hero component here */}
      <NewCollections data={newCollections} />
      {gender === 'all' && <Popular data={popularInWomen} />}
      <PopularOffers /> {/* Add the PopularOffers component here */}
      <NewsLetter /> {/* Add the Newsletter component here */}
    </div>
  );
};

export default Shop;