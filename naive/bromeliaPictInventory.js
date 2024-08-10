// naive/BromeliaPictInventory.js

const axios = require('axios');

class BromeliaPictInventory {
    constructor(apiKeyPixabay, apiKeyUnsplash) {
        this.apiKeyPixabay = apiKeyPixabay;
        this.apiKeyUnsplash = apiKeyUnsplash;
        this.pixabayURL = "https://pixabay.com/api/";
        this.unsplashURL = "https://api.unsplash.com/search/photos";
    }

    async searchPixabay(query) {
        const response = await axios.get(this.pixabayURL, {
            params: {
                key: this.apiKeyPixabay,
                q: query,
                image_type: 'photo',
                per_page: 10,
            }
        });
        return response.data.hits;
    }

    async searchUnsplash(query) {
        const response = await axios.get(this.unsplashURL, {
            params: {
                query: query,
                per_page: 10,
            },
            headers: {
                Authorization: `Client-ID ${this.apiKeyUnsplash}`
            }
        });
        return response.data.results;
    }

    async rankPhotosResult(photosPixabay, photosUnsplash) {
        let combinedPhotos = photosPixabay.concat(photosUnsplash);

        // Evaluación hardcoded de las fotos resultantes
        combinedPhotos.sort((a, b) => {
            // Ejemplo: ordenando por likes en Unsplash y favoritos en Pixabay
            const scoreA = a.likes || a.favorites || 0;
            const scoreB = b.likes || b.favorites || 0;
            return scoreB - scoreA;
        });

        // Devolver las 10 mejores fotos
        return combinedPhotos.slice(0, 10);
    }

    async searchAndRank(query) {
        const photosPixabay = await this.searchPixabay(query);
        const photosUnsplash = await this.searchUnsplash(query);
        return this.rankPhotosResult(photosPixabay, photosUnsplash);
    }
}

module.exports = BromeliaPictInventory;
