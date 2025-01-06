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

        // If the cart is empty, clear the empty state
        if (cartModel.getCartItems().length === 0) {
            cartView.renderEmptyCart();
        }

        // Add the item to the model
        cartModel.addItem(item);

        // Render the new item
        cartView.renderCartItem(item);
    },

    updateCartItem(menuItem) {
        console.log(menuItem);
        cartModel.updateItem(menuItem);
        this.renderCart(menuItem);
    },

    removeCartItem(itemName) {
        cartModel.removeItem(itemName);
        // this.renderCart();

        const remainingItems = cartModel.getCartItems();
        if (remainingItems.length === 0) {
            cartView.renderEmptyCart();
        } else {
            cartView.renderCartItem(remainingItems);
        }
    },

    renderCart(item) {
        console.log(item);

        // cartView.renderCartItem(cartItems);
        cartView.renderCartItem(item);
    }
};
