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

      // If back button was pressed.
      if (window.location.hash !== 0) {
        // id from previous page.
        var storedId = decodeURIComponent(window.location.href).match(/\d+-\w+:\d+/)[0];

        // Match stored id with id's from this page.
        $('.search-result .heading a').each(function () {
          var el = $(this);
          var id = decodeURIComponent(el.attr('href')).match(/\d+-\w+:\d+/)[0];

          // Scroll to item if match found.
          if (id === storedId) {
            $('html, body').animate({
              scrollTop: el.closest('.search-result').offset().top
            }, 'slow');
          }
        });
      }
      // Scroll to search results container.
      else {
        $('html, body').animate({
          scrollTop: $('.layout-wrapper').offset().top
        }, 'slow');
      }
    }
  });

})(jQuery);
