const express = require('express');
const router = express.Router();
const { getAllUrls, createShortUrl, getNormalUrl} = require("../controllers/url")

router.get('/', async function(req, res) {
    const data = await getAllUrls();

    res.json(data);
})


router.get('/:shortUrl', async function(req, res) {
    const data = await getNormalUrl(req.params.shortUrl);
    res.send(data);
});

router.post('/', async function(req, res) {
    const data = await createShortUrl(req.body);
    res.json(data);
})


module.exports = router;