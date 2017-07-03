(function() {
    'use strict';

    angular
        .module('partyon.home')
        .controller('FeedCtrl', FeedCtrl);

    FeedCtrl.$inject = ['$scope', '$state'];

    function FeedCtrl($scope, $state) {

      $scope.parties = [
        /*
        {
          banner: "img/sample/club.png",
          poster: {
            avatar: "img/sample/selfie4.jpg",
            name: "Nina Lauritsen"
          },
          description: "Beachparty!",
          time: "20.00 - 02.00",
          location: "1.8km unna"
        },
        {
          banner: "img/sample/club2.png",
          poster: {
            avatar: "img/sample/selfie4.jpg",
            name: "Nina Lauritsen"
          },
          description: "Beachparty!",
          time: "20.00 - 02.00",
          location: "1.8km unna"
        },
        {
          banner: "img/sample/club.png",
          poster: {
            avatar: "img/sample/selfie4.jpg",
            name: "Nina Lauritsen"
          },
          description: "Beachparty!",
          time: "20.00 - 02.00",
          location: "1.8km unna"
        }
        */
      ];

      $scope.goPartyDetail = function(index) {
        console.log('Party index=' + index);
      }

      $scope.goProfile = function() {

      }

      $scope.goChat = function() {
        $state.go('chat');
      }

      $scope.goParty = function() {
        $state.go('party');
      }

      $scope.goFilter = function() {
        $state.go('filter');
      }
    }
})();
