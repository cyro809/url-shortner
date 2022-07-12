const { Url } = require('../models/url');

class UrlRepository {
  static async getAllUrls() {
    return Url.find({});
  }

  static async getUrlByHash(urlHash) {
    return Url.findOne({ shortUrlHash: urlHash })
      .then((urlInfo) => {
        urlInfo.viewCount++;
        urlInfo.save();
        return urlInfo.url;
      })
      .catch((err) => {
        throw err;
      });
  }

  static async create(data) {
    await Url.create(data);
  }
}

module.exports = UrlRepository;
