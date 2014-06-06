define(['kiwi'], function(K) {
  var PreloadState = new K.State('PreloadState');
  PreloadState.preload = function() {
    K.State.prototype.preload.call(this);
    // load images
    this.addImage('loadingImage', '/assets/images/loading.png', true);
  };
  PreloadState.create = function() {
    K.State.prototype.create.call(this);
    this.game.states.switchState('LoadingState');
  };

  return PreloadState;
});