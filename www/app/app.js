angular.module('underscore', [])
.factory('_', function() {
  return window._;
});

function MultiRangeDirective ($compile) {
    var directive = {
        restrict: 'E',
        scope: {
            ngModelMin: '=',
            ngModelMax: '=',
            ngMin: '=',
            ngMax: '=',
            ngStep: '='
        },
        link: link
    };

    return directive;

    ////////////////////

    function link ($scope, $element, $attrs) {
        var min, max, step, $inputMin = angular.element('<input type="range">'), $inputMax;
        if (typeof $scope.ngMin != 'undefined') {
            min = $scope.ngMin;
            $inputMin.attr('min', min);
        } else {
            min = 0;
        }
        if (typeof $scope.ngMax != 'undefined') {
            max = $scope.ngMax;
            $inputMin.attr('max', max);
        } else {
            max = 100;
        }
        if (typeof $scope.ngStep != 'undefined') {
            $inputMin.attr('step', $scope.ngStep);
        }
        $inputMax = $inputMin.clone();
        $inputMin.attr('ng-model', 'ngModelMin');
        $inputMax.attr('ng-model', 'ngModelMax');
        $compile($inputMin)($scope);
        $compile($inputMax)($scope);
        $element.append($inputMin).append($inputMax);
        $scope.ngModelMin = $scope.ngModelMin || min;
        $scope.ngModelMax = $scope.ngModelMax || max;

        $scope.$watch('ngModelMin', function (newVal, oldVal) {
            if (newVal > $scope.ngModelMax) {
                $scope.ngModelMin = oldVal;
            }
        });

        $scope.$watch('ngModelMax', function (newVal, oldVal) {
            if (newVal < $scope.ngModelMin) {
                $scope.ngModelMax = oldVal;
            }
        });
    }
}

angular.module('partyon', [
  'ionic',
  'ngCordova',

  'partyon.routes',
  'partyon.directives',

  'partyon.tabs',
  'partyon.auth',
  'partyon.home',
  'partyon.notification',
  'partyon.inbox',
  'partyon.profile',
  'partyon.chat',
  'partyon.invite',
  'partyon.shoutout',

  'partyon.service',

  'underscore',
  'flexcalendar'
])
.directive('uiMultiRange', MultiRangeDirective)
.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
});
