import productData from '../../data/data.json';
import { resolveImagePaths } from '../utils/resolve-image-paths.js';

export const menuModel = {
    _menuData: productData.map(item => ({ ...item, quantity: 0 })),

    getMenuData() {
        const resolvedData = resolveImagePaths(this._menuData);
        return resolvedData;
    },

    getMenuItemByName(name) {
        return this._menuData.find(item => item.name === name);
    },

    setItemQuantity(name, quantity = 1) {
        const item = this.getMenuItemByName(name);
        if (!item) return;
        item.quantity = quantity;
        return item;
    },

    incrementItemQuantity(name) {
        const item = this.getMenuItemByName(name);
        if (!item) return null;

        item.quantity++;
        return item;
    },

    decrementItemQuantity(name) {
        const item = this.getMenuItemByName(name);
        if (!item) return null;

        item.quantity === 0 ? (item.quantity = 0) : item.quantity--;
        return item;
    },

    resetItemQuantity(itemName) {
        const item = this._menuData.find(menuItem => menuItem.name === itemName);
        item.quantity = 0;
    },

    getAllMenuItems() {
        return this._menuData;
    }
};

// Testing localStorage
// export const menuModel = {
//     _menuData: productData.map(item => ({ ...item, quantity: 0 })),
//     _menuItems: JSON.parse(localStorage.getItem('menuItems')) || [],

//     getMenuData() {
//         const resolvedData = resolveImagePaths(this._menuData);
//         return resolvedData;
//     },

//     setMenuItems(menuItems) {
//         this._menuData = menuItems;
//         this._saveToLocalStorage();
//     },

//     getMenuItemByName(name) {
//         return this._menuData.find(item => item.name === name);
//     },

//     resetItemQuantity(itemName) {
//         const menuItem = this.getMenuItemByName(itemName);
//         if (menuItem) menuItem.quantity = 0;
//         this._saveToLocalStorage();
//     },

//     getAllMenuItems() {
//         return this._menuData;
//     },

//     _saveToLocalStorage() {
//         localStorage.setItem('menuItems', JSON.stringify(this._menuItems));
//     }
// };
