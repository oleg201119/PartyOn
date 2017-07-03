(function() {
    'use strict';

    angular
        .module('partyon.service')
        .factory('Photo', Photo);

    Photo.$inject = ['$q', '$cordovaCamera'];

    function Photo($q, $cordovaCamera) {

      var service = {};

      service.capturePhoto = function() {
        var q = $q.defer();

        // Capture Photo
        $cordovaCamera.getPicture({
          destinationType:Camera.DestinationType.FILE_URI,
          sourceType: Camera.PictureSourceType.CAMERA,
          mediaType: Camera.MediaType.PICTURE,
          allowEdit: true,
          targetWidth: 375,
          targetHeight: 245,
          correctOrientation: true
        }).then(function(imageURI) {
          console.log(imageURI);
          q.resolve(imageURI);
        }, function(err) {
          console.log(err);
          q.reject(err);
        });

        return q.promise;
      }

      service.chooseLibraryPhoto = function() {
        var q = $q.defer();

        // test

        q.resolve('image/sample/club.png');
        return q.promise;


        // Open Gallery
        $cordovaCamera.getPicture({
          destinationType:Camera.DestinationType.FILE_URI,
          sourceType: Camera.PictureSourceType.PHOTOLIBRARY,
          mediaType: Camera.MediaType.PICTURE,
          allowEdit: true,
          targetWidth: 375,
          targetHeight: 245
        }).then(function(imageURI) {
          console.log(imageURI);
          q.resolve(imageURI);
        }, function(err) {
          console.log(err);
          q.reject(err);
        });

        return q.promise;
      }

      return service;
    }
})();
