angular.module('PupsterApp', []);

angular.module('PupsterApp')
	.factory('animalService', [function(){
		var animals = [
			{
				type: 'Cat',
				name : 'Mocha',
				personality: 'Social Butterfly',
				description: "Hi my name is Mocha. I am a fun guy that would like to become part of your family today. Ask the desk for a visit and I promise you won't be disappointed.",
				age: 'Adult',
				energylevel: 'High Energy',
				sex: 'M',
				imageUrl: './animals/kitty1.jpg',
				imageUrl2: './animals/mocha.png'
			},
			{
				type: 'Cat',
				name : 'Harry',
				personality: 'Social Butterfly',
				description: "Hi my name is Harry. I am a fun gal that would like to become part of your family today. Ask the desk for a visit and I promise you won't be disappointed.",
				age: 'Young',
				energylevel: 'High Energy',
				sex: 'M',
				imageUrl: './animals/vegas.jpg',
				imageUrl2: './animals/vegas.png'
			},
			{
				type: 'Cat',
				name : 'Luna',
				personality: 'Social Butterfly',
				description: "Hi my name is Luna. I am a fun gal that would like to become part of your family today. Ask the desk for a visit and I promise you won't be disappointed.",
				age: 'Adult',
				energylevel: 'Couch Potato',
				sex: 'F',
				imageUrl: './animals/kitty3.jpg',
				imageUrl2: './animals/vegas.png'
			},
			{
				type: 'Cat',
				name : 'Ginger',
				personality: 'Social Butterfly',
				description: "Hi my name is Ginger. I am a fun gal that would like to become part of your family today. Ask the desk for a visit and I promise you won't be disappointed.",
				age: 'Young',
				energylevel: 'High Energy',
				sex: 'F',
				imageUrl: './animals/kitty3.jpg',
				imageUrl2: 'http://placehold.it/450x150'
			},
			{
				type: 'Cat',
				name : 'Viola',
				personality: 'Social Butterfly',
				description: "Hi my name is Violet. I am a fun gal that would like to become part of your family today. Ask the desk for a visit and I promise you won't be disappointed.",
				age: 'Senior',
				energylevel: 'High Energy',
				sex: 'F',
				imageUrl: './animals/kitty1.jpg',
				imageUrl2: 'http://placehold.it/250x150'
			},
			{
				type: 'Dog',
				breed: 'Mix',
				name : 'Jolie',
				personality: 'Frisbee Enthusiast',
				description: "Jolie is a loving and affectionate girl who loves to be around her people. She enjoys being the center of attention, so she'd do best in a home where she can be the only animal.",
				energylevel: 'High Energy',
				age: 'Young',
				sex: 'F',
				imageUrl: './animals/jolie.jpg',
				imageUrl2: 'http://placehold.it/450x150'
			},
			{
				type: 'Dog',
				breed: 'Mix',
				name : 'Panda',
				personality: 'Frisbee Enthusiast',
				description: "Hi my name is Panda. I am a fun gal that would like to become part of your family today. Ask the desk for a visit and I promise you won't be disappointed. I will likely do well in a home with kids and cats.",
				energylevel: 'High Energy',
				age: 'Young',
				sex: 'M',
				imageUrl: './animals/puppy2.jpg',
				imageUrl2: './animals/panda.jpg'
				},
			{
				type: 'Dog',
				breed: 'Vizsla',
				name : 'Dillon',
				personality: 'Lovebug',
				description: "Hi my name is Dillon. I am a fun gal that would like to become part of your family today. Ask the desk for a visit and I promise you won't be disappointed. I will likely do well in a home with kids and cats.",
				energylevel: 'High Energy',
				age: 'Young',
				sex: 'F',
				imageUrl: './animals/puppy1.jpg',
				imageUrl2: 'http://placehold.it/450x150'
			},
			{
				type: 'Dog',
				breed: 'Labrador',
				name : 'James',
				personality: 'Social Butterfly',
				description: "Hi my name is James. I am a fun guy that would like to become part of your family today. Ask the desk for a visit and I promise you won't be disappointed. I will likely do well in a home with kids and cats.",
				energylevel: 'Happy Medium',
				age: 'Adult',
				sex: 'M',
				imageUrl: 'http://placehold.it/250x150',
				imageUrl2: 'http://placehold.it/250x150'
			},
			{
				type: 'Dog',
				breed: 'Boxer',
				name : 'Sonny',
				personality: 'Lovebug',
				description: "Hi my name is Sonny. I am a fun gal that would like to become part of your family today. Ask the desk for a visit and I promise you won't be disappointed. I will likely do well in a home with kids and cats.",
				energylevel: 'High Energy',
				age: 'Adult',
				sex: 'M',
				imageUrl: 'http://placehold.it/250x150',
				imageUrl2: 'http://placehold.it/250x150'
			},
			{
				type: 'Dog',
				breed: 'Labrador',
				name : 'Guinness',
				personality: 'Rockstar',
				description: "Hi my name is Guiness. I am a fun gal that would like to become part of your family today. Ask the desk for a visit and I promise you won't be disappointed. I will likely do well in a home with kids and cats.",
				energylevel: 'Couch Potato',
				age: 'Senior',
				sex: 'M',
				imageUrl: 'http://placehold.it/250x150',
				imageUrl2: 'http://placehold.it/250x150'
			},
			{
				type: 'Dog',
				breed: 'Labrador',
				name : 'Tobias',
				personality: 'RockStar',
				description: "Hi my name is Tobias. I am a fun gal that would like to become part of your family today. Ask the desk for a visit and I promise you won't be disappointed. I will likely do well in a home with kids and cats.",
				energylevel: 'High Energy',
				age: 'Adult',
				sex: 'F',
				imageUrl: 'http://placehold.it/250x150',
				imageUrl2: 'http://placehold.it/250x150'
			}
		]

		var service = {
			getanimals : function(searchtype, searchage, searchpersonality, searchenergylevel){
				var results = _.filter(animals, function(animal){
					return animal.type == searchtype;
				});
				if(searchage != ''){
					results = _.filter(results, function(animal){
					return animal.age == searchage;
					}
				);
				}
				if(searchpersonality != ''){
					results = _.filter(results, function(animal){
					return animal.personality == searchpersonality;
					}
				);
				}
				if(searchenergylevel != ''){
					results = _.filter(results, function(animal){
					return animal.energylevel == searchenergylevel;
					}
				);
			
				}
				return results;
			}
		}
		return service;
	}])


