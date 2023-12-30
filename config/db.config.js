const mongoose = require('mongoose');

function connect() {
  const uri = process.env.MONGODB_URI;
  mongoose.connect(uri, {
    useNewUrlParser: true,
  });
}

module.exports = {
  connect,
};
