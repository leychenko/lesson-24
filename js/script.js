'use strict';

// =========================================================================


                              //   Function


// =================================Задача №1=============================

		// function showName () {
		// 	console.log('Вася!');
		// }
		// setTimeout(showName, 0);
		// console.log('Коля!');

		// Коля! будет первым

// =================================Задача №2=============================

		// Функция вызвана верно потому что это у нас Function-declaretion

// =================================Задача №3=============================

		// Нет не верно потому что это функциональное выражение и такую функцию можно вызывать только после ее обьявления

// =================================Задача №4================================
		// let showMessage;
		// 	if(2 > 1){
		// 		showMessage = function (){
		// 			console.log('Сообщение');
		// 		}
		// 	}
		// 	showMessage();

		// Здесь нам нужно обьявить переменую выше функции,но значение не присваивать,а сделать функциональным выражением. Так мы сможем обратиться к переменной за пределами функции. 
// ===================================================================================

												// Массивы

// ==================================================================================

// ================================= Задача №1 =============================
	//  let arr = ['Ваня','Иштван','Оля',];
	//  let newArr = arr;
	//  newArr.push('Петя');
	//  console.log(arr);
	// Мы получим число 4 потому что метод push добавляет элемент в конец массива 

// ================================= Задача №2 =============================
	// let users = ['Ваня','Иштван',];

	// users.push('Оля');
	// console.log(users);

	// users.splice(1, 1,'Петя');
	// console.log(users);
	
	//  users.splice(1, 1);
	// console.log(users);

	// let usersTwo = users.splice(1, 1);
	// console.log(usersTwo);
	
	// let arr = [
	// 	{name: 'Ваcя', age: 18 },
	// 	{name: 'Коля', age: 25 },
	// 	{name: 'Оля', age: 'Не скажу'},
	// ]

	// let resultOne = arr.find(function(item,index,array){
	// 	return item.age === 25;
	// });
	// console.log(resultOne);
	

	// users.unshift('Маша','Паша',);
	// console.log(users);
	

// ================================= Задача №3 =============================

	// let users = ['Ваня','Иштван',];
	// console.log(users);
	

	// users.splice(1, 1,'Петя');
	// console.log(users);

// ================================= Задача №4 =============================

	// let str = 'Ваня,Иштван,Оля';
	// let newArr = str.split(',');
	// console.log(newArr);

// ================================= Задача №5 =============================

	// let arr = [9, 2, 8,];
	// let reduceValue = arr.reduce(function (previousValue, item, index, array){
	// 	console.log(previousValue);
	// });

	// previousValue = 9 потому что мы не задали начального значения поэтому  previousValue равно первому елементу массива.

// ===================================================================================

												// DOM

// ==================================================================================

// ================================= Задача №1 =============================


// let attData = document.querySelector('[data-say-hi="yes"]');
// attData.innerHTML = 'Привет!';
// console.log(attData);
	
// ================================= Задача №2 =============================

	// Вариант 1
		// const elems = document.querySelector('li');
		// const elemsTwo = elems.nextElementSibling;
		// console.log(elemsTwo);

	// Вариант 2

		// let ul = document.querySelector('ul');
		// const listItem = ul.lastElementChild;
		// console.log(listItem);


// ================================= Задача №3 =============================

// const colection = document.querySelectorAll('.like');
// console.log(colection);

// ================================= Задача №4 =============================


// const list = document.querySelectorAll('ul');
// list.insertAdjacentHTML(
// 	'beforeend',
// 	'<li>Текст</li>'
// );
// console.log(list);

// Функція викликає помилку!

// ==================================================================================

// JS (размеры,прокрутка и координаты элементов на странице и окна браузера)

// ==================================================================================

// ================================= Задача №1 =============================

	const mainElement = document.documentElement.clientWidth;
	const windowElementWidth = window.innerWidth;
	const scrollBarWidth = (windowElementWidth - mainElement);

	console.log(`Ширина полоси прокрутки ${scrollBarWidth}px`);
	

	
// ================================= Задача №2 =============================

	// 	function setScrollPage () {
	// 		window.scrollTo({
	// 			top: 100,
	// 			left: 0,
	// 			behavior: "smooth"
	// 		});
	// 	}

		
	// setTimeout (setScrollPage, 1000);

// ================================= Задача №3 =============================

	// const firstElement = document.querySelector('[data-say-hi="yes"]');
	// const secondElement = document.querySelector('.subscribe')
	// const thirdElement = document.querySelector('.like')

	// function getItemPlace (a) {
	// 	let getItemTop = a.getBoundingClintRect().top;
	// 	let getItemLeft = a.getBoundingClintRect().left;

	// 	console.log(`Координати об'єкту віносно окна браузера: x = ${getItemLeft}, y = ${getItemTop}`);
	// }
	// getItemPlace (firstElement);
	// getItemPlace (secondElement);
	// getItemPlace (firstElement);

	const firstElement = document.querySelector(".like");

	const firstElementTop = firstElement.getBoundingClientRect().top;
	console.log(firstElementTop);
	const firstElementLeft = firstElement.getBoundingClientRect().left;
	console.log(firstElementLeft);
	


