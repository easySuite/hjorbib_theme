(function ($) {
  'use strict';

  /**
   * Use vector logo if supported.
   */
  Drupal.behaviors.logo = {
    attach: function (context, settings) {
      var logo = $('.logo', context),
        pathToTheme = settings.basePath + settings.pathToTheme.pathToTheme;

      if (Modernizr.svg) {
        logo.find('a').html('<object data="' + pathToTheme + '/images/logo.svg" type="image/svg+xml"><img src="' + pathToTheme + '/logo.png"/></object>');
      }
    }
  };

  /**
   * Expanded holdings section by default on object page.
   */
  Drupal.behaviors.expandHoldings = {
    attach: function (context) {
      $(function () {
        var objectPage = $('.page-ting-object', context),
          holdingsSection = objectPage.find('.group-holdings-available').find('.field-group-format-title');

        if (objectPage.length !== 0) {
          holdingsSection.trigger('click');
        }
      });
    }
  };

})(jQuery);
