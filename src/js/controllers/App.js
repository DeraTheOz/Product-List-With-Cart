import { productModel } from '../models/product-model.js';
import { cartModel } from '../models/cart-model.js';
import { cartView } from '../views/cart-view.js';


import productData from '../../data/data.json';
import { resolveImagePaths } from '../utils/resolve-image-paths.js';
import { menuView } from '../views/menu-item-view.js';


// Resolve image paths
const menuData = resolveImagePaths(productData);

// Initialize and pass the data to menu-item-view
const menuItem = menuView(menuData);
menuItem.renderDefaultState();

const menuContainer = document.querySelector('.menu__grid');
menuContainer.addEventListener('click', function (e) {
    const btn = e.target;

    if (btn.closest('.menu__btn')) {
        const item = btn.closest('.menu__item');
        const name = item.querySelector('.menu__name')?.textContent;
        console.log(item);
        console.log(name);

        // Update clicked state
        menuItem.renderClickedState(item, name);
    }
});
