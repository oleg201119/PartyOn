(function() {
    'use strict';

    angular
        .module('partyon.service')
        .factory('Party', Party);

    Party.$inject = ['$http', '$q', '$cordovaFileTransfer'];

    function Party($http, $q, $cordovaFileTransfer) {

      var service = {};

      service.createParty = function(banner, title, condition, sex, lat, long, ageFrom, ageTo, timeFrom, timeTo, year, month, day) {

      }

      service.uploadPhoto = function(server, targetPath) {
        var q = $q.defer();

        // Upload Photo
        var options = {};
        $cordovaFileTransfer.upload(server, filePath, options).then(
          function(result) {
            // Success!
            q.resolve(result);
          },
          function(err) {
            // Error
            q.reject(err);
          },
          function (progress) {
            // constant progress updates
          }
        );

        return q.promise;
      }

      return service;
    }
})();
