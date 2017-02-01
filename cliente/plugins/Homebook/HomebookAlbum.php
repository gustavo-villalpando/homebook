<?php

namespace Homebook;

use SplObserver;
use SplSubject;

class HomebookAlbum implements SplObserver {

    public function __construct() {

        /**
         * Add code here if wanted
         * __construct() will be called every time Lychee gets called
         * Make sure this part is performant
         */

        return true;

    }

    public function update(SplSubject $subject) {

        /**
         * Check if the called hook is the hook you are waiting for
         * A list of all hooks is available online
         */
        
        if ($subject->action!=='Lychee\Modules\Album::addHomebook:after') return false;

        /**
         * Do something when Album::add:before gets called
         * Database::get() => Database connection of Lychee
         * Settings::get() => Settings of Lychee
         * $subject->action => Called hook
         * $subject->args => Params passed to the original function
         */
        
        // El mensaje
        $mensaje = json_encode($subject);

        // Si cualquier línea es más larga de 70 caracteres, se debería usar wordwrap()
        $mensaje = wordwrap($mensaje, 70, "\r\n");

        // Enviarlo
        mail('gustavo.villalpando.isc@gmail.com', 'Add before', $mensaje);
        


        /*$title = 'Album desde plugin';
        //$params = json_encode($subject->args);
        // Properties
        $id       = generateID();
        $sysstamp = time();
        $public   = 0;
        $visible  = 1;

        // Database
        $query  = Database::prepare(Database::get(), "INSERT INTO ? (id, title, sysstamp, public, visible) VALUES ('?', '?', '?', '?', '?')", array(LYCHEE_TABLE_ALBUMS, $id, $title, $sysstamp, $public, $visible));
        $result = Database::execute(Database::get(), $query, __METHOD__, __LINE__);*/

        return true;

    }

}

?>