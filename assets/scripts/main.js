define(['kiwi', 'states/entry'], function(K, states) {
  return function() {
    var game = new K.Game('container', 'Platformer');
    game.stage.resize(2000, 1600);
    game.states.addState(states.PreloadState);
    game.states.addState(states.MainState);
    game.states.addState(states.LoadingState);

    game.states.switchState('PreloadState');
  }
});