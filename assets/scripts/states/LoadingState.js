define(['kiwi'], function(K) {
  var LoadingState = new K.State('LoadingState');
  LoadingState.preload = function() {
    K.State.prototype.preload.call(this);
    // Rebuild all assets in order to have access to them
    this.game.states.rebuildLibraries();
    // Display the loading image
    this.loadingImage = new K.GameObjects.StaticImage(this, 
                              this.textures['loadingImage'], 250, 150);
    this.addChild(this.loadingImage);

    // Load Image
    this.addImage('rock', '/assets/images/rock.png', true);
    // Load sprite sheets
    this.addSpriteSheet('map', '/assets/images/map.png', 70, 70, true);
    this.addSpriteSheet('man', '/assets/images/man.png', 128/4, 192/4, true);
    // Load data
    this.addJSON('map_data', '/assets/data/map.json', true);
  };
  LoadingState.create = function() {
    this.game.states.switchState('MainState');
  };
  LoadingState.update = function() {
    K.State.prototype.update.call(this);
  };
  return LoadingState;
});