const router = require('express').Router();
let Transportation = require('../models/transportation.model');

router.route('/').get((req, res) => {
    Transportation.find()
    .then(transportationDetails => res.json(transportationDetails))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
    const mode = req.body.mode;
    const busno = req.body.busno;
    const contact = req.body.contact;
    const froms = req.body.froms;
    const destination = req.body.destination;
    const deptime = req.body.deptime;
    const parking = req.body.parking;

    const newTransportation = new Transportation({
        mode,
        busno,
        contact,
        froms,
        destination,
        deptime,
        parking
    });

    newTransportation.save()
    .then(() => res.json('New transportation detail added!'))
    .catch(err => res.status(400).json('Error ' + err));
});

router.route('/update/:id').post((req, res) => {
    Transportation.findById(req.params.id)
        .then(transportationDetails => {
        transportationDetails.mode = req.body.mode;
        transportationDetails.busno = req.body.busno;
        transportationDetails.contact = req.body.contact;
        transportationDetails.froms = req.body.froms;
        transportationDetails.destination = req.body.destination;
        transportationDetails.deptime = req.body.deptime;
        transportationDetails.parking = req.body.parking;

        transportationDetails.save()
        .then(() => res.json('Transportation details updated!'))
        .catch(err => res.status(400).json('Error: ' + err));
      })
      .catch(err => res.status(400).json('Error: ' + err));
  });

  router.route('/:id').delete((req, res) => {
    Transportation.findByIdAndDelete(req.params.id)
      .then(() => res.json('Transportation details deleted.'))
      .catch(err => res.status(400).json('Error: ' + err));
  });
module.exports = router;