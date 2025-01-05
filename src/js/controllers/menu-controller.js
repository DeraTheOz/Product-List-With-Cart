import { menuModel } from '../models/menu-model.js';
import { menuView } from '../views/menu-item-view.js';
import { cartModel } from '../models/cart-model.js';

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
                menuView().updateButtonState(itemEl, clickedMenuItem, true);
                cartModel.addItemToCart(clickedMenuItem);
                return;
            }

            // Increment Button Logic
            if (incrementBtn) {
                const updatedItem = menuModel.incrementItemQuantity(itemName);
                menuView().updateQuantityDisplay(itemEl, updatedItem.quantity);
                return;
            }

            // Decrement Button Logic
            if (decrementBtn) {
                const updatedItem = menuModel.decrementItemQuantity(itemName);

                if (updatedItem.quantity === 0) {
                    menuView().renderSingleDefaultState(itemEl, updatedItem);
                } else {
                    menuView().updateQuantityDisplay(itemEl, updatedItem.quantity);
                }
                return;
            }
        });
    }
};

// /////////////////////////////////////////////////////
// My default code
// export const menuController = {
//     init() {
//         // Fetch menu data
//         const menuData = menuModel.getMenuData();
//         console.log(menuData);

//         // Render menu items
//         menuView().renderDefaultState(menuData);

//         // Event listeners
//         this.eventListeners();
//     },

//     eventListeners() {
//         const menuContainer = document.querySelector('.menu__grid');

//         // Handle add to cart click
//         menuContainer.addEventListener('click', function (e) {
//             const btn = e.target.closest('.menu__btn');
//             if (!btn) return;

//             // Get clicked item and item name
//             const itemEl = btn.closest('.menu__item');
//             const itemName = itemEl.querySelector('.menu__name')?.textContent;

//             // Set quantity to 1 when "Add to cart" is clicked
//             menuModel.setItemQuantity(itemName, 1);

//             // Fetch full item details from the model
//             const clickedMenuItem = menuModel.getMenuItemByName(itemName);
//             console.log(clickedMenuItem);
//             if (!clickedMenuItem) return;

//             // Update button to clicked state
//             menuView().updateButtonState(itemEl, clickedMenuItem, true);

//             // Pass the item to the cart controller
//             cartModel.addItemToCart(clickedMenuItem);

//             ////////////////////////////////
//             // Updated button state
//             const incrementBtn = itemEl.querySelector('.menu__btn--increment');
//             const decrementBtn = itemEl.querySelector('.menu__btn--decrement');

//             let updatedItem = null;

//             incrementBtn.addEventListener('click', function (e) {
//                 if (!e.target.closest('.menu__btn--increment')) return;

//                 // const updatedItem = menuModel.incrementItemQuantity(itemName);
//                 updatedItem = menuModel.incrementItemQuantity(itemName);
//                 menuView().updateQuantityDisplay(itemEl, updatedItem.quantity);
//                 console.log(updatedItem, updatedItem.quantity);
//             });

//             decrementBtn.addEventListener('click', function (e) {
//                 if (!e.target.closest('.menu__btn--decrement')) return;

//                 // const updatedItem = menuModel.decrementItemQuantity(itemName);
//                 updatedItem = menuModel.decrementItemQuantity(itemName);
//                 menuView().updateQuantityDisplay(itemEl, updatedItem.quantity);
//                 console.log(updatedItem, updatedItem.quantity);

//                 console.log(menuController._menuData);
//                 if (updatedItem.quantity === 0) {
//                     menuView().renderSingleDefaultState(itemEl, updatedItem);
//                     // console.log(menuView().renderSingleDefaultState(itemEl, updatedItem));
//                 } else {
//                     menuView().updateButtonState(itemEl, updatedItem, true);
//                 }
//             });
//         });
//     }
// };

// Fetch menu data
// _menuData: menuModel.getMenuData(),

// init() {
//     console.log(this._menuData);

//     // Render menu items
//     menuView().renderDefaultState(this._menuData);

//     // Event listeners
//     this.eventListeners();
// },
