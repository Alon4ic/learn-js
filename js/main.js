
// //this
// const obj = {
// 	name: 'Alon4ik',

// 	getField() {
// 		console.log(this.name);
// 	}
// }
// const obj2 = {
// 	age: 25,
// };
// obj.getField.call(obj2);


// // Area of visibility
// console.log(b);


// function doSomething() {
// 	const a = 2;
// 	const b = 3;

// 	function deep() {
// 		const c = 5;
// 		console.log(a + b + c);
// 	}
// 	deep()
// }
// doSomething();

// //ascent
// doSomething2();
// const doSomething = function() {
// 	console.log('doSomething');
// }
// function doSomething2() {
// 	console.log('doSomething2');
// }

// // closure
// function generateCostFunction() {
// 	let cost = 0;

// 	return function buySomething() {
// 		cost += 10;
// 		console.log (cost);
// 	};
// }
// const buyOne = generateCostFunction();

// buyOne();
// buyOne();
// buyOne();
// buyOne();
// console.log('----------------');

// const buyTwo = generateCostFunction();
// buyTwo();
// buyTwo();
// buyTwo();


//  //  ===== naznachenie obrabotchika sobitij =====

// const btn = document.querySelector('#btn');

// btn.onclick = function() {
// 	alert('Click');
// };
// btn.addEventListener('click', () => {
// 	alert('Click');
// })


// btn.addEventListener('click', () => {
// 	alert('Second Click');
// })


// btn.addEventListener('mouseenter', () => {
// 	console.log('Hover');
//})
// btn.addEventListener('click', (e) => {
// 	e.target.remove();
// })

// // ====== perechod po DOM-elementam =======
//console.log(document.body);
//console.log(document.documentElement);
//console.log(document.body.childNodes);
console.log(document.body.firstElementChild);

//console.log(document.querySelector('#current').parentNode);

//console.log(document.querySelector('[data-current="3"]').parentNode);

//console.log(document.querySelector('#current').parentElement);

//console.log(document.querySelector('[data-current="3"]').nextElementSibling);

// for (let node of document.body.childNodes) {
// 	if (node.nodeName = '#text') {
// 		continue;
// 	}
// 	console.log(node);
// }
   
'use strict';
document.addEventListener('DOMContentLoaded', () => {
	const movieDB = {
        movies: [
            "Логан",
            "Лига справедливости",
            "Ла-ла лэнд",
            "Одержимость",
            "Скотт Пилигрим против..."
        ]
    };

    const adv = document.querySelectorAll('.promo__adv img'),
        poster = document.querySelector('.promo__bg'),
        genre = poster.querySelector('.promo__genre'),
        movieList = document.querySelector('.promo__interactive-list'),
        addForm = document.querySelector('form.add'),
        addInput = addForm.querySelector('.adding__input'),
        checkbox = addForm.querySelector('[type="checkbox"]');

    addForm.addEventListener('submit', (event) => {
        event.preventDefault();

        let newFilm = addInput.value;
        const favorite = checkbox.checked;

        if (newFilm) {

            if (newFilm.length > 21) {
                newFilm = `${newFilm.substring(0, 22)}...`;
            }

            if (favorite) {
                console.log("Добавляем любимый фильм");
            }

            movieDB.movies.push(newFilm);
            sortArr(movieDB.movies);
    
            createMovieList(movieDB.movies, movieList);
        }

        event.target.reset();

    });

    const deleteAdv = (arr) => {
        arr.forEach(item => {
            item.remove();
        });
    };

    const makeChanges = () => {
        genre.textContent = 'драма';

        poster.style.backgroundImage = 'url("img/bg.jpg")';
    };

    const sortArr = (arr) => {
        arr.sort();
    };

    function createMovieList(films, parent) {
        parent.innerHTML = "";
        sortArr(films);
    
        films.forEach((film, i) => {
            parent.innerHTML += `
                <li class="promo__interactive-item">${i + 1} ${film}
                    <div class="delete"></div>
                </li>
            `;
        });
});