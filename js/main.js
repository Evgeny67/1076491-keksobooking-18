'use strict';

var maps = document.querySelector('.map');
maps.classList.remove('map--faded');

var cityMap = document.querySelector('.map__pins');
var button = document.createElement('button');
button.classList.add('map__pin');
button.style.left = window.utils.getRandom(300, 900).toString() + 'px';
button.style.top = window.utils.getRandom(130, 630).toString() + 'px';
cityMap.appendChild(button);

var picture = document.createElement('img');
picture.src = getAvatars();
picture.style.width = '40' + 'px';
picture.style.height = '40' + 'px';
picture.alt = 'метка объявления';
button.appendChild(picture);


var title = 'Новая метка объявления';
var checkins = ['12 : 00', '13 : 00', '14 : 00'];
var checkouts = ['12 : 00', '13 : 00', '14 : 00'];
var price = window.utils.getRandom(1000, 100000);
var description = 'строка с описанием';
var rooms = window.utils.getRandom(1, 100);
var guests = window.utils.getRandom(1, 3);
var address = 'locationX, locationY';
var types = ['palace', 'flat', 'house', 'bungalo'];
var features = ['wifi', 'dishwasher', 'parking', 'washer', 'elevator', 'conditioner'];
var photos = [
  'http://o0.github.io/assets/images/tokyo/hotel1.jpg',
  'http://o0.github.io/assets/images/tokyo/hotel2.jpg',
  'http://o0.github.io/assets/images/tokyo/hotel3.jpg'
];
var locationX = window.utils.getRandom(300, 900);
var locationY = window.utils.getRandom(130, 630);

function getAvatars() {
  var avatars = [];
  for (var i = 0; i < 8; i++) {
    avatars[i] = 'img/avatars/user' + (i < 10 ? '0' : '') + i + '.png';
  }

  return avatars;
}

function shuffle(arr) {

  for (var i = arr.length - 1; i > 0; i--) {
    var j = Math.floor(Math.random() * (i + 1));
    var x = arr[i];
    arr[i] = arr[j];
    arr[j] = x;
  }

  return arr;
}

// avatars.forEach(function (user) {
// var avatarsElement = ........cloneNode(true);
//  avatarsElement.querySelector('.map__pins').numder = user.window.utils.getRandom(price);
//  avatarsElement.querySelector('.map__pin').style = user.location;
//  avatarsElement.querySelector('.map__pin').text = user.type;
// });
