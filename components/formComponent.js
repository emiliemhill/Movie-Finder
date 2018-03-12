(function () {
  var formComponent = {
    templateUrl: `partials/form.html`,
    controller: function ($element, MovieService, $location) {
      var $ctrl = this;

      //this method gathers the form object onto the model//

      $ctrl.genres = [{
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
      //$ctrl.genres is the object containing our genres and their corresponding database ID's so we can pass to service//
      $ctrl.searchTerm;

      //clears search field once you click outside of the drop down//
      $ctrl.clearSearchTerm = function () {
        $ctrl.searchTerm = '';
      };
      $ctrl.form = {
        minLength: 60,
        maxLength: 180
      };
      //This is the base line value for that sliders, that will change based on the rzslider high and rzslider model values//

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
        //The slider object with minValue and maxValue as expressions in the partial so that the slider can be moved between those values//
      }
      $ctrl.getMovies = function (form) {
        form.pagenum = 1; //pagenum is added to the object so that it can correspond with the database through the service. Before every new GET this number is incremented by one so the next page of the database can be displayed//
        MovieService.clearMovieList();
        //clears movieList object so no results of prior input sticks around when user puts in new info into form
        MovieService.getMovies(form).then(function () {
          $location.path("/select");
        });
        //this method grabs the search parameters and sets them in the service, then redirects you to the select component//
        MovieService.setParameters(form);
        //this method does almost the same as getMovies...It is set in the service and used later to make another call to the API with the updated pagenum//
      };
      $element.find('input').on('keydown', function (ev) {
        ev.stopPropagation();
        //stopPropagation allows the search field to be used...The default event for md-select cancels keydown events//
      })
    }
  }

  angular
    .module("myApp")
    .component("formComponent", formComponent)
})();
