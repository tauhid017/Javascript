const express = require("express")
const app = express();
const port = 8080;
const { v4: uuidv4 } = require('uuid');
 // ⇨ '1b9d6bcd-bbfd-4b2d-9b5d-ab8dfbbd4bed'
const path = require("path")
app.set("view engine","ejs");
app.set("views",path.join(__dirname,'views'));
app.use(express.static(path.join(__dirname,"public")));
app.use(express.urlencoded({extended:true}))
app.listen(port,()=>{
    console.log(`the app is listening on port ${port}`);
})
const methodOverride = require("method-override")
app.use(methodOverride("_method"))
app.get('/post/new',(req,res)=>{
    res.render("new.ejs")
})


let posts =[
    {
        id:uuidv4(),
        username:"apnacollege",
        content:"i love coding"
    },
    {
        id:uuidv4(),
        username:"tauhid",
        content:"ronaldo is the goat"
    },
    {
        id:uuidv4(),
        username:"jishu",
        content:"mumma bhaiya ne maare "
    },
]
app.get('/post',(req,res)=>{
    res.render("index.ejs",{posts})
})
app.post('/posts',(req,res)=>{
    let id=uuidv4();
    let {username,content}=req.body;
    posts.push({id,username,content})
    res.redirect('/post')
})
app.get('/post/:id', (req, res) => {
    let { id } = req.params;
    let post = posts.find(p => id == p.id);

    res.render("show.ejs", { post });
});
app.patch('/post/:id',(req,res)=>{
    let {id} = req.params
    // res.send("patch req working")
    let newContent = req.body.content;
    let post = posts.find(p => p.id === id);
    post.content = newContent;
    console.log(newContent)
    console.log(post)
    console.log(id);
    res.redirect("/post");
})
app.get('/post/:id/edit', (req, res) => {
    let { id } = req.params;
    let post = posts.find(p => id === p.id);

    res.render("edit.ejs", { post });
});
app.delete('/post/:id',(req,res)=>{
    let { id } = req.params;
    posts = posts.filter(p => id !== p.id);
    res.redirect('/post');
})