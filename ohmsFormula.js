angular.module("ohmCalculator", [])
    .controller("calculator", function ($scope) {
        $scope.voltage = null;
        $scope.current = null;
        $scope.resistance = null;
        $scope.list = [];

        $scope.listFixer = function(fieldName){
            if ($scope.list.indexOf(fieldName) == -1){
                if ($scope.list.length <2 ){
                    $scope.list.push(fieldName);
                }
                else
                {
                    $scope.list.splice(0,1);
                    $scope.list.push(fieldName);

                }
            }

            console.log($scope.list);
        };

        $scope.calculate = function(){
            if($scope.list.length == 2) {

                if ($scope.list.indexOf("voltage") == -1) {
                    $scope.voltage = $scope.current * $scope.resistance;
                }
                else if ($scope.list.indexOf("current") == -1) {
                    $scope.current = $scope.voltage / $scope.resistance;
                }
                else if ($scope.list.indexOf("resistance") == -1) {
                    $scope.resistance = $scope.voltage / $scope.current;
                }
            }
        };

        $scope.$watch('[voltage, current, resistance]', function(newVal, oldVal){
            $scope.calculate();
        },
        true);
    });