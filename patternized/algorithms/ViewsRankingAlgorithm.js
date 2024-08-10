// patternized/algorithms/ViewsRankingAlgorithm.js

const BaseRankingAlgorithm = require('./BaseRankingAlgorithm');

class ViewsRankingAlgorithm extends BaseRankingAlgorithm {
    rankPhotos(photos) {
        return photos.sort((a, b) => b.views - a.views).slice(0, 10);
    }
}

module.exports = ViewsRankingAlgorithm;