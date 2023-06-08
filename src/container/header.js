import React from "react";
import { Fragment, useRef, useState } from 'react';
import { ProductList } from './productList';
import { useDispatch } from "react-redux";
import { Link } from 'react-router-dom'
import { addProduct } from '../redux/action/productAction';

export const Header = () => {

    const dispatch = useDispatch();
    const nameInputRef = useRef();
    const [include, setInclude] = useState(false);
    const [image, setImage] = useState([]);
    const [newInclude, setNewInclude] = useState([])
    const [inputValue, setInputValue] = useState('')
    const [enterValue, setEnterValue] = useState(true)
    const [inputId, setInputId] = useState('')
    const [enterId, setEnterId] = useState(true)
    const [inputQuantity, setInputQuantity] = useState('')
    const [enterQuantity, setEnterQuantity] = useState(true)
    const [inputPrice, setInputPrice] = useState('')
    const [enterPrice, setEnterPrice] = useState(true)
    const [updateData, setUpdateData] = useState([])
    const [size, setSize] = useState([])
    const [format,setFormat] = useState(true)
    const allowedExtensions = /(\.jpg|\.jpeg|\.png|\.gif)$/i;
    const uploadImage = (e) => {
        setImage([...e.target.files]);
    }
   
    // Validation...............
    const inputChangeHandler = (e) => {
        setInputValue(e.target.value)
        setUpdateData({
            ...updateData,
            [e.target.name]: e.target.value
        })

    }

    const inputIdChangeHandler = (e) => {
        setInputId(e.target.value)
        setUpdateData({
            ...updateData,
            [e.target.name]: e.target.value
        })
    }
    const inputSizeChangeHandler = (e) => {
        setSize(e.target.value)

    }
    const inputQuantityChangeHandler = (e) => {
        setInputQuantity(e.target.value)
        setUpdateData({
            ...updateData,
            [e.target.name]: e.target.value
        })
        console.log(updateData.length)
    }
    const inputPriceChangeHandler = (e) => {
        setInputPrice(e.target.value)
        setUpdateData({
            ...updateData,
            [e.target.name]: e.target.value
        })
    }
   
    const inputFormHandler = (e) => {
        e.preventDefault();
        
        
        if (inputValue.length == 0) {
            setEnterValue(false)
            return;
        }
        if (inputId.length == 0) {
            setEnterId(false)
            return;
        }
        if (inputQuantity.length == 0) {
            setEnterQuantity(false)
            return;
        }
        if (inputPrice.length == 0) {
            setEnterPrice(false)
            return;
        }
       
        const reader = new FileReader();
        reader.onload = () => {
            const imageData = reader.result;

            const newProduct = {
                id: inputId,
                title: inputValue,
                image: imageData, // Assign the image data to the image property
                size: size,
                quantity: inputQuantity,
                price: inputPrice
            };
            console.log(newProduct)
            dispatch(addProduct(newProduct));
            setInputPrice('');
            setInputQuantity('');
            setInputValue('');
            setInputId('');
            setEnterValue(true);
            setEnterId(true);
            setEnterQuantity(true);
            setEnterPrice(true);
            setInclude(false);
        };
        if(image.value !== allowedExtensions){
            setFormat(false);
            // return ;
        }
        reader.readAsDataURL(image[0]); // Read the image file as data URL
        
    };
    // OverAll form...............
    const formHandler = (e) => {
        e.preventDefault();
        setInclude(true);
    }
    const closeFormHandler = (e) => {
        e.preventDefault();
        setInclude(false);
        setInputPrice('')
        setInputQuantity('')
        setInputValue('')
        setInputId('')
        setFormat(true)
    }
    
    return (
        <>

            <header className="App-header">

                <div className="top">
                    <Link to='/login' className='link'><button className='AdminButton'><p className="toptext">LOGOUT</p></button> </Link>
                    <button className='AdminButton' onClick={formHandler}><p className="toptext">ADD PRODUCT</p></button>
                    <div className="topic"><h1 className="headtext">SHOP-CART</h1></div>
                </div>
            </header>
            <ProductList />
            {include ? (
                <form onSubmit={inputFormHandler}>
                    <Fragment>
                        <div>
                            <table className='cover'>
                                <h3>PRODUCT DETAILS</h3>
                                <tr>
                                    <td><label for='pname'>ENTER PRODUCT NAME</label>
                                        <input
                                            maxLength={30}
                                            type='text'
                                            ref={nameInputRef}
                                            className='pname' name='pname'
                                            onChange={inputChangeHandler}
                                            value={inputValue}>
                                        </input>
                                    </td>
                                </tr>
                                {!enterValue && inputValue.length <= 0 ? <p className='validity'>please enter the Product Name</p> : ''}
                                <tr>
                                    <td><label for='id'>ENTER PRODUCT ID</label><br></br>
                                        <input
                                            maxLength={1}
                                            type='number'
                                            className='id'
                                            name='id'
                                            onChange={inputIdChangeHandler}
                                            value={inputId}
                                        >
                                        </input>
                                    </td>
                                </tr>
                                {!enterId && inputId.length <= 0 ? <p className='validity'>please enter the Product ID</p> : ''}
                                <tr>
                                    <td><label for='size'>SIZE</label><br></br>
                                        <select className='size' name='size' onChange={inputSizeChangeHandler} value={size}>
                                            <option value="s">Small</option>
                                            <option value="m">Medium</option>
                                            <option value="l">Large</option>
                                            <option value="xl">XL</option>

                                        </select></td>
                                </tr>
                                <tr>
                                    <td><label for='quantity'>QUANTITY</label><br></br>
                                        <input
                                            maxLength={100}
                                            type='number'
                                            className='quantity'
                                            name='quantity'
                                            onChange={inputQuantityChangeHandler}
                                            value={inputQuantity}>
                                        </input>
                                    </td>
                                </tr>
                                {!enterQuantity && inputQuantity.length <= 0 ? <p className='validity'>please enter the Product Quantity</p> : ''}
                                <tr>
                                    <td><label for='price'>ENTER PRODUCT PRICE</label> <br></br>
                                        <select className='currency' name='currency'>
                                            <option value="rs">₹</option>
                                            <option value="doll">$</option>
                                        </select>
                                        <input
                                            maxLength={50}
                                            type='text'
                                            className='price'
                                            name='price'
                                            onChange={inputPriceChangeHandler}
                                            value={inputPrice}>
                                        </input></td>
                                </tr>
                                {!enterPrice && inputPrice.length <= 0 ? <p className='validity'>please enter the Price of the Product</p> : ''}
                                <label for='price'>UPLOAD IMAGE</label>
                                <input
                                    type='file'
                                    className='img'
                                    multiple accept="image/*"
                                    onChange={uploadImage}>
                                </input>
                                {newInclude.map(imgSrc => <img src={imgSrc} />)}
                                {!format && image.value!==allowedExtensions ? <p className='validity'>Please upload a image</p> :''}

                                <div className="submission">
                                    <button type='submit' onSubmit={inputFormHandler} className='submit-btn' >Submit</button>

                                    <button onClick={closeFormHandler} className='close-btn'>Close</button>
                                </div>
                            </table>
                        </div>

                    </Fragment>

                </form>

            ) : (<>

            </>)}


        </>
    );
              
}


