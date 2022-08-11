'use script';

// const box = document.querySelector('.box');

// // const width = box.clientWidth;
// // const height = box.clientHeight;

// const width = box.offsetWidth;
// const height = box.offsetHeight;

// console.log(width, height);

// const btn = document.querySelector('#btn');
// // btn.onclick = function() {
// // 	alert('Click');
// // }
// // btn.addEventListener('click', () => {
// // 	alert('Click');
// // })
// // btn.addEventListener('mouseenter', () => {
// // 	alert('Home');
// // })
// btn.addEventListener('mouseenter', (e) => {
// 	console.log(e.target);
// });
//==============================

// const deleteElement = (e) => {
// 	e.target.remove();
// };

// btn.addEventListener('click', deleteElement);
// btn.removeEventListener('click', deleteElement);

//=============================
// const btn = document.querySelector('#btn');
// let i = 0;
// const deleteElement = (e) => {
// 	console.log(e.target);
// 	i++;
// 	if (i == 1) {
// 		btn.removeEventListener('click', deleteElement);	
// 	}
// };

// btn.addEventListener('click', deleteElement);

//=========== uslovie  =========

// let number = 50;

// do {
// 	console.log(number);
// 	number++;
// }
// while (number < 55);


// for (let i = 1; i < 8; i++) {
// 	if (i === 6) {
// 		break;
// 	}
// 	console.log(i);
// } 

//=========== metod ==========

// const test = "18.3px";
// console.log(parseFloat(test));

//========== destrukturizacija ==========
// const options = {
// 	name: "test",
// 	width: 1024,
// 	height: 1024,
// 	colors: {
// 		border: "red",
// 		bg: "grey"
// 	},
// 	makeTest: function() {
// 		console.log("Test");
// 	}
// };
// console.log(options.name);
// delete options.name;
// console.log(options);
// //perebor objektov
// let counter = 0;
// for (let key in options) {
// 	if (typeof (options[key]) === "object") {
// 		for (let i in options[key]) {
// 			console.log(`Property ${i} has meaning ${options[key][i]}`)
// 		}
// 	} else {
// 	console.log(`Property ${key} has meaning ${options[key]}`);
// 	counter++;
// 	}
// }
// console.log(counter);
// //wiwedenie znacheniy massiva
// console.log(Object.keys(options));
// //perechislenie znacheniy massiva
// console.log(Object.keys(options).length);
// options.makeTest();
// const {border, bg} = options.colors;
// console.log(border);
// console.log(bg);

//=========== massiv i psevdomassiv =========
// const arr = [1, 2, 3, 6, 8];
// arr.push(10);
// console.log(arr);

// for (let i = 0; i < arr.length; i++) {
// 	console.log(arr[i]);
// }

// for (let value of arr) {
// 	console.log(value);
// }
//metod forEach
// const arr = [1, 2, 3, 6, 8, 10];

// arr.forEach(function(item, i, arr) {
// 	console.log(`${i}; ${item} inside an array ${arr}`);
// })
// const str = prompt("", "");
// const products = str.split(",");
// products.sort();
// console.log(products.join(';'));

// const arr = [1, 2, 13, 6, 28, 10];
// arr.sort(compareNum);
// console.log(arr); 
// function compareNum(a, b) {
// 	return a - b;
// }
//========== peredacha po ccilke ==========
// const obj = {
// 	a: 5,
// 	b: 1
// };
// const copy = obj;
// copy.a = 10;
// console.log(copy);
// console.log(obj);

// //Kopirovanie c pomoschyu cikla


// function copy(mainObj) {
// 	let objCopy = {};
// 	let key;

// 	for (key in mainObj) {
// 		objCopy[key] = mainObj[key];
// 	}
// 	return objCopy;
// }
// const numbers = {
// 	a: 2,
// 	b: 5,
// 	c: {
// 		x: 7,
// 		y: 4
// 	}
// };
// const newNumbers = copy(numbers);
// newNumbers.a = 10;
// newNumbers.c.x = 10;

// console.log(newNumbers);
// console.log(numbers);
// const add = { 
// 	d: 17,
// 	e: 20
// };
// // console.log(Object.assign(numbers, add));
// const clone = Object.assign({}, add);
// clone.d = 20;
// console.log(add);
// console.log(clone);

// //kopii massivov
// const oldArray = ['a', 'b', 'c'];
// const newArray = oldArray.slice();
// newArray[1] = 'hgfajgfjsh';
// console.log(newArray);
// console.log(oldArray);

// //operatop pazvarota
// const video = ['youtube', 'vimeo', 'rutube'],
// 	  blogs = ['wordpress', 'livejourmal', 'blogger'],
// 	  internet = [...video, ...blogs, 'vk', 'facebook'];

// console.log(internet);

// function log(a, b, c) {
// 	console.log(a);
// 	console.log(b);
// 	console.log(c);
// }
// const numb = [2, 5, 7];
// log(...numb);

// //spred operator
// const array = ["a", "b"];
// const newArray = [...array];
// const q = {
// 	one: 1,
// 	two: 2
// };
// const newObj = {...q};
// console.log(newArray);
// console.log(newObj);

//========== OOP =========

// let str = 'some';
// let strObj = new String(str);
// console.log(typeof(str));
// console.log(typeof(strObj));

// console.dir([1,2,3]);
// const soldier = {
// 	health: 400,
// 	armor: 100
// };
// const jonh = {
// 	health: 100
// };

// const getPeople = count =>
// new Promise((resolves, rejects) => {
// const api = `https://api.randomuser.me/?nat=US&results=${count}`; const request = new XMLHttpRequest();
// request.open("GET", api);
// request.onload = () =>
// request.status === 200
// ? resolves(JSON.parse(request.response).results) : reject(Error(request.statusText));
// request.onerror = err => rejects(err);
// request.send(); });
// getPeople(5)
// .then(members => console.log(members))
// .catch(error => console.error(`getPeople failed: ${error.message}`)) );


// function Vacation(destination, length) { this.destination = destination;
// this.length = length; }
// Vacation.prototype.print = function() {
// console.log(this.destination + " | " + this.length + " days"); };
// const maui = new Vacation("Maui", 7);
// maui.print();


class Vacation { constructor(destination, length) {
this.destination = destination;
this.length = length; }
print() {
console.log(`${this.destination} will take ${this.length} days.`); }
}
// const trip = new Vacation("Santiago, Chile", 7);
// trip.print(); 
class Expedition extends Vacation { constructor(destination, length, gear) {
super(destination, length);
this.gear = gear; }
print() { super.print();
console.log(`Bring your ${this.gear.join(" and your ")}`); }
}
const trip = new Expedition("Mt. Whitney", 3, [ "sunglasses",
"prayer flags",
"camera"
]); 
trip.print();