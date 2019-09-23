const router = require('express').Router();
let Live = require('../models/link.model');

router.route('/').get((req, res) => {
    Live.find()
    .then(lives => res.json(lives))
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

router.route('/update/:id').post((req, res) => {
    Live.findById(req.params.id)
      .then(lives => {
        lives.live = req.body.live;        

        lives.save()
          .then(() => res.json('Live details updated!'))
          .catch(err => res.status(400).json('Error: ' + err));
      })
      .catch(err => res.status(400).json('Error: ' + err));
  });

  router.route('/:id').delete((req, res) => {
    Live.findByIdAndDelete(req.params.id)
      .then(() => res.json('Live details deleted.'))
      .catch(err => res.status(400).json('Error: ' + err));
  });

module.exports = router;