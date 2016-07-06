(function(){
  'use-strict';

  angular.module('app',[]).controller('mainController',function(){

      var vm = this;
      vm.counter = 0;
      vm.input = "Hello Angular";
      vm.counterFunction = function(){
        console.log("counter Incremented");
        vm.counter ++;
      }
      vm.showInput = function(){
        console.log("hello");
        alert(vm.input);
      }

  });
})();
