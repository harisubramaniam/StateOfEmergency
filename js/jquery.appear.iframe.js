/*
 * jQuery appear plugin
 *
 * Copyright (c) 2012 Andrey Sidorov
 * licensed under MIT license.
 *
 * https://github.com/morr/jquery.appear/
 *
 * Version: 0.3.6
 */
(function($) {
  var selectors = [];

  var check_binded = false;
  var check_lock = false;
  var defaults = {
    interval: 250,
    force_process: false,
    support_seamless_iframes: true
  };
  var $window = $(window);
  var handle_seamless_iframe = false;
  var $iframe;
  var iframe_offset;

  var $prior_appeared = [];

  function process() {
    check_lock = false;
    for (var index = 0, selectorsLength = selectors.length; index < selectorsLength; index++) {
      var $appeared = $(selectors[index]).filter(function() {
        return $(this).is(':appeared');
      });

      $appeared.trigger('appear', [$appeared]);

      if ($prior_appeared[index]) {
        var $disappeared = $prior_appeared[index].not($appeared);
        $disappeared.trigger('disappear', [$disappeared]);
      }
      $prior_appeared[index] = $appeared;
    }
  };

  function add_selector(selector) {
    selectors.push(selector);
    $prior_appeared.push();
  }

  // "appeared" custom filter
  $.expr[':']['appeared'] = function(element) {
    var $element = $(element);
    if (!$element.is(':visible')) {
      return false;
    }

    var viewport_left = $window.scrollLeft();
    var viewport_right = viewport_left + $window.width();
    var viewport_top = $window.scrollTop();
    var viewport_bottom = viewport_top + $window.height();
    var offset = $element.offset();
    var left = offset.left;
    var top = offset.top;

    if (handle_seamless_iframe) {
      // handle the iframe being all or partially out of the top window's viewport
      var top_window_top = $(window.top).scrollTop();
      var top_window_bottom = top_window_top + $(window.top).height();
      var top_window_left = $(window.top).scrollLeft();
      var top_window_right = top_window_left + $(window.top).width();
      var iframe_top = iframe_offset.top;
      var iframe_bottom = iframe_top + $iframe.height();
      var iframe_left = iframe_offset.left;
      var iframe_right = iframe_left + $iframe.width();

      if (top_window_top > iframe_bottom || // iframe is above the top window's viewport
          iframe_top > top_window_bottom || // iframe is below the top window's viewport
          top_window_left > iframe_right || // iframe is left of the top window's viewport
          iframe_left > top_window_right) { // iframe is right of the top window's viewport
        return false;
      }

      if (top_window_top > iframe_top) {
        // the top of the iframe is outside of the top window's viewport, adjust to account for what is not visible
        viewport_top += (top_window_top - iframe_top);
      }

      if (iframe_bottom > top_window_bottom) {
        // the bottom of the iframe is outside of the top window's viewport, adjust to account for what is not visible
        viewport_bottom -= (iframe_bottom - top_window_bottom);
      }

      if(top_window_left > iframe_left){
        // the left of the iframe is outside of the top window's viewport, adjust to account for what is not visible
        viewport_left += (top_window_left - iframe_left);
      }

      if(iframe_right > top_window_right){
        // the right of the iframe is outside of the top window's viewport, adjust to account for what is not visible
        viewport_right -= (iframe_right - top_window_right);
      }
    }

    if (top + $element.height() >= viewport_top &&
        top - ($element.data('appear-top-offset') || 0) <= viewport_bottom &&
        left + $element.width() >= viewport_left &&
        left - ($element.data('appear-left-offset') || 0) <= viewport_right) {
      return true;
    } else {
      return false;
    }
  };

  $.fn.extend({
    // watching for element's appearance in browser viewport
    appear: function(options) {
      var opts = $.extend({}, defaults, options || {});
      var selector = this.selector || this;
      if (!check_binded) {
        var on_check = function() {
          if (check_lock) {
            return;
          }
          check_lock = true;

          setTimeout(process, opts.interval);
        };

        if (opts.support_seamless_iframes && window.frameElement) {
          $iframe = $(window.frameElement);
          // check if the iframe is seamless: has the seamless attribute (HTML5) or scrolling="no" (pre-HTML5)
          handle_seamless_iframe = $iframe.attr('scrolling') === "no" || $iframe.is('[seamless]');
        }

        if (handle_seamless_iframe) {
          iframe_offset = $iframe.offset();
          $(window.top).scroll(on_check).resize(on_check);
        } else {
          $(window).scroll(on_check).resize(on_check);
        }
        check_binded = true;
      }

      if (opts.force_process) {
        setTimeout(process, opts.interval);
      }
      add_selector(selector);
      return $(selector);
    }
  });

  $.extend({
    // force elements's appearance check
    force_appear: function() {
      if (check_binded) {
        process();
        return true;
      }
      return false;
    }
  });
})(function() {
  if (typeof module !== 'undefined') {
    // Node
    return require('jquery');
  } else {
    return jQuery;
  }
}());