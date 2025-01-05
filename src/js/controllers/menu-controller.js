import { menuModel } from '../models/menu-model.js';
import { menuView } from '../views/menu-item-view.js';
import { cartModel } from '../models/cart-model.js';

/////////////////////////////////////////////////////
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

        // Handle add to cart click
        menuContainer.addEventListener('click', function (e) {
            const btn = e.target.closest('.menu__btn');
            if (!btn) return;
            console.log(btn);

            // Get clicked item and item name
            const itemEl = btn.closest('.menu__item');
            const itemName = itemEl.querySelector('.menu__name')?.textContent;
            console.log(itemEl);

            // Set initial quantity to 1
            menuModel.setItemQuantity(itemName, 1);

            // Fetch full item details from the model
            const clickedMenuItem = menuModel.getMenuItemByName(itemName);
            console.log(clickedMenuItem);
            if (!clickedMenuItem) return;

            // Update button to clicked state
            menuView().updateButtonState(itemEl, clickedMenuItem, true);

            // Pass the item to the cart controller
            cartModel.addItemToCart(clickedMenuItem);

            ////////////////////////////////
            // Updated button state
            const incrementBtn = itemEl.querySelector('.menu__btn--increment');
            const decrementBtn = itemEl.querySelector('.menu__btn--decrement');
            console.log(incrementBtn, decrementBtn);

            incrementBtn.addEventListener('click', function (e) {
                if (!e.target.closest('.menu__btn--increment')) return;
                console.log(e.target);

                const updatedItem = menuModel.incrementItemQuantity(itemName);
                menuView().updateQuantityDisplay(itemEl, updatedItem.quantity);
                console.log(updatedItem, updatedItem.quantity);
            });

            decrementBtn.addEventListener('click', function (e) {
                if (!e.target.closest('.menu__btn--decrement')) return;
                console.log(e.target);

                const updatedItem = menuModel.decrementItemQuantity(itemName);
                menuView().updateQuantityDisplay(itemEl, updatedItem.quantity);
                console.log( updatedItem, updatedItem.quantity);
            });
        });
    },

    incrementEvent() {
        const menuContainer = document.querySelector('.menu__grid');

        menuContainer.addEventListener('click', function (e) {
            const btn = e.target.closest('button');
            if (!btn) return;
            console.log(btn);

            const itemEl = btn.closest('.menu__item');
            const itemName = itemEl.querySelector('.menu__name')?.textContent;
            console.log(itemEl);

            // Check if the button is an increment or decrement button
            const operation = btn.dataset.name; // 'increment' or 'decrement'
            console.log(operation);

            if (operation === 'increment') {
                // Increment quantity in the model
                const updatedItem = menuModel.incrementItemQuantity(itemName);

                // Update the button state in the view
                menuView().updateButtonState(itemEl, updatedItem, true);
            }
        });
    }
};

// getItemQuantity() {
//     return this._menuContainer.addEventListener('click', function (e) {
//         const btn = e.target.closest('button');
//         if (!btn) return;
//         console.log(btn);
//         console.log(btn.dataset);

//         const itemEl = btn.closest('.menu__item');
//         const itemName = itemEl.querySelector('.menu__name')?.textContent;
//         // console.log(itemEl, itemName);

//         const counterType = btn.dataset.name;
//         console.log('CountType', counterType);

//         if (counterType === 'increment' || counterType === 'decrement') {
//             const quantity = menuModel.updateItemQuantity(itemName, counterType);
//             console.log(counterType, quantity);

//             menuView().updateQuantity(itemEl, quantity);
//         }

//         if (counterType === 'add') {
//             const clickedMenuItem = menuModel.getMenuItemByName(itemName);
//             console.log(clickedMenuItem);

//             // Set initial quantity to 1
//             menuModel.setItemQuantity(itemName, 1);

//             // Update button to clicked state
//             menuView().updateButtonState(itemEl, clickedMenuItem, true);

//             // menuModel.updateItemQuantity(itemName, 'increment');

//             // Add clicked item to cart
//             cartModel.addItemToCart(clickedMenuItem);
//         }
//     });
// }
