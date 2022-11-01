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


// class Vacation { constructor(destination, length) {
// this.destination = destination;
// this.length = length; }
// print() {
// console.log(`${this.destination} will take ${this.length} days.`); }
// }
// const trip = new Vacation("Santiago, Chile", 7);
// trip.print(); 
// class Expedition extends Vacation { constructor(destination, length, gear) {
// super(destination, length);
// this.gear = gear; }
// print() { super.print();
// console.log(`Bring your ${this.gear.join(" and your ")}`); }
// }
// const trip = new Expedition("Mt. Whitney", 3, [ "sunglasses",
// "prayer flags",
// "camera"
// ]); 
// trip.print();

//=========== elementy =========
// const squares = document.querySelectorAll('.square');

// squares.forEach(item => {
// 	console.log(item);
// })


// const oneSquare = document.querySelector('#square');
// console.log(oneSquare);

let obj1 = {
	name: 'Alon4ik',
	info: {
		skills: ['html', 'css'],
	}
};
let obj2 = {
	name: 'Max',
	age: 46,
}
// ====dlinnaja zapicj=====
// let newObj = Object.assign({}, obj2, obj1);
// newObj = Object.assign({}, obj1);
// let objJson = JSON.stringify(obj1);
// newObj = JSON.parse(objJson);
// console.log(newObj.info === obj1.info);

// // ====formula linejnogo poiska=====
// const array = [1,4,5,8,5,1,2,7,5,2,11]
// let count = 0
// function linearSearch(array, item) {
// 	for (let i = 0; i < array.length; i++) {
// 		count +=1
// 		if (array[i] === item) {
// 			return i;
// 		}
// 	}
// 	return null
// }
// console.log(linearSearch(array, 12))
// console.log('count= ', count)


// // ====formula binarnogo poiska=====

const array = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]
let count = 0;
function binarySearch(array, item) {
 let start = 0;
 let end = array.length
 let middle;
 let found = false
 let position = -1
 while (found === false && start <= end) {
	 count += 1
	middle = Math.floor((start + end) / 2);
	 if (array[middle] === item) {
		 found = true
		 position = middle
		 return position
	 }
	 if (item <array[middle]) {
		 end = middle -1
	 } else {
		 start = middle + 1
	 }
 }
 return position;
}
function recursiveBinarySearch(array, item, start, end)
	let middle = Math.floor(start + end)

console.log(binarySearch(array, 11))
console.log(count)



//======== sortirovka =========
// const array = Array(100).fill(null).map(() => getRandomBetween(-100, 100))
// console.log(array)

// // console.time('quicksort')
// // quicksort(array)
// // console.timeEnd('quicksort')

// console.time('sort method')
// const newArray = array.sort((a, b) => a - b)
// console.timeEnd('sort method')
// console.log(newArray)
// function getRandomBetween (min, max) {
// 	return min + Math.floor(Math.random() * (max - min + 1))
// }


//========funkcija bistroy sortirovki============
// function quicksort (array) {
// 	if (array.length < 2) {
// 		return array
// 	}
// 	const index = Math.floor(Math.random() * array.length)
// 	const currentItem = array[index]
// 	const  more = []
// 	const less = []

// 	for (let i = 0; i < array.length; i++) {
// 		if (i === index) {
// 			continue
// 		}
// 		if (array[i] > currentItem) {
// 			more.push(array[i])
// 		}
// 		else {
// 			less.push(array[i])
// 		}
// 	}
// 	return [
// 		...quicksort(less),
// 		currentItem,
// 		...quicksort(more)
// 	]
// }
// console.log(quicksort(array))

// const arr = [0, 3, 2, 5, 6, 8, 1, 9, 4, 2, 1, 2, 9, 6, 4, 1, 7, -1, -5, 23, 6, 2, 35, 6, 3, 32]
// let count = 0
// const newArray = arr.sort((a, b) => a - b)
// function isSorted (array) {
// 	for (let i = 1; i<array.length; i++) {
// 		count +=1
// 		if (array[i] < array[i - 1]) {
// 			return false
// 		}
// 	}
// 	return true
// }

