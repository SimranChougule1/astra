<?php
/**
 * Plugin Name: REST Delete Astra Settings
 * Plugin URI:  https://github.com/brainstormforce/astra
 * Description: Plugin to add REST Endpoint to delete Astra Settings.
 * Author:      Brainstorm Force
 * Author URI:  https://brainstormforce.com
 */

namespace Astra\REST;

require_once __DIR__ . '/rest-api/namespace.php';

bootstrap();


add_action(
	'wp_footer',
	function () {
		echo '<pre style="word-break: break-word;">';
		print_r( json_encode( get_option( 'astra-settings' ), JSON_PRETTY_PRINT ) );
		echo '</pre>';
	}
);
