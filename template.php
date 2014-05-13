<?php

/**
 * Implements hook_preprocess_html().
 */

function hjorbib_preprocess_html(&$vars) {
  drupal_add_js('jQuery.extend(Drupal.settings, { "pathToTheme": "' . path_to_theme() . '" });', 'inline');
}
