<?php

/**
 * @file
 * Preprocess and Process Functions.
 */

/**
 * Implements hook_preprocess_html().
 */
function hjorbib_preprocess_html(&$vars) {
  // Add theme path to global variable
  drupal_add_js(array('pathToTheme' => array('pathToTheme' => path_to_theme())), 'setting');

  // Add header link tag for apple-touch-icon
  $apple_touch_icon = array(
    '#tag' => 'link',
    '#attributes' => array(
      'href' => path_to_theme() . '/images/apple-touch-icon.png',
      'rel' => array(
        'shortcut',
        'icon'
      ),
    )
  );

  drupal_add_html_head($apple_touch_icon, 'apple_touch_icon');
}
