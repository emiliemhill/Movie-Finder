(function(){

  function MovieService($http){
  return {
    getApi: getApi
  };

  function getApi(){
    return $http({
      method: "GET",
      url: "https://api.themoviedb.org/3/keyword/" + 236792 +
      "/movies?api_key=a420712cee91c2aec196fe700c0ceb35"
    }).then(function(response){
      console.log(response.data);
      return response.data;
    })
  }

  angular
    .module("myApp")
    .factory("MovieService", MovieService);

});
