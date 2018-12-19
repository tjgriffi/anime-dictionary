var app = angular.module('AnimeDictionary', []);


app.controller('Main', ['$scope', '$http', function($scope, $http){

	$scope.animeSubmitClicked = function(){
		var animeTitle = $scope.v_animeTitle;

		console.log(animeTitle);
		
		// Send http message
		$http.get('http://localhost:8080/findAnime', {params : {aTitle: animeTitle}}).then( function(mysqlAnimeTitle){
			console.log(mysqlAnimeTitle);
		},
		function(err){
			throw err;
		});
	};
}]);