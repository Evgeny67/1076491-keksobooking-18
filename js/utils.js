'use strict';

(function () {
  window.utils = {};
  window.utils.getRandom = function (min, max) {
    return Math.floor(Math.random() * (max - min) + min);
  };

})();
