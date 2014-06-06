define(['kiwi', 'sprites/Man'], function(K, Man) {
  var MainState = new K.State('MainState');
  MainState.preload = function() {
    // Rebuild all assets in order to have access to them
    this.game.states.rebuildLibraries();
    K.State.prototype.preload.call(this);
  };
  MainState.create = function() {
    K.State.prototype.create.call(this);
    // Create the map
    this.map = new K.GameObjects.Tilemap.TileMap(this, 'map_data', this.textures['map']);
    this.addChild(this.map.layers[0]);
    this.map.tileTypes.map(function(tileType, idx) {
      if (idx > 0) {
        tileType.allowCollisions = K.Components.ArcadePhysics.ANY;
      }
    });
    // Create the player man!
    this.man = new Man(this, 10, 400);
    this.addChild(this.man);
  };
  MainState.update = function() {
    K.State.prototype.update.call(this);
    // Resolve the collision between the map and the man
    this.map.layers[0].physics.overlapsTiles(this.man, true);
  };
  return MainState;
});