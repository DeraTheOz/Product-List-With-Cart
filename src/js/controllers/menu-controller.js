import { menuModel } from '../models/menu-model.js';
import { menuView } from '../views/menu-view.js';
import { cartModel } from '../models/cart-model.js';
import { cartView } from '../views/cart-view.js';
import { cartController } from '../controllers/cart-controller.js';

/////////////////////////////////////////////////////
export const menuController = {
    init() {
        // Fetch menu data
        const menuData = menuModel.getMenuData();

        // Render menu items
        menuView().renderDefaultState(menuData);

        // Event listeners
        this.eventListeners();
    },

    eventListeners() {
        const menuContainer = document.querySelector('.menu__grid');

        menuContainer.addEventListener('click', function (e) {
            const incrementBtn = e.target.closest('.menu__btn--increment');
            const decrementBtn = e.target.closest('.menu__btn--decrement');
            const addToCartBtn = e.target.closest('.menu__btn');
            const itemEl = e.target.closest('.menu__item');
            if (!itemEl) return;

            const itemName = itemEl.querySelector('.menu__name')?.textContent;

            // Add to Cart Button Logic
            if (addToCartBtn) {
                menuModel.setItemQuantity(itemName, 1);
                const clickedMenuItem = menuModel.getMenuItemByName(itemName);
                if (!clickedMenuItem) return;

                menuView().updateButtonState(itemEl, clickedMenuItem, true);
                cartController.addItemToCart(clickedMenuItem);
                return;
            }

            // Increment Button Logic
            if (incrementBtn) {
                const updatedItem = menuModel.incrementItemQuantity(itemName);

                // Update quantity in cart
                cartController.updateCartItem(updatedItem);

                menuView().updateQuantityDisplay(itemEl, updatedItem.quantity);

                console.log('increased');
                return;
            }

            // Decrement Button Logic
            if (decrementBtn) {
                const updatedItem = menuModel.decrementItemQuantity(itemName);

                console.log('decreased');

                // Remove item from cart if quantity reaches 0
                if (updatedItem.quantity === 0) {
                    cartController.handleRemoveCartItem(itemName);
                    menuView().renderSingleDefaultState(itemEl, updatedItem);
                } else {
                    // Update quantity in cart
                    cartController.updateCartItem(updatedItem);
                    menuView().updateQuantityDisplay(itemEl, updatedItem.quantity);
                }
                return;
            }
        });
    }
};
