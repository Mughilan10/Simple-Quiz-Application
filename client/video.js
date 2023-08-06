angular.module('videoPlayerApp', [])
  .controller('VideoPlayerController', function($scope) {
    var video = document.getElementById("myVideo");

    $scope.skip = function(seconds) {
      video.currentTime += seconds;
    };

    $scope.pauseVid = function() {
      video.pause();
    };

    $scope.playVid = function() {
      video.play();
    };

    $scope.restart = function() {
      video.currentTime = 0;
      video.play();
    };
  });