define(['kiwi'], function(K) {
  var MainState = new K.State('MainState');
  MainState.preload = function() {
    // Rebuild all assets in order to have access to them
    this.game.states.rebuildLibraries();
    K.State.prototype.preload.call(this);
  };
  MainState.create = function() {
    K.State.prototype.create.call(this);
    createMap.call(this);
  };
  MainState.update = function() {
    K.State.prototype.update.call(this);
  };
  return MainState;

  function createMap() {
    this.map = new K.GameObjects.Tilemap.TileMap(this, 'map_data', this.textures['map']);
    this.addChild(this.map.layers[0]);
  }
});