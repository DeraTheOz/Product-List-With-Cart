import icons from '../../assets/icons/icons.svg';

export const cartView = {
    renderEmptyCart() {
        const cartContainer = document.querySelector('.cart__container');

        const emptyMarkup = `
            <aside class="cart__empty">
                <h3 class="cart__title">Your Cart (<span aria-live="polite" class="cart__quantity">0</span>)</h3>
                <div class="cart__items--container items--center">
                    <svg class="icon-cart-empty" aria-hidden="true">
                        <use xlink:href="${icons}#illustration-empty-cart"></use>
                    </svg>
                    <p class="cart__empty--text">Your added items will appear here</p>
                </div>
            </aside>
        `;
        cartContainer.innerHTML = emptyMarkup;
    },

    renderCartItem(item) {
        const cartContainer = document.querySelector('.cart__container');

        // Check if the filled state already exists
        let cartFilledContainer = cartContainer.querySelector('.cart__filled');
        if (!cartFilledContainer) {
            // If not, create and add it
            const filledMarkup = `
                <aside class="cart__filled">
                    <h3 class="cart__title">Your Cart (<span aria-live="polite" class="cart__quantity">1</span>)</h3>
                    <div class="cart__items--box">
                        <div class="cart__items--container"></div>
                        <div class="cart__items__total">
                            <p>Order Total</p>
                            <p class="cart__items__total--amount">$0.00</p>
                        </div>
                        <div class="cart__item--delivery">
                            <svg class="icon-carbon">
                                <use xlink:href="${icons}#icon-carbon-neutral"></use>
                            </svg>
                            <p>This is a <span>carbon neutral</span> delivery</p>
                        </div>
                        <button type="button" class="cart__order--btn cta-btn">Confirm Order</button>
                    </div>
                </aside>
            `;
            cartContainer.innerHTML = filledMarkup;
            cartFilledContainer = cartContainer.querySelector('.cart__filled');
        }

        // Check if the item already exists in the cart
        console.log(cartFilledContainer);
        const existingCartItem = cartFilledContainer.querySelector(`.cart__item[data-name="${item.name}"]`);
        console.log(existingCartItem);

        if (existingCartItem) {
            this.updateCartItem(existingCartItem, item);
        } else {
            // Insert the new cart item at the top
            const cartItemsContainer = cartFilledContainer.querySelector('.cart__items--container');
            const itemMarkup = `
            <article class="cart__item" data-name="${item.name}">
                <div class="cart__item--details">
                    <p class="cart__item--name item--name">${item.name}</p>
                    <div class="item--details__box">
                        <span class="cart__item--quantity item--quantity">${item.quantity}x</span>
                        <span class="cart__item--price">@$${item.price.toFixed(2)}</span>
                        <span class="cart__item--price-total">$${(item.price * item.quantity).toFixed(2)}</span>
                    </div>
                </div>
                <button type="button" class="cart__item--btn" aria-label="Remove Menu Item">
                    <svg class="icon-remove-item" aria-hidden="true">
                        <use xlink:href="${icons}#icon-remove-item"></use>
                    </svg>
                </button>
            </article>
        `;

            cartItemsContainer.insertAdjacentHTML('afterbegin', itemMarkup);
        }

        // Update the total quantity and amount
        this.updateCartSummary(cartFilledContainer.querySelector('.cart__items--container'));
    },

    updateCartItem(cartItemEl, item) {
        const quantityEl = cartItemEl.querySelector('.cart__item--quantity');
        const priceTotalEl = cartItemEl.querySelector('.cart__item--price-total');

        // Update quantity and total price
        quantityEl.textContent = `${item.quantity}x`;
        priceTotalEl.textContent = `$${(item.price * item.quantity).toFixed(2)}`;
    },

    updateCartSummary(cartItemsContainer) {
        if (!cartItemsContainer) return;
        console.log(cartItemsContainer);
        const totalItems = cartItemsContainer.querySelectorAll('.cart__item').length;
        console.log(totalItems);
        const totalAmount = Array.from(cartItemsContainer.querySelectorAll('.cart__item--price-total')).reduce(
            (sum, priceEl) => sum + parseFloat(priceEl.textContent.slice(1)),
            0
        );
        const totalCartQuantity = Array.from(cartItemsContainer.querySelectorAll('.item--quantity')).reduce(
            (quantityEl, quantityAmount) => quantityEl + parseFloat(quantityAmount.textContent),
            0
        );
        console.log(totalCartQuantity);

        const cartQuantityEl = document.querySelector('.cart__quantity');
        const totalAmountEl = document.querySelector('.cart__items__total--amount');

        console.log(cartQuantityEl);
        cartQuantityEl.textContent = totalCartQuantity;
        totalAmountEl.textContent = `$${totalAmount.toFixed(2)}`;
    },

    clearCart() {
        const cartContainer = document.querySelector('.cart__container');
        cartContainer.innerHTML = '';
        this.renderEmptyCart();
    }
};
/////////////////////////////////

