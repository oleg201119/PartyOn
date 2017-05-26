(function() {
    'use strict';

    angular
        .module('partyon.home')
        .controller('FilterCtrl', FilterCtrl);

    FilterCtrl.$inject = ['$scope', '$state'];

    function FilterCtrl($scope, $state) {

      $scope.ageMin = 1;
      $scope.ageMax = 60;
      $scope.age = {
        from: 18,
        to: 50
      };

      $scope.timeMin = 0;
      $scope.timeMax = 23;
      $scope.time = {
        from: 2,
        to: 4
      };

      $scope.minTimeChanged = function() {

      }

      $scope.maxTimeChanged = function() {

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
