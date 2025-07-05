const express = require('express');
const path = require('path');

const app = express();
const port = 3000;
app.use(express.static('public'));
app.use(express.static(path.join(__dirname,'public')));
app.set('views',path.join(__dirname,'/views'));
app.set("view engine","ejs");
app.listen(port,(req,res)=>{
    console.log(`the app is running on port ${port}`)
})
app.get("/",(req,res)=>{
    res.send("this is root");
})
app.get("/home",(req,res)=>{
    res.render("home.ejs")
})
// app.get('/:username',(req,res)=>{
//     let {username} = req.params;
//     res.render('x.ejs',{username})
// })
//instagram

app.get('/:username', (req, res) => {
    const data = require('./data.json');
    const { username } = req.params;
    const d = data[username];

    if (!d) {
        return res.status(404).render('notfound.ejs', { username });
    }

    res.render("x.ejs", { username, d });
});


// app.get('/dice',(req,res)=>{
//     let di = Math.floor(Math.random()*6)+1;
//     res.render('dice.ejs',{di})
// })