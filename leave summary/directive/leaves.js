/**
*Directive file
*/
angular.module('mainApp')

.directive('itemCard', function() {
    // return the directive definition object
    return {
        scope: {
            item: "="
        },
        /*
         *@scope - specifies that the documented directive will create a new scope
         *@restrict - specifies how directives should be shown in the usage section
         For example, for [E]lement, [A]ttribute, and [C]lass, use @restrict ECA
        */
        controller: function($scope, $element, $attrs, $location) {
            $scope.addToCart = function(value, key) {
                  // get the scope associated with the main controller
                var mainScope = angular.element("#main").scope();
                mainScope.employees(value, key);
                return false;
            };
        },
        replace: true,
        templateUrl: "templates/directive.html"
    };
});
