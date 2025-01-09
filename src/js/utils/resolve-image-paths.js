// Waffle Images
import imageWaffleThumbnail from '../../assets/images/image-waffle-thumbnail.jpg';
import imageWaffleMobile from '../../assets/images/image-waffle-mobile.jpg';
import imageWaffleTablet from '../../assets/images/image-waffle-tablet.jpg';
import imageWaffleDesktop from '../../assets/images/image-waffle-desktop.jpg';

// Crème Brûlée Images
import imageCremeBruleeThumbnail from '../../assets/images/image-creme-brulee-thumbnail.jpg';
import imageCremeBruleeMobile from '../../assets/images/image-creme-brulee-mobile.jpg';
import imageCremeBruleeTablet from '../../assets/images/image-creme-brulee-tablet.jpg';
import imageCremeBruleeDesktop from '../../assets/images/image-creme-brulee-desktop.jpg';

// Macaron Images
import imageMacaronThumbnail from '../../assets/images/image-macaron-thumbnail.jpg';
import imageMacaronMobile from '../../assets/images/image-macaron-mobile.jpg';
import imageMacaronTablet from '../../assets/images/image-macaron-tablet.jpg';
import imageMacaronDesktop from '../../assets/images/image-macaron-desktop.jpg';

// Tiramisu Images
import imageTiramisuThumbnail from '../../assets/images/image-tiramisu-thumbnail.jpg';
import imageTiramisuMobile from '../../assets/images/image-tiramisu-mobile.jpg';
import imageTiramisuTablet from '../../assets/images/image-tiramisu-tablet.jpg';
import imageTiramisuDesktop from '../../assets/images/image-tiramisu-desktop.jpg';

// Baklava Images
import imageBaklavaThumbnail from '../../assets/images/image-baklava-thumbnail.jpg';
import imageBaklavaMobile from '../../assets/images/image-baklava-mobile.jpg';
import imageBaklavaTablet from '../../assets/images/image-baklava-tablet.jpg';
import imageBaklavaDesktop from '../../assets/images/image-baklava-desktop.jpg';

// Meringue Images
import imageMeringueThumbnail from '../../assets/images/image-meringue-thumbnail.jpg';
import imageMeringueMobile from '../../assets/images/image-meringue-mobile.jpg';
import imageMeringueTablet from '../../assets/images/image-meringue-tablet.jpg';
import imageMeringueDesktop from '../../assets/images/image-meringue-desktop.jpg';

// Cake Images
import imageCakeThumbnail from '../../assets/images/image-cake-thumbnail.jpg';
import imageCakeMobile from '../../assets/images/image-cake-mobile.jpg';
import imageCakeTablet from '../../assets/images/image-cake-tablet.jpg';
import imageCakeDesktop from '../../assets/images/image-cake-desktop.jpg';

// Brownie Images
import imageBrownieThumbnail from '../../assets/images/image-brownie-thumbnail.jpg';
import imageBrownieMobile from '../../assets/images/image-brownie-mobile.jpg';
import imageBrownieTablet from '../../assets/images/image-brownie-tablet.jpg';
import imageBrownieDesktop from '../../assets/images/image-brownie-desktop.jpg';

// Panna Cotta Images
import imagePannaCottaThumbnail from '../../assets/images/image-panna-cotta-thumbnail.jpg';
import imagePannaCottaMobile from '../../assets/images/image-panna-cotta-mobile.jpg';
import imagePannaCottaTablet from '../../assets/images/image-panna-cotta-tablet.jpg';
import imagePannaCottaDesktop from '../../assets/images/image-panna-cotta-desktop.jpg';

// Map of images
export const imageMap = {
    // Waffle Images
    'image-waffle-thumbnail': imageWaffleThumbnail,
    'image-waffle-mobile': imageWaffleMobile,
    'image-waffle-tablet': imageWaffleTablet,
    'image-waffle-desktop': imageWaffleDesktop,

    // Crème Brûlée Images
    'image-creme-brulee-thumbnail': imageCremeBruleeThumbnail,
    'image-creme-brulee-mobile': imageCremeBruleeMobile,
    'image-creme-brulee-tablet': imageCremeBruleeTablet,
    'image-creme-brulee-desktop': imageCremeBruleeDesktop,

    // Macaron Images
    'image-macaron-thumbnail': imageMacaronThumbnail,
    'image-macaron-mobile': imageMacaronMobile,
    'image-macaron-tablet': imageMacaronTablet,
    'image-macaron-desktop': imageMacaronDesktop,

    // Tiramisu Images
    'image-tiramisu-thumbnail': imageTiramisuThumbnail,
    'image-tiramisu-mobile': imageTiramisuMobile,
    'image-tiramisu-tablet': imageTiramisuTablet,
    'image-tiramisu-desktop': imageTiramisuDesktop,

    // Baklava Images
    'image-baklava-thumbnail': imageBaklavaThumbnail,
    'image-baklava-mobile': imageBaklavaMobile,
    'image-baklava-tablet': imageBaklavaTablet,
    'image-baklava-desktop': imageBaklavaDesktop,

    // Meringue Images
    'image-meringue-thumbnail': imageMeringueThumbnail,
    'image-meringue-mobile': imageMeringueMobile,
    'image-meringue-tablet': imageMeringueTablet,
    'image-meringue-desktop': imageMeringueDesktop,

    // Cake Images
    'image-cake-thumbnail': imageCakeThumbnail,
    'image-cake-mobile': imageCakeMobile,
    'image-cake-tablet': imageCakeTablet,
    'image-cake-desktop': imageCakeDesktop,

    // Brownie Images
    'image-brownie-thumbnail': imageBrownieThumbnail,
    'image-brownie-mobile': imageBrownieMobile,
    'image-brownie-tablet': imageBrownieTablet,
    'image-brownie-desktop': imageBrownieDesktop,

    // Panna Cotta Images
    'image-panna-cotta-thumbnail': imagePannaCottaThumbnail,
    'image-panna-cotta-mobile': imagePannaCottaMobile,
    'image-panna-cotta-tablet': imagePannaCottaTablet,
    'image-panna-cotta-desktop': imagePannaCottaDesktop
};

export const resolveImagePaths = function (data) {
    return data.map(item => {
        item.image.thumbnail = imageMap[item.image.thumbnail];
        item.image.mobile = imageMap[item.image.mobile];
        item.image.tablet = imageMap[item.image.tablet];
        item.image.desktop = imageMap[item.image.desktop];
        return item;
    });
};
