// patternized/algorithms/LikesRankingAlgorithm.js

const BaseRankingAlgorithm = require('./BaseRankingAlgorithm');

class LikesRankingAlgorithm extends BaseRankingAlgorithm {
    rankPhotos(photos) {
        return photos.sort((a, b) => b.likes - a.likes).slice(0, 10);
    }
}

module.exports = LikesRankingAlgorithm;
