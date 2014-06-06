define(['kiwi'], function(K) {
  console.log(K);
  var MainState = new K.State('MainState');
  MainState.preload = function() {
    K.State.prototype.preload.call(this);
  };
  MainState.create = function() {
    K.State.prototype.create.call(this);
  };
  MainState.update = function() {
    K.State.prototype.update.call(this);
  };
  return MainState;
});