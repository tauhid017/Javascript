let h1 = document.querySelector("h1");
function changecolor(color,delay){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            h1.style.color=color;
            resolve();
        },delay);
    })
}
changecolor("red",1000)
.then(()=>{
    console.log("The color was changed to red ");
    return changecolor("blue",1000)
})
.then(()=>{
    console.log("the color was changed to blue");
    return changecolor("green",1000)
})
.then(()=>{
    console.log("the color was changed to green");
    return changecolor("yellow",1000);
})
.then(()=>{
    console.log("the color was changed to yellow");
})
.catch(()=>{
    console.log("there was an error")
})
