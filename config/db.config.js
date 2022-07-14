const mongoose = require('mongoose');

function connect() {
  const uri = 'mongodb://db:27017/url_shortner';
  mongoose.connect(uri, {
    useNewUrlParser: true,
  });
}

module.exports = {
  connect,
};
