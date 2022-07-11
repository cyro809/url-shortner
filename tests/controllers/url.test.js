const urlController = require('../../controllers/url');
const generateHash = urlController.generateHash;
const getNormalUrl = urlController.getNormalUrl;


describe('url controller', function() {
    test('generateHash must return a hash with 8 characters length', function() {
        expect(generateHash().length).toBe(8);
    });

    test('getNormalUrl must return a dict with the normal url and the short version', function() {
        const exceptedDict = {'shortUrlHash': 'xpto1234', 'url': 'www.example.com'}
        expect(getNormalUrl('xpto1234')).toMatchObject(exceptedDict)
    })
})