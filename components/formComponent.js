(function() {
	var formComponent = {
    templateUrl: `partials/form.html`,
    controller: function($element, MovieService, $location) {
      var $ctrl = this;
      //this method gathers the form object onto the model//
      $ctrl.keysearch = function(form) {
			// 	MovieService.getMovies(form).then(function(movie) {
      //       // $ctrl.searchedMovie = movie;
			// 			// console.log($ctrl.searchedMovie);
      // });
		};
      $ctrl.genres = [
        {
          name: "Action",
          id: "28"
        },
        {
          name: "Adventure",
          id: "12"
        },
        {
          name: "Animation",
          id: "16"
        },
        {
          name: "Comedy",
          id: "35"
        },
        {
          name: "Crime",
          id: "80"
        },
        {
          name: "Documentary",
          id: "99"
        },
        {
          name: "Drama",
          id: "18"
        },
        {
          name: "Family",
          id: "10751"
        },
        {
          name: "Fantasy",
          id: "14"
        },
        {
          name: "History",
          id: "36"
        },
        {
          name: "Horror",
          id: "27"
        },
        {
          name: "Music/Musicals",
          id: "10402"
        },
        {
          name: "Romance",
          id: "10749"
        },
        {
          name: "Science Fiction",
          id: "878"
        },
        {
          name: "Thriller",
          id: "53"
        },
        {
          name: "War",
          id: "10752"
        },
        {
          name: "Western",
          id: "37"
        }
      ];
      $ctrl.searchTerm;

      //clears search field once you click outside of the drop down//
      $ctrl.clearSearchTerm = function() {
        $ctrl.searchTerm = '';
      };
      $ctrl.form = {
      	minLength: 60,
 	    	maxLength: 180
 	    };

      $ctrl.slider = {
        minValue: 60,
        maxValue: 180,
        options: {
          floor: 60,
          ceil: 180,
          step: 1,
          minRange: 0,
          maxRange: 180
        }
      }
        $ctrl.getMovies = function(form) {
          // console.log("get movies");
          // console.log(form.genre);
          MovieService.getMovies(form);
					$location.path("/select");

          // MovieService.getMovies(genres, minLength, maxLength, minRating, maxRating)
        };
        // $ctrl.getMovies();
        // $ctrl.getMovies(["18"], undefined, undefined, undefined, undefined);

        $element.find('input').on('keydown', function(ev) {
		        ev.stopPropagation();
		  			//stopPropagation allows the search field to be used...The default event for md-select cancels keydown events//
        })




      }
  }




  angular
    .module("myApp")
    .component("formComponent", formComponent)

})();
