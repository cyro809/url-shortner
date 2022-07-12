const { Url } = require('../models/url');



class UrlRepository {

    async getAllUrls() {
        return await Url.find({});
    }

    async getUrlByHash(urlHash) {
        return Url.findOne({ 'shortUrlHash': urlHash })
            .then(function(urlInfo) {
                urlInfo.viewCount++;
                urlInfo.save();
                return urlInfo.url
            })
            .catch(function(err) {
                throw err;
            })
    }

    async create(data) {
        await Url.create(data);
    }
}

module.exports = new UrlRepository();