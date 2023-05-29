import { ActionType } from "../action/action-Type";
// import "./src/images";
import tree from "./images/pexels-pixabay-268533.jpg"

const initialState  = {
    products:
    [
    {
            id: '1' ,
            
            title: "shirt",
            image: tree,
            size:'m',
            quantity:'mm',
            price:'44'

    },
    {
      id: '0' ,
      title: "shirt",
      image: tree,
      size:'m',
      quantity:'0',
      price:'100'

},
   
   
],
   
}


export const productReducer = (state = initialState, { type, payload }) => {
    switch (type) {
      case ActionType.SET_PRODUCTS:
        return { ...state, products: payload };
      case ActionType.ADD_PRODUCT:
        return { ...state, products: [...state.products, payload] };
      default:
        return state;
    }
  };