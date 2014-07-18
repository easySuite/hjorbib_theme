(function ($) {
  'use strict';

  /**
   * Expanded holdings section by default on object page.
   */
  Drupal.behaviors.expandHoldings = {
    attach: function (context) {
      var objectPage = $('.page-ting-object', context),
          holdingsSection = objectPage.find('.group-holdings-available').find('.field-group-format-title');

      if (objectPage.length !== 0) {
        holdingsSection.trigger('click');
      }
    }
  };

   /*
   * Automatic scroll down to content.
   */
  Drupal.behaviors.scrollToContent = {
    attach: function (context) {
      // Run code only for paths start with 'search/ting'.
      if (document.location.pathname.indexOf('/search/ting/') === 0) {

        $('html, body', context).animate({
          scrollTop: $('.layout-wrapper').offset().top
        }, 'slow');
      }
    }
  };

})(jQuery);