// function selectionSort(array) {
// 	for (let i = 0; i < array.length; i++) {
// 		let indexMin = 1
// 		for (let j = i+1; j < array.length; j++) {
// 			if(array[j] < array[indexMin]) {
// 				indexMin = j
// 			}
// 			count += 1
// 		}
// 		let tmp = array[i]
// 		array[i] = array[indexMin]
// 		array[indexMin] = tmp
// 	}
// 	return array
// }
// console.log(selectionSort(arr))
// console.log(isSorted(newArray))
// console.log(newArray)
// console.log (arr.length)
// console.log('count = ', count)


// //============ metod sort=============

// // const array = Array(100).fill(null).map(() => Math.floor(Math.random() * 2000) - 1000)
// const array = [ -418, 639, -384, -691, -419,  300, -200,  201,  903, -126, -745, -204,  770, -586, 		-809,  655, -448,  766,  596, -326,  908,  855, 914,  295,  124,  982, -268, -353, -917,  194,  		914, -610,  586, -119, -698, -180, -403, -175,  573, -263, -793,  877, -704,  449, -97,  137,  			501,  742, -791, -146,  293,  190,   67,  279,  894, -308,   61,  851,  457, -863, -979,  765,  		206, -329,    2,  424, -956, -762,  840,  709, -137,  932,  985,  221,  311,  869, -267, -315, 			-215,   66,  431,  -78, -209, -416,  296,   97, -533,  -59, -601,  224, -725,  309,  900, -223, 		-735, -739, -835,  450, -797, 837]
// const sorted = array.slice().sort((a, b) => a - b)
// // console.log(array)
// // console.log(sorted)
// // console.log(array.sort((a, b) => b - a))
// console.log(array, sorted)
// console.log(array === array.sort())



//======= metod sort dlja strok===========
// const words = ["банан", "яблоло", "еж", "локоть"]
// const words2 = ["decide", "house", "nice", "cloud"]
// console.log(words.sort())
// console.log(words2.sort())
// const alphabet = 'hopbahtredlhdshgfedsahjfsbcvvzch'.split('')
// console.log(alphabet)
// const words3 = 'I like me house'.split('')
// console.log(words3)
// const alphabet = 'алдурисчвыщгуефмффбчмсауе'.split('')
// const collatore = new Intl.Collator('ru-RU')
// console.log(alphabet.sort(collatore.compare))


// const collatore = new Intl.Collator('en-EN')
// const users = [
// 	{ name: 'Pavel', age: 19},
// 	{ name: 'Nata', age: 46},
// 	{ name: 'David', age: 10}
// ]

// // users.sort((a, b) => collatore.compare(a.name, b.name))
// users.sort((a, b) => a.age - b.age)
// console.log(users)


// ============= sortirovka puzirkom============
// const array = [ -418, 639, -384, -691, -419,  300, -200,  201,  903, -126, -745, -204,  770, -586, 		-809,  655, -448,  766,  596, -326,  908,  855, 914,  295,  124,  982, -268, -353, -917,  194,  		914, -610,  586, -119, -698, -180, -403, -175,  573, -263, -793,  877, -704,  449, -97,  137,  			501,  742, -791, -146,  293,  190,   67,  279,  894, -308,   61,  851,  457, -863, -979,  765,  		206, -329,    2,  424, -956, -762,  840,  709, -137,  932,  985,  221,  311,  869, -267, -315, 			-215,   66,  431,  -78, -209, -416,  296,   97, -533,  -59, -601,  224, -725,  309,  900, -223, 		-735, -739, -835,  450, -797, 837]
// bubbleSort(array)
// function bubbleSort (array) {
// 	for (let n = 0; n < array.length; n++) {
// 		for (let i = 0; i < array.length - 1 - n; i++) {
// 			if (array[i] > array[i + 1]) {
// 				const buff = array[i]
// 				array[i] = array[i + 1]
// 				array[i + 1] = buff
// 			}
// 		}
// 	}
// 	console.log(array)
// }
// //======2======
// const sorted = bubbleSort(Array(1000).fill(null).map(() => Math.floor(Math.random() * 2000) - 1000))
// console.log(sorted)
// function bubbleSort (array) {
// 	for (let n = 0; n < array.length; n++) {
// 		for (let i = 0; i < array.length - 1 - n; i++) {
// 			if (array[i] > array[i + 1]) {
// 				const buff = array[i]
// 				array[i] = array[i + 1]
// 				array[i + 1] = buff
// 			}
// 		}
// 	}
// 	return array
// }


