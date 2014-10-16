(function(){
  'use strict';

  angular.module('gyroball', ['ionic', 'timer'])
  .controller('MainCtrl', ['$scope', '$interval', function($scope, $interval){
    // TIMER
    // $scope.timerRunning = false;
    $scope.startTimer = function(){
      $scope.$broadcast('timer-start');
      $scope.timerRunning = true;
    };
    $scope.stopTimer = function(){
      $scope.$broadcast('timer-stop');
      $scope.timerRunning = false;
    };
    $scope.$on('timer-stopped', function(event, data){
      console.log('Timer Stopped - data = ', data);
    });
    // END Timer

    // GYROSCOPE
    function success(orientation){
      console.log('------SUCCESS!-------\n' +
        'ORIENTATION= ' + '\n' +
        'alpha: ' + orientation.alpha + '\n' +
        'beta: ' + orientation.beta + '\n' +
        'gamma: ' + orientation.gamma + '\n' +
        'absolute: ' + orientation.absolute + '\n');
      $scope.orientation = orientation;
    }

    function error(err){
      alert('ERROR!', err);
    }

    $scope.start = function(){
      console.log('-------Starting Gyroscope-------');
      navigator.gyroscope.watchGyroscope(success, error, {frequency:500});
      $scope.startTimer();
    };

    $scope.reset = function(id){
      $scope.stopTimer();
      // @param {String} id - the id of the watch returned from #watchGyroscope.
      console.log('-------Reset Gyroscope-------');
      navigator.gyroscope.clearWatch(id);
    };
    // END Gyroscope
    // BALL
    // $scope.x = document.documentElement.clientWidth;
    // $scope.y = document.documentElement.clientHeight - 20;
    // $scope.ballX = $scope.x - 50;
    // $scope.ballY = $scope.y + 5;

  }]);
})();
