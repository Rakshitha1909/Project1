// cartReducer.js
const initialState = {
  cart: [],
  total:0
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_TO_CART':
      return [ ...state,  action.payload] ;
      case 'REMOVE_FROM_CART':
        return state.filter((product) => product.id !== action.payload);

        case 'PURCHASE_CART':
        const total = state.cart.reduce((acc, item) => acc + item.price, 0);
        return {
          ...state,
          purchased: true,
          total,
        };
        
        case 'REVOKE_CART':
          return {
            ...state,
            cart: [], 
            purchased: false,
            total: 0,
          };

    default:
      return state;
  }
};

export default cartReducer;
