(function() {
    'use strict';

    angular
        .module('partyon.home')
        .controller('FilterCtrl', FilterCtrl);

    FilterCtrl.$inject = ['$scope', '$state'];

    function FilterCtrl($scope, $state) {

      $scope.filter = {
        sex: 0,
        distance: 50,

        ageMin: 1,
        ageMax: 80,
        ageFrom: 18,
        ageTo: 50,

        timeMin: 0,
        timeMax: 1439,
        timeFrom: 600,
        timeTo: 900,

        timeDir: true,
        pointerForTime: ''
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

      $scope.setSex = function(sex) {
        $scope.filter.sex = sex;
      }

      $scope.getTimeString = function(timeVal) {
        var minutes = timeVal % 60;
        var hours = (timeVal - minutes) / 60;

        if (hours < 10) hours = '0' + hours;
        if (minutes < 10) minutes = '0' + minutes;

        //console.log(hours + ':' + minutes);
        return hours + ':' + minutes;
      }

      $scope.options = {
            defaultDate: "2016-08-06",
            minDate: "2016-01-01",
            maxDate: "2016-12-31",
            disabledDates: [
                "2016-06-22",
                "2016-07-27",
                "2016-08-13",
                "2016-08-15"
            ],
            dayNamesLength: 1, // 1 for "M", 2 for "Mo", 3 for "Mon"; 9 will show full day names. Default is 1.
            mondayIsFirstDay: true,//set monday as first day of week. Default is false
            eventClick: function(date) { // called before dateClick and only if clicked day has events
                console.log(date);
            },
            dateClick: function(date) { // called every time a day is clicked
                console.log(date);
            },
            changeMonth: function(month, year) {
                console.log(month, year);
            },
            filteredEventsChange: function(filteredEvents) {
                console.log(filteredEvents);
            }
        };

        $scope.events = [
            {foo: 'bar', eventClass: 'expired', date: "2015-08-18"}, //value of eventClass will be added to CSS class of the day element
            {foo: 'bar', date: "2015-08-20"}
        ];

    }
})();
