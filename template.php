<?php

/**
 * @file
 * Preprocess and Process Functions.
 */

/**
 * Implements hook_preprocess_html().
 */
function hjorbib_preprocess_html(&$vars) {
  drupal_add_js(array('pathToTheme' => array('pathToTheme' => path_to_theme())), 'setting');
}
