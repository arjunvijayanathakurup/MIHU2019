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

module.exports = router;