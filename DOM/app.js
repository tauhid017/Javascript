// let para1 = document.createElement('p');
// para1.innerText="Hey I am red!!"
// document.querySelector('body').append(para1)
// para1.classList.add('red')
// let h3 = document.createElement('h3');
// h3.innerHTML="I'm a blur h3";
// h3.classList.add('blue');
// document.querySelector('body').append(h3);
// let div = document.createElement('div');
// let h1 = document.createElement('h1');
// let p = document.createElement('p');

// h1.innerText = "I'm in a div";
// p.innerHTML = "Me too";

// div.append(h1);
// div.append(p);
// div.classList.add('box');
// document.querySelector('body').append(div);
// let input = document.createElement('input');
// let body = document.querySelector('body');
// body.append(input);
// let btn = document.createElement('button');
// btn.innerHTML="Click me!";
// body.append(btn);
// btn.setAttribute('id','btn');
// input.setAttribute('placeholder','Username');
// document.querySelector('#btn').style.backgroundColor='blue';
// document.querySelector('#btn').style.color="white";
// let h1 = document.createElement('h1');
// h1.innerHTML="<u>DOM practice<u>";
// let para = document.createElement('p');
// para.innerHTML="Apna College <b>Delta<b> Practice";
// body.append(h1);
// body.append(para);
let btns = document.querySelectorAll("button");
// btn.onclick = function(){
//    alert("your account might get hacked");
// }
function sayHello(){
    alert("Hellooo");
}
function sayHi(){
    console.log("siuuu");
}
for (btn of btns){
    // btn.onmouseenter = function(){
    //     console.log("you entered the range of the button")
    // }
    // btn.onclick = sayHello;
    // btn.addEventListener("click",sayHello);
    btn.addEventListener("dblclick",sayHi);
}