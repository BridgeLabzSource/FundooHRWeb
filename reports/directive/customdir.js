angular.module('fundooHrApp').directive('myDirective', function () {
  console.log("calling");
   return {
       restrict: 'EA',
       scope: {
           value:'=',
           index:"="
       },
       templateUrl:'templates/jsondata.html',
       controller:function($scope){
         $scope.optionToggled = function(index){
             $scope.isAllSelected = $scope.value.EmplList.every(function(itm){ return itm.selected; });
             console.log($scope.value.EmplList);
           }
       }
   };

});
