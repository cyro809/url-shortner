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
    res.render('url_redirect', { url: data });
  } catch (err) {
    res.status(404).render('url_redirect');
  }
});

router.post('/', async (req, res) => {
  const data = await UrlController.createShortUrl(req.body);
  res.json(data);
});

module.exports = router;
