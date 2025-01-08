import { orderModel } from '../models/order-model.js';
import { orderView } from '../views/order-view.js';
import { cartModel } from '../models/cart-model.js';

// Receives user actions e.g 'Confirm Order'
// Validates cart state via orderModel or cartModel
// Render order confirmation modal via orderView
export const orderController = {
    init() {}
};
