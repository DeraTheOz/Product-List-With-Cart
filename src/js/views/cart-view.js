import icons from '../../assets/icons/icons.svg';

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

    renderCart(cartItems) {
        console.log(cartItems);
        const cartContainer = document.querySelector('.cart__container');
        // const cartEmptyContainer = document.querySelector('.cart__empty');
        const cartEmptyContainer = cartContainer.querySelector('.cart__empty');
        const cartFilledContainer = document.querySelector('.cart__filled');

        if (cartItems.length === 0) {
            
            // cartContainer.innerHTML = '';
            // cartEmptyContainer.style.display = 'block';
            // cartFilledContainer.style.display = 'none';
        } else {
            // cartEmptyContainer.style.display = 'none';
            // cartFilledContainer.style.display = 'block';
            // const itemsMarkup = cartItems
            //     .map(
            //         item => `
            //         <article class="cart__item">
            //             <div class="cart__item--details">
            //                 <p class="cart__item--name">${item.name}</p>
            //                 <div class="item--details__box">
            //                     <span class="cart__item--quantity">${item.quantity}x</span>
            //                     <span class="cart__item--price">@$${item.price.toFixed(2)}</span>
            //                     <span class="cart__item--price-total">$${(item.price * item.quantity).toFixed(2)}</span>
            //                 </div>
            //             </div>
            //             <button type="button" class="cart__item--btn" aria-label="Remove Menu Item">
            //                 <svg class="icon-remove-item" aria-hidden="true">
            //                     <use xlink:href="${icons}#icon-remove-item"></use>
            //                 </svg>
            //             </button>
            //         </article>
            //     `
            //     )
            //     .join('');
            // cartContainer.innerHTML = itemsMarkup;
        }
    }
};
