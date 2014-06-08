define(['kiwi'], function(K) {
  function Rock(state, x) {
    console.log(state.textures['rock']); 
    K.GameObjects.Sprite.call(this, state, state.textures['rock'], x, -15, false);
    // add ArcadePhysics support
    this.physics = this.components.add(new K.Components.ArcadePhysics(this, this.box));
    this.physics.acceleration = new K.Geom.Point(0, 9.8);
  }
  K.extend(Rock, K.GameObjects.Sprite);

  Rock.prototype.update = function() {
    K.GameObjects.Sprite.prototype.update.call(this);
    this.physics.update();
  };
  return Rock;
});