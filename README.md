
# 📘 JavaScript Concepts and Examples

## 1. Arrow Functions
Arrow functions are a concise way to write function expressions in JavaScript. They do not have their own `this` context.

```js
let Even = (n) => {
    if(n % 2 == 0) return true;
    else return false;
};
```

## 2. setInterval
`setInterval()` repeatedly calls a function with a fixed time delay between each call.

```js
let i = 0;
let a = setInterval(() => {
    console.log(`${i}`);
    i += 1;
}, 1000);
```

```js
let a = setInterval(() => {
    console.log("Hello World");
}, 2000);
```

## 3. setTimeout and clearInterval
`setTimeout()` executes a function once after a delay. `clearInterval()` stops a running interval.

```js
let stop = setTimeout(() => {
    clearInterval(a);
}, 12000);
```

## 4. 'this' Keyword in Functions
The value of `this` depends on the context in which a function is called. It can refer to the global object, a specific object, or undefined.

```js
let length = 4;
function callback() {
    console.log(this.length);
}
const object = {
    length: 5,
    method(callback) {
        callback();
    }
};
object.method(callback, 1, 2);
```

## 5. forEach Loop
`forEach()` is used to execute a function once for each array element.

```js
let arr = [1, 2, 3, 4, 5];
arr.forEach((el) => {
    console.log(`${el + 1}`);
});
```

## 6. Object Array Iteration
Iterating over an array of objects allows accessing and displaying each object’s properties.

```js
let arr = [
    s1 = { name: "tauhid", mark: 95 },
    s2 = { name: "abhishek", mark: 98 },
    s3 = { name: "anmol", mark: 85 }
];
arr.forEach((ele) => {
    console.log(`${ele.name} studies in ${ele.year} year`);
});
```

## 7. map Function
The `map()` method creates a new array populated with the results of calling a function on every element.

```js
let arr = [1, 2, 3, 4, 5];
let x = arr.map((l) => {
    console.log(`${l.name} studies in ${l.mark / 10} cgpa`);
});
```

## 8. filter Function
The `filter()` method creates a new array with all elements that pass the test implemented by the provided function.

```js
let num = [2, 4, 6, 8, 10];
let even = num.filter((n) => {
    return n % 2 == 0;
});
even.forEach((n) => {
    console.log(n);
});
```

## 9. every Function
The `every()` method tests whether all elements in the array pass the implemented test.

```js
let x = num.every((n) => {
    return n % 2 == 0;
});
console.log(x);
```

```js
let arr = [20, 30, 90, 100];
let x = arr.every((n) => {
    return n % 10 == 0;
});
console.log(x);
```

## 10. reduce Function
The `reduce()` method executes a reducer function on each array element to return a single accumulated result.

```js
let arr = [1, 2, 3, 4];
let x = arr.reduce((res, ele) => {
    return res + ele;
});
console.log(x);
```

```js
let z = num.reduce((res, ele) => {
    if (res < ele) return res;
    else return ele;
});
console.log(z);
```

## 11. Spread Operator
The spread operator (`...`) allows an iterable to expand in places where multiple elements are expected.

```js
console.log(...arr);
```

```js
function s(...args) {
    args.map((i) => {
        console.log(i * 2);
    });
}
```

```js
let f = (ob1, ob2) => ({
    ...ob1,
    ...ob2
});
```

## 12. Destructuring
Destructuring allows unpacking values from arrays or properties from objects into distinct variables.

```js
let participant = ["rahul", "rohan", "ravi", "xhs", "bwd", "fads"];
let [first, second, ...ot] = participant;
```

## 13. DOM Manipulation - Create Elements
JavaScript allows dynamic creation of DOM elements using `document.createElement()` and `append()`.

```js
let inp = document.createElement("input");
let btn = document.createElement("button");
btn.innerHTML = "submit";
document.querySelector("body").append(inp);
document.querySelector("body").append(btn);
```

## 14. Setting Attributes & Classes
DOM elements can have attributes and classes set dynamically using `setAttribute()` and `classList` APIs.

```js
inp.setAttribute("placeholder", "username");
btn.setAttribute("id", "btn");

let g = document.querySelector("#btn");
g.classList.add("bstyle");
```

## 15. Event Listeners
Event listeners handle interactions (clicks, inputs, etc.) on DOM elements using `addEventListener()`.

```js
btn.addEventListener("click", () => {
    sayHello();
    sayhi();
});
```

## 16. Button Event with Function Reference
Event handlers can be passed as function references, allowing `this` to refer to the event target.

```js
function changecolor() {
    console.log(this.innerHTML);
    this.style.backgroundColor = "blue";
}
btn.addEventListener('click', changecolor);
```

