import icons from '../../assets/icons/icons.svg';

export const menuView = function (data) {
    const menuContainer = document.querySelector('.menu__grid');

    return {
        render() {
            const menuMarkup = data
                .map(function (item) {
                    const { thumbnail, mobile, tablet, desktop } = item.image;
                    console.log(item);

                    return `
                        <article class="menu__item">
                            <figure class="menu__img--box">
                                <picture>
                                    <source srcset="${mobile}" type="image/jpg" media="(max-width: 480px)" />
                                    <source srcset="${tablet}" type="image/jpg" media="(max-width: 1024px)" />
                                    <source srcset="${desktop}" type="image/jpg" media="(min-width: 1025px)" />

                                    <img
                                        src="${thumbnail}"
                                        alt="waffle with berries"
                                        class="menu__img"
                                    />
                                </picture>
                                <!-- BUTTON DEFAULT STATE START -->
                                <button type="button" class="menu__btn"
                                aria-label="Add ${item.name} to cart">
                                    <svg class="icon-cart">
                                        <use xlink:href="${icons}#icon-add-to-cart"></use>
                                    </svg>
                                    Add to Cart
                                </button>
                                <!-- BUTTON DEFAULT STATE END -->
                            </figure>
                            <p class="menu__type">${item.category}</p>
                            <p class="menu__name">${item.name}</p>
                            <span class="menu__price">$${item.price.toFixed(2)}</span>
                        </article>
                    `;
                })
                .join('');

            menuContainer.insertAdjacentHTML('afterbegin', menuMarkup);
        }
    };
};
