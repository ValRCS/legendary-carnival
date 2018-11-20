let express = require('express');
let app = express();

console.log("Starting Main in:"+  __dirname);



// app.listen(process.env.PORT);
app.listen(3012);

app.get("/", (req, res) => res.send('Hello Express'));
app.get("/hello", (req, res) => res.sendFile(__dirname + '/views/index.html'));

app.use("/public", express.static(__dirname + "/public"));