## 17. Double Click Event
The `dblclick` event triggers when a user clicks an element twice in rapid succession.

```js
btn.addEventListener('dblclick', (event) => {
    console.log(event);
});
```

## 18. Keyboard Events
Keyboard events like `keydown` can be used to detect which key is pressed and perform actions accordingly.

```js
int.addEventListener("keydown", (event) => {
    console.log(event);
    console.log("the key name is", event.key);
    console.log("and the key code is ", event.code);
});
```

```js
int.addEventListener('keydown', (event) => {
    let a = event.key;
    if (a == "ArrowDown") {
        console.log("the player moved back");
    } else if (a == "ArrowUp") {
        console.log("the player moves ahead");
    } else if (a == "ArrowRight") {
        console.log("the player moved right");
    } else if (a == "ArrowLeft") {
        console.log("the player moved left");
    }
});
```

## 19. Form Submission Event
Forms in HTML trigger a `submit` event, which can be intercepted and handled using JavaScript.

```js
let form = document.querySelector("form");
form.addEventListener("submit", function a(event) {
    event.preventDefault();
    let username = this.elements[0].value;
    let pass = this.elements[1].value;
    let place = this.elements[2].value;
    console.log(`the username is ${username} the password is ${pass} and the place is ${place}`);
});
```

## 20. Changing Background Color Randomly
Using random RGB values, background colors can be dynamically changed to provide visual feedback.

```js
function random() {
    return Math.floor(Math.random() * 256);
}
btn.addEventListener('click', () => {
    let a = random();
    let b = random();
    let c = random();
    let color = `rgb(${a},${b},${c})`;
    int.style.backgroundColor = color;
    h1.innerHTML = color;
});
```

## 21. String Manipulation with toUpperCase()
The `toUpperCase()` method returns the calling string value converted to uppercase.

```js
let arr2 = ['tauhid', 'jishu', 'mumma', 'papa'];
let c = arr2.map((x) => {
    return x.toUpperCase();
});
console.log(c);
```

## 22. Squaring Elements using map
Using `map()`, each element of an array can be transformed — e.g., squaring each number.

```js
let arr = [1, 2, 3, 4, 5, 6, 7];
let sqr = arr.map((e) => {
    return e * e;
});
console.log(sqr);
```

## 23. Summing Elements using reduce
`reduce()` can be used to accumulate values — like summing up all numbers in an array.

```js
let sum = arr.reduce((res, e) => {
    return res + e;
});
console.log(sum);
```

## 24. Transforming Values using map + forEach
`map()` creates a transformed array, and `forEach()` can be used to act on or display its elements.

```js
let p5 = arr.map((e) => {
    return e + 5;
});
let x = p5.forEach((r) => {
    console.log(r);
});
```


## 25. async/await Function (Basic)

Async functions return a promise, and `await` is used to pause the execution until the promise resolves.

```js
async function tauhd() {
    return "hello tauhid";
}

async function jishu() {
    throw "weak internet connection";
    return "hello jishu";
}

jishu()
  .then((result) => {
    console.log("result", result);
  })
  .catch((error) => {
    console.log("the error was:", error);
  });
```

---

## 26. Random Number with Promises and async/await

Combining asynchronous behavior with `Promise` and `await`.

```js
function getNum() {
    let num = Math.floor(Math.random() * 10) + 1;
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log(num);
            resolve();
        }, 1000);
    });
}

async function demo() {
    await getNum();
    await getNum();
    await getNum();
    await getNum();
}
```

---

## 27. JSON.parse for Parsing JSON

`JSON.parse()` is used to convert a JSON string into a JavaScript object.

```js
let x = '{"fact":"All cats need taurine in their diet to avoid blindness.","length":140}';
let y = JSON.parse(x);
console.log(y.fact);
```

---

## 28. Fetch API using .then()

The Fetch API is used to make HTTP requests. The response must be converted to JSON.

```js
let url = "https://catfact.ninja/fact";

fetch(url)
  .then((res) => res.json())
  .then((d) => {
    console.log(d.fact);
    return fetch(url);
  })
  .then((res) => res.json())
  .then((da) => {
    console.log(da.fact);
  })
  .catch((e) => {
    console.log("Error:", e);
  });
```

---

## 29. Fetch API using async/await

A cleaner syntax using `async/await` to handle fetch calls.

```js
let url = "https://catfact.ninja/fact";

async function getFacts() {
    try {
        let res = await fetch(url);
        let data = await res.json();
        console.log(data.fact);
    } catch (r) {
        console.log(r);
    }
}
```
