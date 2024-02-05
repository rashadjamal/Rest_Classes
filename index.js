const express = require("express");
const app = express();
const port = 8080;
const path = require("path");

app.use(express.urlencoded({ extended: true }));

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(express.static(path.join(__dirname, "public")));

let posts = [
    {
        id: "1a",
        username: "apnacollege",
        content: "I love coding",
    },
    {
        id: "2b",
        username: "Rashad",
        content: "Hard work is important to achieve success",
    },
    {
        id: "3c",
        username: "king",
        content: "I got selected for my 1st internship",
    },
];

app.get("/posts", (req, res) => {
    res.render("index.ejs", { posts });
});

app.get("/posts/new", (req, res) => {
    res.render("new.ejs");
});


app.post("/posts",(req,res) =>{
   let {username, content } = req.body;
   posts.push({username, content})
    res.redirect("/posts"); 
});

app.get("/posts/:id",(req,res) =>{
   let {id} =req.params;
 let post = posts.find((p) => id === p.id);
res.render("show.ejs",{post})
});


app.listen(port, () => {
    console.log("listening on port : 8080");
});


