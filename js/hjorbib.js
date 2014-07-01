(function ($) {
  'use strict';

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

  /**
   * History back.
   */
  Drupal.behaviors.historyBack = {
    attach: function (context) {
      $(function () {
        if (document.location.pathname.indexOf('/ting/object/') === 0) {
          $('<a>', {
            'class': 'step-back',
            'text': Drupal.t('Back'),
            'href': '#'
          }).prependTo($('.primary-content', context));

          $('.step-back').click(function (e) {
            e.preventDefault();
            window.history.back();
          });
        }
      });
    }
  };

   /*
   * Automatic scroll down to content.
   */
  Drupal.behaviors.scrollToContent = {
    attach: function (context) {
      $(function () {
        // Run code only for paths start with 'search/ting'.
        if (document.location.pathname.indexOf('/search/ting/') === 0) {

          $('html, body', context).animate({
            scrollTop: $('.layout-wrapper', context).offset().top
          }, 'slow');
        }
      });
    }
  };

})(jQuery);
