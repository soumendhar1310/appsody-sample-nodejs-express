const app = require('express')()

app.get('/', (req, res) => {
  res.send("Hello from Appsody try5!");
});
 
module.exports.app = app;
