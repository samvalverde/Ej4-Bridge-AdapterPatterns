// naive/index.js

const BromeliaPictInventory = require('./bromeliaPictInventory');

const apiKeyPixabay = 'YOUR_PIXABAY_API_KEY';
const apiKeyUnsplash = 'YOUR_UNSPLASH_API_KEY';

(async () => {
    const inventory = new BromeliaPictInventory(apiKeyPixabay, apiKeyUnsplash);
    const topPhotos = await inventory.searchAndRank('nature');
    console.log(topPhotos);
})();
