const { Url } = require('../models/url');



class UrlRepository {

    async getAllUrls() {
        return await Url.find({});
    }

    async getUrlByHash(urlHash) {
        const urlInfo = await Url.findOne({ 'shortUrlHash': urlHash })
        return urlInfo.url;
    }

    async create(data) {
        await Url.create(data);
    }
}

module.exports = new UrlRepository();