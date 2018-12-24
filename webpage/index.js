var app = angular.module('AnimeDictionary', ['ngSanitize']);


app.controller('Main', ['$scope', '$http', function($scope, $http){
	var animeTitle;
	var animeDescription;

	// To find and display an anime in the window
	// TODO: Add error handling/if an anime isnt in the database/
	$scope.findAnime = function(){
		animeTitle = $scope.v_animeTitle;

		console.log($scope.v_animeTitle);
		
		// Send http message
		$http.get('http://localhost:8080/findAnime', {params : {aTitle: animeTitle}}).then( function(mysqlAnimeTitle){
			$scope.animeTitle = mysqlAnimeTitle.data[0].name;
			$scope.animeDescription = mysqlAnimeTitle.data[0].description;
		},
		function(err){
			throw err;
		});
	};

	// Function for adding an anime
	$scope.addAnime = function(){

		animeTitle = $scope.v_animeTitle;
		animeDescription = $scope.v_animeDescription;

		console.log(animeTitle);
		console.log(animeDescription);

		// Send the http addanime message to the http server
		$http.post('http://localhost:8080/addAnime', {aTitle: animeTitle,aDescription: animeDescription}).then( function(msg){
			console.log(msg);
		}, 
		function(err){
			throw err;
		})

		// Different way of calling the post function
		// var request = $http({
		// 	method: "POST",
		// 	url: 'http://localhost:8080/addAnime',
		// 	data: {aTitle: animeTitle, aDescription: animeDescription}
		// }).then(function(){
		// 	console.log("Succesfull transmission");
		// }, function(err){
		// 	throw err;
		// })

	}

	// // Function for removing an anime
	// $scope.removeAnime = function () {}
}]
);