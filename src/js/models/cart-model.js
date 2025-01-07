import { cartView } from '../views/cart-view.js';

// Holds cart items and methods for adding and removing items
export const cartModel = {
    _cartItems: [],

    // Add items
    addItem(menuItem) {
        const existingItem = this._cartItems.find(cartItem => cartItem.name === menuItem.name);
        if (!existingItem) this._cartItems.push({ ...menuItem });
    },

    // Remove item
    removeCartItem(itemName) {
        const itemIndex = this._cartItems.findIndex(cartItem => cartItem.name === itemName);
        console.log(itemIndex);
        if (itemIndex === -1) return null;

        // Remove the item from cart
        const removedItem = this._cartItems.splice(itemIndex, 1)[0];
        console.log(removedItem);

        const isCartEmpty = this._cartItems.length === 0; // Checks if cart is empty

        return { removedItem, isCartEmpty };
    },

    removeItemByName(itemName) {
        const itemIndex = this._cartItems.findIndex(item => item.name === itemName);
        if (itemIndex === -1) return null;
        
            // Remove the item from cart
            return this._cartItems.splice(itemIndex, 1)[0];
            

        
    },

    updateItem(menuItem) {
        console.log(menuItem);
        const existingItem = this._cartItems.find(cartItem => cartItem.name === menuItem.name);
        if (existingItem) {
            existingItem.quantity = menuItem.quantity;
            existingItem.price = menuItem.price;
        }
        console.log(existingItem);
    },

    getCartItems() {
        return this._cartItems;
    }
};
