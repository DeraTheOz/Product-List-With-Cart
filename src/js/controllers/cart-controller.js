import { cartModel } from '../models/cart-model.js';
import { cartView } from '../views/cart-view.js';
import { orderModel } from '../models/order-model.js';
import { menuView } from '../views/menu-item-view.js';

export const cartController = {
    init() {
        cartView.renderEmptyCart();
        this.eventListeners();
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

    removeItemFromCart(menuItemEl, itemName) {
        // 1, Remove item from cart model
        const removedItem = cartModel.removeItemByName(itemName);
        console.log(removedItem);

        // 2, Update cart view
        cartView.removeCartItemFromView(itemName);

        // 3, Check if cart is empty
        if (cartModel.getCartItems().length === 0) {
            cartView.renderEmptyCart();
        }

        // 4, Reset menu item state
        if (removedItem) {
            // const menuItemEl = document.querySelector(`.cart__item[data-name="${itemName}"]`);
            console.log(menuItemEl);

            // Reset quantity in the model
            removedItem.quantity = 0;
            menuView().renderSingleDefaultState(menuItemEl, removedItem);
            // if (menuItemEl) {
            // }
        }
    },

    renderCart(item) {
        cartView.renderCartItem(item);
    },

    eventListeners() {
        const cartItemsContainer = document.querySelector('.cart__items--container');
        console.log(cartItemsContainer);

        cartItemsContainer.addEventListener('click', function (e) {
            const removeBtn = e.target.closest('.cart__item--btn');
            if (!removeBtn) return;

            // Get name of item
            const cartItemEl = removeBtn.closest('.cart__item');
            const cartItemName = cartItemEl.dataset.name;
            console.log(cartItemEl);
            console.log(cartItemName);

            // Remove item
            console.log(cartController);
            cartController.removeItemFromCart(cartItemEl, cartItemName);
        });
    }
};
