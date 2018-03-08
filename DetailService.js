(function() {
  function DetailService() {

    return {
      getMovieDetails: getMovieDetails,

    }

    function getMovieDetails(movie) {
      console.log(movie);

    }


  }

  angular
    .module("myApp")
    .factory("DetailService", DetailService);

})();
