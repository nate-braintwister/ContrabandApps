const express = require('express');
const app = express();

const port = 3000;


// Middleware setup
app.use(express.static('public'));

// Port assignment
app.listen(port, function(){
  console.log("Listening at http://localhost:" + port);
});
