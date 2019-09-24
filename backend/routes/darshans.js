const router = require('express').Router();
let Darshan = require('../models/darshan.model');

router.route('/').get((req, res) => {
    Darshan.find()
    .then(darshans => res.json(darshans))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
    const token = req.body.token;
    const date = req.body.date;
    const darshanTime = req.body.darshanTime;
    const tokenLocation = req.body.tokenLocation;
    const tokenTime = req.body.tokenTime;

    const newDarshan = new Darshan({
        token,
        date,
        darshanTime,
        tokenLocation,
        tokenTime
    });

    newDarshan.save()
    .then(() => res.json('Darshan details added!'))
    .catch(err => res.status(400).json('Error ' + err));
});

router.route('/update/:id').post((req, res) => {
    Darshan.findById(req.params.id)
      .then(darshans => {
        darshans.token = req.body.token;
        darshans.date = req.body.date;
        darshans.darshanTime = req.body.darshanTime;
        darshans.tokenLocation = req.body.tokenLocation;
        darshans.tokenTime = req.body.tokenTime;

        darshans.save()
          .then(() => res.json('Darshan details updated!'))
          .catch(err => res.status(400).json('Error: ' + err));
      })
      .catch(err => res.status(400).json('Error: ' + err));
  });

  router.route('/:id').delete((req, res) => {
    Darshan.findByIdAndDelete(req.params.id)
      .then(() => res.json('Darshan details deleted.'))
      .catch(err => res.status(400).json('Error: ' + err));
  });

  // router.route('/importcsv').post((req, res) => {
  //   const  products  = []
  //   const csvStream = csv()
  //       .on("darshan", function(darshan){
         
  //        const newDarshan = new Darshan({
  //             token: data[0] ,
  //             date: data[1]   ,
  //             darshanTime: data[2],
  //             tokenLocation: data[3],
  //             tokenTime:data[4] 
  //        });
         
  //        newDarshan.save(function(error){
  //           console.log(item);
  //             if(error){
  //                  throw error;
  //             }
  //         }); 

  //   }).on("end", function(){

  //   });
  
  //   stream.pipe(csvStream);
  //   res.json({success : "Data imported successfully.", status : 200});
     
  // }).get('/fetchdata', function(req, res, next) {
    
  //   Product.find({}, function(err, docs) {
  //       if (!err){ 
  //           res.json({success : "Updated Successfully", status : 200, data: docs});
  //       } else { 
  //           throw err;
  //       }
  //   });
  // })

module.exports = router;