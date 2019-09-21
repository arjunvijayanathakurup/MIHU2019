const router = require('express').Router();
let Information = require('../models/information.model');

router.route('/').get((req, res) => {
    Information.find()
    .then(informations => res.json(informations))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
    const message = req.body.message;

    const newInformation = new Information({
       message
    });

    newInformation.save()
    .then(() => res.json('New Information added!'))
    .catch(err => res.status(400).json('Error ' + err));
});

router.route('/update/:id').post((req, res) => {
    Information.findById(req.params.id)
      .then(informations => {
        informations.message = req.body.message;

        informations.save()
          .then(() => res.json('Information details updated!'))
          .catch(err => res.status(400).json('Error: ' + err));
      })
      .catch(err => res.status(400).json('Error: ' + err));
  });

  router.route('/:id').delete((req, res) => {
    Information.findByIdAndDelete(req.params.id)
      .then(() => res.json('Information details deleted.'))
      .catch(err => res.status(400).json('Error: ' + err));
  });

module.exports = router;