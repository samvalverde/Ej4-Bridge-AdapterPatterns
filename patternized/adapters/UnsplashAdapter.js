// patternized/adapters/UnsplashAdapter.js

const axios = require('axios');

class UnsplashAdapter {
    constructor(apiKey) {
        this.apiKey = apiKey;
        this.baseURL = "https://api.unsplash.com/search/photos";
    }

    async searchPhotos(query) {
        const response = await axios.get(this.baseURL, {
            params: {
                query: query,
                per_page: 10,
            },
            headers: {
                Authorization: `Client-ID ${this.apiKey}`
            }
        });

        return response.data.results.map(photo => ({
            id: photo.id,
            url: photo.urls.small,
            likes: photo.likes,
            source: 'unsplash'
        }));
    }
}

module.exports = UnsplashAdapter;
