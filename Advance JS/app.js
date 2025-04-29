// // async function tauhd(){
// //     return "hello tauhid"
// // }
// // async function jishu (){
// //     throw "weak internet connection"
// //     abort.anc()
// //     return "hello jishu";
// // }
// // jishu().then((result)=>{
// //     console.log("result",result)
// // })
// // .catch((error)=>{
// //     console.log("the error was : ",error)
// // })
// function getNum(){
//     let num = Math.floor(Math.random()*10)+1;
//     return new Promise((resolve,reject)=>{
//         setTimeout (()=>{
//             console.log(num);
//             resolve();
//         },1000)
//     })
// }

// async function demo(){
//     await getNum()
//     await getNum()
//     await getNum()
//     await getNum()

// }
// //testing JSON
// let x = '{"fact":"All cats need taurine in their diet to avoid blindness. Cats must also have fat in their diet as they are unable to produce it on their own.","length":140}'
// let y = JSON.parse(x);
// console.log(y.fact)

// let url = "https://catfact.ninja/fact"
// fetch(url)
// .then((res)=>{
//     return res.json();
// })
// .then((d)=>{
//     console.log(d.fact);
//     fetch(url);
// })
// .then((res)=>{
//     return res.json();
// })
// .then((da)=>{
//     console.log(da.fact);
// })  
// .catch((e)=>{
//     console.log(e);
// })
let url = "https://catfact.ninja/fact";

// fetch(url)
//   .then((res) => res.json())
//   .then((d) => {
//     console.log(d.fact); // First fact
//     return fetch(url);   // Return the second fetch so it can be chained
//   })
//   .then((res) => res.json())
//   .then((da) => {
//     console.log(da.fact); // Second fact
//   })
//   .catch((e) => {
//     console.log("Error:", e);
//   });

async function getFacts(){
    try{
        let res = await fetch (url);
    let data = await res.json();
    console.log(data.fact);
    }
    catch(r){
        console.log(r);
    }
}
