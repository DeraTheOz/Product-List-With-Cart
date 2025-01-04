import productData from '../../data/data.json';
import { resolveImagePaths } from '../utils/resolve-image-paths.js';

export const menuModel = {
    _menuData: productData,

    getMenuData() {
        const resolvedData = resolveImagePaths(this._menuData);
        return resolvedData;
    },

    getMenuItemByName(name) {
        return this._menuData.find(item => item.name === name);
    }
};
