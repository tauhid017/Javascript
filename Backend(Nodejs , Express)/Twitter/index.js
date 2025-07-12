const express = require("express");
const app = express();
const port = 3000;
app.set("view engine", "ejs");
const { v4: uuidv4 } = require('uuid');
app.use(express.urlencoded({ extended: true }));

app.listen(port,()=>{
    console.log(`the app is listing on port ${port}`);
})
const methodOverride = require("method-override");
app.use(methodOverride("_method"));

let posts = [
    {
        id:uuidv4(),
        username:"tauhid017",
        tweet:"Hi my name is tauhid",
    },
    {
        id:uuidv4(),
        username:"jishu026",
        tweet:"hi my name is jishu",
    },
    {
        id:uuidv4(),
        username:"dev10",
        tweet:"ronaldo is the goat ",
    }
]
app.get("/post",(req,res)=>{
    res.render("index.ejs",{posts})
})
app.get("/post/new",(req,res)=>{
    res.render("new.ejs");
})
app.post('/post/new',(req,res)=>{
    let id = uuidv4();
    let{username,tweet} = req.body;
    posts.push({id,username,tweet});
    res.redirect("/post")
})
app.get("/post/edit/:id",(req,res)=>{
    let {id} = req.params;
    let post = posts.find(p => p.id === id);
    res.render("edit.ejs",{post});


})
app.patch("/post/edit/:id",(req,res)=>{
    let {id} =req.params;
    let newtweet = req.body.tweet;
    let post = posts.find(p => p.id === id);
    post.tweet=newtweet;
    res.redirect("/post");
})
app.delete("/post/edit/:id",(req,res)=>{
    let {id} = req.params;
     posts = posts.filter(p=> p.id !== id);
     res.redirect("/post");
})