import { cartModel } from '../models/cart-model.js';
import { cartView } from '../views/cart-view.js';

export const cartController = {
    // Initialize empty cart
    init() {
        cartModel.log();
    }
};
