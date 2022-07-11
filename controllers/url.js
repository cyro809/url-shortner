const randomString = require("randomstring");
const UrlRepository = require("../repositories/url");

function generateHash() {
    return randomString.generate(8);
}

function getNormalUrl(shortUrlHash) {
    const url = getUrlByHash(shortUrlHash);
    return url;
}

function getAllUrls() {
    return UrlRepository.getAllUrls();
}

function createShortUrl(data) {
    data['shortUrlHash'] = generateHash();
    return UrlRepository.create(data);
}


module.exports = {
    generateHash,
    createShortUrl,
    getAllUrls
}