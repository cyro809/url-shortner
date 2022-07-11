const express = require('express');
const router = express.Router();
const { getAllUrls, createShortUrl} = require("../controllers/url")

router.get('/', function(req, res) {
    getAllUrls();
})


router.get('/:shortUrl', function(req, res) {
    res.json(req.params);
});

router.post('/', function(req, res) {
    const data = createShortUrl(req.body);
    res.json(data);
})


module.exports = router;