(function() {
    'use strict';

    angular
        .module('partyon.profile')
        .controller('VotesCtrl', VotesCtrl);

    VotesCtrl.$inject = ['$scope', '$state'];

    function VotesCtrl($scope, $state) {

      $scope.votes = [
        {
          poster: {
            avatar: "img/sample/selfie4.jpg",
            name: "Nina Lauritsen"
          },
          description: "Kan vi ikke starte helgen pa nytt igjen? Jeg var ikke klar.",
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
      ];
    }
})();