//=========sortirovka wuborom===========
//=============1===================
// const array = [
//   -345, -432, -89, -47, 488, -151, 306, -489, 254, -35, 108, -474, -88, 58, -370, 402, 365, 213, -156, -138, -144, 439, -4, 499, -43, -313, -474, -219, 59, 155, 308, 14, 396, -215, -91, 285, 51, -328, -477, -444, -163, 317, -129, -6, -265, -354, 377, 421, 417, 388, 479, -54, 312, -36, -406, -483, -432, -395, -122, 149, 55, -74, -54, 393, 5, -62, 484, -134, -377, -228, 242, -30, 117, 252, 137, -390, 135, 34, 311, -18, -172, 491, -342, 274, -304, 472, 209, -201, 51, -12, -120, -22, -419, -295, -383, -458, -227, 179, 453, -437
// ]
// console.log(selectionSort(array))
// function selectionSort (array) {
// 	// for (let j = 0; j < array.length; j++) {
// 	// 	let max = -Infinity
// 	// 	let index = null
		
// 	// 	for (let i = 0; i < array.length - j; i++) {
// 	// 		if (array[i] > max) {
// 	// 			max = array[i]
// 	// 			index = i
// 	// 		}
// 	// 	}
// 	// 	let buff = array[array.length - 1 - j]
// 	// 	array[array.length -1 - j] = max
// 	// 	array[index] = buff
// 	// }
// 	// //========2=================
// 	for (let j = 0; j < array.length - 1; j++) {
// 	let min = Infinity
// 	let index = 0
// 	for (let i = j; i < array.length; i++) {
// 		if (array[i] < min) {
// 			min = array[i]
// 			index = i
// 		}
// 	}
// 	const buff = array[j]
// 	array[j] = min
// 	array[index] = buff
// 	}
// 	return array 
// }
// // =============== 3 ==============
// const arr = [-22, -46, -66, 3, 12, 9, -2, 14, 42,-4, 3, 12,-18, 24]
// let count = 0

// function bubbleSort(array) {
// 	for (let i = 0; i < array.length; i++) {
// 		for (let j = 0; j < array.length; j++) {
// 			if (array[j + 1] < array[j]) {
// 				let tmp = array[j]
// 				array[j] = array[j + 1]
// 				array[j + 1] = tmp
// 			}
// 			count+=1
// 		}
// 	}
// 	return array
// }
// console.log('length', arr.length)
// console.log(bubbleSort(arr))
// console.log('count = ', count)



//??//=======factorial================
// const factorial = (n) => {
// 	if (n === 1) {
// 		return 1
// 	}
// 	return n * factorial(n - 1)
// }
// console.log(factorial(9))



// //??// ==============chisla fibonachi===========
// const fibonachi = (n) => {
// 	if (n === 1 || n === 2) {
// 		return 1
// 	}
// 	return fibonachi(n-1) + fibonachi(n-2)
// }
// console.log(fibonachi(8))



// //??// =========bistraja sortirovka==============
// const arr = [1, 4, -3, -63, 12, -42, 7, -54, 8, 24, -8, 61, 2, 19, -9, 33, 5, -38]
// let count = 0

// function quickSort(array) {
// 	if (array.length <= 1) {
// 		return array
// 	}
// 	let pivotIndex = Math.floor(array.length / 2);
// 	let pivot = array[pivotIndex]
// 	let less = []
// 	let greated =[]
// 	for (let i = 0; i < array.length; i++) {
// 		count +=1
// 		if (i === pivotIndex) 
// 		continue
// 		if (array[i] < pivot) {
// 			less.push(array[i])
// 		} else {
// 			greated.push(array[i])
// 		}		
// 	}
// 	return [...quickSort(less), pivot, ...quickSort(greated)]
// }


// console.log(quickSort(arr))
// console.log(count)
//=======2==========

