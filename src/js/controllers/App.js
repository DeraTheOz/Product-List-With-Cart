// import productData from '../../data/data.json';
import { resolveImagePaths } from '../utils/resolve-image-paths.js';
import { menuModel } from '../models/menu-model.js';
import { menuView } from '../views/menu-item-view.js';
import { menuController } from './menu-controller.js';
import { cartController } from './cart-controller.js';

menuController.init();
cartController.init();

/*
// Resolve image paths
const menuData = resolveImagePaths(productData);

// Initialize and pass the data to menu-item-view
const menuItem = menuView(menuData);
menuItem.renderDefaultState();

const menuContainer = document.querySelector('.menu__grid');
menuContainer.addEventListener('click', function (e) {
    const btn = e.target.closest('.menu__btn');
    if (!btn) return;

    const item = btn.closest('.menu__item');
    const name = item.querySelector('.menu__name')?.textContent;
    console.log(item);
    console.log(name);

    // Update clicked state
    menuItem.renderClickedState(item, name);
});
*/
