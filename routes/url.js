const express = require('express');
const router = express.Router();

router.get('/', function(req, res) {
    res.redirect('../');
})


router.get('/:shortUrl', function(req, res) {
    res.json(req.params);
});


module.exports = router;