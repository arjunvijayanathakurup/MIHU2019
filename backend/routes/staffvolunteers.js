const router = require('express').Router();
let StaffvolDetail = require('../models/staffVolunteer.model');

router.route('/').get((req, res) => {
    StaffvolDetail.find()
    .then(staffvolDetails => res.json(staffvolDetails))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
    const name = req.body.name;
    const seva = req.body.seva;
    const department = req.body.department;
    const contact = req.body.contact;

    const newStaffvolDetails = new StaffvolDetail({
        name,
        seva,
        department,
        contact
    });

    newStaffvolDetails.save()
    .then(() => res.json('New staffvolDetails added!'))
    .catch(err => res.status(400).json('Error ' + err));
});

router.route('/update/:id').post((req, res) => {
    StaffvolDetail.findById(req.params.id)
      .then(staffvolDetails => {
        staffvolDetails.name = req.body.name;
        staffvolDetails.seva = req.body.seva;
        staffvolDetails.department = req.body.department;
        staffvolDetails.contact = req.body.contact;

        staffvolDetails.save()
        .then(() => res.json('staffvolDetails details updated!'))
        .catch(err => res.status(400).json('Error: ' + err));
      })
      .catch(err => res.status(400).json('Error: ' + err));
  });

  router.route('/:id').delete((req, res) => {
    StaffvolDetail.findByIdAndDelete(req.params.id)
      .then(() => res.json('staffvolDetails details deleted.'))
      .catch(err => res.status(400).json('Error: ' + err));
  });

module.exports = router;