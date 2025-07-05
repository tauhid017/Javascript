const express  = require("express");
const app = express();
// console.dir(app); 
const port = 3000;
app.listen(port,()=>{
    console.log(`the app is listening to port ${port}`);
})
// app.use((req,res)=>{
//     console.log("request recived");
//     // res.send("<h1>Hiii this is response</h1>")

// })
// app.get('/apple',(req,res)=>{
//     res.send("<h1>Here is apple path</h1>");
// })
// app.get('/tauhid',(req,res)=>{
//     res.send("<h1>Hi i am tauhid</h1>");
// })
// app.get("*",(req,res)=>{
//     res.send("<h1>OOPSSS WRONG PATH</h1>");
// })
// app.get('/:username/:id',(req,res)=>{
//     let {username , id}=req.params;
//     res.send(`<h1>Welcome @${username}</h1> your id is ${id}`)
// })
app.get('/search',(req,res)=>{
    let {x}=req.query;
    if(!x){
        res.send(`<h1>Enter something relavent!!</h1>`
        )
    }
    res.send(`<h1>the results of the search are :${x}</h1>`);
})