/* 
// Original code 
// Renders empty and filled state of cart
export const cartView = {
    renderEmptyCart() {
        const cartContainer = document.querySelector('.cart__container');

        const emptyMarkup = `
            <!-- CART EMPTY START -->
            <aside class="cart__empty">
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
        cartContainer.insertAdjacentHTML('afterbegin', emptyMarkup);
    },

    renderFilledCart(cartItems) {
        console.log(cartItems);
        const cartContainer = document.querySelector('.cart__container');
        const cartEmptyContainer = cartContainer.querySelector('.cart__empty');
        const cartFilledContainer = document.querySelector('.cart__filled');

        if (cartItems.length === 0) {
            cartContainer.innerHTML = '';
            this.renderEmptyCart();
        } else {
            cartContainer.innerHTML = '';

            const itemsMarkup = cartItems
                .map(
                    item => `
                    <!-- CART FILLED START -->
                    <aside class="cart__filled">
                        <h3 class="cart__title">Your Cart (<span
                        aria-live="polite"
                        class="cart__quantity">${cartItems.length}</span>)</h3>
                    
                        <div class="cart__items--box">
                            <div class="cart__items--container">
                                <!-- CART ITEMS START -->
                                <article class="cart__item">
                                    <div class="cart__item--details">
                                        <p class="cart__item--name
                                        item--name">${item.name}</p>
                                        <div class="item--details__box">
                                            <span class="cart__item--quantity
                                            item--quantity">${item.quantity}x</span>
                                            <span
                                            class="cart__item--price">@$${item.price.toFixed(2)}</span>
                                            <span
                                            class="cart__item--price-total">$${(item.price * item.quantity).toFixed(
                                                2
                                            )}</span>
                                        </div>
                                    </div>
                                    <button type="button" class="cart__item--btn" aria-label="Remove Menu Item">
                                        <svg class="icon-remove-item" aria-label="Remove Item">
                                            <use xlink:href="${icons}#icon-remove-item"></use>
                                        </svg>
                                    </button>
                                </article>
                                <!-- CART ITEMS END -->
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
                `
                )
                .join('');
            cartContainer.innerHTML = itemsMarkup;
        }
    }
};
*/

/* 
renderCartItem(item) {
        const cartItemsContainer = document.querySelector('.cart__items--container');

        const itemMarkup = `
             <!-- CART ITEMS START -->
            <article class="cart__item">
                <div class="cart__item--details">
                    <p class="cart__item--name item--name">${item.name}</p>
                    <div class="item--details__box">
                        <span class="cart__item--quantity
                        item--quantity">${item.quantity}x</span>
                        <span class="cart__item--price">@$${item.price.toFixed(2)}</span>
                        <span class="cart__item--price-total">$${(item.price * item.quantity).toFixed(2)}</span>
                    </div>
                </div>
                <button type="button" class="cart__item--btn" aria-label="Remove Menu Item">
                    <svg class="icon-remove-item" aria-label="Remove Item">
                        <use xlink:href="${icons}#icon-remove-item"></use>
                    </svg>
                </button>
            </article>
            <!-- CART ITEMS END -->
        `;
        cartItemsContainer.insertAdjacentHTML('afterbegin', itemMarkup);
    },
*/
