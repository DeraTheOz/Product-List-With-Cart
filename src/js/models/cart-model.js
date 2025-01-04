// Holds cart items and methods for adding and removing items
export const cartModel = {
    // Cart items [] (name, price, quantity)
    cart: [],

    // Add items
    addItemToCart(menuItem) {
        this.log();
        return this.cart.push(menuItem);
    },

    log() {
        console.log('Cart', this.cart);
    }

    // Remove item

    // Total amount

    // Total items in cart
};
