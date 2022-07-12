const express = require('express');
const UrlController = require('../controllers/url');

const router = express.Router();

router.get('/', async (req, res) => {
  const data = await UrlController.getAllUrls();
  res.json(data);
});

router.get('/:shortUrl', async (req, res) => {
  try {
    const data = await UrlController.getNormalUrl(req.params.shortUrl);
    res.send(data);
  } catch (err) {
    res.status(404).send('Url not found!');
  }
});

router.post('/', async (req, res) => {
  const data = await UrlController.createShortUrl(req.body);
  res.json(data);
});

module.exports = router;
