let a =parseInt(prompt("enter your maximum number: "));
while(!a){
    a=parseInt(prompt("pls enter a valid number"));
}
const b = Math.floor(Math.random()*a)+1; 
// console.log(b);

let x = parseInt(prompt("enter you guessed number: "));
let count = 0 ;
while(x!==b){
    if(x>b){
        x = parseInt(prompt("too high !!!"));
    }
    else if(x==="q"){
        console.log("Okay you quit");
        break;
    }
    else{
        x = parseInt(prompt("too low"));

    }

    count++;
}   

console.log(`You got it in ${count} times`);
