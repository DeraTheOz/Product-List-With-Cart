import productData from '../data/data.json';
import { resolveImagePaths } from '../js/utils/resolve-image-paths.js';
import { menuView } from '../js/views/menu-item-view.js';

// Resolve image paths
const resolvedData = resolveImagePaths(productData);

// Initialize and render menu view
const productView = menuView(resolvedData);
productView.render();
