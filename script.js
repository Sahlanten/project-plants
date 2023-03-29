// *Базовые вычесления

// let userName = 'LeoTolstoy';
// let bonusBalance = 131;
// let everyPurchaseBonus = 50;
// let everyDayFired = 3;
// let daysCount = 10;
// let bonusBalance2 = bonusBalance + (everyPurchaseBonus * daysCount) - daysCount * everyDayFired;
// let pastilaPrice = 80;
// let reminder = bonusBalance2 % pastilaPrice;

// console.log('Пользователь: ' + userName);
// console.log('Баланс: ' + bonusBalance);
// console.log('Баланс через 10 дней: ' + bonusBalance2);
// console.log(`К покупке доступно: ${(bonusBalance2 - reminder) / pastilaPrice} кг пастилы`);

// *Базовые вычесления

// *Базовая логика

// let userName = 'Vova';
// let balance = 0;

// if (userName === 'Admin') {
// 	console.log('Администратор')
// } else if (balance > 5000) {
// 	console.log('Вип-клиент')
// } else if (balance > 1000) {
// 	console.log('Постоянный покупатель')
// } else {
// 	console.log('Гость')
// }

// let user = prompt('Имя пользователя: ');
// let orderOwner = prompt('Вы хозяин заказа?');

// if (user === 'admin') {
// 	alert('Редактирование разрешено');
// } else if (orderOwner === 'да') {
// 	alert('Редактирование разрешено');
// } else alert('Заказ нельзя редактировать!');

// let bonusBalance = 500;
// let orderPrice = 3000;
// let monthNumberPurchase = 1;
// let standardBonus = 0.1;
// let increasedBonus = 0.2;
// let increasedBonusPurchase = 0.05;

// if (bonusBalance > 5000 && monthNumberPurchase >= 2) {
// 	console.log(orderPrice + ((increasedBonus + increasedBonusPurchase) * orderPrice));
// } else if (bonusBalance < 5000 && monthNumberPurchase >= 2) {
// 	console.log(orderPrice + ((standardBonus + increasedBonusPurchase) * orderPrice));
// } else console.log(orderPrice + (standardBonus * orderPrice))

// *Базовая логика

// *Строки. Алгоритмы. Как отлаживать код

// let product = 'Печенье «Юбилейное», 1 кг';
// let inBasket = true;
// let quantity = 5;

// if (inBasket === true) {
// 	console.log(`${quantity}  x  ${product}`)
// }

// !let accountStatus = 'fedf';
// let username = 'Vasya';
// let cashbackPercentage;
// let accountLevel;

// !switch (accountStatus) {

// 	case 'vip':
// 		cashbackPercentage = 30;
// 		accountLevel = 'ВИП';
// 		break

// 	case 'premium':
// 		cashbackPercentage = 20;
// 		accountLevel = 'премиум';
// 		break

// 	case 'extended':
// 		cashbackPercentage = 15;
// 		accountLevel = 'улучшенный';
// 		break

// 	default:
// 		cashbackPercentage = 10;
// 		accountLevel = 'обычный';
// 		break
// !}

// console.log(`${username} ${accountLevel} аккаунт \nВы получаете ${cashbackPercentage} % с покупок на бонусный счёт`)

// let user = 'Killer2001';
// if (user === 'admin') {
// 	console.log('Привет, админ!\n Проверь нет ли жалоб от пользователей!');
// } else {
// 	console.log(`Здравствуйте ${user}! У нас новые поступления халвы!`);
// }

// let newOrders = 6;
// let errorOrders = 3;
// // показываем сколько новых заказов, а сколько заказов с ошибкой
// if (newOrders > errorOrders) {
// 	console.log('В магазине ' + newOrders + ' новых заказов (с ошибкой: ' + errorOrders + ')');
// }

// if (newOrders === errorOrders) {
// 	console.log('ВНИМАНИЕ! Что-то идет не так! Все новые заказы завершились ошибкой!');
// }

// *Строки. Алгоритмы. Как отлаживать код

// *Массивы и базовые методы работы с ними
// Task 1
// let array1 = [
// 	'Привет! Есть ли новости?',
// 	':)',
// 	'Начал работать над заданием.',
// 	'Ленюсь.',
// 	'Но дело движется.'
// ]

