(function ($) {
  'use strict';

  /**
   * Use vector logo if supported
   */
  Drupal.behaviors.logo = {
    attach: function (context, settings) {
      var logo = $('.logo img', context);

      if (Modernizr.svg) {
        logo.attr('src', settings.basePath + settings.pathToTheme.pathToTheme + '/logo.svg');
      }
    }
  };

})(jQuery);
