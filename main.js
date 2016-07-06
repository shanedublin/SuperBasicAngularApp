(function(){
  'use-strict';

  // create a madule name 'app' attach a controler to it called 'mainController'
  angular.module('app',[]).controller('mainController',function(){

      var vm = this;
      vm.counter = 0;
      vm.input = "Hello Angular";

      // adds to a counter
      vm.counterFunction = function(){
        console.log("counter Incremented");
        vm.counter ++;
      }

      // shows an alert when called
      vm.showInput = function(){
        console.log("hello");
        alert(vm.input);
      }

  });
})();
