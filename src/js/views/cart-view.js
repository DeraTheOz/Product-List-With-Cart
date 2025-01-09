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
        const existingCartItem = cartFilledContainer.querySelector(`.cart__item[data-name="${item.name}"]`);
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

        const totalAmount = Array.from(cartItemsContainer.querySelectorAll('.cart__item--price-total')).reduce(
            (sum, priceEl) => sum + parseFloat(priceEl.textContent.slice(1)),
            0
        );
        const totalCartQuantity = Array.from(cartItemsContainer.querySelectorAll('.item--quantity')).reduce(
            (sum, quantityAmount) => sum + parseFloat(quantityAmount.textContent),
            0
        );

        const cartQuantityEl = document.querySelector('.cart__quantity');
        const totalAmountEl = document.querySelector('.cart__items__total--amount');

        cartQuantityEl.textContent = totalCartQuantity;
        totalAmountEl.textContent = `$${totalAmount.toFixed(2)}`;
    },

    clearCart() {
        const cartContainer = document.querySelector('.cart__container');
        cartContainer.innerHTML = '';
        this.renderEmptyCart();
    }
};
