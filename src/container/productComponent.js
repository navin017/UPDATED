import React, { useState } from 'react';
import { useSelector,useDispatch} from 'react-redux';
import AutoFixHighRoundedIcon from '@mui/icons-material/AutoFixHighRounded';
import { Top } from './top';
import { updateProduct } from '../redux/action/productAction';
import './products.css'

export const ProductComponent = () => {
  const products = useSelector((state) => state.allProducts.products);
  const dispatch = useDispatch();
  const [showDetails, setShowDetails] = useState({});
  const [showHeader, setShowHeader] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isEditing, setIsEditing] = useState(false);

  const showDetailsHandler = (productId) => {
    setShowDetails((prevState) => ({
      ...prevState,
      [productId]: true,
    }));
  };

  const showEditFormHandler = () => {
    setShowHeader((prevState) => !prevState);
  };

  const closeViewHandler = (productId) => {
    setShowDetails((prevState) => ({
      ...prevState,
      [productId]: false,
    }));
  };

  const handleEditProduct = (product) => {
    setSelectedProduct(product);
    setIsEditing(true);
    setShowHeader(true); // Show the form when editing
  };

  const handleSaveProduct = (e) => {
    e.preventDefault();

    if (isEditing && selectedProduct) {
      // Dispatch an action to update the product
      dispatch(updateProduct(selectedProduct));

      setSelectedProduct(null);
      setIsEditing(false);
      setShowHeader(false);
    }
  };

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
              </li>
              <li className='modify'>
                <button onClick={() => showDetailsHandler(product.id)} className='view-btn'>view</button>
                <AutoFixHighRoundedIcon onClick={() => handleEditProduct(product)} />
              </li>
            </div>
          </ul>
          {showDetails[product.id] && (
            <form> 
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
                  <td>{product.quantity}</td>
                  </tr>
                  <tr>
                  <td className='align'><label for='id'>PRODUCT PRICE</label></td>
                  <td>{product.price}</td>
                  </tr>
                  <tr><td>
                  <button onClick={() => closeViewHandler(product.id)}className='closeview'>Close</button>
                  </td></tr>
                </table>
                </form>
                )}
                </div>
              ))}
              {showHeader && (
                <Top
                  product={selectedProduct}
                  isEditing={isEditing}
                  handleSaveProduct={handleSaveProduct}
                />
              )}
            </div>
          );
        };