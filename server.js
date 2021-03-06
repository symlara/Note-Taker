const express = require('express');
const htmlRoutes = require("./routes/htmlRoutes");
const apiRoutes = require("./routes/apiRoutes");
 


const app = express();
var expressreqid  = require('node-express-req-id')({
    type: 'cuid'  //  `cuid`
  });
  app.use(expressreqid);
  
const PORT = process.env.PORT || 3001;
app.use(express.json());
app.use(express.urlencoded({extended: true }));
app.use(express.static("public"));

app.use('/api', apiRoutes);
app.use('/', htmlRoutes);


app.listen(PORT, () => {
    console.log(`API server now works on port ${PORT}!`)
});