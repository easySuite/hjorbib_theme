(function ($) {
  'use strict';

 /**
  * History back anchor.
  */
  Drupal.behaviors.historyBackAnchor = {
    attach: function (context) {

      // Search result page.
      if (document.location.pathname.indexOf('/search/ting/') === 0) {
        $('.search-result .heading a', context).click(function() {
          // Add hash to back button purposes to prevent scroll to top.
          var storedId = window.location.href.match(/#back/);

          if (storedId === null) {
            window.location.href = window.location.href + '#back';
          }
        });
      }
    }
  };


  /**
   * Expanded holdings and issues section by default on object page.
   */
  Drupal.behaviors.expandSection = {
    attach: function (context) {
      var objectPage = $('.page-ting-object', context),
          expandedSection = objectPage.find('.group-holdings-available, .group-periodical-issues, .group-material-details').find('.field-group-format-title');

      if (objectPage.length !== 0) {
        jQuery(expandedSection)[0].click();
      }
    }
  };

  /**
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
