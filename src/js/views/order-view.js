import { icons } from '../../assets/icons/icons.svg';

export const orderView = {
    renderModal(cartItems, totalAmount) {
        // Create modal markup
        const modalMarkup = `
        <div class="overlay">
            <div class="order__confirmation">
                <svg class="icon-order-confirmed" aria-hidden="true">
                    <use xlink:href="${icons}#icon-order-confirmed"></use>
                </svg>
                <h3 class="order__title">Order Confirmed</h3>
                <p class="order__text">We hope you enjoy your food!</p>

                <!-- ORDER DETAILS START -->
                <div class="order__details">
                    <div class="order__items--container">
                        ${cartItems
                            .map(
                                item => `
                            <article class="order__item">
                                <picture>
                                    <source srcset="${item.image.mobile}" type="image/jpg" media="(max-width: 480px)" />
                                    <source srcset="${
                                        item.image.tablet
                                    }" type="image/jpg" media="(max-width: 1024px)" />
                                    <source srcset="${
                                        item.image.desktop
                                    }" type="image/jpg" media="(min-width: 1025px)" />
                                    <img src="${item.image.thumbnail}" alt="${item.name}" class="order__item--img" />
                                </picture>
                                <div class="order__item--details">
                                    <p class="order__item--name item--name">${item.name}</p>
                                    <div class="item--details__box">
                                        <span class="order__item--quantity item--quantity">${item.quantity}x</span>
                                        <span class="order__item--price item--price">@$${item.price.toFixed(2)}</span>
                                    </div>
                                </div>
                                <p class="order__item__price--total">$${(item.quantity * item.price).toFixed(2)}</p>
                            </article>
                        `
                            )
                            .join('')}
                    </div>
                    <div class="order__items__total">
                        <p>Order Total</p>
                        <p class="order__items__total--amount">$${totalAmount.toFixed(2)}</p>
                    </div>
                </div>
                <!-- ORDER DETAILS END -->

                <button type="button" class="order__confirmation--btn cta-btn">Start New Order</button>
            </div>
        </div>`;

        // Inject modal into the DOM
        document.body.insertAdjacentHTML('beforeend', modalMarkup);

        // Disable page scrolling
        document.documentElement.style.overflow = 'hidden';
    }
};
