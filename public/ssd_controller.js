var app = angular.module( "ssd_app", [] );

app.controller("ssd_controller", function($scope){

    $scope.result = [];

    $scope.number_of_rows = 50;
    $scope.number_of_lanes = 3;

    $scope.lanes = [];
    $scope.row1 = [];
    $scope.row2 = [];
    $scope.row3 = [];

    $scope.lanes.length = $scope.number_of_lanes;
    $scope.row1.length = $scope.number_of_rows;
    $scope.row2.length = $scope.number_of_rows;
    $scope.row3.length = $scope.number_of_rows;

    $scope.lanes[0] = $scope.row1;
    $scope.lanes[1] = $scope.row2;
    $scope.lanes[2] = $scope.row3;

    for (var i = 0; i < $scope.number_of_lanes; i++) {

        for (var j = 0; j < $scope.number_of_rows; j++) {
            $scope.lanes[i][j] = false;
        };
    };

    $scope.regenerate_array = function(){
        $scope.lanes = [];
        $scope.row1 = [];
        $scope.row2 = [];
        $scope.row3 = [];

        $scope.lanes.length = $scope.number_of_lanes;
        $scope.row1.length = $scope.number_of_rows;
        $scope.row2.length = $scope.number_of_rows;
        $scope.row3.length = $scope.number_of_rows;

        $scope.lanes[0] = $scope.row1;
        $scope.lanes[1] = $scope.row2;
        $scope.lanes[2] = $scope.row3;

        for (var i = 0; i < $scope.number_of_lanes; i++) {
            for (var j = 0; j < $scope.number_of_rows; j++) {
                $scope.lanes[i][j] = false;
            };
        };
    };

    $scope.log_click = function(row, lane){
        $scope.lanes[lane][row] = true;
    };

    $scope.generate_final_array = function(){
        $scope.result = "{";
        var vec = [];
        var separator1 = "";
        for (var i = 0; i < $scope.number_of_lanes; i++) {
           vec.push("{"+$scope.lanes[i].join(',')+"}");
        };
        $scope.result += vec.join(",");
        vec = [];
        $scope.result += "}";
    };
});