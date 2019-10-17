'use strict';

(function () {
  window.utils = {};

  window.utils.getRandomPrice = function (min = 10000, max = 50000) {
  return Math.floor(Math.random() * (max - min) + min);
  }

  window.utils.getRandomRooms = function (min = 1, max = 100) {
  return Math.floor(Math.random() * (max - min) + min);
  }

  window.utils.getRandomGuests = function (min = 1, max = 10) {
  return Math.floor(Math.random() * (max - min) + min);
  }

  window.utils.getRandomY = function (min = 130, max = 630) {
  return Math.floor(Math.random() * (max - min) + min);
  }

  window.utils.getRandomX = function (min = 300, max = 900) {
  return Math.floor(Math.random() * (max - min) + min);
  }

})();
