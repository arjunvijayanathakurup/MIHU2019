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

module.exports = router;