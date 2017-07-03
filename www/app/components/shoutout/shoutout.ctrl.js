(function() {
    'use strict';

    angular
        .module('partyon.shoutout')
        .controller('ShoutoutsCtrl', ShoutoutsCtrl);

    ShoutoutsCtrl.$inject = ['$scope', '$state'];

    function ShoutoutsCtrl($scope, $state) {

      $scope.shoutouts = [
        /*
        {
          poster: {
            avatar: "img/sample/selfie4.jpg",
            name: "Nina Lauritsen"
          },
          description: "Kan vi ikke starte helgen pa nytt igjen?",
          time: "28 min siden",
          location: "1.8km unna",
          likes: 30
        },
        {
          poster: {
            avatar: "img/sample/selfie4.jpg",
            name: "Nina Lauritsen"
          },
          description: "Kan vi ikke starte helgen pa nytt igjen? Jeg var ikke klar. Kan vi ikke starte helgen pa nytt igjen",
          time: "28 min siden",
          location: "1.8km unna",
          likes: 30
        },
        {
          poster: {
            avatar: "img/sample/selfie4.jpg",
            name: "Nina Lauritsen"
          },
          description: "Kan vi ikke starte helgen pa nytt igjen? Jeg var ikke klar.",
          time: "28 min siden",
          location: "1.8km unna",
          likes: 30
        }
        */
      ];
    }
})();
