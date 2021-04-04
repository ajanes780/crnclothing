// excepts the current cart items and the item to add
// then uses find to check and see if its in the array
// sets it to const called exisiting cart items

export const addItemToCart = (cartItems, cartItemToAdd) => {
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === cartItemToAdd.id
  );

  // if the items exists  we are going to update the quantity of that item in our state
  if (existingCartItem) {
    return cartItems.map((cartItem) =>
      cartItem.id === cartItemToAdd.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    );
  }
  // we will add the quantity the first time we add that item
  return [...cartItems, { ...cartItemToAdd, quantity: 1 }];
};
