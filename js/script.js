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

//==============================

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');
const deleteElement = (e) => {
	console.log(e.target);
	console.log(e.type);
}

btn.addEventListener('click', deleteElement);
overlay.addEventListener('click', deleteElement);





