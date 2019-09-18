const router = require('express').Router();
let Link = require('../models/link.model');

router.route('/').get((req, res) => {
    Link.find()
    .then(links => res.json(links))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
    const live = req.body.live;

    const newLive = new Live({
       live
    });

    newLive.save()
    .then(() => res.json('New Live link added!'))
    .catch(err => res.status(400).json('Error ' + err));
});

module.exports = router;