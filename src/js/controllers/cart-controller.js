import { cartModel } from '../models/cart-model.js';
import { cartView } from '../views/cart-view.js';
import { orderModel } from '../models/order-model.js';

export const cartController = {
    init() {
        cartView.renderEmptyCart();
        console.log(cartModel._cartItems.length);
    },

    addItemToCart(item) {
        console.log(item);
        cartModel.addItem(item);

        // If the cart is empty, clear the empty state
        if (cartModel.getCartItems().length === 0) {
            // set to 1 before
            cartView.renderEmptyCart();
        }

        // Render the new item dynamically
        cartView.renderCartItem(item);
    },

    // Original code
    // addItemToCart(item) {
    //     console.log(item);
    //     cartModel.addItem(item);
    //     this.renderCart();
    // },

    removeItemFromCart() {},

    renderCart() {
        const cartItems = cartModel.getCartItems();
        console.log(cartItems);
        cartView.renderFilledCart(cartItems);
    }
};
