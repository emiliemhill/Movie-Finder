(function() {
  function DetailService() {

    return {
      getMovieDetails: getMovieDetails,

    }

    function getMovieDetails(movieId) {

    }


  }

  angular
    .module("myApp")
    .factory("DetailService", DetailService);

})();
