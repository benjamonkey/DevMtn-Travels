angular.module("devmtnTravel").controller("locationsCtrl", function($scope, mainSrv){

  $scope.getdata = function(){
    return mainSrv;
  }

})
