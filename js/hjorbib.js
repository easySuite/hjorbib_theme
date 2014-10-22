(function ($) {
  'use strict';

  /**
   * Expanded holdings and issues section by default on object page.
   */
  Drupal.behaviors.expandSection = {
    attach: function (context) {
      var objectPage = $('.page-ting-object', context),
          expandedSection = objectPage.find('.group-holdings-available, .group-periodical-issues').find('.field-group-format-title');

      if (objectPage.length !== 0) {
        expandedSection.trigger('click');
      }
    }
  };

  /*
   * Automatic scroll down to content.
   */
  $(window).load(function() {
    // Search result page.
    if (document.location.pathname.indexOf('/search/ting/') === 0) {

      // Scroll to search results container.
      if (window.location.hash === '') {
        $('html, body').animate({
          scrollTop: $('.layout-wrapper').offset().top
        }, 'slow');
      }
    }
  });

})(jQuery);
