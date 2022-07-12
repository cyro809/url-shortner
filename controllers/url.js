const randomString = require("randomstring");
const UrlRepository = require("../repositories/url");


class UrlController {
    generateHash() {
        return randomString.generate(8);
    }

    async getNormalUrl(shortUrlHash) {
        return await UrlRepository.getUrlByHash(shortUrlHash);
    }

    async getAllUrls() {
        const data = await UrlRepository.getAllUrls();
        return data;
    }

    createShortUrl(data) {
        data.shortUrlHash = generateHash();
        return UrlRepository.create(data);
    }

}


module.exports = new UrlController();
