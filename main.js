let express = require('express');
let app = express();
const mydata = [
    {
        name: "Fide",
        likes: "people"
    },
    {
        name: "Pussycat",
        likes: "mice"
    }
]

console.log("Starting Main in:"+  __dirname);

// app.listen(process.env.PORT);
console.log(process.env.PORT);
app.listen(3012);

app.get("/", (req, res) => res.send('Hello Express'));
app.get("/hello", (req, res) => res.sendFile(__dirname + '/views/index.html'));

app.use("/public", express.static(__dirname + "/public"));

app.get("/json", (req, res) => res.json(mydata));

// https://expressjs.com/en/guide/routing.html
app.get("/users/:userID/books/:booksID", (req,res) => {
    console.log(req.params);

    res.send(req.params);
})