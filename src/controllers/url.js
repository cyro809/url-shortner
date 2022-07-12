const randomString = require('randomstring');
const UrlRepository = require('../repositories/url');

class UrlController {
  static generateHash() {
    return randomString.generate(8);
  }

  static async getNormalUrl(shortUrlHash) {
    return UrlRepository.getUrlByHash(shortUrlHash);
  }

  static async getAllUrls() {
    const data = await UrlRepository.getAllUrls();
    return data;
  }

  static createShortUrl(data) {
    const newData = data;
    newData.shortUrlHash = this.generateHash();
    return UrlRepository.create(newData);
  }
}

module.exports = UrlController;
