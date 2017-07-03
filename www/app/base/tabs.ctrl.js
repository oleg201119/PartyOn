(function() {
    'use strict';

    angular
        .module('partyon.tabs')
        .controller('TabsCtrl', TabsCtrl);

    TabsCtrl.$inject = ['$scope', '$state', '$ionicModal', 'Photo'];

    function TabsCtrl($scope, $state, $ionicModal, Photo) {

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
        banner: "",
        title: "",
        condition: ""
      };

      $scope.filter = {
        sex: 1,

        ageMin: 1,
        ageMax: 80,
        ageFrom: 18,
        ageTo: 50,

        timeMin: 0,
        timeMax: 1439,
        timeFrom: 600,
        timeTo: 900,

        timeDir: true,
        pointerForTime: '',

        year: '',
        month: '',
        day: ''
      }

      // init
      $scope.init = function() {
        var d = new Date();

        $scope.filter.year = d.getFullYear();
        $scope.filter.month = d.getMonth() + 1;
        $scope.filter.day = d.getDate();
      }

      // date
      $scope.options = {
        dateClick: function(date) {
          console.log(date);

          $scope.filter.year = date.year;
          $scope.filter.month = date.month;
          $scope.filter.day = date.day;
        }
      };

      $scope.optionsForTimeSlide = {
        floor: 0,
        ceil: 1439,
        step: 10,
        hidePointerLabels: true,
        hideLimitLabels: true,
        onChange: function(sliderId, modelValue, highValue, pointerType) {
          // console.log('Change: modelValue: ' + modelValue + ',  ' + 'highValue: ' + highValue + ',  ' + 'pointerType: ' + pointerType);

          if (pointerType != $scope.filter.pointerForTime) {
            $scope.filter.timeDir = !$scope.filter.timeDir;
            $scope.filter.pointerForTime = pointerType;
          }
        },
        onStart: function(sliderId, modelValue, highValue, pointerType) {
          // console.log('Start: modelValue: ' + modelValue + ',  ' + 'highValue: ' + highValue + ',  ' + 'pointerType: ' + pointerType);

          $scope.filter.pointerForTime = pointerType;
        },
        onEnd: function(sliderId, modelValue, highValue, pointerType) {
          // console.log('End: modelValue: ' + modelValue + ',  ' + 'highValue: ' + highValue + ',  ' + 'pointerType: ' + pointerType);

          $scope.filter.pointerForTime = '';
        }
      };

      $scope.getTimeString = function(timeVal) {
        var minutes = timeVal % 60;
        var hours = (timeVal - minutes) / 60;


        if (hours < 10) hours = '0' + hours;
        if (minutes < 10) minutes = '0' + minutes;

        //console.log(hours + ':' + minutes);
        return hours + ':' + minutes;
      }

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
        console.log('Edit Banner');

        Photo.chooseLibraryPhoto().then(
          function(data) {
            $scope.party.banner = data;
          },
          function(error) {
          }
        );
      }

      $scope.setSex = function(sex) {
        $scope.filter.sex = sex;
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

      $scope.init();
    }
})();
