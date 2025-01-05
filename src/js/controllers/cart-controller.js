import { cartModel } from '../models/cart-model.js';
import { cartView } from '../views/cart-view.js';
import { orderModel } from '../models/order-model.js';

export const cartController = {
    init() {
        cartView.renderEmptyCart();
        this.renderCart();
    },

    addItemToCart(item) {
        console.log(item);
        cartModel.addItem(item);
        this.renderCart();
    },

    removeItemFromCart() {},

    renderCart() {
        const cartItems = cartModel.getCartItems();
        console.log(cartItems);
        cartView.renderCart(cartItems);
    }
};
