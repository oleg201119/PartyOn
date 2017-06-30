(function() {
    'use strict';

    angular
        .module('partyon.service')
        .factory('Util', Util);

    Util.$inject = ['$q', '$cordovaFileTransfer'];

    function Util($q, $cordovaFileTransfer) {

      var service = {};

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
