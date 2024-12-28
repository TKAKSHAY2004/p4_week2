import React, { useContext } from 'react';
import Item from '../Components/Item/Item';
import { ShopContext } from '../Context/ShopContext';
import './CSS/ShopCategory.css';


const ShopCategory = ({ banner, category }) => {
  const { products } = useContext(ShopContext);
  const categoryProducts = products.filter(product => product.category === category);

  return (
    <div>
      <img className="shopcategory-banner" src={banner} alt={`${category} banner`} />
      <div className="shopcategory-indexSort">
        <p>Showing {categoryProducts.length} results for <span>{category}</span></p>
      </div>
      <div className="shopcategory-products">
        {categoryProducts.map(product => (
          <Item key={product.id} id={product.id} name={product.name} image={product.image} new_price={product.new_price} old_price={product.old_price} />
        ))}
      </div>
    </div>
  );
};

export default ShopCategory;