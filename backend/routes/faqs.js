const router = require('express').Router();
let Faq = require('../models/faq.model');

router.route('/').get((req, res) => {
    Faq.find()
    .then(faqs => res.json(faqs))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
    const question = req.body.question;
    const answer = req.body.answer;

    const newFaq = new Faq({
        question,
        answer
    });

    newFaq.save()
    .then(() => res.json('New Faq added!'))
    .catch(err => res.status(400).json('Error ' + err));
});

router.route('/update/:id').post((req, res) => {
    Faq.findById(req.params.id)
      .then(faqs => {
        faqs.question = req.body.question;
        faqs.answer = req.body.answer;

        faqs.save()
          .then(() => res.json('Faq details updated!'))
          .catch(err => res.status(400).json('Error: ' + err));
      })
      .catch(err => res.status(400).json('Error: ' + err));
  });

  router.route('/:id').delete((req, res) => {
    Faq.findByIdAndDelete(req.params.id)
      .then(() => res.json('Faq details deleted.'))
      .catch(err => res.status(400).json('Error: ' + err));
  });

module.exports = router;