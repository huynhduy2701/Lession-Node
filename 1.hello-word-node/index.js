console.log("hello js");

const array = [1,2,3,4];

console.log(array, "array");

console.log("log befor settimeout");
setTimeout(()=>{
    console.log("log settimeout 2 second")
},2000)
console.log("log affter settimeout");

console.log("--------------");
console.log("log befor setInterval");

let count = 0;

const intervalId = setInterval(() => {
  console.log(`log in setInterval ${count++}`);

  if (count === 5) {
    clearInterval(intervalId);
    console.log("Đã dừng sau 5 lần");
  }
}, 3000);