//CONTROLLER
angular.module('PupsterApp')
	.controller('searchController', ['$scope', 'animalService', function($scope, animalService){
		$scope.searchType = 'Dog';
		$scope.searchAge = '';
		$scope.searchPersonality = '';
		$scope.searchEnergyLevel = '';
		$scope.profile = false;
		$scope.puppies = false;
		// $scope.zip = ;
		$scope.search = function(){
			$scope.animals = animalService.getanimals($scope.searchType, $scope.searchAge,
				$scope.searchPersonality, $scope.searchEnergyLevel);
		}
		$scope.popUp = function(animal){
			$scope.animal = animal;
			$scope.profile = !$scope.profile;
		}
		$scope.camUp = function(){
			$scope.puppies = !$scope.puppies;
		};


	}]);

var directionsDisplay = new google.maps.DirectionsRenderer({ draggable: true });
var directionsService = new google.maps.DirectionsService();
var map;

$(window).load(function() {
    var myOptions = {
        zoom: 10,
        mapTypeId: google.maps.MapTypeId.ROADMAP,
        center: new google.maps.LatLng(35.270, -80.837)
    };
    map = new google.maps.Map(document.getElementById("map_canvas"), myOptions);
    directionsDisplay.setMap(map);
    directionsDisplay.setPanel(document.getElementById("directions"));
    
    $("#routeMode").on("change", function() { calcRoute(); });
    $("#routeGo").on("click", function() { calcRoute(); });
    $("#routeClear").on("click", function() { directionsDisplay.setDirections({ routes: [] }); });
    
});


  