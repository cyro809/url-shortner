const randomString = require("randomstring");

function generateHash(url) {
    return randomString.generate(8);
}

module.exports = {
    generateHash
}