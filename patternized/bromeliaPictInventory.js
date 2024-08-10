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
        
        // Aquí se ve reflejado el patrón Bridge, ya que BromeliaPictInventory
        // no necesita saber cómo se ordenan las fotos, simplemente las pasa
        // al algoritmo de ranking y éste se encarga de la técnica de ordenamiento
        return this.rankingAlgorithm.rankPhotos(combinedPhotos);

    }
}

module.exports = BromeliaPictInventory;
