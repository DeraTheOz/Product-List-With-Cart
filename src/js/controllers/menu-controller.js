import { menuModel } from '../models/menu-model.js';
import { menuView } from '../views/menu-item-view.js';
import { cartModel } from '../models/cart-model.js';

export const menuController = {
    init() {
        // Fetch menu data
        const menuData = menuModel.getMenuData();
        console.log(menuData);

        // Render menu items
        menuView().renderDefaultState(menuData);

        // Event listeners
        this.eventListeners();
    },

    eventListeners() {
        const menuContainer = document.querySelector('.menu__grid');

        menuContainer.addEventListener('click', function (e) {
            const btn = e.target.closest('.menu__btn');
            if (!btn) return;

            // Get clicked item and item name
            const itemEl = btn.closest('.menu__item');
            const itemName = itemEl.querySelector('.menu__name')?.textContent;

            // Fetch full item details from the model
            const clickedMenuItem = menuModel.getMenuItemByName(itemName);
            console.log(clickedMenuItem);
            if (!clickedMenuItem) return;

            // Update clicked state in the view
            const isClicked = btn ? true : false;
            menuView().updateButtonState(itemEl, clickedMenuItem, isClicked);

            // Pass the item to the cart controller
            cartModel.addItemToCart(clickedMenuItem);
        });
    }
};
