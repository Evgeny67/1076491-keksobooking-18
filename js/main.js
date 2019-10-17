'use strict';

var maps = document.querySelector('.map');
maps.classList.remove('map--faded');

var keksItem = document.querySelector('.map__pins');

var title = 'Новая метка объявления';
var checkins = ['12 : 00', '13 : 00', '14 : 00'];
var checkouts = ['12 : 00', '13 : 00', '14 : 00'];
var price = window.utils.getRandomPrice();
var description = 'строка с описанием';
var rooms = window.utils.getRandomRooms();
var guests = window.utils.getRandomGuests();
var address = '{{location.x }}, {{location.y}}';
var types = ['palace', 'flat', 'house', 'bungalo'];
var features = ['wifi', 'dishwasher', 'parking', 'washer', 'elevator', 'conditioner'];
var photos = [
  'http://o0.github.io/assets/images/tokyo/hotel1.jpg',
  'http://o0.github.io/assets/images/tokyo/hotel2.jpg',
  'http://o0.github.io/assets/images/tokyo/hotel3.jpg'
];
var locationX = window.utils.getRandomX();
var locationY = window.utils.getRandomY();

var avatarsList = [];

function getAvatars() {
  for (var i = 0; i < 8; i++) {
    avatarsList[i] = 'img/avatars/user' + (i < 10 ? '0' : '') + i + '.png';
  }
}

function shuffle(arr) {
  var arr = []; // Например: если написать var arr = ['palace', 'flat', 'house', 'bungalo'], то функция работает
  for (var i = arr.length - 1; i > 0; i--) {
    var j = Math.floor(Math.random() * (i + 1)); // случайный индекс от 0 до i
    var x = arr[i];
    arr[i] = arr[j];
    arr[j] = x;
  }
  return arr;
}

// avatarsList.forEach(function (user) {
//  var keksElement = keksItem.cloneNode(true);
//  keksElement.querySelector('.map__pins').text = user.title;
//  keksElement.querySelector('.map__pin').style = user.location;
//  keksElement.querySelector('.map__pin').text = user.type;
// });
