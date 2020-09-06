//Importing the Express framework
const express = require("express");
//Assigning Express to an object so we can use the functions
const app = express();

//Setting the Express app to use the static folder
app.use(express.static(__dirname + "/static"));
//Setting the Express app to accept POST requests
app.use(express.urlencoded({extended: true}));

//Setting the Express app to use the EJS view enging and setting the directory for the views
app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');

//These are the routes
app.get('/', (request, response) => {
    response.send("Hello Express!");
});
app.get('/users', (req,res) => {
    //This is the array that will be returned as an object in the response
    var users_array = [
        {name:'Micheal', email: 'micheal@codoingdojo.com'},
        {name:'Zach', email: 'zach@codoingdojo.com'},
        {name:'Steve', email: 'steve@codoingdojo.com'},
        {name:'Joe', email: 'joe@codoingdojo.com'}
    ];
    res.render('users', {users: users_array});
});

//This sets the Express app to listen to port 8000 on our localhost
app.listen(8000, () => console.log("listening on 8000"));

