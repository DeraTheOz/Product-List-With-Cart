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
        if (itemIndex === -1) return null;

        // Remove the item from cart
        const removedItem = this._cartItems.splice(itemIndex, 1)[0];
        const isCartEmpty = this._cartItems.length === 0; // Checks if cart is empty

        return { removedItem, isCartEmpty };
    },

    updateItem(menuItem) {
        const existingItem = this._cartItems.find(cartItem => cartItem.name === menuItem.name);
        if (existingItem) {
            existingItem.quantity = menuItem.quantity;
            existingItem.price = menuItem.price;
        }
    },

    getCartItems() {
        return this._cartItems;
    }
};

// export const cartModel = {
//     _cartItems: JSON.parse(localStorage.getItem('cartItems')) || [],

//     addItem(menuItem) {
//         const existingItem = this._cartItems.find(cartItem => cartItem.name === menuItem.name);
//         if (!existingItem) {
//             this._cartItems.push({ ...menuItem });
//             this._saveToLocalStorage();
//         }
//     },

//     removeCartItem(itemName) {
//         const itemIndex = this._cartItems.findIndex(cartItem => cartItem.name === itemName);
//         if (itemIndex === -1) return null;

//         const removedItem = this._cartItems.splice(itemIndex, 1)[0];
//         const isCartEmpty = this._cartItems.length === 0;

//         this._saveToLocalStorage();
//         return { removedItem, isCartEmpty };
//     },

//     updateItem(menuItem) {
//         const existingItem = this._cartItems.find(cartItem => cartItem.name === menuItem.name);
//         if (existingItem) {
//             existingItem.quantity = menuItem.quantity;
//             existingItem.price = menuItem.price;
//             this._saveToLocalStorage();
//         }
//     },

//     getCartItems() {
//         return this._cartItems;
//     },

//     clearCart() {
//         this._cartItems = [];
//         this._saveToLocalStorage();
//     },

//     _saveToLocalStorage() {
//         localStorage.setItem('cartItems', JSON.stringify(this._cartItems));
//     }
// };
