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

        // Locate cart item using it's data-name and remove from cart
        const cartItemEl = document.querySelector(`.cart__item[data-name="${itemName}"]`);
        console.log(cartItemEl);
        if (cartItemEl) cartItemEl.remove();

        // Get remaining cart items from model
        const remainingItems = cartModel.getCartItems();
        console.log('REMOVED ITEM ', itemName);
        console.log('REMAINING ITEMS ', remainingItems);

        if (remainingItems.length === 0) {
            cartView.renderEmptyCart();
        } else {
            // Update cart summary
            cartView.updateCartSummary(document.querySelector('.cart__items--container'));
        }
    },



    renderCart(item) {
        console.log(item);

        // cartView.renderCartItem(cartItems);
        cartView.renderCartItem(item);
    }
};
