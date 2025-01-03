import icons from '../../assets/icons/icons.svg';

export const menuView = function (data) {
    const menuContainer = document.querySelector('.menu__grid');

    return {
        generateMarkup(item, clicked = false) {
            const { image, name, category, price } = item;
            const { thumbnail, mobile, tablet, desktop } = image;

            return `
                    <article class="menu__item">
                        <figure class="menu__img--box ${clicked ? 'menu__img--border' : ''}">
                            <picture>
                                <source srcset="${mobile}" type="image/jpg" media="(max-width: 480px)" />
                                <source srcset="${tablet}" type="image/jpg" media="(max-width: 1024px)" />
                                <source srcset="${desktop}" type="image/jpg" media="(min-width: 1025px)" />
                                <img src="${thumbnail}" alt="${name}" class="menu__img" />
                            </picture>
                            ${
                                clicked
                                    ? `
                                    <!-- BUTTON CLICKED STATE START -->
                                    <div class="menu__btn--active" role="group" aria-label="Quantity Control">
                                        <button type="button" class="menu__btn--1" aria-label="Decrease Quantity" data-name="decrement">
                                            <svg class="icon-decrement" aria-hidden="true">
                                                <use xlink:href="${icons}#icon-decrement-quantity"></use>
                                            </svg>
                                        </button>
                                        <span class="menu__item--quantity" aria-live="polite" aria-atomic="true">1</span>
                                        <button type="button" class="menu__btn--2" aria-label="Increase Quantity" data-name="increment">
                                            <svg class="icon-increment" aria-hidden="true">
                                                <use xlink:href="${icons}#icon-increment-quantity"></use>
                                            </svg>
                                        </button>
                                    </div>
                                    <!-- BUTTON CLICKED STATE END -->
                                `
                                    : `
                                    <!-- BUTTON DEFAULT STATE START -->
                                    <button type="button" class="menu__btn" aria-label="Add ${name} to cart">
                                        <svg class="icon-cart">
                                            <use xlink:href="${icons}#icon-add-to-cart"></use>
                                        </svg>
                                        Add to Cart
                                    </button>
                                    <!-- BUTTON DEFAULT STATE END -->
                                `
                            }
                        </figure>
                        <p class="menu__type">${category}</p>
                        <p class="menu__name">${name}</p>
                        <span class="menu__price">$${price.toFixed(2)}</span>
                    </article>
                `;
        },

        renderDefaultState() {
            data.map(menuItem => {
                menuContainer.insertAdjacentHTML('beforeend', this.generateMarkup(menuItem));
            });
        },

        renderClickedState(menuItem, itemName) {
            const itemData = data.find(item => item.name === itemName);
            console.log(menuItem);
            if (!itemData) return;

            // Generate new markup and replace any existing <article> tag
            const newContent = this.generateMarkup(itemData, true).replace(/<article[^>]*>|<\/article>/g, '');
            menuItem.innerHTML = newContent;
        }
    };
};
