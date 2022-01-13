import {
  UPDATE_PRODUCTS,
  ADD_TO_CART,
  UPDATE_CART_QUANTITY,
  REMOVE_FROM_CART,
  ADD_MULTIPLE_TO_CART,
  UPDATE_CATEGORIES,
  UPDATE_CURRENT_CATEGORY,
  CLEAR_CART,
  TOGGLE_CART
} from "./actions";

const initialState = {
  products: [],
  categories: [],
  currentCategory: "",
  cart: [],
  cartOpen: false
};

export const reducers = (state = initialState, action) => {
  switch (action.type) {
      case UPDATE_PRODUCTS:
          return {
              ...state,
              products: [...action.products]
          };

      case ADD_TO_CART:
          return {
              ...state,
              cartOpen: true,
              cart: [...state.cart, action.product] //whatever's in the cart plus whatever is being added through the action
          };

      case ADD_MULTIPLE_TO_CART:
          return {
              ...state,
              cart: [...state.cart, ...action.products]
          }

      case UPDATE_CART_QUANTITY:
          return {
              ...state,
              cartOpen: true, 
              // loops through cart array and updates product that mathces action product
              cart: state.cart.map(product => {
                  if (action._id === product._id) {
                      product.purchaseQuantity = action.purchaseQuantity
                  }
                  return product
              })
          };

      case REMOVE_FROM_CART:
          //will go through cart array and remove whatever product is chosen from action
          let newState = state.cart.filter(product => {
              return product._id !== action._id;
          });
          return {
              ...state,
              cartOpen: newState.length > 0, // true/false if items in cart
              cart: newState
          };

      case CLEAR_CART:
          return {
              ...state,
              cartOpen: false,
              cart: [] //clear cart array of the state
          };

      case TOGGLE_CART:
          return {
              ...state,
              cartOpen: !state.cartOpen // opposite of whatever the current state is
          }

      case UPDATE_CATEGORIES:
          return {
              ...state,
              categories: [...action.categories]
          };

      case UPDATE_CURRENT_CATEGORY:
          return {
              ...state,
              currentCategory: action.currentCategory
          }

      default:
          return state;
  }
};

export default reducers;