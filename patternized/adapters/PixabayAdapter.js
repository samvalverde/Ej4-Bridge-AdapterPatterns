// patternized/adapters/PixabayAdapter.js

const axios = require('axios');

class PixabayAdapter {
    constructor(apiKey) {
        this.apiKey = apiKey;
        this.baseURL = "https://pixabay.com/api/";
    }

    async searchPhotos(query) {
        const response = await axios.get(this.baseURL, {
            params: {
                key: this.apiKey,
                q: query,
                image_type: 'photo',
                per_page: 10,
            }
        });

        return response.data.hits.map(photo => ({
            id: photo.id,
            url: photo.webformatURL,
            likes: photo.favorites,
            source: 'pixabay'
        }));
    }
}

module.exports = PixabayAdapter;
