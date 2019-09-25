const router = require('express').Router();
let User = require('../models/user.model');

router.route('/').get((req, res) => {
    User.find()
    .then(users => res.json(users))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
    const name = req.body.name;
    const email = req.body.email;
    const password = req.body.password;
    const token = req.body.token;

    const newUser = new User({
        name,
        email,
        password,
        token,
    });

    newUser.save()
    .then(() => res.json('User added!'))
    .catch(err => res.status(400).json('Error ' + err));
});

router.route('/update/:id').post((req, res) => {
    User.findById(req.params.id)
        .then(users => {
        users.name = req.body.name;
        users.email = req.body.email;
        users.password = req.body.password;
        users.token = req.body.token;

        users.save()
        .then(() => res.json('User details updated!'))
        .catch(err => res.status(400).json('Error: ' + err));
      })
      .catch(err => res.status(400).json('Error: ' + err));
  });

  router.route('/:id').delete((req, res) => {
    User.findByIdAndDelete(req.params.id)
      .then(() => res.json('User details deleted.'))
      .catch(err => res.status(400).json('Error: ' + err));
  });

module.exports = router;