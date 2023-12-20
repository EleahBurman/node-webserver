const express = require('express');
//create app by making new express object
const app = express();
//define port
const port = 3000;
//create router object
const usersRouter = express.Router();
usersRouter.post('/', function (req, res){

});
usersRouter.get('/:id', function(req, res){

});

//anything with a users router now has /users as the home page
app.use('/users', usersRouter)
//app is listening on a port and server has started
app.listen(port, () => {
    console.log('Listening on port', port);
})
//now we can use the app in other scripts as well
module.exports = app;