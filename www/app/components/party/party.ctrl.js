(function() {
    'use strict';

    angular
        .module('partyon.home')
        .controller('PartyCtrl', PartyCtrl);

    PartyCtrl.$inject = ['$scope', '$state'];

    function PartyCtrl($scope, $state) {

      $scope.joinParty = function() {

      }


      $scope.party = {
        banner: "img/sample/club.png",
        poster: {
          avatar: "img/sample/selfie4.jpg",
          name: "Nina Lauritsen"
        },
        description: "Eirik Bjork godtok invitasjonen din til festen fanners!",

        guests: [
          {
            avatar: "img/sample/selfie4.jpg"
          },
          {
            avatar: "img/sample/selfie4.jpg"
          },
          {
            avatar: "img/sample/selfie4.jpg"
          }
        ],
        distance: "2.5 km unna",
        time: "20.00 - 02.00",
        date: "27 Jan 2016",
        house: [
          "Godt humor, ta med drikke", "Og av med skoene!"
        ],
        premiers: [
          {
            type: 1,
            mark: "img/premier/hosted-1-party.png",
            description: "Hosted 1<br>party"
          },
          {
            type: 2,
            mark: "img/premier/ultimate.png",
            description: "Ultimae<br>Party host"
          }
        ]
      };

    }
})();
