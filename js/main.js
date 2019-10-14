'use strict';

var maps = document.querySelector('.map');
maps.classList.remove('map--faded');

var keksItem = document.querySelector('.map__pins');

var avatar = ('img/avatars/user01.png, img/avatars/user02.png, img/avatars/user03.png, img/avatars/user04.png, img/avatars/user05.png, img/avatars/user06.png, img/avatars/user07.png, img/avatars/user08.png');
var title = ('Новая метка объявления');
var address = ('{{location.x}}, {{location.y}}');
var price = Math.random(0, 99999);
var type = ('palace, flat, house, bungalo');
var rooms = Math.random(0, 3);
var guests = Math.random(0, 2);
var checkin = ('12 : 00, 13 : 00, 14 : 00');
var checkout = ('12 : 00, 13 : 00, 14 : 00');
var features = ['wifi', 'dishwasher', 'parking', 'washer', 'elevator', 'conditioner'];
var description = ('строка с описанием');
var photos = [
  'http://o0.github.io/assets/images/tokyo/hotel1.jpg',
  'http://o0.github.io/assets/images/tokyo/hotel2.jpg',
  'http://o0.github.io/assets/images/tokyo/hotel3.jpg'
];
// var X = Math.random();
var Y = Math.random(130, 630);
// var location = Math.random(X,Y);

var KEKSO_BOOKING = []

for (var i = 0; i < 8; i++) {
  KEKSO_BOOKING.push({
    avatar: 'img src = "img/avatars/user01.png"',
    title: 'alt = "Метка объявления"',
    // address,
    // price,
    // type,
    // rooms,
    // guests,
    // checkin,
    // checkout,
    // features:
    // description
    // photos:
    location: 'left: 200px; top: 400px;'
  });
};

KEKSO_BOOKING.forEach(function (user) {
  var keksElement = keksItem.cloneNode(true);
  // keksElement.querySelector('.map__pins').text = user.title;
  keksElement.querySelector('.map__pin--main').style = user.location;
  keksElement.querySelector('.map__pin--main').img = user.avatar;
});
