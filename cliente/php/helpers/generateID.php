<?php

/**
 * @return string Generated ID.
 */
function generateID() {

	// Generate id based on the current microtime
	$id = str_replace('.', '', microtime(true));

	// @Fix Eliminamos las comas(,). 
	// Correccion debido al cambio de idioma a español donde utilizan comas en los miles
	$id = str_replace(',', '', $id);

	// Ensure that the id has a length of 14 chars
	while(strlen($id)<14) $id .= 0;

	// Return id as a string. Don't convert the id to an integer
	// as 14 digits are too big for 32bit PHP versions.
	return $id;

}

?>