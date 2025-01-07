import { menuController } from './menu-controller.js';
import { cartController } from './cart-controller.js';

const init = () => {
    menuController.init();
    cartController.init();
};
init();
