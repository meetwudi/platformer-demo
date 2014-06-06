define(['kiwi'], function(K) {
  function Man(state, x, y) {
    K.GameObjects.Sprite.call(this, state, state.textures['man'], x, y, false);
    // facing direction, either left or right
    this.facing = 'right';
    // add animations
    this.animation.add('idle-right', [8], 0.1, false);
    this.animation.add('idle-left', [4], 0.1, false);
    this.animation.add('walk-right', [8, 9, 10, 11], 0.1, true);
    this.animation.add('walk-left', [4, 5, 6, 7], 0.1, true);
    // play default animation
    this.animation.play('idle-' + this.facing);
    // change the hitbox
    this.box.hitbox = new K.Geom.Rectangle(6, 4, 19, 33);
    // add ArcadePhysics support
    this.physics = this.components.add(new K.Components.ArcadePhysics(this, this.box));
    this.physics.acceleration = new K.Geom.Point(0, 9.8);
  }
  K.extend(Man, K.GameObjects.Sprite);

  Man.prototype.update = function() {
    K.GameObjects.Sprite.prototype.update.call(this);
    this.physics.update();
  };
  return Man;
});