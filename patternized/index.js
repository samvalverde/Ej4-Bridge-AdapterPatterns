// patternized/index.js

const PixabayAdapter = require('./adapters/PixabayAdapter');
const UnsplashAdapter = require('./adapters/UnsplashAdapter');
const LikesRankingAlgorithm = require('./algorithms/LikesRankingAlgorithm');
const ViewsRankingAlgorithm = require('./algorithms/ViewsRankingAlgorithm');
const BromeliaPictInventory = require('./BromeliaPictInventory');
const readline = require('readline');

const apiKeyPixabay = 'YOUR_PIXABAY_API_KEY';
const apiKeyUnsplash = 'YOUR_UNSPLASH_API_KEY';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const chooseAlgorithm = () => {
    return new Promise((resolve) => {
        console.log("Choose a ranking algorithm:");
        console.log("1: Likes Ranking");
        console.log("2: Views Ranking");
        rl.question('Enter the number of the algorithm: ', (answer) => {
            let rankingAlgorithm;
            switch (answer) {
                case '1':
                    rankingAlgorithm = new LikesRankingAlgorithm();
                    break;
                case '2':
                    rankingAlgorithm = new ViewsRankingAlgorithm();
                    break;
                default:
                    console.log("Invalid choice, defaulting to Likes Ranking.");
                    rankingAlgorithm = new LikesRankingAlgorithm();
            }
            resolve(rankingAlgorithm);
        });
    });
};

(async () => {
    const pixabayAdapter = new PixabayAdapter(apiKeyPixabay);
    const unsplashAdapter = new UnsplashAdapter(apiKeyUnsplash);

    const rankingAlgorithm = await chooseAlgorithm();

    const inventory = new BromeliaPictInventory(pixabayAdapter, unsplashAdapter, rankingAlgorithm);
    const topPhotos = await inventory.searchAndRank('nature');
    console.log(topPhotos);

    rl.close();
})();
