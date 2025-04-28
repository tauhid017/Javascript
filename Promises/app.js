function saveTodb(data){
    let internetSpeed = Math.floor(Math.random()*10)+1;
    return new Promise((resolve,reject)=>{
        if(internetSpeed>5){
            resolve("Data saved to db");// yahi vo result hai jo then me milega 
        }
        else{
            reject("Weak internet connection")//yahi vo agrument hai jo catch me milega 
        }
    })
}
// saveTodb("tauhid").then(()=>{
//     console.log("Data was saved successfully");
// })
// .catch(()=>{
//     console.log("Weak connection hai rey baba")
// })
// now we will see how can we store multiple data in db using promises
//consider it as if data1 gets stored , then only we will proceed to the next data and so on 
//this is called promise chaining 
saveTodb("tauhid")
.then((resukt)=>{
    console.log("Data 1 was saved successfully",resukt);
    return saveTodb("tauhid2")
})
.then(()=>{
    console.log("Data 2 was saved successfully");
    return saveTodb("tauhid3")
})
.then(()=>{
    console.log("Data 3 was saved successfully");
    return saveTodb("tauhid4")
})
.catch((error)=>{
    console.log("Weak connection hai rey baba", error)
})
 