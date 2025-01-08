import { icons } from '../../assets/icons/icons.svg';

// Render the modal content with order details from orderModel
// Handle UI interactions such as showing, hiding or resetting the modal
export const orderView = {
    renderOrder(orderContainer, orderItem) {
        const { image, name, price, quantity } = orderItem;

        const orderMarkup = `
            <!-- ORDER CONFIRMATION MODAL START -->
            <div class="overlay">
                <div class="order__confirmation">
                    <svg class="icon-order-confirmed" aria-hidden="true">
                        <use xlink:href="${icons}#icon-order-confirmed"></use>
                    </svg>
                    <h3 class="order__title">Order Confirmed</h3>
                    <p class="order__text">We hope you enjoy your food!</p>
            
                    <!-- ORDER DETAILS START -->
                    <div class="order__details">
                        <!-- ORDER ITEMS START -->
                        <div class="order__items--container">
                            <article class="order__item">
                                <img
                                    class="order__item--img"
                                    src="${image}"
                                    alt="${name}"
                                />
                                <div class="order__item--details">
                                    <p class="order__item--name item--name">Classic Tiramisu</p>
                                    <div class="item--details__box">
                                        <span class="order__item--quantity
                                        item--quantity">${quantity}x</span>
                                        <span class="order__item--price
                                        item--price">@$${price.toFixed(2)}</span>
                                    </div>
                                </div>
                                <p class="order__item__price--total">$${(price * quantity).toFixed(2)}</p>
                            </article>
                        </div>
                        <!-- ORDER ITEMS END TOTAL AMOUNT ORDERED ITEMS START -->
                        <div class="order__items__total">
                            <p>Order Total</p>
                            <p class="order__items__total--amount">$46.50</p>
                        </div>
                        <!-- TOTAL AMOUNT ORDERED ITEMS END -->
                    </div>
                    <!-- ORDER DETAILS END -->
            
                    <button type="button" class="order__confirmation--btn cta-btn">Start New Order</button>
                </div>
            </div>
            <!-- ORDER CONFIRMATION MODAL END -->
        `;
        orderContainer.insertAdjacentHTML('afterbegin', orderMarkup);
    }
};
