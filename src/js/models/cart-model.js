import { cartView } from '../views/cart-view.js';

// Holds cart items and methods for adding and removing items
export const cartModel = {
    _cartItems: [],

    // Add items
    addItem(menuItem) {
        console.log(menuItem);
        const existingItem = this._cartItems.find(cartItem => cartItem.name === menuItem.name);
        if (!existingItem) this._cartItems.push({ ...menuItem });
    },

    // Remove item
    removeItem(itemName) {
        this._cartItems = this._cartItems.filter(cartItem => cartItem.name !== itemName);
    },

    updateItem(menuItem) {
        const existingItem = this._cartItems.find(cartItem => cartItem.name === menuItem.name);
        if (existingItem) {
            existingItem.quantity = menuItem.quantity;
            existingItem.price = menuItem.price;
        }
        console.log(menuItem);
        console.log(existingItem);
    },

    getCartItems() {
        return this._cartItems;
    },

    // Total amount
    // increaseCartItem(itemName) {
    //     const updatedItem = this._cartItems.find(cartItem => cartItem.name === itemName);
    //     updatedItem.quantity++;

    //     console.log('NEWSEST UPDATED ITEM', updatedItem);

    //     cartView.renderCartItem(updatedItem);
    // },

    // Total items in cart
    getTotalItemsInCart() {}
};
