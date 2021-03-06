const express = require('express')
const app = express();
const port = 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

require("./apiRoutes")(app);
require("./htmlRoutes")(app);

app.listen(port, function() {
    console.log("App listening on port " + port);
});