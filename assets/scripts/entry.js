require.config({
  baseUrl: '/assets/scripts'
});

require(['main'], function(Game) {
  new Game(); 
});