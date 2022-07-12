const urlController = require('../../controllers/url');

const { generateHash } = urlController;
const { getNormalUrl } = urlController;

describe('url controller', () => {
  test('generateHash must return a hash with 8 characters length', () => {
    expect(generateHash().length).toBe(8);
  });

  test('getNormalUrl must return a dict with the normal url and the short version', () => {
    const exceptedDict = { shortUrlHash: 'xpto1234', url: 'www.example.com' };
    expect(getNormalUrl('xpto1234')).toMatchObject(exceptedDict);
  });
});
