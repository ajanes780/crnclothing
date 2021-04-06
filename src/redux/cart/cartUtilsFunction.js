// excepts the current cart items and the item to add
// then uses find to check and see if its in the array
// sets it to const called existing cart items

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

// we will pass in the current cart item and the one to remove
export const removeItemFromCart = (cartItems, cartItemToRemove) => {
  // we will check and make sure the existing item matches the one we want to remove
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === cartItemToRemove.id
  );

  // filter out all the items that are not equal to the one we want to remove the one we don't want and if its one  remove it
  if (existingCartItem.quantity === 1) {
    return cartItems.filter((cartItem) => cartItem.id !== cartItemToRemove.id);
  }

  // decrease the quantity of the item that we want to lower
  return cartItems.map((cartItem) =>
    cartItem.id === cartItemToRemove.id
      ? { ...cartItem, quantity: cartItem.quantity - 1 }
      : cartItem
  );
};
