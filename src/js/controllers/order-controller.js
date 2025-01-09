import { menuModel } from '../models/menu-model.js';
import { menuView } from '../views/menu-view.js';
import { cartModel } from '../models/cart-model.js';
import { cartView } from '../views/cart-view.js';
import { orderView } from '../views/order-view.js';

export const orderController = {
    init() {
        this.renderOrderModal();
        this.eventListeners();
    },

    renderOrderModal() {
        // Get cart items from the model
        const cartItems = cartModel.getCartItems();

        // Get total order amount
        const totalAmount = cartItems.reduce((sum, item) => sum + item.quantity * item.price, 0);

        // Render the modal
        orderView.renderModal(cartItems, totalAmount);
    },

    eventListeners() {
        const modalOverlay = document.querySelector('.overlay');
        const startNewOrderBtn = modalOverlay.querySelector('.order__confirmation--btn');

        // Handle Start New Order button click
        startNewOrderBtn.addEventListener('click', () => {
            this.resetCart();
            this.closeOrderModal();
        });
    },

    resetCart() {
        // Clear the cart
        cartModel._cartItems = [];

        // Reset all menu items to their default state
        const menuItems = menuModel.getAllMenuItems();
        menuItems.forEach(item => {
            menuModel.resetItemQuantity(item.name);
        });

        // Re-render menu items and cart empty state
        menuView().renderAllDefaultStates(menuItems);
        cartView.clearCart();
    },

    closeOrderModal() {
        // Remove modal and overlay
        document.querySelector('.overlay').remove();

        // Re-enable page scrolling
        document.documentElement.style.overflow = '';
    }
};
