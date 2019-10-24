'use strict';

(function () {
  window.utils = {};
  window.utils.getRandom = function (min, max) {
    return Math.floor(Math.random() * (max - min) + min);
  };

  window.utils.shuffle = function (arr) {
    for (var i = arr.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var x = arr[i];
      arr[i] = arr[j];
      arr[j] = x;
    }

    return arr;
  };

  window.utils.getRandomElement = function (list) {
    return list[Math.floor(Math.random() * list.length)];
  };

})();
