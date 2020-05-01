const app = require('express')()

app.get('/', (req, res) => {
  res.send("Hello from Appsody try1!");
});
 
module.exports.app = app;
