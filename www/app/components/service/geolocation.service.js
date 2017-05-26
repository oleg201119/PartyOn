(function() {
    'use strict';

    angular
        .module('partyon.service')
        .factory('Geolocation', Geolocation);

    Geolocation.$inject = ['$q', '$cordovaGeolocation'];

    function Geolocation($q, $cordovaGeolocation) {

      var service = {};

      service.getCurrentPosition = function() {
        var q = $q.defer();

        // Get current location
        var posOptions = {timeout: 3000, enableHighAccuracy: false};

        $cordovaGeolocation.getCurrentPosition(posOptions).then(function(position) {
          var coords = {
            lat: position.coords.latitude,
            long: position.coords.longitude
          };

          q.resolve(coords);
        }, function(err) {
          q.reject(err);
        });

        return q.promise;
      }

      service.startWatch = function() {
        var q = $q.defer();

        var watchOptions = {
          timeout : 3000,
          enableHighAccuracy: false // may cause errors if true
        };

        service.watch = $cordovaGeolocation.watchPosition(watchOptions);

        service.watch.then(
          null,
          function(err) {
            q.reject(err);
          },
          function(position) {
            var coords = {
              lat: position.coords.latitude,
              long: position.coords.longitude
            };

            q.resolve(coords);
        });

        return q.promise;
      }

      service.stopWatch = function() {
        if (service.watch) {
          watch.clearWatch();
        }
      }

      return service;
    }
})();
