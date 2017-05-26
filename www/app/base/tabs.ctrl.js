(function() {
    'use strict';

    angular
        .module('partyon.tabs')
        .controller('TabsCtrl', TabsCtrl);

    TabsCtrl.$inject = ['$scope', '$state', '$ionicModal'];

    function TabsCtrl($scope, $state, $ionicModal) {

      $scope.openCreateMenu = false;
      $scope.createIcon = 'icon-create-on';

      // New party creation modal
      $ionicModal.fromTemplateUrl('app/base/creation.html', {
        scope: $scope
      }).then(function(modal) {
        $scope.modalParty = modal;
      });
      
      // New shoutout creation modal
      $ionicModal.fromTemplateUrl('app/base/new-shoutout.html', {
        scope: $scope
      }).then(function(modal) {
        $scope.modalShoutout = modal;
      });

      // creation info for party
      $scope.party = {
        banner: "img/sample/club.png",
        sex: 1,
        filter: {
          age: {
            min: 18,
            max: 60,
            from: 18,
            to: 25
          }
        }
      };

      $scope.reverseOpenMenu = function() {
        $scope.openCreateMenu = !$scope.openCreateMenu;

        if ($scope.openCreateMenu) {
          $scope.createIcon = 'icon-create-off';
        } else {
          $scope.createIcon = 'icon-create-on';
        }
      }

      $scope.clickCreateButton = function() {
        $scope.reverseOpenMenu();
      }

      $scope.createShoutout = function() {
        $scope.modalShoutout.show();
        $scope.reverseOpenMenu();        
      }

      $scope.createParty = function() {
        $scope.modalParty.show();
        $scope.reverseOpenMenu();

        // Init map
        $scope.setMap(40.731365, -73.901605);
      }

      $scope.publish = function() {
        $scope.modalParty.hide();
        $scope.modalShoutout.hide();

        // TODO
        console.log('A party published');
      }

      $scope.editBanner = function() {

      }

      $scope.setSex = function(sex) {
        $scope.party.sex = sex;
      }

      $scope.setMap = function(lat, long) {
        var latLng = new google.maps.LatLng(lat, long);

        var mapOptions = {
          center: latLng,
          zoom: 15,
          mapTypeId: google.maps.MapTypeId.ROADMAP
        };

        $scope.map = new google.maps.Map(document.getElementById("map"), mapOptions);

        google.maps.event.addListenerOnce($scope.map, 'idle', function() {
          var marker = new google.maps.Marker({
              map: $scope.map,
              animation: google.maps.Animation.DROP,
              position: latLng
          });
        });
      }

    }
})();
