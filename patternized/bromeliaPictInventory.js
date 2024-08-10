// patternized/BromeliaPictInventory.js

class BromeliaPictInventory {
    constructor(pixabayAdapter, unsplashAdapter, rankingAlgorithm) {
        this.pixabayAdapter = pixabayAdapter;
        this.unsplashAdapter = unsplashAdapter;
        this.rankingAlgorithm = rankingAlgorithm;
    }

    async searchAndRank(query) {
        const photosPixabay = await this.pixabayAdapter.searchPhotos(query);
        const photosUnsplash = await this.unsplashAdapter.searchPhotos(query);

        const combinedPhotos = photosPixabay.concat(photosUnsplash);
        return this.rankingAlgorithm.rankPhotos(combinedPhotos);
    }
}

module.exports = BromeliaPictInventory;
