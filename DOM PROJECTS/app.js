let nam = document.querySelector("#expense-name");
let am = document.querySelector("#expense-amount");
let date = document.querySelector("#Date");
let t = document.querySelector("#total");
let total = 0;
function add(){
    let n = nam.value;
    let a =am.value;
    let d = date.value;
    let li = document.createElement("li");
    li.innerHTML =`item:${n} , amount:${a} ,  date:${d}`;
    let ul = document.querySelector("#item");
    ul.appendChild(li);
    nam.value="";
    am.value="";
    date.value="";
    let btn = document.createElement("button");
    btn.innerHTML = "Delete";
    btn.style.backgroundColor = "red";
    btn.style.color = "white";
    btn.style.padding= "2.5px 5px";
    btn.style.borderRadius = "5px";
    li.appendChild(btn);
    btn.addEventListener("click",function(){
        li.remove();
    })
    total = total + parseInt(a);
    t.innerHTML =`The total expense is ${total}`;

}
let form = document.querySelector("#form");
form.addEventListener("submit",function(e){
    e.preventDefault();
    add();
    

})