const urlController = require('../../controllers/url');
const generateHash = urlController.generateHash;


describe('url controller', function() {
    test('generateHash must return a hash with 8 characters length', function() {
        expect(generateHash('www.example.com').length).toBe(8);
    })
})