const mongoose = require('mongoose');

const urlSchema = new mongoose.Schema(
  {
    shortUrlHash: String,
    url: String,
    createdDate: {
      type: Date,
      default: Date.now,
    },
    viewCount: {
      type: Number,
      default: 0,
    },
    lastViewedDate: {
      type: Date,
      default: '',
    },
  },
);

const Url = mongoose.model('Url', urlSchema, 'Url');

module.exports = {
  Url,
};
