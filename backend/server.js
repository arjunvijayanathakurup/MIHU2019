const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const csv = require("fast-csv");
mongoose.Promise = global.Promise;
require('dotenv').config();

const app = express();

const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const path = require("path");

app.use(express.static(path.join(__dirname, "../build")));
// const uri = process.env.ATLAS_URI;
const uri = "mongodb://127.0.0.1:27017/mihudb";

mongoose.connect(uri, {useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true});
const connection = mongoose.connection;

connection.once('open', () => {
    console.log('MongoDB database connection established successfully!');
})


const accomodationsRouter = require('./routes/accomodations');
const ashramsRouter = require('./routes/ashramvolunteers');
const coordinatorsRouter = require('./routes/coordinators');
const darshansRouter = require('./routes/darshans');
const emergenciesRouter = require('./routes/emergencies');
const faqsRouter = require('./routes/faqs');
const foodsRouter = require('./routes/foods');
const informationsRouter = require('./routes/informations');
const linksRouter = require('./routes/links');
const logsRouter = require('./routes/logengine');
const staffDetailsRouter = require('./routes/staffdetails');
const staddVolunteersRouter = require('./routes/staffvolunteers');
const transportationsRouter = require('./routes/transportations');
const usersRouter = require('./routes/users');
const vccsRouter = require('./routes/vccs');
const volunteersRouter = require('./routes/volunteers');



app.use('/accomodations', accomodationsRouter);
app.use('/ashram', ashramsRouter);
app.use('/coordinator', coordinatorsRouter);
app.use('/darshan', darshansRouter);
app.use('/emergency', emergenciesRouter);
app.use('/faq', faqsRouter);
app.use('/food', foodsRouter);
app.use('/information', informationsRouter);
app.use('/live', linksRouter);
app.use('/log', logsRouter);
app.use('/staffdetail', staffDetailsRouter);
app.use('/staffvolunteer', staddVolunteersRouter);
app.use('/transportation', transportationsRouter);
app.use('/user', usersRouter);
app.use('/vcc', vccsRouter);
app.use('/volunteer', volunteersRouter);

app.get('*', function(req, res){
    res.render("<h1>404-Page Not Found</h1>");
});

app.listen(port, () => {
    console.log(`Server running on port: ${port}`);
});