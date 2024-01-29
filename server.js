var express = require("express");
var path = require("path");
const bodyParser = require('body-parser');
var app = express();

const connectionString = 'mongodb+srv://AraratIskenian:Ararat_Tumo0729@cluster0.vcm3hsu.mongodb.net/Tumo_Products';
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(express.static('public'));

app.get("/", function (req, res) {

    mongoose.connect(connectionString, { useNewUrlParser: true, useUnifiedTopology: true });
    const db = mongoose.connection;
    db.on('error', console.error.bind(console, 'Connection error:'));
    db.once('open', async () => {
        
    })
});

app.get("/list", function (req, res) {
    mongoose.connect(connectionString, { useNewUrlParser: true, useUnifiedTopology: true });
    const db = mongoose.connection;
});

app.post('/addName', (req, res) => {
    const name = req.body.name;
    const email = req.body.email;
    const password = req.body.password;
    mongoose.connect(connectionString, { useNewUrlParser: true, useUnifiedTopology: true });
    const db = mongoose.connection;
    db.on('error', console.error.bind(console, 'Connection error:'));
    db.once('open', async () => {
        console.log('Connected to MongoDB!');

        try {
            // const allMovies = await mongoose.connection.db.collection('movies').find().toArray(); // .insertMany(newMovies);
            // const TDA = await mongoose.connection.db.collection('movies').find({title: 'The Dark Angel'}).toArray();
            // const bloomTheaters = await mongoose.connection.db.collection('theaters').find({'location.address.city': 'Bloomington'}).toArray(); //
            // const addUser = await mongoose.connection.db.collection('users').insertOne({name: "Ararat Iskenian", email: 'ararat.iskenian.y@tumo.org', password: 'Hzor_em_Game_of_Thronesi_gyadeqi_mej'});
            // const changeUser = await mongoose.connection.db.collection('users').updateOne({ name: "Ararat Iskenian" }, { $set: {name: "Vaspur Sahakyan"} });
            // const deleteUser = await mongoose.connection.db.collection('users').deleteOne({ email: 'ararat.iskenian.y@tumo.org' });

            // console.log(deleteUser);
            // console.log('All Movies:', allMovies);
            // console.log(TDA);
            console.log(bloomTheaters);
            let result = await mongoose.connection.db.collection('users').insertOne({
                name: name,
                email: email,
                password: password
            });
            res.json(result);
        } catch (error) {
            console.error('Error retrieving movies:', error);
        } finally {
            mongoose.connection.close();
        }
    });
});




app.listen(3000, function () {
    console.log("Example is running on port 3000");
});

const mongoose = require('mongoose');