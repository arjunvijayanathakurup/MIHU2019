const router = require('express').Router();
let StaffDetail = require('../models/staffDetails.model');

router.route('/').get((req, res) => {
    StaffDetail.find()
    .then(staffDetails => res.json(staffDetails))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
    const name = req.body.name;
    const department = req.body.department;
    const contact = req.body.contact;

    const newStaffDetails = new StaffDetail({
        name,
        seva,
        department,
        contact
    });

    newStaffDetails.save()
    .then(() => res.json('New StaffDetail added!'))
    .catch(err => res.status(400).json('Error ' + err));
});

router.route('/update/:id').post((req, res) => {
    StaffDetail.findById(req.params.id)
      .then(staffDetails => {
        staffDetails.name = req.body.name;
        staffDetails.department = req.body.department;
        staffDetails.contact = req.body.contact;

        staffDetails.save()
          .then(() => res.json('StaffDetail details updated!'))
          .catch(err => res.status(400).json('Error: ' + err));
      })
      .catch(err => res.status(400).json('Error: ' + err));
  });

  router.route('/:id').delete((req, res) => {
    StaffDetail.findByIdAndDelete(req.params.id)
      .then(() => res.json('StaffDetail details deleted.'))
      .catch(err => res.status(400).json('Error: ' + err));
  });

module.exports = router;