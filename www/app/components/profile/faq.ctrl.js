(function() {
    'use strict';

    angular
        .module('partyon.profile')
        .controller('FaqCtrl', FaqCtrl);

    FaqCtrl.$inject = ['$scope', '$state'];

    function FaqCtrl($scope, $state) {

      $scope.items = [{
        title: 'How can I sign in?',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc congue nibh eu risus pretium interdum. Quisque sed lorem vitae diam porta vehicula eget non nisi.'
      },{
        title: 'What is the app about?',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc congue nibh eu risus pretium interdum. Quisque sed lorem vitae diam porta vehicula eget non nisi.'
      },{
        title: 'How to edit my profile?',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc congue nibh eu risus pretium interdum. Quisque sed lorem vitae diam porta vehicula eget non nisi.'
      },{
        title: 'How see the events',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc congue nibh eu risus pretium interdum. Quisque sed lorem vitae diam porta vehicula eget non nisi.'
      },{
        title: 'How to create a shoutout?',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc congue nibh eu risus pretium interdum. Quisque sed lorem vitae diam porta vehicula eget non nisi.'
    }];

    $scope.toggleItem= function(item) {
      if ($scope.isItemShown(item)) {
        $scope.shownItem = null;
      } else {
        $scope.shownItem = item;
      }
    };
    
    $scope.isItemShown = function(item) {
      return $scope.shownItem === item;
    };

  }
})();
