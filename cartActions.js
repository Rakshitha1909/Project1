// cartActions.js
export const ADD_TO_CART='ADD_TO_CART';
export const REMOVE_FROM_CART='REMOVE_FROM_CART'
export const PURCHASE_CART='PURCHASE_CART'
export const REVOKE_CART='REVOKE_CART'
export const addToCart = (product) => ({
    type: ADD_TO_CART,
    payload: product,
  });
  
  export const removeFromCart = (productId) => ({
    type: REMOVE_FROM_CART,
    payload: productId,
  });
  export const purchaseCart = () => {
    return {
      type:PURCHASE_CART,
    };
  };
  
  export const revokeCart = () => {
    return {
      type: REVOKE_CART,
    };
  };
  