const router = require('express').Router();
let Ashram = require('../models/ashramVolunteer.model');

router.route('/').get((req, res) => {
    Ashram.find()
    .then(ashram => res.json(ashram))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
    const section = req.body.section;
    const sevaPlace = req.body.sevaPlace;
    const incharge = req.body.incharge;
    const contact = req.body.contact;

    const newAshram = new Ashram({
        section,
        sevaPlace,
        incharge,
        contact,
    });

    newAshram.save()
    .then(() => res.json('Ashram Volunteer added!'))
    .catch(err => res.status(400).json('Error ' + err));
});

router.route('/update/:id').post((req, res) => {
    Ashram.findById(req.params.id)
      .then(ashram => {
        ashram.section = req.body.section;
        ashram.sevaPlace = req.body.sevaPlace;
        ashram.incharge = req.body.incharge;
        ashram.contact = req.body.contact;

        ashram.save()
          .then(() => res.json('Ashram volunteer details updated!'))
          .catch(err => res.status(400).json('Error: ' + err));
      })
      .catch(err => res.status(400).json('Error: ' + err));
  });

  router.route('/:id').delete((req, res) => {
    Ashram.findByIdAndDelete(req.params.id)
      .then(() => res.json('Ashram volunteer details deleted.'))
      .catch(err => res.status(400).json('Error: ' + err));
  });
module.exports = router;