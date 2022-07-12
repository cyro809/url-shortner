const express = require('express');
const router = express.Router();
const UrlController  = require("../controllers/url")

router.get('/', async function(req, res) {
    const data = await UrlController.getAllUrls();
    res.json(data);
})


router.get('/:shortUrl', async function(req, res) {
    try{
        const data = await UrlController.getNormalUrl(req.params.shortUrl);
        res.send(data);
    }
    catch (err){
        res.status(404).send("Url not found!");
    }
});

router.post('/', async function(req, res) {
    const data = await UrlController.createShortUrl(req.body);
    res.json(data);
})


module.exports = router;
