const express = require('express');
const htmlRoutes = require("./routes/htmlRoutes");
const apiRoutes = require("./routes/apiRoutes");

const app = express();
const PORT = process.env.PORT || 3001;
app.use(express.json());
app.use(express.urlencoded({extended: true }));

app.use('/api', apiRoutes);
app.use('/', htmlRoutes);
app.use(express.static("public"));


app.listen(PORT, () => {
    console.log(`API server now works on port ${PORT}!`)
});