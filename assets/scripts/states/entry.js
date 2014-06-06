define(['require', 'states/MainState', 'states/PreloadState',
  'states/LoadingState'], function(require) {
  return {
    MainState: require('states/MainState'),
    PreloadState: require('states/PreloadState'),
    LoadingState: require('states/LoadingState')
  }
});