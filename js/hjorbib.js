(function ($) {
  'use strict';

  /**
   * Use vector logo if supported
   */
  Drupal.behaviors.logo = {
    attach: function (context, settings) {
      console.log(settings.pathToTheme.pathToTheme);
      var logo = $('.logo', context),
        pathToTheme = settings.basePath + settings.pathToTheme.pathToTheme;

      if (Modernizr.svg) {
        logo.find('a').html('<object data="' + pathToTheme + '/images/logo.svg" type="image/svg+xml"><img src="' + pathToTheme + '/logo.png"/></object>');
      }
    }
  };

})(jQuery);
