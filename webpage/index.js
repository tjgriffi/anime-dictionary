var app = angular.module('AnimeDictionary', ['ngSanitize']);


app.controller('Main', ['$scope', '$http', function($scope, $http){

	$scope.animeSubmitClicked = function(){
		var animeTitle = $scope.v_animeTitle;

		console.log(animeTitle);
		
		// Send http message
		$http.get('http://localhost:8080/findAnime', {params : {aTitle: animeTitle}}).then( function(mysqlAnimeTitle){
			$scope.animeTitle = mysqlAnimeTitle.data[0].name;
			$scope.animeDescription = mysqlAnimeTitle.data[0].description;
		},
		function(err){
			throw err;
		});
	};
}]);