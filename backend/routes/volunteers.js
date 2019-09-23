const router = require('express').Router();
let Volunteer = require('../models/volunteer.model');

router.route('/').get((req, res) => {
    Volunteer.find()
    .then(volunteer => res.json(volunteer))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
    const name = req.body.name;
    const batch = req.body.batch;
    const campus = req.body.campus;
    const contact = req.body.contact;
    const seva = req.body.seva;
    const cordName = req.body.cordName;
    const cordContact = req.body.cordContact;

    const newVolunteer = new Volunteer({
        name,
        batch,
        campus,
        contact,
        seva,
        cordName,
        cordContact
    });

    newVolunteer.save()
    .then(() => res.json('New Volunteer details added!'))
    .catch(err => res.status(400).json('Error ' + err));
});

router.route('/update/:id').post((req, res) => {
    Volunteer.findById(req.params.id)
        .then(volunteer => {
        volunteer.name = req.body.name;
        volunteer.batch = req.body.batch;
        volunteer.campus = req.body.campus;
        volunteer.contact = req.body.contact;
        volunteer.seva = req.body.seva;
        volunteer.cordName = req.body.cordName;
        volunteer.cordContact = req.body.cordContact;

        volunteer.save()
        .then(() => res.json('Volunteer details updated!'))
        .catch(err => res.status(400).json('Error: ' + err));
      })
      .catch(err => res.status(400).json('Error: ' + err));
  });

  router.route('/:id').delete((req, res) => {
    Volunteer.findByIdAndDelete(req.params.id)
      .then(() => res.json('Volunteer details deleted.'))
      .catch(err => res.status(400).json('Error: ' + err));
  });

module.exports = router;