const router = require('express').Router();
let Accomodation = require('../models/accomodation.model');

router.route('/').get((req, res) => {
    Accomodation.find()
    .then(accomodations => res.json(accomodations))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
    const gender = req.body.gender;
    const areaname = req.body.areaname;
    const locationOfAcc = req.body.locationOfAcc;
    const coord = req.body.coord;
    const category = req.body.category;
    const contact = req.body.contact;
    const isFull = Boolean(req.body.isFull);

    const newAccomodation = new Accomodation({
        gender,
        areaname,
        locationOfAcc,
        coord,
        category,
        contact,
        isFull
    });

    newAccomodation.save()
    .then(() => res.json('Accomodation added!'))
    .catch(err => res.status(400).json('Error ' + err));
});

router.route('/update/:id').post((req, res) => {
    Accomodation.findById(req.params.id)
      .then(accomodations => {
        accomodations.gender = req.body.gender;
        accomodations.areaname = req.body.areaname;
        accomodations.locationOfAcc = req.body.locationOfAcc;
        accomodations.coord = req.body.coord;
        accomodations.category = req.body.category;
        accomodations.contact = req.body.contact;
        accomodations.isFull = Boolean(req.body.isFull);

        accomodations.save()
          .then(() => res.json('Accomodation updated!'))
          .catch(err => res.status(400).json('Error: ' + err));
      })
      .catch(err => res.status(400).json('Error: ' + err));
  });

  router.route('/:id').delete((req, res) => {
    Accomodation.findByIdAndDelete(req.params.id)
      .then(() => res.json('Accomodation details deleted.'))
      .catch(err => res.status(400).json('Error: ' + err));
  });

module.exports = router;

