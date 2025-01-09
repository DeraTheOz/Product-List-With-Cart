import { cartModel } from '../models/cart-model.js';
import { cartView } from '../views/cart-view.js';
import { menuModel } from '../models/menu-model.js';
import { menuView } from '../views/menu-item-view.js';
import { orderController } from './order-controller.js';

export const cartController = {
    init() {
        cartView.renderEmptyCart();
        this.eventListeners();
    },

    eventListeners() {
        const cartContainer = document.querySelector('.cart__container');

        cartContainer.addEventListener('click', e => {
            const confirmOrderBtn = cartContainer.querySelector('.cart__order--btn');
            if (e.target === confirmOrderBtn) {
                orderController.init();
            }

            const removeBtn = e.target.closest('.cart__item--btn');
            if (!removeBtn) return;

            const cartItemEl = removeBtn.closest('.cart__item');
            const itemName = cartItemEl.dataset.name;

            this.handleRemoveCartItem(itemName);
        });
    },

    addItemToCart(item) {
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
        cartModel.updateItem(menuItem);
        this.renderCart(menuItem);
    },

    handleRemoveCartItem(itemName) {
        // Restore menu item's default state
        // Find matching menu item
        const menuNameEl = Array.from(document.querySelectorAll('.menu__name')).find(
            item => item.innerHTML === itemName
        );
        const menuItemEl = menuNameEl.closest('.menu__item');

        // Reset menu item's default state
        if (menuItemEl) {
            menuModel.resetItemQuantity(itemName);
            const updatedMenuItem = menuModel.getMenuItemByName(itemName);
            menuView().renderSingleDefaultState(menuItemEl, updatedMenuItem);
        }

        // Remove item from cart
        const { removedItem, isCartEmpty } = cartModel.removeCartItem(itemName);
        if (!removedItem) return;

        // Find cart item using it's data-name and remove from cart
        const cartItemEl = document.querySelector(`.cart__item[data-name="${itemName}"]`);
        console.log(cartItemEl);
        if (cartItemEl) cartItemEl.remove();

        // Handle empty cart state
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
