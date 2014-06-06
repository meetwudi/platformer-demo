define(['kiwi', 'states/entry'], function(K, states) {
  return function() {
    var game = new K.Game('container', 'Platformer');
    game.states.addState(states.MainState);
    game.states.switchState(states.MainState);
  }
});