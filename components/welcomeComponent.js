(function() {
  var welcomeComponent = {
    template: `<div id="welcomediv" class="">
    <div id="whitediv">

      <form class="welcomeform">
        <h4 class="loginmsg">Please login</h4>
        <input class="logininput" ng-model="$ctrl.login.username" id="name" placeholder="Username" />

        <input class="logininput" type="password" ng-model="$ctrl.login.password" id="password" placeholder="Password" />

        <button classchi="loginbtn" ng-click="$ctrl.checkLogin($ctrl.login)"type="submit">Sign In</button>
      </form>
      </div>
    </div>`,
    controller: function($location) {
      var $ctrl = this;
      $ctrl.user = {
        username: "GrantChirpus",
        password: "chirpus4ever"
      }

      $ctrl.checkLogin = function (login) {
        var logininfo = login;
        if (logininfo.username === $ctrl.user.username && logininfo.password === $ctrl.user.password) {
          console.log("Hello")
          $location.path("/form");
        } else if (logininfo.username === "" && logininfo.password === "") {
          swal("Please enter a valid username and password");
        } else {
            swal("This username and password combination does not exist");
        }

      }

}
}
  angular
    .module("myApp")
    .component("welcomeComponent", welcomeComponent);

})();
