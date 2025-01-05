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
        console.log(item.quantity);
        return item;
    }

    // updateItemQuantity(name, countType) {
    //     const item = this.getMenuItemByName(name);
    //     if (!item) return;
    //     console.log(item, name, countType);
    //     console.log(item.quantity);

    //     if (countType === 'increment') {
    //         if (item.quantity === 0) {
    //             item.quantity = 1; // Reset to 1 if incremented from zero
    //         } else {
    //             item.quantity++;
    //         }
    //     } else if (countType === 'decrement') {
    //         if (item.quantity > 0) {
    //             item.quantity--;
    //         }

    //         console.log(item.quantity);
    //         return item.quantity;
    //     }
    // }
};
