const express = require('express');
//create app by making new express object
const app = express();
//define port
const port = 3000;
//app is listening on a port
app.listen(port, () => {
    console.log('Server started');
})
