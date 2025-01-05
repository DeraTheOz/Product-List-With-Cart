import icons from '../../assets/icons/icons.svg';

// Renders empty and filled state of cart
export const cartView = {
    _cartContainer: document.querySelector('.cart__container'),
    _cartItemContainer: document.querySelector('.cart__items--container'),
    
    getMenuItems(menuItem) {
        return [menuItem]
    },

    _menuItem: [
        {
            name: 'Waffle with berries',
            price: 6.5,
            quantity: 4,
            totalPrice: 6.5 * 4
        }
    ],

    renderEmptyCart() {
        const markup = `
            <!-- CART EMPTY START -->
            <aside class="cart">
                <h3 class="cart__title">Your Cart (<span aria-live="polite" class="cart__quantity">0</span>)</h3>
            
                <div class="cart__items--container items--center">
                    <svg class="icon-cart-empty" aria-hidden="true">
                        <use xlink:href="${icons}#illustration-empty-cart"></use>
                    </svg>
                    <p class="cart__empty--text">Your added items will appear here</p>
                </div>
            </aside>
            <!-- CART EMPTY END  -->
        `;
        this._cartContainer.insertAdjacentHTML('afterbegin', markup);
    },

    renderMenuItem() {
        this.getMenuItems.map(item => {
            const { name, price, quantity, totalPrice } = item;

            console.log(name);

            this._cartContainer.insertAdjacentHTML(
                'afterbegin',
                `
            <!-- CART ITEMS START -->
            <article class="cart__item">
                <div class="cart__item--details">
                    <p class="cart__item--name item--name">${name}</p>
                    <div class="item--details__box">
                        <span class="cart__item--quantity
                        item--quantity">${quantity}x</span>
                        <span
                        class="cart__item--price">@${price.toFixed(2)}</span>
                        <span
                        class="cart__item--price-total">$${totalPrice.toFixed(2)}</span>
                    </div>
                </div>
                <button type="button" class="cart__item--btn" aria-label="Remove Menu Item">
                    <svg class="icon-remove-item" aria-label="Remove Item">
                        <use xlink:href="${icons}#icon-remove-item"></use>
                    </svg>
                </button>
            </article>
            <!-- CART ITEMS END -->
        `
            );
        });
    },

    renderFilledCart() {
        const markup = `
            <!-- CART FILLED START -->
            <aside class="cart__filled">
                <h3 class="cart__title">Your Cart (<span aria-live="polite" class="cart__quantity">0</span>)</h3>
            
                <div class="cart__items--box">
                    <div class="cart__items--container">
                       
                    </div>
            
                    <!-- TOTAL AMOUNT CART ITEMS START -->
                    <div class="cart__items__total">
                        <p>Order Total</p>
                        <p class="cart__items__total--amount">$46.50</p>
                    </div>
                    <!-- TOTAL AMOUNT CART ITEMS END  -->
            
                    <!-- CART ITEM DELIVERY START -->
                    <div class="cart__item--delivery">
                        <svg class="icon-carbon">
                            <use xlink:href="${icons}#icon-carbon-neutral"></use>
                        </svg>
                        <p>This is a <span>carbon neutral</span> delivery</p>
                    </div>
                    <!-- CART ITEM DELIVERY END -->
                    <button type="button" class="cart__order--btn cta-btn">Confirm Order</button>
                </div>
            </aside>
            <!-- CART FILLED END -->
        `;
        
    }
};
