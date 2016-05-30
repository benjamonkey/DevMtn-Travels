angular.module("devmtnTravel").controller("packagesCtrl", function($scope, mainSrv){

    $scope.getdata = function(){
      return mainSrv;
    }
    $scope.items = getdata();




})