// console.log(array);

// Task 2

// let newArray = [
// 	'Привет! Есть ли новости?',
// 	':)',
// 	'Начал работать над заданием.',
// 	'Ленюсь.',
// 	'Но дело движется.'
// ];

// newArray.push('Готово');
// newArray[3] = 'Стараюсь';
// newArray.splice(1, 3);

// console.log(newArray);

// Task3

// let newArray2 = [
// 	'Привет! Есть ли новости?',
// 	':)',
// 	'Начал работать над заданием.',
// 	'Ленюсь.',
// 	'Но дело движется.'
// ];

// let hello = 'Привет! Есть ли новости?';
// let indexNumber = newArray2.indexOf(hello); // 0

// console.log(newArray2.indexOf(hello));

// ?switch (indexNumber) {
// 	case true:
// 		newArray2.splice(0, indexNumber);
// 		break

// 	default:
// 		console.log('Не найдено сообщения');
// ?}
// ? Почему indexNumber не число

// *Массивы и базовые методы работы с ними

// *Циклы

// !while
// !while do
// !for
// !for in
// !for off

// let array = [
// 	'— «Я принесла тебе утренний чай.Обычно ты ещё спишь».',
// 	'— «Вы приносите мне чай по утрам ?»',
// 	'— «А ты как думаешь, откуда он берётся ?»',
// 	'— «Не знаю.Я думал, это само собой разумеющееся».'
// ]

// ?for (i = 0; i < array.length; i++) {
// 	switch (i) {
// 		case i % 2 === 0:
// 	console.log('Мисс Марпл ' + array[i]);
// 	break

// 		default:
// 	console.log('Вы: ' + array[i]);
// 	break
// }
// ?}
// ? Почему не работает свич

// for (i = 0; i < array.length; i++) {
// 	if (i % 2 === 0)
// 		console.log('Мисс Марпл: ' + array[i]);
// 	else console.log('Вы ' + array[i]);
// }

// console.log();

// let word = 'чай';
// let array = [
// 	' Зеленый чай',
// 	' Красный чай',
// 	' Белый чай',
// 	' Валентин',
// 	' Мятный чай',
// 	' Karl',
// 	' Черный чай',
// 	' Dragon',
// 	' Фиолетовый чай'
// ]

// for (i = 0; i < array.length; i++) {
// 	if (array[i].includes(word))
// 		console.log(array[i]);
// }

// let messages = [
// 	["zloy-zloy", "Мы с Алешей сегодня на иксбоксе рубились, потом в маке поели, потом ему новый телефон купили, и два часа с горок в Нескучном саду катались"],
// 	["zloy-zloy", "У Алеши завтра день рождения"],
// 	["zloy-zloy", "Он мой дед. Ему будет 81 год"],
// 	["Вы", "LOL"]
// ]

// for (i = 0; i < messages.length; i++) {
// 	console.log(messages[i][0] + ': ' + messages[i][1])
// }

// *Циклы

// * Обьекты

// !in

// let author = {
// 	id: '7984278',
// 	name: 'Тургенев, Иван Сергеевич',
// 	books: ['Ася', 'Муму', 'Отцы и дети']
// };

// console.log(author.name + ': \n');

// for (let i = 0; i < author.books.length; i++) {
// 	console.log('-' + author.books[i] + ';\n')
// }

// Task 1
// let user = {
// 	name: 'Лев Толстой',
// 	login: 'leo_tolstoy',
// 	reputation: 97,
// 	total: 900
// };

// console.log(` ${user.name}, репутация: ${user.reputation}, сообщений ${user.total}`);

let messages = [
	["zloy-zloy", "Мы с Алешей сегодня на иксбоксе рубились, потом в маке поели, потом ему новый телефон купили, и два часа с горок в Нескучном саду катались."],
	["zloy-zloy", "У Алеши завтра день рождения."],
	["zloy-zloy", "Он мой дед. Ему будет 81 год."],
	["Вы", "LOL"]
];

let messages2 = []

for (let i = 0; i < messages.length; i++) {
	messages2.push[i]
}

console.log(messages2)

// * Обьекты