angular.module("devmtnTravel").controller("bookedCtrl", function($scope, mainSrv){

  $scope.getdata = function(){
    return mainSrv;
  }

})
