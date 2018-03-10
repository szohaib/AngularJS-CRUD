angular.module("mainApp" , []).controller('appController',function($scope){
    
       $scope.info = [];

        $scope.submit = function(){
            
            $scope.info.push({ firstName: $scope.firstName, lastName: $scope.lastName, gender : $scope.gender });  
            $scope.firstName = '';
            $scope.lastName = '';
            $scope.gender = '';
            console.log($scope.info);       
            
        }
    
        $scope.delete = function($index){
            console.log($index);
            $scope.info.splice($index,1);
        }

        $scope.edit = function($index){
           
            $scope.number = $index;
        
          
        }

        $scope.update = function(){
            console.log($scope.number);
            $scope.info[$scope.number].firstName = $scope.efName;
            $scope.info[$scope.number].lastName = $scope.elName;
            $scope.info[$scope.number].gender = $scope.egender;
            // $scope.efName = '';
            // $scope.elName = '';
            // $scope.egender = '';
        }
    
});