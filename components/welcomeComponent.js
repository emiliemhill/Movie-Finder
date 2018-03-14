(function() {
  var welcomeComponent = {
    template: `<div id="welcomediv" class="">
    <div id="whitediv">

      <form class="welcomeform">
        <h4 class="loginmsg">Please login</h4>
        <input class="logininput" ng-model="$ctrl.login.email" id="name" placeholder="Username" />
        <input class="logininput" type="password" ng-model="$ctrl.login.password" id="email" placeholder="Password" />
        <button class="loginbtn" ng-click="$ctrl.checkLogin($ctrl.login)"type="submit">Sign In</button>
      </form>
      </div>
    </div>`,
    controller: function($location) {
      var $ctrl = this;
      $ctrl.checkLogin = function () {
          $location.path("/form");
      }

}
}
  angular
    .module("myApp")
    .component("welcomeComponent", welcomeComponent);

})();
