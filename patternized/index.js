// patternized/index.js

const PixabayAdapter = require('./adapters/PixabayAdapter');
const UnsplashAdapter = require('./adapters/UnsplashAdapter');
const LikesRankingAlgorithm = require('./algorithms/LikesRankingAlgorithm');
const BromeliaPictInventory = require('./BromeliaPictInventory');

const apiKeyPixabay = 'YOUR_PIXABAY_API_KEY';
const apiKeyUnsplash = 'YOUR_UNSPLASH_API_KEY';

(async () => {
    const pixabayAdapter = new PixabayAdapter(apiKeyPixabay);
    const unsplashAdapter = new UnsplashAdapter(apiKeyUnsplash);
    const rankingAlgorithm = new LikesRankingAlgorithm();

    const inventory = new BromeliaPictInventory(pixabayAdapter, unsplashAdapter, rankingAlgorithm);
    const topPhotos = await inventory.searchAndRank('nature');
    console.log(topPhotos);
})();
