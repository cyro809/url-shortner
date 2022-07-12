const randomString = require("randomstring");
const UrlRepository = require("../repositories/url");

function generateHash() {
    return randomString.generate(8);
}

function getNormalUrl(shortUrlHash) {
    const url = UrlRepository.getUrlByHash(shortUrlHash);
    return url;
}

async function getAllUrls() {
    const data = await UrlRepository.getAllUrls();
    return data;
}

function createShortUrl(data) {
    data.shortUrlHash = generateHash();
    return UrlRepository.create(data);
}


module.exports = {
    generateHash,
    createShortUrl,
    getAllUrls,
    getNormalUrl
}