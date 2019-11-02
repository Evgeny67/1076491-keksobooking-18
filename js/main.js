'use strict';

(function () {

  var title = 'Новая метка'; // 'Новая метка объявления'
  var checkin = ['12 : 00', '13 : 00', '14 : 00'];
  var checkout = ['12 : 00', '13 : 00', '14 : 00'];
  var description = ''; // 'строка с описанием'
  var type = ['palace', 'flat', 'house', 'bungalo'];
  var features = ['wifi', 'dishwasher', 'parking', 'washer', 'elevator', 'conditioner'];
  var photos = [
    'http://o0.github.io/assets/images/tokyo/hotel1.jpg',
    'http://o0.github.io/assets/images/tokyo/hotel2.jpg',
    'http://o0.github.io/assets/images/tokyo/hotel3.jpg'
  ];

  var avatarsList = window.utils.shuffle(getAvatars());

  function getAvatars() {
    var avatarsPicture = [];

    for (var i = 1; i <= 8; i++) {
      var counter = (i < 10 ? '0' : '') + i;
      avatarsPicture[i - 1] = 'img/avatars/user' + counter + '.png';
    }

    return avatarsPicture;
  }

  var avatarObjects = [];

  for (var i = 0; i < 8; i++) {
    var locationX = window.utils.getRandom(300, 900);
    var locationY = window.utils.getRandom(130, 630);
    avatarObjects.push({
      author: {
        avatar: avatarsList[i]
      },
      offer: {
        title: window.utils.getRandomElement(title),
        address: locationX + ',' + locationY,
        price: window.utils.getRandom(1000, 100000),
        type: window.utils.getRandomElement(type),
        rooms: window.utils.getRandom(1, 5),
        guests: window.utils.getRandom(1, 3),
        checkin: window.utils.getRandomElement(checkin),
        checkout: window.utils.getRandomElement(checkout),
        features: window.utils.getRandomElement(features),
        description: window.utils.getRandomElement(description),
        photos: window.utils.getRandomElement(photos),
        location: {
          x: locationX,
          y: locationY
        }
      }
    });
  }

  var mapPins = document.querySelector('.map__pins');
  var cityMap = document.querySelector('section.map');
  cityMap.classList.remove('map--faded');

  var pinTemplate = document.querySelector('#pin');
  var pinItem = pinTemplate.content.querySelector('button');

  function createPin(item) {
    var mapPoint = pinItem.cloneNode(true);
    mapPoint.style.left = item.offer.location.x + 'px';
    mapPoint.style.top = item.offer.location.y + 'px';
    mapPoint.querySelector('img').src = item.author.avatar;
    mapPoint.querySelector('img').alt = item.offer.title;

    mapPins.appendChild(mapPoint);
  }

  avatarObjects.forEach(function (item) {
    createPin(item);

  });

})();
