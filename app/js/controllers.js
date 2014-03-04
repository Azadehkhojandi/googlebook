'use strict';

/* Controllers */

// angular.module('myApp.controllers', []).
//   controller('MyCtrl1', [function() {

//   }])
//   .controller('MyCtrl2', [function() {

//   }]);

  function SearchCtrl($scope, $http) {
  
 

  $scope.search = function() {
  	if($scope.keyword)

	{
	 	console.log($scope.keyword);

		$http({method: 'GET', url: 'https://www.googleapis.com/books/v1/volumes?q='+$scope.keyword}).
		success(function(data, status, headers, config) {
	      // this callback will be called asynchronously
	      // when the response is available
	      console.log(data);
	      $scope.books=data;
	    }).
	    error(function(data, status, headers, config) {
	      // called asynchronously if an error occurs
	      // or server returns response with an error status.
	      $scope.books=[];
	    });

	}
	else
	{
		     $scope.books=[];
	}
    
  };
}


 function BooksCtrl($scope, $http) {
  
 
 
  $scope.test = function() {
  
    var uid=googleHelper.UserId();
    var ak=googleHelper.AccessToken();
    
    var url='https://www.googleapis.com/books/v1/mylibrary/bookshelves?access_token='+ ak;
    https://content.googleapis.com/books/v1/mylibrary/bookshelves?key=AIzaSyCFj15TpkchL4OUhLD1Q2zgxQnMb7v3XaM

    $http({method: 'GET', url: url}).
		success(function(data, status, headers, config) {
	      // this callback will be called asynchronously
	      // when the response is available
	      console.log(data);
	      //$scope.books=data;
	    }).
	    error(function(data, status, headers, config) {
	      // called asynchronously if an error occurs
	      // or server returns response with an error status.
	      //$scope.books=[];
	    });

	
	
  };
}

