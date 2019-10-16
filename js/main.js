'use strict';

var maps = document.querySelector('.map');
maps.classList.remove('map--faded');

var keksItem = document.querySelector('.map__pins');

var title = ['Новая метка объявления'];
var checkin = ['12 : 00', '13 : 00', '14 : 00'];
var checkout = ['12 : 00', '13 : 00', '14 : 00'];
var price = 'min: 1000, max: 100000';
var description = ['строка с описанием'];
var rooms = 'min: 1, max: 10';
var guests = 'min: 1, max: 10';
var address = '600, 350';
var type = ['palace', 'flat', 'house', 'bungalo'];
var features = ['wifi', 'dishwasher', 'parking', 'washer', 'elevator', 'conditioner'];
var photos = [
  'http://o0.github.io/assets/images/tokyo/hotel1.jpg',
  'http://o0.github.io/assets/images/tokyo/hotel2.jpg',
  'http://o0.github.io/assets/images/tokyo/hotel3.jpg'
];
// var location;

function getRandomMinMax(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

var avatarsList = [];

function getAvatars() {
  for (var i = 0; i < 8; i++) {
    avatarsList[i] = 'img/avatars/user' + i + '.png';
  }
}

function shuffle(arr) {
  var copyArr = arr.slice(0);
  for (var i = copyArr.length - 1; i > 0; i--) {
    var j = Math.floor(Math.random() * (i + 1));
    var value = copyArr[i];
    copyArr[i] = copyArr[j];
    copyArr[j] = value;
  }
  return copyArr;
}

console.log(shuffle());

// avatarsList.forEach(function (user) {
//  var keksElement = keksItem.cloneNode(true);
//  keksElement.querySelector('.map__pins').text = user.title;
//  keksElement.querySelector('.map__pin').style = user.location;
//  keksElement.querySelector('.map__pin').text = user.type;
// });
