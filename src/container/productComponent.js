import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import './products.css';
import AutoFixHighRoundedIcon from '@mui/icons-material/AutoFixHighRounded';
import { Header } from './header';

export const ProductComponent = () => {
  const products = useSelector((state) => state.allProducts.products);
 const [showDetails, setShowDetails] = useState({});

  const showDetailsHandler = (productId) => {
    setShowDetails((prevState) => ({
      ...prevState,
      [productId]: true,
    }));
  };
 
  const closeViewHandler = (productId) =>{
    setShowDetails((prevState) => ({
      ...prevState,
      [productId]: false,
    }));
  }


  

  
  return (
    <div className='totControl'>
      
      {products.map((product) => (
        <div className='components' key={product.id}>
          <img className="imge" src={product.image} alt='img' />
          <ul>
            <div className='content'>
              <li>
                {product.title}
                {product.id}
                {product.category}
              </li>
              <li className='modify'>
                <button onClick={() => showDetailsHandler(product.id)}className='view-btn'>view</button>
                <AutoFixHighRoundedIcon />
                
              </li>

            </div>
          </ul> 
          {showDetails[product.id] ? 
                <form >     
                <table className='viewForm'>
                <tr >
                  <td className='align'>  <img className="images" src={product.image} alt='img' /></td>
                  </tr>
                  <tr >
                  <td className='align'><label for='id'>PRODUCT NAME</label></td>
                  <td>{product.title}</td>
                  </tr>
                  <tr>
                  <td className='align'><label for='id'>PRODUCT ID</label></td>
                  <td>{product.id}</td>
                  </tr>
                  <tr>
                  <td className='align'><label for='id'>PRODUCT SIZE</label></td>
                  <td>{product.size}</td>
                  </tr>
                  <tr>
                  <td className='align'><label for='id'>PRODUCT QUANTITY</label></td>
                  {product.quantity}
                  </tr>
                  <tr>
                  <td className='align'><label for='id'>PRODUCT PRICE</label></td>
                  <td>{product.price}</td>
                  </tr>
                  <button onClick={() => closeViewHandler(product.id)}className='closeview'>Close</button>
                </table>
                </form>
                :null}
                  
        </div>
      ))}
    </div>
  );
};
