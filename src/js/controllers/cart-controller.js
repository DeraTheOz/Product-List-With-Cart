import { cartModel } from '../models/cart-model.js';
import { cartView } from '../views/cart-view.js';
import { orderModel } from '../models/order-model.js';

export const cartController = {
    init() {
        cartView.renderEmptyCart();
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

    handleRemoveCartItem(itemName) {
        const { removedItem, isCartEmpty } = cartModel.removeCartItem(itemName);
        if (!removedItem) return;

        // Find cart item using it's data-name and remove from cart
        const cartItemEl = document.querySelector(`.cart__item[data-name="${itemName}"]`);
        if (cartItemEl) cartItemEl.remove();

        if (isCartEmpty) {
            cartView.renderEmptyCart();
        } else {
            // Update cart summary
            cartView.updateCartSummary(document.querySelector('.cart__items--container'));
        }
    },

    renderCart(item) {
        cartView.renderCartItem(item);
    }
};
