(function() {
    'use strict';

    angular
        .module('partyon.profile')
        .controller('PremierCtrl', PremierCtrl);

    PremierCtrl.$inject = ['$scope', '$state'];

    function PremierCtrl($scope, $state) {

      $scope.premiers = [
        {
          type: 1,
          mark: "img/premier/hosted-1-party.png",
          description: "Hosted 1<br>party"
        },
        {
          type: 2,
          mark: "img/premier/ultimate.png",
          description: "Ultimae<br>Party host"
        },
        {
          type: 3,
          mark: "img/premier/hosted-100-party.png",
          description: "Hosted one<br>100 parties"
        },
        {
          type: 4,
          mark: "img/premier/best-party-music.png",
          description: "Best party<br>music"
        },
        {
          type: 5,
          mark: "img/premier/number-1-party.png",
          description: "Number one<br>party host"
        }
      ];
    }
})();
