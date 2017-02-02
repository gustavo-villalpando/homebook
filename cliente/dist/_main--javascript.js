'use strict';

var _templateObject = _taggedTemplateLiteral(['<p>\xBFEst\xE1s seguro que quieres borrar el \xE1lbum \'$', '\' y todas las fotos que contiene? \xA1Oj\xF3!, Esta acci\xF3n es irreversible.</p>'], ['<p>\xBFEst\xE1s seguro que quieres borrar el \xE1lbum \'$', '\' y todas las fotos que contiene? \xA1Oj\xF3!, Esta acci\xF3n es irreversible.</p>']),
    _templateObject2 = _taggedTemplateLiteral(['<p>\xBFEst\xE1s seguro que quieres borrar los $', ' \xE1lbumes seleccionados y todas las fotos que contienen? \xA1Oj\xF3!, Esta acci\xF3n es irreversible.</p>'], ['<p>\xBFEst\xE1s seguro que quieres borrar los $', ' \xE1lbumes seleccionados y todas las fotos que contienen? \xA1Oj\xF3!, Esta acci\xF3n es irreversible.</p>']),
    _templateObject3 = _taggedTemplateLiteral(['<input class=\'text\' name=\'title\' type=\'text\' maxlength=\'50\' placeholder=\'T\xEDtulo\' value=\'$', '\'>'], ['<input class=\'text\' name=\'title\' type=\'text\' maxlength=\'50\' placeholder=\'T\xEDtulo\' value=\'$', '\'>']),
    _templateObject4 = _taggedTemplateLiteral(['<p>Ingresa el nuevo t\xEDtulo para este \xE1lbum: ', '</p>'], ['<p>Ingresa el nuevo t\xEDtulo para este \xE1lbum: ', '</p>']),
    _templateObject5 = _taggedTemplateLiteral(['<p>Ingresa el t\xEDtulo para los $', ' \xE1lbumes seleccionados: ', '</p>'], ['<p>Ingresa el t\xEDtulo para los $', ' \xE1lbumes seleccionados: ', '</p>']),
    _templateObject6 = _taggedTemplateLiteral(['<p>Ingresa una descripci\xF3n para este \xE1lbum: <input class=\'text\' name=\'description\' type=\'text\' maxlength=\'800\' placeholder=\'Descripci\xF3n\' value=\'$', '\'></p>'], ['<p>Ingresa una descripci\xF3n para este \xE1lbum: <input class=\'text\' name=\'description\' type=\'text\' maxlength=\'800\' placeholder=\'Descripci\xF3n\' value=\'$', '\'></p>']),
    _templateObject7 = _taggedTemplateLiteral(['<p>\xBFEst\xE1s seguro que quieres mezclar el \xE1lbum \'$', '\' con el \xE1lbum \'$', '\'?</p>'], ['<p>\xBFEst\xE1s seguro que quieres mezclar el \xE1lbum \'$', '\' con el \xE1lbum \'$', '\'?</p>']),
    _templateObject8 = _taggedTemplateLiteral(['<p>\xBFEst\xE1s seguro que quieres mezclar todos los \xE1lbumes seleccionados con el \xE1lbum  \'$', '\'?</p>'], ['<p>\xBFEst\xE1s seguro que quieres mezclar todos los \xE1lbumes seleccionados con el \xE1lbum  \'$', '\'?</p>']),
    _templateObject9 = _taggedTemplateLiteral(['<svg class=\'iconic $', '\'><use xlink:href=\'#$', '\' /></svg>'], ['<svg class=\'iconic $', '\'><use xlink:href=\'#$', '\' /></svg>']),
    _templateObject10 = _taggedTemplateLiteral(['<div class=\'divider\'><h1>$', '</h1></div>'], ['<div class=\'divider\'><h1>$', '</h1></div>']),
    _templateObject11 = _taggedTemplateLiteral(['<div id=\'$', '\' class=\'edit\'>', '</div>'], ['<div id=\'$', '\' class=\'edit\'>', '</div>']),
    _templateObject12 = _taggedTemplateLiteral(['<div id=\'multiselect\' style=\'top: $', 'px; left: $', 'px;\'></div>'], ['<div id=\'multiselect\' style=\'top: $', 'px; left: $', 'px;\'></div>']),
    _templateObject13 = _taggedTemplateLiteral(['\n\t        <div class=\'album\' data-id=\'$', '\'>\n\t            <img src=\'$', '\' width=\'200\' height=\'200\' alt=\'Photo thumbnail\' data-overlay=\'false\' draggable=\'false\'>\n\t            <img src=\'$', '\' width=\'200\' height=\'200\' alt=\'Photo thumbnail\' data-overlay=\'false\' draggable=\'false\'>\n\t            <img src=\'$', '\' srcset=\'$', ' 1.5x\' width=\'200\' height=\'200\' alt=\'Photo thumbnail\' data-overlay=\'$', '\' draggable=\'false\'>\n\t            <div class=\'overlay\'>\n\t                <h1 title=\'$', '\'>$', '</h1>\n\t                <a>$', '</a>\n\t            </div>\n\t        '], ['\n\t        <div class=\'album\' data-id=\'$', '\'>\n\t            <img src=\'$', '\' width=\'200\' height=\'200\' alt=\'Photo thumbnail\' data-overlay=\'false\' draggable=\'false\'>\n\t            <img src=\'$', '\' width=\'200\' height=\'200\' alt=\'Photo thumbnail\' data-overlay=\'false\' draggable=\'false\'>\n\t            <img src=\'$', '\' srcset=\'$', ' 1.5x\' width=\'200\' height=\'200\' alt=\'Photo thumbnail\' data-overlay=\'$', '\' draggable=\'false\'>\n\t            <div class=\'overlay\'>\n\t                <h1 title=\'$', '\'>$', '</h1>\n\t                <a>$', '</a>\n\t            </div>\n\t        ']),
    _templateObject14 = _taggedTemplateLiteral(['\n\t\t        <div class=\'badges\'>\n\t\t            <a class=\'badge $', ' icn-star\'>', '</a>\n\t\t            <a class=\'badge $', ' icn-share\'>', '</a>\n\t\t            <a class=\'badge $', '\'>', '</a>\n\t\t            <a class=\'badge $', '\'>', '</a>\n\t\t            <a class=\'badge $', '\'>', '</a>\n\t\t        </div>\n\t\t        '], ['\n\t\t        <div class=\'badges\'>\n\t\t            <a class=\'badge $', ' icn-star\'>', '</a>\n\t\t            <a class=\'badge $', ' icn-share\'>', '</a>\n\t\t            <a class=\'badge $', '\'>', '</a>\n\t\t            <a class=\'badge $', '\'>', '</a>\n\t\t            <a class=\'badge $', '\'>', '</a>\n\t\t        </div>\n\t\t        ']),
    _templateObject15 = _taggedTemplateLiteral(['\n\t        <div class=\'photo\' data-album-id=\'$', '\' data-id=\'$', '\'>\n\t            <img src=\'$', '\' srcset=\'$', ' 1.5x\' width=\'200\' height=\'200\' alt=\'Photo thumbnail\' draggable=\'false\'>\n\t            <div class=\'overlay\'>\n\t                <h1 title=\'$', '\'>$', '</h1>\n\t        '], ['\n\t        <div class=\'photo\' data-album-id=\'$', '\' data-id=\'$', '\'>\n\t            <img src=\'$', '\' srcset=\'$', ' 1.5x\' width=\'200\' height=\'200\' alt=\'Photo thumbnail\' draggable=\'false\'>\n\t            <div class=\'overlay\'>\n\t                <h1 title=\'$', '\'>$', '</h1>\n\t        ']),
    _templateObject16 = _taggedTemplateLiteral(['<a><span title=\'Camera Date\'>', '</span>$', '</a>'], ['<a><span title=\'Camera Date\'>', '</span>$', '</a>']),
    _templateObject17 = _taggedTemplateLiteral(['<a>$', '</a>'], ['<a>$', '</a>']),
    _templateObject18 = _taggedTemplateLiteral(['\n\t\t        <div class=\'badges\'>\n\t\t            <a class=\'badge $', ' icn-star\'>', '</a>\n\t\t            <a class=\'badge $', ' icn-share\'>', '</a>\n\t\t        </div>\n\t\t        '], ['\n\t\t        <div class=\'badges\'>\n\t\t            <a class=\'badge $', ' icn-star\'>', '</a>\n\t\t            <a class=\'badge $', ' icn-share\'>', '</a>\n\t\t        </div>\n\t\t        ']),
    _templateObject19 = _taggedTemplateLiteral(['<img id=\'image\' class=\'$', '\' src=\'$', '\' draggable=\'false\'>'], ['<img id=\'image\' class=\'$', '\' src=\'$', '\' draggable=\'false\'>']),
    _templateObject20 = _taggedTemplateLiteral(['<img id=\'image\' class=\'$', '\' src=\'$', '\' srcset=\'$', ' 1920w, $', ' $', 'w\' draggable=\'false\'>'], ['<img id=\'image\' class=\'$', '\' src=\'$', '\' srcset=\'$', ' 1920w, $', ' $', 'w\' draggable=\'false\'>']),
    _templateObject21 = _taggedTemplateLiteral(['\n\t        <h1>$', '</h1>\n\t        <div class=\'rows\'>\n\t        '], ['\n\t        <h1>$', '</h1>\n\t        <div class=\'rows\'>\n\t        ']),
    _templateObject22 = _taggedTemplateLiteral(['\n\t\t        <div class=\'row\'>\n\t\t            <a class=\'name\'>$', '</a>\n\t\t            <a class=\'status\'></a>\n\t\t            <p class=\'notice\'></p>\n\t\t        </div>\n\t\t        '], ['\n\t\t        <div class=\'row\'>\n\t\t            <a class=\'name\'>$', '</a>\n\t\t            <a class=\'status\'></a>\n\t\t            <p class=\'notice\'></p>\n\t\t        </div>\n\t\t        ']),
    _templateObject23 = _taggedTemplateLiteral(['<a class=\'tag\'>$', '<span data-index=\'$', '\'>', '</span></a>'], ['<a class=\'tag\'>$', '<span data-index=\'$', '\'>', '</span></a>']),
    _templateObject24 = _taggedTemplateLiteral(['<img class=\'cover\' width=\'16\' height=\'16\' src=\'$', '\'><div class=\'title\'>$', '</div>'], ['<img class=\'cover\' width=\'16\' height=\'16\' src=\'$', '\'><div class=\'title\'>$', '</div>']),
    _templateObject25 = _taggedTemplateLiteral(['$', '', ''], ['$', '', '']),
    _templateObject26 = _taggedTemplateLiteral(['\n\t          <p class=\'signIn\'>\n\t              <input class=\'text\' name=\'username\' autocomplete=\'username\' type=\'text\' placeholder=\'username\' autocapitalize=\'off\' autocorrect=\'off\'>\n\t              <input class=\'text\' name=\'password\' autocomplete=\'current-password\' type=\'password\' placeholder=\'password\'>\n\t          </p>\n\t          <p class=\'version\'>Lychee $', '<span> &#8211; <a target=\'_blank\' href=\'$', '\'>Update available!</a><span></p>\n\t          '], ['\n\t          <p class=\'signIn\'>\n\t              <input class=\'text\' name=\'username\' autocomplete=\'username\' type=\'text\' placeholder=\'username\' autocapitalize=\'off\' autocorrect=\'off\'>\n\t              <input class=\'text\' name=\'password\' autocomplete=\'current-password\' type=\'password\' placeholder=\'password\'>\n\t          </p>\n\t          <p class=\'version\'>Lychee $', '<span> &#8211; <a target=\'_blank\' href=\'$', '\'>Update available!</a><span></p>\n\t          ']),
    _templateObject27 = _taggedTemplateLiteral(['<p>Are you sure you want to delete the photo \'$', '\'? This action can\'t be undone!</p>'], ['<p>Are you sure you want to delete the photo \'$', '\'? This action can\'t be undone!</p>']),
    _templateObject28 = _taggedTemplateLiteral(['<p>Are you sure you want to delete all $', ' selected photo? This action can\'t be undone!</p>'], ['<p>Are you sure you want to delete all $', ' selected photo? This action can\'t be undone!</p>']),
    _templateObject29 = _taggedTemplateLiteral(['<input class=\'text\' name=\'title\' type=\'text\' maxlength=\'50\' placeholder=\'Title\' value=\'$', '\'>'], ['<input class=\'text\' name=\'title\' type=\'text\' maxlength=\'50\' placeholder=\'Title\' value=\'$', '\'>']),
    _templateObject30 = _taggedTemplateLiteral(['<p>Enter a new title for this photo: ', '</p>'], ['<p>Enter a new title for this photo: ', '</p>']),
    _templateObject31 = _taggedTemplateLiteral(['<p>Enter a title for all $', ' selected photos: ', '</p>'], ['<p>Enter a title for all $', ' selected photos: ', '</p>']),
    _templateObject32 = _taggedTemplateLiteral(['<p>Enter a description for this photo: <input class=\'text\' name=\'description\' type=\'text\' maxlength=\'800\' placeholder=\'Description\' value=\'$', '\'></p>'], ['<p>Enter a description for this photo: <input class=\'text\' name=\'description\' type=\'text\' maxlength=\'800\' placeholder=\'Description\' value=\'$', '\'></p>']),
    _templateObject33 = _taggedTemplateLiteral(['<input class=\'text\' name=\'tags\' type=\'text\' maxlength=\'800\' placeholder=\'Tags\' value=\'$', '\'>'], ['<input class=\'text\' name=\'tags\' type=\'text\' maxlength=\'800\' placeholder=\'Tags\' value=\'$', '\'>']),
    _templateObject34 = _taggedTemplateLiteral(['<p>Enter your tags for this photo. You can add multiple tags by separating them with a comma: ', '</p>'], ['<p>Enter your tags for this photo. You can add multiple tags by separating them with a comma: ', '</p>']),
    _templateObject35 = _taggedTemplateLiteral(['<p>Enter your tags for all $', ' selected photos. Existing tags will be overwritten. You can add multiple tags by separating them with a comma: ', '</p>'], ['<p>Enter your tags for all $', ' selected photos. Existing tags will be overwritten. You can add multiple tags by separating them with a comma: ', '</p>']),
    _templateObject36 = _taggedTemplateLiteral(['\n\t          <p>\n\t              In order to import photos from your Dropbox, you need a valid drop-ins app key from <a href=\'https://www.dropbox.com/developers/apps/create\'>their website</a>. Generate yourself a personal key and enter it below:\n\t              <input class=\'text\' name=\'key\' type=\'text\' placeholder=\'Dropbox API Key\' value=\'$', '\'>\n\t          </p>\n\t          '], ['\n\t          <p>\n\t              In order to import photos from your Dropbox, you need a valid drop-ins app key from <a href=\'https://www.dropbox.com/developers/apps/create\'>their website</a>. Generate yourself a personal key and enter it below:\n\t              <input class=\'text\' name=\'key\' type=\'text\' placeholder=\'Dropbox API Key\' value=\'$', '\'>\n\t          </p>\n\t          ']),
    _templateObject37 = _taggedTemplateLiteral(['<span class=\'attr_$', '\'>$', '</span>'], ['<span class=\'attr_$', '\'>$', '</span>']),
    _templateObject38 = _taggedTemplateLiteral(['\n\t\t\t         <tr>\n\t\t\t             <td>$', '</td>\n\t\t\t             <td>', '</td>\n\t\t\t         </tr>\n\t\t\t         '], ['\n\t\t\t         <tr>\n\t\t\t             <td>$', '</td>\n\t\t\t             <td>', '</td>\n\t\t\t         </tr>\n\t\t\t         ']),
    _templateObject39 = _taggedTemplateLiteral(['\n\t\t         <div class=\'sidebar__divider\'>\n\t\t             <h1>$', '</h1>\n\t\t         </div>\n\t\t         <div id=\'tags\'>\n\t\t             <div class=\'attr_$', '\'>', '</div>\n\t\t             ', '\n\t\t         </div>\n\t\t         '], ['\n\t\t         <div class=\'sidebar__divider\'>\n\t\t             <h1>$', '</h1>\n\t\t         </div>\n\t\t         <div id=\'tags\'>\n\t\t             <div class=\'attr_$', '\'>', '</div>\n\t\t             ', '\n\t\t         </div>\n\t\t         ']),
    _templateObject40 = _taggedTemplateLiteral(['<p>Please enter the direct link to a photo to import it: <input class=\'text\' name=\'link\' type=\'text\' placeholder=\'http://\' value=\'$', '\'></p>'], ['<p>Please enter the direct link to a photo to import it: <input class=\'text\' name=\'link\' type=\'text\' placeholder=\'http://\' value=\'$', '\'></p>']),
    _templateObject41 = _taggedTemplateLiteral(['<p>This action will import all photos, folders and sub-folders which are located in the following directory. The <b>original files will be deleted</b> after the import when possible. <input class=\'text\' name=\'path\' type=\'text\' maxlength=\'100\' placeholder=\'Absolute path to directory\' value=\'$', 'uploads/import/\'></p>'], ['<p>This action will import all photos, folders and sub-folders which are located in the following directory. The <b>original files will be deleted</b> after the import when possible. <input class=\'text\' name=\'path\' type=\'text\' maxlength=\'100\' placeholder=\'Absolute path to directory\' value=\'$', 'uploads/import/\'></p>']),
    _templateObject42 = _taggedTemplateLiteral(['linear-gradient(to bottom, rgba(0, 0, 0, .4), rgba(0, 0, 0, .4)), url("$', '")'], ['linear-gradient(to bottom, rgba(0, 0, 0, .4), rgba(0, 0, 0, .4)), url("$', '")']);

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

/**
 * @description Takes care of every action an album can handle and execute.
 */

album = {

	json: null

};

album.getID = function () {

	var id = null;

	var isID = function isID(id) {
		if (id === '0' || id === 'f' || id === 's' || id === 'r') return true;
		return $.isNumeric(id);
	};

	if (photo.json) id = photo.json.album;else if (album.json) id = album.json.id;

	// Search
	if (isID(id) === false) id = $('.album:hover, .album.active').attr('data-id');
	if (isID(id) === false) id = $('.photo:hover, .photo.active').attr('data-album-id');

	if (isID(id) === true) return id;else return false;
};

album.load = function (albumID) {
	var refresh = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;


	password.get(albumID, function () {

		if (refresh === false) lychee.animate('.content', 'contentZoomOut');

		var startTime = new Date().getTime();

		var params = {
			albumID: albumID,
			password: password.value
		};

		api.post('Album::get', params, function (data) {

			var waitTime = 0;

			if (data === 'Warning: Album private!') {

				if (document.location.hash.replace('#', '').split('/')[1] != undefined) {
					// Display photo only
					lychee.setMode('view');
				} else {
					// Album not public
					lychee.content.show();
					lychee.goto();
				}
				return false;
			}

			if (data === 'Warning: Wrong password!') {
				album.load(albumID, refresh);
				return false;
			}

			album.json = data;

			// Calculate delay
			var durationTime = new Date().getTime() - startTime;
			if (durationTime > 300) waitTime = 0;else waitTime = 300 - durationTime;

			// Skip delay when refresh is true
			// Skip delay when opening a blank Lychee
			if (refresh === true) waitTime = 0;
			if (!visible.albums() && !visible.photo() && !visible.album()) waitTime = 0;

			setTimeout(function () {

				view.album.init();

				if (refresh === false) {
					lychee.animate(lychee.content, 'contentZoomIn');
					header.setMode('album');
				}
			}, waitTime);
		});
	});
};

album.parse = function () {

	if (!album.json.title) album.json.title = 'Untitled';
};

album.add = function () {

	var action = function action(data) {

		var title = data.title;

		var isNumber = function isNumber(n) {
			return !isNaN(parseFloat(n)) && isFinite(n);
		};

		basicModal.close();

		var params = {
			title: title
		};

		api.post('Album::add', params, function (data) {

			if (data !== false && isNumber(data)) {
				albums.refresh();
				lychee.goto(data);
			} else {
				lychee.error(null, params, data);
			}
		});
	};

	basicModal.show({
		body: '<p>Ingresa el t\xEDtulo para el nuevo album: <input class=\'text\' name=\'title\' type=\'text\' maxlength=\'50\' placeholder=\'T\xEDtulo\' value=\'T\xEDtulo\'></p>',
		buttons: {
			action: {
				title: 'Crear Álbum',
				fn: action
			},
			cancel: {
				title: 'Cancelar',
				fn: basicModal.close
			}
		}
	});
};

album.delete = function (albumIDs) {

	var action = {};
	var cancel = {};
	var msg = '';

	if (!albumIDs) return false;
	if (albumIDs instanceof Array === false) albumIDs = [albumIDs];

	action.fn = function () {

		basicModal.close();

		var params = {
			albumIDs: albumIDs.join()
		};

		api.post('Album::delete', params, function (data) {

			if (visible.albums()) {

				albumIDs.forEach(function (id) {
					albums.json.num--;
					view.albums.content.delete(id);
					albums.deleteByID(id);
				});
			} else {

				albums.refresh();
				lychee.goto();
			}

			if (data !== true) lychee.error(null, params, data);
		});
	};

	if (albumIDs.toString() === '0') {

		action.title = 'Clear Unsorted';
		cancel.title = 'Keep Unsorted';

		msg = '<p>Are you sure you want to delete all photos from \'Unsorted\'?<br>This action can\'t be undone!</p>';
	} else if (albumIDs.length === 1) {

		var albumTitle = '';

		action.title = 'Eliminar Álbum y Fotografías';
		cancel.title = 'Dejar Álbum';

		// Get title
		if (album.json) albumTitle = album.json.title;else if (albums.json) albumTitle = albums.getByID(albumIDs).title;

		// Fallback for album without a title
		if (albumTitle === '') albumTitle = 'Sin título';

		msg = lychee.html(_templateObject, albumTitle);
	} else {

		action.title = 'Eliminar Álbumes y Fotografías';
		cancel.title = 'Dejar Álbumes';

		msg = lychee.html(_templateObject2, albumIDs.length);
	}

	basicModal.show({
		body: msg,
		buttons: {
			action: {
				title: action.title,
				fn: action.fn,
				class: 'red'
			},
			cancel: {
				title: cancel.title,
				fn: basicModal.close
			}
		}
	});
};

album.setTitle = function (albumIDs) {

	var oldTitle = '';
	var msg = '';

	if (!albumIDs) return false;
	if (albumIDs instanceof Array === false) albumIDs = [albumIDs];

	if (albumIDs.length === 1) {

		// Get old title if only one album is selected
		if (album.json) oldTitle = album.json.title;else if (albums.json) oldTitle = albums.getByID(albumIDs).title;
	}

	var action = function action(data) {

		basicModal.close();

		var newTitle = data.title;

		if (visible.album()) {

			// Rename only one album

			album.json.title = newTitle;
			view.album.title();

			if (albums.json) albums.getByID(albumIDs[0]).title = newTitle;
		} else if (visible.albums()) {

			// Rename all albums

			albumIDs.forEach(function (id) {
				albums.getByID(id).title = newTitle;
				view.albums.content.title(id);
			});
		}

		var params = {
			albumIDs: albumIDs.join(),
			title: newTitle
		};

		api.post('Album::setTitle', params, function (data) {

			if (data !== true) lychee.error(null, params, data);
		});
	};

	var input = lychee.html(_templateObject3, oldTitle);

	if (albumIDs.length === 1) msg = lychee.html(_templateObject4, input);else msg = lychee.html(_templateObject5, albumIDs.length, input);

	basicModal.show({
		body: msg,
		buttons: {
			action: {
				title: 'Cambiar Título',
				fn: action
			},
			cancel: {
				title: 'Cancelar',
				fn: basicModal.close
			}
		}
	});
};

album.setDescription = function (albumID) {

	var oldDescription = album.json.description;

	var action = function action(data) {

		var description = data.description;

		basicModal.close();

		if (visible.album()) {
			album.json.description = description;
			view.album.description();
		}

		var params = {
			albumID: albumID,
			description: description
		};

		api.post('Album::setDescription', params, function (data) {

			if (data !== true) lychee.error(null, params, data);
		});
	};

	basicModal.show({
		body: lychee.html(_templateObject6, oldDescription),
		buttons: {
			action: {
				title: 'Guardar Descripción',
				fn: action
			},
			cancel: {
				title: 'Cancelar',
				fn: basicModal.close
			}
		}
	});
};

album.setPublic = function (albumID, modal, e) {

	var password = '';

	albums.refresh();

	if (modal === true) {

		var text = '';
		var action = {};

		action.fn = function () {

			// Call setPublic function without showing the modal
			album.setPublic(album.getID(), false, e);
		};

		// Album public = Editing a shared album
		if (album.json.public === '1') {

			action.title = 'Edit Sharing';
			text = 'The sharing-properties of this album will be changed to the following:';
		} else {

			action.title = 'Share Album';
			text = 'This album will be shared with the following properties:';
		}

		var msg = '\n\t\t          <p class=\'less\'>' + text + '</p>\n\t\t          <form>\n\t\t              <div class=\'choice\'>\n\t\t                  <label>\n\t\t                      <input type=\'checkbox\' name=\'hidden\'>\n\t\t                      <span class=\'checkbox\'>' + build.iconic('check') + '</span>\n\t\t                      <span class=\'label\'>Hidden</span>\n\t\t                  </label>\n\t\t                  <p>Only people with the direct link can view this album.</p>\n\t\t              </div>\n\t\t              <div class=\'choice\'>\n\t\t                  <label>\n\t\t                      <input type=\'checkbox\' name=\'downloadable\'>\n\t\t                      <span class=\'checkbox\'>' + build.iconic('check') + '</span>\n\t\t                      <span class=\'label\'>Downloadable</span>\n\t\t                  </label>\n\t\t                  <p>Visitors of your Lychee can download this album.</p>\n\t\t              </div>\n\t\t              <div class=\'choice\'>\n\t\t                  <label>\n\t\t                      <input type=\'checkbox\' name=\'password\'>\n\t\t                      <span class=\'checkbox\'>' + build.iconic('check') + '</span>\n\t\t                      <span class=\'label\'>Password protected</span>\n\t\t                  </label>\n\t\t                  <p>Album only accessible with a valid password.</p>\n\t\t                  <input class=\'text\' name=\'passwordtext\' type=\'password\' placeholder=\'password\' value=\'\'>\n\t\t              </div>\n\t\t          </form>\n\t\t          ';

		basicModal.show({
			body: msg,
			buttons: {
				action: {
					title: action.title,
					fn: action.fn
				},
				cancel: {
					title: 'Cancel',
					fn: basicModal.close
				}
			}
		});

		if (album.json.public === '1' && album.json.visible === '0') $('.basicModal .choice input[name="hidden"]').click();
		if (album.json.downloadable === '1') $('.basicModal .choice input[name="downloadable"]').click();

		$('.basicModal .choice input[name="password"]').on('change', function () {

			if ($(this).prop('checked') === true) $('.basicModal .choice input[name="passwordtext"]').show().focus();else $('.basicModal .choice input[name="passwordtext"]').hide();
		});

		return true;
	}

	// Set data
	if (basicModal.visible()) {

		// Visible modal => Set album public
		album.json.public = '1';

		// Set visible
		if ($('.basicModal .choice input[name="hidden"]:checked').length === 1) album.json.visible = '0';else album.json.visible = '1';

		// Set downloadable
		if ($('.basicModal .choice input[name="downloadable"]:checked').length === 1) album.json.downloadable = '1';else album.json.downloadable = '0';

		// Set password
		if ($('.basicModal .choice input[name="password"]:checked').length === 1) {
			password = $('.basicModal .choice input[name="passwordtext"]').val();
			album.json.password = '1';
		} else {
			password = '';
			album.json.password = '0';
		}

		// Modal input has been processed, now it can be closed
		basicModal.close();
	} else {

		// Modal not visible => Set album private
		album.json.public = '0';
	}

	// Set data and refresh view
	if (visible.album()) {

		album.json.visible = album.json.public === '0' ? '1' : album.json.visible;
		album.json.downloadable = album.json.public === '0' ? '0' : album.json.downloadable;
		album.json.password = album.json.public === '0' ? '0' : album.json.password;

		view.album.public();
		view.album.hidden();
		view.album.downloadable();
		view.album.password();

		if (album.json.public === '1') contextMenu.shareAlbum(albumID, e);
	}

	var params = {
		albumID: albumID,
		public: album.json.public,
		password: password,
		visible: album.json.visible,
		downloadable: album.json.downloadable
	};

	api.post('Album::setPublic', params, function (data) {

		if (data !== true) lychee.error(null, params, data);
	});
};

album.share = function (service) {

	var url = location.href;

	switch (service) {
		case 'twitter':
			window.open('https://twitter.com/share?url=' + encodeURI(url));
			break;
		case 'facebook':
			window.open('http://www.facebook.com/sharer.php?u=' + encodeURI(url) + '&t=' + encodeURI(album.json.title));
			break;
		case 'mail':
			location.href = 'mailto:?subject=' + encodeURI(album.json.title) + '&body=' + encodeURI(url);
			break;
	}
};

album.getArchive = function (albumID) {

	var link = '';
	var url = api.path + '?function=Album::getArchive&albumID=' + albumID;

	if (location.href.indexOf('index.html') > 0) link = location.href.replace(location.hash, '').replace('index.html', url);else link = location.href.replace(location.hash, '') + url;

	if (lychee.publicMode === true) link += '&password=' + encodeURIComponent(password.value);

	location.href = link;
};

album.merge = function (albumIDs) {

	var title = '';
	var sTitle = '';
	var msg = '';

	if (!albumIDs) return false;
	if (albumIDs instanceof Array === false) albumIDs = [albumIDs];

	// Get title of first album
	if (albums.json) title = albums.getByID(albumIDs[0]).title;

	// Fallback for first album without a title
	if (title === '') title = 'Untitled';

	if (albumIDs.length === 2) {

		// Get title of second album
		if (albums.json) sTitle = albums.getByID(albumIDs[1]).title;

		// Fallback for second album without a title
		if (sTitle === '') sTitle = 'Untitled';

		msg = lychee.html(_templateObject7, sTitle, title);
	} else {

		msg = lychee.html(_templateObject8, title);
	}

	var action = function action() {

		basicModal.close();

		var params = {
			albumIDs: albumIDs.join()
		};

		api.post('Album::merge', params, function (data) {

			if (data !== true) {
				lychee.error(null, params, data);
			} else {
				albums.refresh();
				lychee.goto();
			}
		});
	};

	basicModal.show({
		body: msg,
		buttons: {
			action: {
				title: 'Mezclar Álbumes',
				fn: action,
				class: 'red'
			},
			cancel: {
				title: "No Mezclar",
				fn: basicModal.close
			}
		}
	});
};
/**
 * @description Takes care of every action albums can handle and execute.
 */

albums = {

	json: null

};

albums.load = function () {

	var startTime = new Date().getTime();

	lychee.animate('.content', 'contentZoomOut');

	if (albums.json === null) {

		api.post('Albums::get', {}, function (data) {

			var waitTime = 0;

			// Smart Albums
			if (lychee.publicMode === false) albums._createSmartAlbums(data.smartalbums);

			albums.json = data;

			// Calculate delay
			var durationTime = new Date().getTime() - startTime;
			if (durationTime > 300) waitTime = 0;else waitTime = 300 - durationTime;

			// Skip delay when opening a blank Lychee
			if (!visible.albums() && !visible.photo() && !visible.album()) waitTime = 0;
			if (visible.album() && lychee.content.html() === '') waitTime = 0;

			setTimeout(function () {
				header.setMode('albums');
				view.albums.init();
				lychee.animate(lychee.content, 'contentZoomIn');
			}, waitTime);
		});
	} else {

		setTimeout(function () {
			header.setMode('albums');
			view.albums.init();
			lychee.animate(lychee.content, 'contentZoomIn');
		}, 300);
	}
};

albums.parse = function (album) {

	if (album.password === '1' && lychee.publicMode === true) {
		album.thumbs[0] = 'src/images/password.svg';
		album.thumbs[1] = 'src/images/password.svg';
		album.thumbs[2] = 'src/images/password.svg';
	} else {
		if (!album.thumbs[0]) album.thumbs[0] = 'src/images/no_images.svg';
		if (!album.thumbs[1]) album.thumbs[1] = 'src/images/no_images.svg';
		if (!album.thumbs[2]) album.thumbs[2] = 'src/images/no_images.svg';
	}
};

albums._createSmartAlbums = function (data) {

	data.unsorted = {
		id: 0,
		title: 'Unsorted',
		sysdate: data.unsorted.num + ' photos',
		unsorted: '1',
		thumbs: data.unsorted.thumbs
	};

	data.starred = {
		id: 'f',
		title: 'Favoritas',
		sysdate: data.starred.num + ' photos',
		star: '1',
		thumbs: data.starred.thumbs
	};

	data.public = {
		id: 's',
		title: 'Publicas',
		sysdate: data.public.num + ' photos',
		public: '1',
		thumbs: data.public.thumbs
	};

	data.recent = {
		id: 'r',
		title: 'Recientes',
		sysdate: data.recent.num + ' photos',
		recent: '1',
		thumbs: data.recent.thumbs
	};
};

albums.getByID = function (albumID) {

	// Function returns the JSON of an album

	if (albumID == null) return undefined;
	if (!albums.json) return undefined;
	if (!albums.json.albums) return undefined;

	var json = undefined;

	$.each(albums.json.albums, function (i) {

		var elem = albums.json.albums[i];

		if (elem.id == albumID) json = elem;
	});

	return json;
};

albums.deleteByID = function (albumID) {

	// Function returns the JSON of an album

	if (albumID == null) return false;
	if (!albums.json) return false;
	if (!albums.json.albums) return false;

	var deleted = false;

	$.each(albums.json.albums, function (i) {

		if (albums.json.albums[i].id == albumID) {
			albums.json.albums.splice(i, 1);
			deleted = true;
			return false;
		}
	});

	return deleted;
};

albums.refresh = function () {

	albums.json = null;
};
/**
 * @description This module communicates with Lychee's API
 */

api = {

	path: 'php/index.php',
	onError: null

};

api.post = function (fn, params, callback) {

	loadingBar.show();

	params = $.extend({ function: fn }, params);

	var success = function success(data) {

		setTimeout(loadingBar.hide, 100);

		// Catch errors
		if (typeof data === 'string' && data.substring(0, 7) === 'Error: ') {
			api.onError(data.substring(7, data.length), params, data);
			return false;
		}

		callback(data);
	};

	var error = function error(jqXHR, textStatus, errorThrown) {

		api.onError('Server error or API not found.', params, errorThrown);
	};

	$.ajax({
		type: 'POST',
		url: api.path,
		data: params,
		dataType: 'json',
		success: success,
		error: error
	});
};
/**
 * @description This module is used to generate HTML-Code.
 */

build = {};

build.iconic = function (icon) {
	var classes = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';


	var html = '';

	html += lychee.html(_templateObject9, classes, icon);

	return html;
};

build.divider = function (title) {

	var html = '';

	html += lychee.html(_templateObject10, title);

	return html;
};

build.editIcon = function (id) {

	var html = '';

	html += lychee.html(_templateObject11, id, build.iconic('pencil'));

	return html;
};

build.multiselect = function (top, left) {

	return lychee.html(_templateObject12, top, left);
};

build.album = function (data) {

	var html = '';

	var _lychee$retinize = lychee.retinize(data.thumbs[0]),
	    retinaThumbUrl = _lychee$retinize.path,
	    isPhoto = _lychee$retinize.isPhoto;

	html += lychee.html(_templateObject13, data.id, data.thumbs[2], data.thumbs[1], data.thumbs[0], retinaThumbUrl, isPhoto, data.title, data.title, data.sysdate);

	if (lychee.publicMode === false) {

		html += lychee.html(_templateObject14, data.star === '1' ? 'badge--visible' : '', build.iconic('star'), data.public === '1' ? 'badge--visible' : '', build.iconic('eye'), data.unsorted === '1' ? 'badge--visible' : '', build.iconic('list'), data.recent === '1' ? 'badge--visible' : '', build.iconic('clock'), data.password === '1' ? 'badge--visible' : '', build.iconic('lock-locked'));
	}

	html += '</div>';

	return html;
};

build.photo = function (data) {

	var html = '';

	var _lychee$retinize2 = lychee.retinize(data.thumbUrl),
	    retinaThumbUrl = _lychee$retinize2.path;

	html += lychee.html(_templateObject15, data.album, data.id, data.thumbUrl, retinaThumbUrl, data.title, data.title);

	if (data.cameraDate === '1') html += lychee.html(_templateObject16, build.iconic('camera-slr'), data.sysdate);else html += lychee.html(_templateObject17, data.sysdate);

	html += '</div>';

	if (lychee.publicMode === false) {

		html += lychee.html(_templateObject18, data.star === '1' ? 'badge--visible' : '', build.iconic('star'), data.public === '1' && album.json.public !== '1' ? 'badge--visible' : '', build.iconic('eye'));
	}

	html += '</div>';

	return html;
};

build.imageview = function (data, visibleControls) {

	var html = '';
	var hasMedium = data.medium !== '';

	if (hasMedium === false) {

		html += lychee.html(_templateObject19, visibleControls === true ? '' : 'full', data.url);
	} else {

		html += lychee.html(_templateObject20, visibleControls === true ? '' : 'full', data.url, data.medium, data.url, data.width);
	}

	html += '\n\t        <div class=\'arrow_wrapper arrow_wrapper--previous\'><a id=\'previous\'>' + build.iconic('caret-left') + '</a></div>\n\t        <div class=\'arrow_wrapper arrow_wrapper--next\'><a id=\'next\'>' + build.iconic('caret-right') + '</a></div>\n\t        ';

	return html;
};

build.no_content = function (typ) {

	var html = '';

	html += '\n\t        <div class=\'no_content fadeIn\'>\n\t            ' + build.iconic(typ) + '\n\t        ';

	switch (typ) {
		case 'magnifying-glass':
			html += '<p>No results</p>';
			break;
		case 'eye':
			html += '<p>No public albums</p>';
			break;
		case 'cog':
			html += '<p>No configuration</p>';
			break;
		case 'question-mark':
			html += '<p>Photo not found</p>';
			break;
	}

	html += '</div>';

	return html;
};

build.uploadModal = function (title, files) {

	var html = '';

	html += lychee.html(_templateObject21, title);

	var i = 0;

	while (i < files.length) {

		var file = files[i];

		if (file.name.length > 40) file.name = file.name.substr(0, 17) + '...' + file.name.substr(file.name.length - 20, 20);

		html += lychee.html(_templateObject22, file.name);

		i++;
	}

	html += '</div>';

	return html;
};

build.tags = function (tags) {

	var html = '';

	if (tags !== '') {

		tags = tags.split(',');

		tags.forEach(function (tag, index, array) {
			html += lychee.html(_templateObject23, tag, index, build.iconic('x'));
		});
	} else {

		html = '<div class=\'empty\'>No Tags</div>';
	}

	return html;
};
/**
 * @description This module is used for the context menu.
 */

contextMenu = {};

contextMenu.add = function (e) {

	var items = [{ title: build.iconic('image') + 'Subir Fotografía', fn: function fn() {
			return $('#upload_files').click();
		} }, {}, { title: build.iconic('link-intact') + 'Import from Link', fn: upload.start.url }, { title: build.iconic('dropbox', 'ionicons') + 'Import from Dropbox', fn: upload.start.dropbox }, { title: build.iconic('terminal') + 'Import from Server', fn: upload.start.server }, {}, { title: build.iconic('folder') + 'Nuevo Álbum', fn: album.add }];

	basicContext.show(items, e.originalEvent);

	upload.notify();
};

contextMenu.settings = function (e) {

	var items = [{ title: build.iconic('person') + 'Change Login', fn: settings.setLogin }, { title: build.iconic('sort-ascending') + 'Change Sorting', fn: settings.setSorting }, { title: build.iconic('dropbox', 'ionicons') + 'Set Dropbox', fn: settings.setDropboxKey }, {}, { title: build.iconic('info') + 'About Lychee', fn: function fn() {
			return window.open(lychee.website);
		} }, { title: build.iconic('wrench') + 'Diagnostics', fn: function fn() {
			return window.open('plugins/Diagnostics/');
		} }, { title: build.iconic('align-left') + 'Show Log', fn: function fn() {
			return window.open('plugins/Log/');
		} }, {}, { title: build.iconic('account-logout') + 'Sign Out', fn: lychee.logout }];

	basicContext.show(items, e.originalEvent);
};

contextMenu.album = function (albumID, e) {

	// Notice for 'Merge':
	// fn must call basicContext.close() first,
	// in order to keep the selection

	if (albumID === '0' || albumID === 'f' || albumID === 's' || albumID === 'r') return false;

	// Show merge-item when there's more than one album
	var showMerge = albums.json && albums.json.albums && Object.keys(albums.json.albums).length > 1;

	var items = [{ title: build.iconic('pencil') + 'Renombrar', fn: function fn() {
			return album.setTitle([albumID]);
		} }, { title: build.iconic('collapse-left') + 'Mezclar', visible: showMerge, fn: function fn() {
			basicContext.close();contextMenu.mergeAlbum(albumID, e);
		} }, { title: build.iconic('trash') + 'Borrar', fn: function fn() {
			return album.delete([albumID]);
		} }];

	$('.album[data-id="' + albumID + '"]').addClass('active');

	basicContext.show(items, e.originalEvent, contextMenu.close);
};

contextMenu.albumMulti = function (albumIDs, e) {

	multiselect.stopResize();

	// Automatically merge selected albums when albumIDs contains more than one album
	// Show list of albums otherwise
	var autoMerge = albumIDs.length > 1 ? true : false;

	// Show merge-item when there's more than one album
	var showMerge = albums.json && albums.json.albums && Object.keys(albums.json.albums).length > 1;

	var items = [{ title: build.iconic('pencil') + 'Renombrar todos', fn: function fn() {
			return album.setTitle(albumIDs);
		} }, { title: build.iconic('collapse-left') + 'Mezclar todos', visible: showMerge && autoMerge, fn: function fn() {
			return album.merge(albumIDs);
		} }, { title: build.iconic('collapse-left') + 'Mezclar', visible: showMerge && !autoMerge, fn: function fn() {
			basicContext.close();contextMenu.mergeAlbum(albumIDs[0], e);
		} }, { title: build.iconic('trash') + 'Borrar todos', fn: function fn() {
			return album.delete(albumIDs);
		} }];

	items.push();

	basicContext.show(items, e.originalEvent, contextMenu.close);
};

contextMenu.albumTitle = function (albumID, e) {

	api.post('Albums::get', {}, function (data) {

		var items = [];

		if (data.albums && data.num > 1) {

			// Generate list of albums
			$.each(data.albums, function () {
				var _this = this;

				if (!this.thumbs[0]) this.thumbs[0] = 'src/images/no_cover.svg';
				if (this.title === '') this.title = 'Untitled';

				var html = lychee.html(_templateObject24, this.thumbs[0], this.title);

				if (this.id != albumID) items.push({
					title: html,
					fn: function fn() {
						return lychee.goto(_this.id);
					}
				});
			});

			items.unshift({});
		}

		items.unshift({ title: build.iconic('pencil') + 'Renombrar', fn: function fn() {
				return album.setTitle([albumID]);
			} });

		basicContext.show(items, e.originalEvent, contextMenu.close);
	});
};

contextMenu.mergeAlbum = function (albumID, e) {

	api.post('Albums::get', {}, function (data) {

		var items = [];

		if (data.albums && data.num > 1) {

			$.each(data.albums, function () {
				var _this2 = this;

				if (!this.thumbs[0]) this.thumbs[0] = 'src/images/no_cover.svg';
				if (this.title === '') this.title = 'Untitled';

				var html = lychee.html(_templateObject24, this.thumbs[0], this.title);

				if (this.id != albumID) items.push({
					title: html,
					fn: function fn() {
						return album.merge([albumID, _this2.id]);
					}
				});
			});
		}

		if (items.length === 0) return false;

		basicContext.show(items, e.originalEvent, contextMenu.close);
	});
};

contextMenu.photo = function (photoID, e) {

	// Notice for 'Move':
	// fn must call basicContext.close() first,
	// in order to keep the selection

	var items = [{ title: build.iconic('star') + 'Favorita', fn: function fn() {
			return photo.setStar([photoID]);
		} }, { title: build.iconic('tag') + 'Etiquetar', fn: function fn() {
			return photo.editTags([photoID]);
		} }, {}, { title: build.iconic('pencil') + 'Renombrar', fn: function fn() {
			return photo.setTitle([photoID]);
		} }, { title: build.iconic('layers') + 'Duplicar', fn: function fn() {
			return photo.duplicate([photoID]);
		} }, { title: build.iconic('folder') + 'Mover', fn: function fn() {
			basicContext.close();contextMenu.move([photoID], e);
		} }, { title: build.iconic('trash') + 'Borrar', fn: function fn() {
			return photo.delete([photoID]);
		} }];

	$('.photo[data-id="' + photoID + '"]').addClass('active');

	basicContext.show(items, e.originalEvent, contextMenu.close);
};

contextMenu.photoMulti = function (photoIDs, e) {

	// Notice for 'Move All':
	// fn must call basicContext.close() first,
	// in order to keep the selection and multiselect

	multiselect.stopResize();

	var items = [{ title: build.iconic('star') + 'Star All', fn: function fn() {
			return photo.setStar(photoIDs);
		} }, { title: build.iconic('tag') + 'Tag All', fn: function fn() {
			return photo.editTags(photoIDs);
		} }, {}, { title: build.iconic('pencil') + 'Rename All', fn: function fn() {
			return photo.setTitle(photoIDs);
		} }, { title: build.iconic('layers') + 'Duplicate All', fn: function fn() {
			return photo.duplicate(photoIDs);
		} }, { title: build.iconic('folder') + 'Move All', fn: function fn() {
			basicContext.close();contextMenu.move(photoIDs, e);
		} }, { title: build.iconic('trash') + 'Delete All', fn: function fn() {
			return photo.delete(photoIDs);
		} }];

	basicContext.show(items, e.originalEvent, contextMenu.close);
};

contextMenu.photoTitle = function (albumID, photoID, e) {

	var items = [{ title: build.iconic('pencil') + 'Rename', fn: function fn() {
			return photo.setTitle([photoID]);
		} }];

	var data = album.json;

	if (data.content !== false && data.num > 1) {

		items.push({});

		// Generate list of albums
		$.each(data.content, function (index) {
			var _this3 = this;

			if (this.title === '') this.title = 'Untitled';

			var html = lychee.html(_templateObject24, this.thumbUrl, this.title);

			if (this.id != photoID) items.push({
				title: html,
				fn: function fn() {
					return lychee.goto(albumID + '/' + _this3.id);
				}
			});
		});
	}

	basicContext.show(items, e.originalEvent, contextMenu.close);
};

contextMenu.photoMore = function (photoID, e) {

	// Show download-item when
	// a) Public mode is off
	// b) Downloadable is 1 and public mode is on
	var showDownload = lychee.publicMode === false || album.json && album.json.downloadable && album.json.downloadable === '1' && lychee.publicMode === true;

	var items = [{ title: build.iconic('fullscreen-enter') + 'Full Photo', fn: function fn() {
			return window.open(photo.getDirectLink());
		} }, { title: build.iconic('cloud-download') + 'Download', visible: showDownload, fn: function fn() {
			return photo.getArchive(photoID);
		} }];

	basicContext.show(items, e.originalEvent);
};

contextMenu.move = function (photoIDs, e) {

	var items = [];

	api.post('Albums::get', {}, function (data) {

		if (data.num === 0) {

			// Show only 'Add album' when no album available
			items = [{ title: 'New Album', fn: album.add }];
		} else {

			// Generate list of albums
			$.each(data.albums, function () {
				var _this4 = this;

				if (!this.thumbs[0]) this.thumbs[0] = 'src/images/no_cover.svg';
				if (this.title === '') this.title = 'Untitled';

				var html = lychee.html(_templateObject24, this.thumbs[0], this.title);

				if (this.id != album.getID()) items.push({
					title: html,
					fn: function fn() {
						return photo.setAlbum(photoIDs, _this4.id);
					}
				});
			});

			// Show Unsorted when unsorted is not the current album
			if (album.getID() !== '0') {

				items.unshift({});
				items.unshift({ title: 'Unsorted', fn: function fn() {
						return photo.setAlbum(photoIDs, 0);
					} });
			}
		}

		basicContext.show(items, e.originalEvent, contextMenu.close);
	});
};

contextMenu.sharePhoto = function (photoID, e) {

	var link = photo.getViewLink(photoID);
	var iconClass = 'ionicons';

	var items = [{ title: '<input readonly id="link" value="' + link + '">', fn: function fn() {}, class: 'basicContext__item--noHover' }, {}, { title: build.iconic('twitter', iconClass) + 'Twitter', fn: function fn() {
			return photo.share(photoID, 'twitter');
		} }, { title: build.iconic('facebook', iconClass) + 'Facebook', fn: function fn() {
			return photo.share(photoID, 'facebook');
		} }, { title: build.iconic('envelope-closed') + 'Mail', fn: function fn() {
			return photo.share(photoID, 'mail');
		} }, { title: build.iconic('dropbox', iconClass) + 'Dropbox', visible: lychee.publicMode === false, fn: function fn() {
			return photo.share(photoID, 'dropbox');
		} }, { title: build.iconic('link-intact') + 'Direct Link', fn: function fn() {
			return window.open(photo.getDirectLink());
		} }, {}, { title: build.iconic('ban') + 'Make Private', visible: lychee.publicMode === false, fn: function fn() {
			return photo.setPublic(photoID);
		} }];

	if (lychee.publicMode === true) items.splice(7, 1);

	basicContext.show(items, e.originalEvent);
	$('.basicContext input#link').focus().select();
};

contextMenu.shareAlbum = function (albumID, e) {

	var iconClass = 'ionicons';

	var items = [{ title: '<input readonly id="link" value="' + location.href + '">', fn: function fn() {}, class: 'basicContext__item--noHover' }, {}, { title: build.iconic('twitter', iconClass) + 'Twitter', fn: function fn() {
			return album.share('twitter');
		} }, { title: build.iconic('facebook', iconClass) + 'Facebook', fn: function fn() {
			return album.share('facebook');
		} }, { title: build.iconic('envelope-closed') + 'Mail', fn: function fn() {
			return album.share('mail');
		} }, {}, { title: build.iconic('pencil') + 'Edit Sharing', visible: lychee.publicMode === false, fn: function fn() {
			return album.setPublic(albumID, true, e);
		} }, { title: build.iconic('ban') + 'Make Private', visible: lychee.publicMode === false, fn: function fn() {
			return album.setPublic(albumID, false);
		} }];

	if (lychee.publicMode === true) items.splice(5, 1);

	basicContext.show(items, e.originalEvent);
	$('.basicContext input#link').focus().select();
};

contextMenu.close = function () {

	if (!visible.contextMenu()) return false;

	basicContext.close();

	$('.photo.active, .album.active').removeClass('active');
	if (visible.multiselect()) multiselect.close();
};
/**
 * @description This module takes care of the header.
 */

header = {

	_dom: $('.header')

};

header.dom = function (selector) {

	if (selector == null || selector === '') return header._dom;
	return header._dom.find(selector);
};

header.bind = function () {

	// Event Name
	var eventName = lychee.getEventName();

	header.dom('.header__title').on(eventName, function (e) {

		if ($(this).hasClass('header__title--editable') === false) return false;

		if (visible.photo()) contextMenu.photoTitle(album.getID(), photo.getID(), e);else contextMenu.albumTitle(album.getID(), e);
	});

	header.dom('#button_share').on(eventName, function (e) {
		if (photo.json.public === '1' || photo.json.public === '2') contextMenu.sharePhoto(photo.getID(), e);else photo.setPublic(photo.getID(), e);
	});

	header.dom('#button_share_album').on(eventName, function (e) {
		if (album.json.public === '1') contextMenu.shareAlbum(album.getID(), e);else album.setPublic(album.getID(), true, e);
	});

	header.dom('#button_signin').on(eventName, lychee.loginDialog);
	header.dom('#button_settings').on(eventName, contextMenu.settings);
	header.dom('#button_info_album').on(eventName, sidebar.toggle);
	header.dom('#button_info').on(eventName, sidebar.toggle);
	header.dom('.button_add').on(eventName, contextMenu.add);
	header.dom('#button_more').on(eventName, function (e) {
		contextMenu.photoMore(photo.getID(), e);
	});
	header.dom('#button_move').on(eventName, function (e) {
		contextMenu.move([photo.getID()], e);
	});
	header.dom('.header__hostedwith').on(eventName, function () {
		window.open(lychee.website);
	});
	header.dom('#button_trash_album').on(eventName, function () {
		album.delete([album.getID()]);
	});
	header.dom('#button_trash').on(eventName, function () {
		photo.delete([photo.getID()]);
	});
	header.dom('#button_archive').on(eventName, function () {
		album.getArchive(album.getID());
	});
	header.dom('#button_star').on(eventName, function () {
		photo.setStar([photo.getID()]);
	});
	header.dom('#button_back_home').on(eventName, function () {
		lychee.goto();
	});
	header.dom('#button_back').on(eventName, function () {
		lychee.goto(album.getID());
	});

	header.dom('.header__search').on('keyup click', function () {
		search.find($(this).val());
	});
	header.dom('.header__clear').on(eventName, function () {
		header.dom('.header__search').focus();
		search.reset();
	});

	return true;
};

header.show = function () {

	lychee.imageview.removeClass('full');
	header.dom().removeClass('header--hidden');

	return true;
};

header.hide = function (e) {

	if (visible.photo() && !visible.sidebar() && !visible.contextMenu() && basicModal.visible() === false) {

		lychee.imageview.addClass('full');
		header.dom().addClass('header--hidden');

		return true;
	}

	return false;
};

header.setTitle = function () {
	var title = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'Untitled';


	var $title = header.dom('.header__title');
	var html = lychee.html(_templateObject25, title, build.iconic('caret-bottom'));

	$title.html(html);

	return true;
};

header.setMode = function (mode) {

	if (mode === 'albums' && lychee.publicMode === true) mode = 'public';

	switch (mode) {

		case 'public':

			header.dom().removeClass('header--view');
			header.dom('.header__toolbar--albums, .header__toolbar--album, .header__toolbar--photo').removeClass('header__toolbar--visible');
			header.dom('.header__toolbar--public').addClass('header__toolbar--visible');

			return true;
			break;

		case 'albums':

			header.dom().removeClass('header--view');
			header.dom('.header__toolbar--public, .header__toolbar--album, .header__toolbar--photo').removeClass('header__toolbar--visible');
			header.dom('.header__toolbar--albums').addClass('header__toolbar--visible');

			return true;
			break;

		case 'album':

			var albumID = album.getID();

			header.dom().removeClass('header--view');
			header.dom('.header__toolbar--public, .header__toolbar--albums, .header__toolbar--photo').removeClass('header__toolbar--visible');
			header.dom('.header__toolbar--album').addClass('header__toolbar--visible');

			// Hide download button when album empty
			if (album.json.content === false) $('#button_archive').hide();else $('#button_archive').show();

			// Hide download button when not logged in and album not downloadable
			if (lychee.publicMode === true && album.json.downloadable === '0') $('#button_archive').hide();

			if (albumID === 's' || albumID === 'f' || albumID === 'r') {
				$('#button_info_album, #button_trash_album, #button_share_album').hide();
			} else if (albumID === '0') {
				$('#button_info_album, #button_share_album').hide();
				$('#button_trash_album').show();
			} else {
				$('#button_info_album, #button_trash_album, #button_share_album').show();
			}

			return true;
			break;

		case 'photo':

			header.dom().addClass('header--view');
			header.dom('.header__toolbar--public, .header__toolbar--albums, .header__toolbar--album').removeClass('header__toolbar--visible');
			header.dom('.header__toolbar--photo').addClass('header__toolbar--visible');

			return true;
			break;

	}

	return false;
};

header.setEditable = function (editable) {

	var $title = header.dom('.header__title');

	// Hide editable icon when not logged in
	if (lychee.publicMode === true) editable = false;

	if (editable) $title.addClass('header__title--editable');else $title.removeClass('header__title--editable');

	return true;
};
/**
 * @description This module is used for bindings.
 */

$(document).ready(function () {

	// Event Name
	var eventName = lychee.getEventName();

	// Set API error handler
	api.onError = lychee.error;

	// Multiselect
	multiselect.bind();

	// Header
	header.bind();

	// Image View
	lychee.imageview.on(eventName, '.arrow_wrapper--previous', photo.previous).on(eventName, '.arrow_wrapper--next', photo.next);

	// Keyboard
	Mousetrap.bind(['left'], function () {
		if (visible.photo()) {
			$('#imageview a#previous').click();return false;
		}
	}).bind(['right'], function () {
		if (visible.photo()) {
			$('#imageview a#next').click();return false;
		}
	}).bind(['u'], function () {
		if (!visible.photo()) {
			$('#upload_files').click();return false;
		}
	}).bind(['s', 'f'], function () {
		if (visible.photo()) {
			header.dom('#button_star').click();return false;
		} else if (visible.albums()) {
			header.dom('.header__search').focus();return false;
		}
	}).bind(['r'], function () {
		if (visible.album()) {
			album.setTitle(album.getID());return false;
		} else if (visible.photo()) {
			photo.setTitle([photo.getID()]);return false;
		}
	}).bind(['d'], function () {
		if (visible.photo()) {
			photo.setDescription(photo.getID());return false;
		} else if (visible.album()) {
			album.setDescription(album.getID());return false;
		}
	}).bind(['t'], function () {
		if (visible.photo()) {
			photo.editTags([photo.getID()]);return false;
		}
	}).bind(['i'], function () {
		if (!visible.multiselect()) {
			sidebar.toggle();return false;
		}
	}).bind(['command+backspace', 'ctrl+backspace'], function () {
		if (visible.photo() && basicModal.visible() === false) {
			photo.delete([photo.getID()]);return false;
		} else if (visible.album() && basicModal.visible() === false) {
			album.delete([album.getID()]);return false;
		}
	}).bind(['command+a', 'ctrl+a'], function () {
		if (visible.album() && basicModal.visible() === false) {
			multiselect.selectAll();return false;
		} else if (visible.albums() && basicModal.visible() === false) {
			multiselect.selectAll();return false;
		}
	});

	Mousetrap.bindGlobal('enter', function () {
		if (basicModal.visible() === true) basicModal.action();
	});

	Mousetrap.bindGlobal(['esc', 'command+up'], function () {
		if (basicModal.visible() === true) basicModal.cancel();else if (visible.contextMenu()) contextMenu.close();else if (visible.photo()) lychee.goto(album.getID());else if (visible.album()) lychee.goto();else if (visible.albums() && header.dom('.header__search').val().length !== 0) search.reset();
		return false;
	});

	if (eventName === 'touchend') {

		$(document)

		// Fullscreen on mobile
		.on('touchend', '#imageview #image', function (e) {
			if (swipe.obj == null || swipe.offset >= -5 && swipe.offset <= 5) {
				if (visible.header()) header.hide(e);else header.show();
			}
		})

		// Swipe on mobile
		.swipe().on('swipeStart', function () {
			if (visible.photo()) swipe.start($('#imageview #image'));
		}).swipe().on('swipeMove', function (e) {
			if (visible.photo()) swipe.move(e.swipe);
		}).swipe().on('swipeEnd', function (e) {
			if (visible.photo()) swipe.stop(e.swipe, photo.previous, photo.next);
		});
	}

	// Document
	$(document)

	// Navigation
	.on('click', '.album', function () {
		lychee.goto($(this).attr('data-id'));
	}).on('click', '.photo', function () {
		lychee.goto(album.getID() + '/' + $(this).attr('data-id'));
	})

	// Context Menu
	.on('contextmenu', '.photo', function (e) {
		contextMenu.photo(photo.getID(), e);
	}).on('contextmenu', '.album', function (e) {
		contextMenu.album(album.getID(), e);
	})

	// Upload
	.on('change', '#upload_files', function () {
		basicModal.close();upload.start.local(this.files);
	})

	// Drag and Drop upload
	.on('dragover', function () {
		return false;
	}, false).on('drop', function (e) {

		// Close open overlays or views which are correlating with the upload
		if (visible.photo()) lychee.goto(album.getID());
		if (visible.contextMenu()) contextMenu.close();

		// Detect if dropped item is a file or a link
		if (e.originalEvent.dataTransfer.files.length > 0) upload.start.local(e.originalEvent.dataTransfer.files);else if (e.originalEvent.dataTransfer.getData('Text').length > 3) upload.start.url(e.originalEvent.dataTransfer.getData('Text'));

		return false;
	});

	// Init
	lychee.init();
});
/**
 * @description This module is used to show and hide the loading bar.
 */

loadingBar = {

	status: null,
	_dom: $('#loading')

};

loadingBar.dom = function (selector) {

	if (selector == null || selector === '') return loadingBar._dom;
	return loadingBar._dom.find(selector);
};

loadingBar.show = function (status, errorText) {

	if (status === 'error') {

		// Set status
		loadingBar.status = 'error';

		// Parse text
		if (errorText) errorText = errorText.replace('<br>', '');
		if (!errorText) errorText = 'Whoops, it looks like something went wrong. Please reload the site and try again!';

		// Move header down
		if (visible.header()) header.dom().addClass('header--error');

		// Modify loading
		loadingBar.dom().removeClass('loading uploading error').html('<h1>Error: <span>' + errorText + '</span></h1>').addClass(status).show();

		// Set timeout
		clearTimeout(loadingBar._timeout);
		loadingBar._timeout = setTimeout(function () {
			return loadingBar.hide(true);
		}, 3000);

		return true;
	}

	if (loadingBar.status === null) {

		// Set status
		loadingBar.status = 'loading';

		// Set timeout
		clearTimeout(loadingBar._timeout);
		loadingBar._timeout = setTimeout(function () {

			// Move header down
			if (visible.header()) header.dom().addClass('header--loading');

			// Modify loading
			loadingBar.dom().removeClass('loading uploading error').html('').addClass('loading').show();
		}, 1000);

		return true;
	}
};

loadingBar.hide = function (force) {

	if (loadingBar.status !== 'error' && loadingBar.status != null || force) {

		// Remove status
		loadingBar.status = null;

		// Move header up
		header.dom().removeClass('header--error header--loading');

		// Set timeout
		clearTimeout(loadingBar._timeout);
		setTimeout(function () {
			return loadingBar.dom().hide();
		}, 300);
	}
};
/**
 * @description This module provides the basic functions of Lychee.
 */

lychee = {

	title: document.title,
	version: '3.1.5',
	versionCode: '030105',

	updatePath: '//update.electerious.com/index.json',
	updateURL: 'https://github.com/electerious/Lychee',
	website: 'http://lychee.electerious.com',

	publicMode: false,
	viewMode: false,

	checkForUpdates: '1',
	sortingPhotos: '',
	sortingAlbums: '',
	location: '',

	dropbox: false,
	dropboxKey: '',

	content: $('.content'),
	imageview: $('#imageview')

};

lychee.init = function () {

	api.post('Session::init', {}, function (data) {

		// Check status
		// 0 = No configuration
		// 1 = Logged out
		// 2 = Logged in

		if (data.status === 2) {

			// Logged in

			lychee.sortingPhotos = data.config.sortingPhotos || '';
			lychee.sortingAlbums = data.config.sortingAlbums || '';
			lychee.dropboxKey = data.config.dropboxKey || '';
			lychee.location = data.config.location || '';
			lychee.checkForUpdates = data.config.checkForUpdates || '1';

			// Show dialog when there is no username and password
			if (data.config.login === false) settings.createLogin();
		} else if (data.status === 1) {

			// Logged out

			lychee.checkForUpdates = data.config.checkForUpdates || '1';

			lychee.setMode('public');
		} else if (data.status === 0) {

			// No configuration

			lychee.setMode('public');

			header.dom().hide();
			lychee.content.hide();
			$('body').append(build.no_content('cog'));
			settings.createConfig();

			return true;
		}

		$(window).bind('popstate', lychee.load);
		lychee.load();
	});
};

lychee.login = function (data) {

	var user = data.username;
	var password = data.password;

	var params = {
		user: user,
		password: password
	};

	api.post('Session::login', params, function (data) {

		if (data === true) {

			window.location.reload();
		} else {

			// Show error and reactive button
			basicModal.error('password');
		}
	});
};

lychee.loginDialog = function () {

	var msg = lychee.html(_templateObject26, lychee.version, lychee.updateURL);

	basicModal.show({
		body: msg,
		buttons: {
			action: {
				title: 'Sign In',
				fn: lychee.login
			},
			cancel: {
				title: 'Cancel',
				fn: basicModal.close
			}
		}
	});

	if (lychee.checkForUpdates === '1') lychee.getUpdate();
};

lychee.logout = function () {

	api.post('Session::logout', {}, function () {
		window.location.reload();
	});
};

lychee.goto = function () {
	var url = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';


	url = '#' + url;

	history.pushState(null, null, url);
	lychee.load();
};

lychee.load = function () {

	var albumID = '';
	var photoID = '';
	var hash = document.location.hash.replace('#', '').split('/');

	$('.no_content').remove();
	contextMenu.close();
	multiselect.close();

	if (hash[0] != null) albumID = hash[0];
	if (hash[1] != null) photoID = hash[1];

	if (albumID && photoID) {

		// Trash data
		photo.json = null;

		// Show Photo
		if (lychee.content.html() === '' || header.dom('.header__search').length && header.dom('.header__search').val().length !== 0) {
			lychee.content.hide();
			album.load(albumID, true);
		}
		photo.load(photoID, albumID);
	} else if (albumID) {

		// Trash data
		photo.json = null;

		// Show Album
		if (visible.photo()) view.photo.hide();
		if (visible.sidebar() && (albumID === '0' || albumID === 'f' || albumID === 's' || albumID === 'r')) sidebar.toggle();
		if (album.json && albumID == album.json.id) view.album.title();else album.load(albumID);
	} else {

		// Trash albums.json when filled with search results
		if (search.hash != null) {
			albums.json = null;
			search.hash = null;
		}

		// Trash data
		album.json = null;
		photo.json = null;

		// Hide sidebar
		if (visible.sidebar()) sidebar.toggle();

		// Show Albums
		if (visible.photo()) view.photo.hide();
		lychee.content.show();
		albums.load();
	}
};

lychee.getUpdate = function () {

	var success = function success(data) {
		if (data.lychee.version > parseInt(lychee.versionCode)) $('.version span').show();
	};

	$.ajax({
		url: lychee.updatePath,
		success: success
	});
};

lychee.setTitle = function (title, editable) {

	document.title = lychee.title + ' - ' + title;

	header.setEditable(editable);
	header.setTitle(title);
};

lychee.setMode = function (mode) {

	$('#button_settings, #button_trash_album, .button_add, .header__divider').remove();
	$('#button_trash, #button_move, #button_star').remove();

	$('#button_share, #button_share_album').removeClass('button--eye').addClass('button--share').find('use').attr('xlink:href', '#share');

	$(document).off('click', '.header__title--editable').off('touchend', '.header__title--editable').off('contextmenu', '.photo').off('contextmenu', '.album').off('drop');

	Mousetrap.unbind(['u']).unbind(['s']).unbind(['f']).unbind(['r']).unbind(['d']).unbind(['t']).unbind(['command+backspace', 'ctrl+backspace']).unbind(['command+a', 'ctrl+a']);

	if (mode === 'public') {

		lychee.publicMode = true;
	} else if (mode === 'view') {

		Mousetrap.unbind(['esc', 'command+up']);

		$('#button_back, a#next, a#previous').remove();
		$('.no_content').remove();

		lychee.publicMode = true;
		lychee.viewMode = true;
	}
};

lychee.animate = function (obj, animation) {

	var animations = [['fadeIn', 'fadeOut'], ['contentZoomIn', 'contentZoomOut']];

	if (!obj.jQuery) obj = $(obj);

	for (var i = 0; i < animations.length; i++) {
		for (var x = 0; x < animations[i].length; x++) {
			if (animations[i][x] == animation) {
				obj.removeClass(animations[i][0] + ' ' + animations[i][1]).addClass(animation);
				return true;
			}
		}
	}

	return false;
};

lychee.retinize = function () {
	var path = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';


	var extention = path.split('.').pop();
	var isPhoto = extention !== 'svg';

	if (isPhoto === true) {

		path = path.replace(/\.[^/.]+$/, '');
		path = path + '@2x' + '.' + extention;
	}

	return {
		path: path,
		isPhoto: isPhoto
	};
};

lychee.loadDropbox = function (callback) {

	if (lychee.dropbox === false && lychee.dropboxKey != null && lychee.dropboxKey !== '') {

		loadingBar.show();

		var g = document.createElement('script');
		var s = document.getElementsByTagName('script')[0];

		g.src = 'https://www.dropbox.com/static/api/1/dropins.js';
		g.id = 'dropboxjs';
		g.type = 'text/javascript';
		g.async = 'true';
		g.setAttribute('data-app-key', lychee.dropboxKey);
		g.onload = g.onreadystatechange = function () {
			var rs = this.readyState;
			if (rs && rs !== 'complete' && rs !== 'loaded') return;
			lychee.dropbox = true;
			loadingBar.hide();
			callback();
		};
		s.parentNode.insertBefore(g, s);
	} else if (lychee.dropbox === true && lychee.dropboxKey != null && lychee.dropboxKey !== '') {

		callback();
	} else {

		settings.setDropboxKey(callback);
	}
};

lychee.getEventName = function () {

	var touchendSupport = /Android|iPhone|iPad|iPod/i.test(navigator.userAgent || navigator.vendor || window.opera) && 'ontouchend' in document.documentElement;
	var eventName = touchendSupport === true ? 'touchend' : 'click';

	return eventName;
};

lychee.escapeHTML = function () {
	var html = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';


	// Ensure that html is a string
	html += '';

	// Escape all critical characters
	html = html.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, '&#039;').replace(/`/g, '&#96;');

	return html;
};

lychee.html = function (literalSections) {

	// Use raw literal sections: we don’t want
	// backslashes (\n etc.) to be interpreted
	var raw = literalSections.raw;
	var result = '';

	for (var _len = arguments.length, substs = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
		substs[_key - 1] = arguments[_key];
	}

	substs.forEach(function (subst, i) {

		// Retrieve the literal section preceding
		// the current substitution
		var lit = raw[i];

		// If the substitution is preceded by a dollar sign,
		// we escape special characters in it
		if (lit.slice(-1) === '$') {
			subst = lychee.escapeHTML(subst);
			lit = lit.slice(0, -1);
		}

		result += lit;
		result += subst;
	});

	// Take care of last literal section
	// (Never fails, because an empty template string
	// produces one literal section, an empty string)
	result += raw[raw.length - 1];

	return result;
};

lychee.error = function (errorThrown, params, data) {

	console.error({
		description: errorThrown,
		params: params,
		response: data
	});

	loadingBar.show('error', errorThrown);
};
/**
 * @description Select multiple albums or photos.
 */

multiselect = {};

multiselect.position = {

	top: null,
	right: null,
	bottom: null,
	left: null

};

multiselect.bind = function () {

	$('.content').on('mousedown', function (e) {
		if (e.which === 1) multiselect.show(e);
	});

	return true;
};

multiselect.show = function (e) {

	if (lychee.publicMode) return false;
	if (!visible.albums() && !visible.album()) return false;
	if ($('.album:hover, .photo:hover').length !== 0) return false;
	if (visible.search()) return false;
	if (visible.multiselect()) $('#multiselect').remove();

	sidebar.setSelectable(false);

	multiselect.position.top = e.pageY;
	multiselect.position.right = -1 * (e.pageX - $(document).width());
	multiselect.position.bottom = -1 * (multiselect.position.top - $(window).height());
	multiselect.position.left = e.pageX;

	$('body').append(build.multiselect(multiselect.position.top, multiselect.position.left));

	$(document).on('mousemove', multiselect.resize).on('mouseup', function (e) {
		if (e.which === 1) multiselect.getSelection(e);
	});
};

multiselect.selectAll = function () {

	if (lychee.publicMode) return false;
	if (visible.search()) return false;
	if (!visible.albums() && !visible.album) return false;
	if (visible.multiselect()) $('#multiselect').remove();

	sidebar.setSelectable(false);

	multiselect.position.top = 70;
	multiselect.position.right = 40;
	multiselect.position.bottom = 90;
	multiselect.position.left = 20;

	$('body').append(build.multiselect(multiselect.position.top, multiselect.position.left));

	var documentSize = {
		width: $(document).width(),
		height: $(document).height()
	};

	var newSize = {
		width: documentSize.width - multiselect.position.right + 2,
		height: documentSize.height - multiselect.position.bottom
	};

	var e = {
		pageX: documentSize.width - multiselect.position.right / 2,
		pageY: documentSize.height - multiselect.position.bottom
	};

	$('#multiselect').css(newSize);

	multiselect.getSelection(e);
};

multiselect.resize = function (e) {

	if (multiselect.position.top === null || multiselect.position.right === null || multiselect.position.bottom === null || multiselect.position.left === null) return false;

	var newSize = {};
	var documentSize = {};

	// Get the position of the mouse
	var mousePos = {
		x: e.pageX,
		y: e.pageY
	};

	// Default CSS
	var newCSS = {
		top: null,
		bottom: null,
		height: null,
		left: null,
		right: null,
		width: null
	};

	if (mousePos.y >= multiselect.position.top) {

		documentSize.height = $(document).height();

		// Do not leave the screen
		newSize.height = mousePos.y - multiselect.position.top;
		if (multiselect.position.top + newSize.height >= documentSize.height) {
			newSize.height -= multiselect.position.top + newSize.height - documentSize.height + 2;
		}

		newCSS.top = multiselect.position.top;
		newCSS.bottom = 'inherit';
		newCSS.height = newSize.height;
	} else {

		newCSS.top = 'inherit';
		newCSS.bottom = multiselect.position.bottom;
		newCSS.height = multiselect.position.top - e.pageY;
	}

	if (mousePos.x >= multiselect.position.left) {

		documentSize.width = $(document).width();

		// Do not leave the screen
		newSize.width = mousePos.x - multiselect.position.left;
		if (multiselect.position.left + newSize.width >= documentSize.width) {
			newSize.width -= multiselect.position.left + newSize.width - documentSize.width + 2;
		}

		newCSS.right = 'inherit';
		newCSS.left = multiselect.position.left;
		newCSS.width = newSize.width;
	} else {

		newCSS.right = multiselect.position.right;
		newCSS.left = 'inherit';
		newCSS.width = multiselect.position.left - e.pageX;
	}

	// Updated all CSS properties at once
	$('#multiselect').css(newCSS);
};

multiselect.stopResize = function () {

	if (multiselect.position.top !== null) $(document).off('mousemove mouseup');
};

multiselect.getSize = function () {

	if (!visible.multiselect()) return false;

	var $elem = $('#multiselect');
	var offset = $elem.offset();

	return {
		top: offset.top,
		left: offset.left,
		width: parseInt($elem.css('width').replace('px', '')),
		height: parseInt($elem.css('height').replace('px', ''))
	};
};

multiselect.getSelection = function (e) {

	var tolerance = 150;
	var ids = [];
	var size = multiselect.getSize();

	if (visible.contextMenu()) return false;
	if (!visible.multiselect()) return false;

	$('.photo, .album').each(function () {

		var offset = $(this).offset();

		if (offset.top >= size.top - tolerance && offset.left >= size.left - tolerance && offset.top + 206 <= size.top + size.height + tolerance && offset.left + 206 <= size.left + size.width + tolerance) {

			var id = $(this).data('id');

			if (id !== '0' && id !== 0 && id !== 'f' && id !== 's' && id !== 'r' && id != null) {

				ids.push(id);
				$(this).addClass('active');
			}
		}
	});

	if (ids.length !== 0 && visible.album()) contextMenu.photoMulti(ids, e);else if (ids.length !== 0 && visible.albums()) contextMenu.albumMulti(ids, e);else multiselect.close();
};

multiselect.close = function () {

	sidebar.setSelectable(true);

	multiselect.stopResize();

	multiselect.position.top = null;
	multiselect.position.right = null;
	multiselect.position.bottom = null;
	multiselect.position.left = null;

	lychee.animate('#multiselect', 'fadeOut');
	setTimeout(function () {
		return $('#multiselect').remove();
	}, 300);
};
/**
 * @description Controls the access to password-protected albums and photos.
 */

password = {

	value: ''

};

password.get = function (albumID, callback) {

	if (lychee.publicMode === false) callback();else if (album.json && album.json.password === '0') callback();else if (albums.json && albums.getByID(albumID).password === '0') callback();else if (!albums.json && !album.json) {

		// Continue without password

		album.json = { password: true };
		callback('');
	} else {

		// Request password

		password.getDialog(albumID, callback);
	}
};

password.getDialog = function (albumID, callback) {

	var action = function action(data) {

		var passwd = data.password;

		var params = {
			albumID: albumID,
			password: passwd
		};

		api.post('Album::getPublic', params, function (data) {

			if (data === true) {
				basicModal.close();
				password.value = passwd;
				callback();
			} else {
				basicModal.error('password');
			}
		});
	};

	var cancel = function cancel() {

		basicModal.close();
		if (!visible.albums()) lychee.goto();
	};

	var msg = '\n\t          <p>\n\t              This album is protected by a password. Enter the password below to view the photos of this album:\n\t              <input name=\'password\' class=\'text\' type=\'password\' placeholder=\'password\' value=\'\'>\n\t          </p>\n\t          ';

	basicModal.show({
		body: msg,
		buttons: {
			action: {
				title: 'Enter',
				fn: action
			},
			cancel: {
				title: 'Cancel',
				fn: cancel
			}
		}
	});
};
/**
 * @description Takes care of every action a photo can handle and execute.
 */

photo = {

	json: null,
	cache: null

};

photo.getID = function () {

	var id = null;

	if (photo.json) id = photo.json.id;else id = $('.photo:hover, .photo.active').attr('data-id');

	if ($.isNumeric(id) === true) return id;else return false;
};

photo.load = function (photoID, albumID) {

	var checkContent = function checkContent() {
		if (album.json != null) photo.load(photoID, albumID);else setTimeout(checkContent, 100);
	};

	var checkPasswd = function checkPasswd() {
		if (password.value !== '') photo.load(photoID, albumID);else setTimeout(checkPasswd, 200);
	};

	if (album.json == null) {
		checkContent();
		return false;
	}

	var params = {
		photoID: photoID,
		albumID: albumID,
		password: password.value
	};

	api.post('Photo::get', params, function (data) {

		if (data === 'Warning: Photo private!') {
			lychee.content.show();
			lychee.goto();
			return false;
		}

		if (data === 'Warning: Wrong password!') {
			checkPasswd();
			return false;
		}

		photo.json = data;

		if (!visible.photo()) view.photo.show();
		view.photo.init();
		lychee.imageview.show();

		setTimeout(function () {
			lychee.content.show();
			photo.preloadNext(photoID);
		}, 300);
	});
};

// Preload the next photo for better response time
photo.preloadNext = function (photoID) {

	if (album.json && album.json.content && album.json.content[photoID] && album.json.content[photoID].nextPhoto != '') {

		var nextPhoto = album.json.content[photoID].nextPhoto;
		var url = album.json.content[nextPhoto].url;
		var medium = album.json.content[nextPhoto].medium;
		var href = medium != null && medium !== '' ? medium : url;

		$('head [data-prefetch]').remove();
		$('head').append('<link data-prefetch rel="prefetch" href="' + href + '">');
	}
};

photo.parse = function () {

	if (!photo.json.title) photo.json.title = 'Untitled';
};

photo.previous = function (animate) {

	if (photo.getID() !== false && album.json && album.json.content[photo.getID()] && album.json.content[photo.getID()].previousPhoto !== '') {

		var delay = 0;

		if (animate === true) {

			delay = 200;

			$('#imageview #image').css({
				WebkitTransform: 'translateX(100%)',
				MozTransform: 'translateX(100%)',
				transform: 'translateX(100%)',
				opacity: 0
			});
		}

		setTimeout(function () {
			if (photo.getID() === false) return false;
			lychee.goto(album.getID() + '/' + album.json.content[photo.getID()].previousPhoto);
		}, delay);
	}
};

photo.next = function (animate) {

	if (photo.getID() !== false && album.json && album.json.content[photo.getID()] && album.json.content[photo.getID()].nextPhoto !== '') {

		var delay = 0;

		if (animate === true) {

			delay = 200;

			$('#imageview #image').css({
				WebkitTransform: 'translateX(-100%)',
				MozTransform: 'translateX(-100%)',
				transform: 'translateX(-100%)',
				opacity: 0
			});
		}

		setTimeout(function () {
			if (photo.getID() === false) return false;
			lychee.goto(album.getID() + '/' + album.json.content[photo.getID()].nextPhoto);
		}, delay);
	}
};

photo.duplicate = function (photoIDs) {

	if (!photoIDs) return false;
	if (photoIDs instanceof Array === false) photoIDs = [photoIDs];

	albums.refresh();

	var params = {
		photoIDs: photoIDs.join()
	};

	api.post('Photo::duplicate', params, function (data) {

		if (data !== true) lychee.error(null, params, data);else album.load(album.getID());
	});
};

photo.delete = function (photoIDs) {

	var action = {};
	var cancel = {};
	var msg = '';
	var photoTitle = '';

	if (!photoIDs) return false;
	if (photoIDs instanceof Array === false) photoIDs = [photoIDs];

	if (photoIDs.length === 1) {

		// Get title if only one photo is selected
		if (visible.photo()) photoTitle = photo.json.title;else photoTitle = album.json.content[photoIDs].title;

		// Fallback for photos without a title
		if (photoTitle === '') photoTitle = 'Untitled';
	}

	action.fn = function () {

		var nextPhoto = null;
		var previousPhoto = null;

		basicModal.close();

		photoIDs.forEach(function (id, index, array) {

			// Change reference for the next and previous photo
			if (album.json.content[id].nextPhoto !== '' || album.json.content[id].previousPhoto !== '') {

				nextPhoto = album.json.content[id].nextPhoto;
				previousPhoto = album.json.content[id].previousPhoto;

				album.json.content[previousPhoto].nextPhoto = nextPhoto;
				album.json.content[nextPhoto].previousPhoto = previousPhoto;
			}

			delete album.json.content[id];
			view.album.content.delete(id);
		});

		albums.refresh();

		// Go to next photo if there is a next photo and
		// next photo is not the current one. Show album otherwise.
		if (visible.photo() && nextPhoto != null && nextPhoto !== photo.getID()) lychee.goto(album.getID() + '/' + nextPhoto);else if (!visible.albums()) lychee.goto(album.getID());

		var params = {
			photoIDs: photoIDs.join()
		};

		api.post('Photo::delete', params, function (data) {

			if (data !== true) lychee.error(null, params, data);
		});
	};

	if (photoIDs.length === 1) {

		action.title = 'Delete Photo';
		cancel.title = 'Keep Photo';

		msg = lychee.html(_templateObject27, photoTitle);
	} else {

		action.title = 'Delete Photo';
		cancel.title = 'Keep Photo';

		msg = lychee.html(_templateObject28, photoIDs.length);
	}

	basicModal.show({
		body: msg,
		buttons: {
			action: {
				title: action.title,
				fn: action.fn,
				class: 'red'
			},
			cancel: {
				title: cancel.title,
				fn: basicModal.close
			}
		}
	});
};

photo.setTitle = function (photoIDs) {

	var oldTitle = '';
	var msg = '';

	if (!photoIDs) return false;
	if (photoIDs instanceof Array === false) photoIDs = [photoIDs];

	if (photoIDs.length === 1) {

		// Get old title if only one photo is selected
		if (photo.json) oldTitle = photo.json.title;else if (album.json) oldTitle = album.json.content[photoIDs].title;
	}

	var action = function action(data) {

		basicModal.close();

		var newTitle = data.title;

		if (visible.photo()) {
			photo.json.title = newTitle === '' ? 'Untitled' : newTitle;
			view.photo.title();
		}

		photoIDs.forEach(function (id, index, array) {
			album.json.content[id].title = newTitle;
			view.album.content.title(id);
		});

		var params = {
			photoIDs: photoIDs.join(),
			title: newTitle
		};

		api.post('Photo::setTitle', params, function (data) {

			if (data !== true) lychee.error(null, params, data);
		});
	};

	var input = lychee.html(_templateObject29, oldTitle);

	if (photoIDs.length === 1) msg = lychee.html(_templateObject30, input);else msg = lychee.html(_templateObject31, photoIDs.length, input);

	basicModal.show({
		body: msg,
		buttons: {
			action: {
				title: 'Set title',
				fn: action
			},
			cancel: {
				title: 'Cancel',
				fn: basicModal.close
			}
		}
	});
};

photo.setAlbum = function (photoIDs, albumID) {

	var nextPhoto = null;
	var previousPhoto = null;

	if (!photoIDs) return false;
	if (photoIDs instanceof Array === false) photoIDs = [photoIDs];

	photoIDs.forEach(function (id, index, array) {

		// Change reference for the next and previous photo
		if (album.json.content[id].nextPhoto !== '' || album.json.content[id].previousPhoto !== '') {

			nextPhoto = album.json.content[id].nextPhoto;
			previousPhoto = album.json.content[id].previousPhoto;

			album.json.content[previousPhoto].nextPhoto = nextPhoto;
			album.json.content[nextPhoto].previousPhoto = previousPhoto;
		}

		delete album.json.content[id];
		view.album.content.delete(id);
	});

	albums.refresh();

	// Go to next photo if there is a next photo and
	// next photo is not the current one. Show album otherwise.
	if (visible.photo() && nextPhoto != null && nextPhoto !== photo.getID()) lychee.goto(album.getID() + '/' + nextPhoto);else if (!visible.albums()) lychee.goto(album.getID());

	var params = {
		photoIDs: photoIDs.join(),
		albumID: albumID
	};

	api.post('Photo::setAlbum', params, function (data) {

		if (data !== true) lychee.error(null, params, data);
	});
};

photo.setStar = function (photoIDs) {

	if (!photoIDs) return false;

	if (visible.photo()) {
		photo.json.star = photo.json.star === '0' ? '1' : '0';
		view.photo.star();
	}

	photoIDs.forEach(function (id, index, array) {
		album.json.content[id].star = album.json.content[id].star === '0' ? '1' : '0';
		view.album.content.star(id);
	});

	albums.refresh();

	var params = {
		photoIDs: photoIDs.join()
	};

	api.post('Photo::setStar', params, function (data) {

		if (data !== true) lychee.error(null, params, data);
	});
};

photo.setPublic = function (photoID, e) {

	if (photo.json.public === '2') {

		var action = function action() {

			basicModal.close();
			lychee.goto(photo.json.original_album);
		};

		basicModal.show({
			body: '<p>This photo is located in a public album. To make this photo private or public, edit the visibility of the associated album.</p>',
			buttons: {
				action: {
					title: 'Show Album',
					fn: action
				},
				cancel: {
					title: 'Cancel',
					fn: basicModal.close
				}
			}
		});

		return false;
	}

	if (visible.photo()) {

		photo.json.public = photo.json.public === '0' ? '1' : '0';
		view.photo.public();
		if (photo.json.public === '1') contextMenu.sharePhoto(photoID, e);
	}

	album.json.content[photoID].public = album.json.content[photoID].public === '0' ? '1' : '0';
	view.album.content.public(photoID);

	albums.refresh();

	api.post('Photo::setPublic', { photoID: photoID }, function (data) {

		if (data !== true) lychee.error(null, params, data);
	});
};

photo.setDescription = function (photoID) {

	var oldDescription = photo.json.description;

	var action = function action(data) {

		basicModal.close();

		var description = data.description;

		if (visible.photo()) {
			photo.json.description = description;
			view.photo.description();
		}

		var params = {
			photoID: photoID,
			description: description
		};

		api.post('Photo::setDescription', params, function (data) {

			if (data !== true) lychee.error(null, params, data);
		});
	};

	basicModal.show({
		body: lychee.html(_templateObject32, oldDescription),
		buttons: {
			action: {
				title: 'Set Description',
				fn: action
			},
			cancel: {
				title: 'Cancel',
				fn: basicModal.close
			}
		}
	});
};

photo.editTags = function (photoIDs) {

	var oldTags = '';
	var msg = '';

	if (!photoIDs) return false;
	if (photoIDs instanceof Array === false) photoIDs = [photoIDs];

	// Get tags
	if (visible.photo()) oldTags = photo.json.tags;else if (visible.album() && photoIDs.length === 1) oldTags = album.json.content[photoIDs].tags;else if (visible.search() && photoIDs.length === 1) oldTags = album.json.content[photoIDs].tags;else if (visible.album() && photoIDs.length > 1) {
		(function () {
			var same = true;
			photoIDs.forEach(function (id, index, array) {
				if (album.json.content[id].tags === album.json.content[photoIDs[0]].tags && same === true) same = true;else same = false;
			});
			if (same === true) oldTags = album.json.content[photoIDs[0]].tags;
		})();
	}

	// Improve tags
	oldTags = oldTags.replace(/,/g, ', ');

	var action = function action(data) {

		basicModal.close();
		photo.setTags(photoIDs, data.tags);
	};

	var input = lychee.html(_templateObject33, oldTags);

	if (photoIDs.length === 1) msg = lychee.html(_templateObject34, input);else msg = lychee.html(_templateObject35, photoIDs.length, input);

	basicModal.show({
		body: msg,
		buttons: {
			action: {
				title: 'Set Tags',
				fn: action
			},
			cancel: {
				title: 'Cancel',
				fn: basicModal.close
			}
		}
	});
};

photo.setTags = function (photoIDs, tags) {

	if (!photoIDs) return false;
	if (photoIDs instanceof Array === false) photoIDs = [photoIDs];

	// Parse tags
	tags = tags.replace(/(\ ,\ )|(\ ,)|(,\ )|(,{1,}\ {0,})|(,$|^,)/g, ',');
	tags = tags.replace(/,$|^,|(\ ){0,}$/g, '');

	if (visible.photo()) {
		photo.json.tags = tags;
		view.photo.tags();
	}

	photoIDs.forEach(function (id, index, array) {
		album.json.content[id].tags = tags;
	});

	var params = {
		photoIDs: photoIDs.join(),
		tags: tags
	};

	api.post('Photo::setTags', params, function (data) {

		if (data !== true) lychee.error(null, params, data);
	});
};

photo.deleteTag = function (photoID, index) {

	var tags = void 0;

	// Remove
	tags = photo.json.tags.split(',');
	tags.splice(index, 1);

	// Save
	photo.json.tags = tags.toString();
	photo.setTags([photoID], photo.json.tags);
};

photo.share = function (photoID, service) {

	var url = photo.getViewLink(photoID);

	switch (service) {
		case 'twitter':
			window.open('https://twitter.com/share?url=' + encodeURI(url));
			break;
		case 'facebook':
			window.open('http://www.facebook.com/sharer.php?u=' + encodeURI(url) + '&t=' + encodeURI(photo.json.title));
			break;
		case 'mail':
			location.href = 'mailto:?subject=' + encodeURI(photo.json.title) + '&body=' + encodeURI(url);
			break;
		case 'dropbox':
			lychee.loadDropbox(function () {
				var filename = photo.json.title + '.' + photo.getDirectLink().split('.').pop();
				Dropbox.save(photo.getDirectLink(), filename);
			});
			break;
	}
};

photo.getArchive = function (photoID) {

	var link = void 0;
	var url = api.path + '?function=Photo::getArchive&photoID=' + photoID;

	if (location.href.indexOf('index.html') > 0) link = location.href.replace(location.hash, '').replace('index.html', url);else link = location.href.replace(location.hash, '') + url;

	if (lychee.publicMode === true) link += '&password=' + encodeURIComponent(password.value);

	location.href = link;
};

photo.getDirectLink = function () {

	var url = '';

	if (photo.json && photo.json.url && photo.json.url !== '') url = photo.json.url;

	return url;
};

photo.getViewLink = function (photoID) {

	var url = 'view.php?p=' + photoID;

	if (location.href.indexOf('index.html') > 0) return location.href.replace('index.html' + location.hash, url);else return location.href.replace(location.hash, url);
};
/**
 * @description Searches through your photos and albums.
 */

search = {

	hash: null

};

search.find = function (term) {

	clearTimeout($(window).data('timeout'));

	$(window).data('timeout', setTimeout(function () {

		if (header.dom('.header__search').val().length !== 0) {

			api.post('search', { term: term }, function (data) {

				var html = '';
				var albumsData = '';
				var photosData = '';

				// Build albums
				if (data && data.albums) {
					albums.json = { albums: data.albums };
					$.each(albums.json.albums, function () {
						albums.parse(this);
						albumsData += build.album(this);
					});
				}

				// Build photos
				if (data && data.photos) {
					album.json = { content: data.photos };
					$.each(album.json.content, function () {
						photosData += build.photo(this);
					});
				}

				// 1. No albums and photos
				// 2. Only photos
				// 3. Only albums
				// 4. Albums and photos
				if (albumsData === '' && photosData === '') html = 'error';else if (albumsData === '') html = build.divider('Photos') + photosData;else if (photosData === '') html = build.divider('Albums') + albumsData;else html = build.divider('Albums') + albumsData + build.divider('Photos') + photosData;

				// Only refresh view when search results are different
				if (search.hash !== data.hash) {

					$('.no_content').remove();

					lychee.animate('.content', 'contentZoomOut');

					search.hash = data.hash;

					setTimeout(function () {

						if (html === 'error') {
							lychee.content.html('');
							$('body').append(build.no_content('magnifying-glass'));
						} else {
							lychee.content.html(html);
							lychee.animate(lychee.content, 'contentZoomIn');
						}
					}, 300);
				}
			});
		} else search.reset();
	}, 250));
};

search.reset = function () {

	header.dom('.header__search').val('');
	$('.no_content').remove();

	if (search.hash != null) {

		// Trash data
		albums.json = null;
		album.json = null;
		photo.json = null;
		search.hash = null;

		lychee.animate('.divider', 'fadeOut');
		lychee.goto();
	}
};
/**
 * @description Lets you change settings.
 */

settings = {};

settings.createConfig = function () {

	var action = function action(data) {

		var dbName = data.dbName || '';
		var dbUser = data.dbUser || '';
		var dbPassword = data.dbPassword || '';
		var dbHost = data.dbHost || '';
		var dbTablePrefix = data.dbTablePrefix || '';

		if (dbUser.length < 1) {
			basicModal.error('dbUser');
			return false;
		}

		if (dbHost.length < 1) dbHost = 'localhost';
		if (dbName.length < 1) dbName = 'lychee';

		var params = {
			dbName: dbName,
			dbUser: dbUser,
			dbPassword: dbPassword,
			dbHost: dbHost,
			dbTablePrefix: dbTablePrefix
		};

		api.post('Config::create', params, function (data) {

			if (data !== true) {

				// Connection failed
				if (data === 'Warning: Connection failed!') {

					basicModal.show({
						body: '<p>Unable to connect to host database because access was denied. Double-check your host, username and password and ensure that access from your current location is permitted.</p>',
						buttons: {
							action: {
								title: 'Retry',
								fn: settings.createConfig
							}
						}
					});

					return false;
				}

				// Creation failed
				if (data === 'Warning: Creation failed!') {

					basicModal.show({
						body: '<p>Unable to create the database. Double-check your host, username and password and ensure that the specified user has the rights to modify and add content to the database.</p>',
						buttons: {
							action: {
								title: 'Retry',
								fn: settings.createConfig
							}
						}
					});

					return false;
				}

				// Could not create file
				if (data === 'Warning: Could not create file!') {

					basicModal.show({
						body: "<p>Unable to save this configuration. Permission denied in <b>'data/'</b>. Please set the read, write and execute rights for others in <b>'data/'</b> and <b>'uploads/'</b>. Take a look at the readme for more information.</p>",
						buttons: {
							action: {
								title: 'Retry',
								fn: settings.createConfig
							}
						}
					});

					return false;
				}

				// Something went wrong
				basicModal.show({
					body: '<p>Something unexpected happened. Please try again and check your installation and server. Take a look at the readme for more information.</p>',
					buttons: {
						action: {
							title: 'Retry',
							fn: settings.createConfig
						}
					}
				});

				return false;
			} else {

				// Configuration successful
				window.location.reload();
			}
		});
	};

	var msg = '\n\t          <p>\n\t              Enter your database connection details below:\n\t              <input name=\'dbHost\' class=\'text\' type=\'text\' placeholder=\'Database Host (optional)\' value=\'\'>\n\t              <input name=\'dbUser\' class=\'text\' type=\'text\' placeholder=\'Database Username\' value=\'\'>\n\t              <input name=\'dbPassword\' class=\'text\' type=\'password\' placeholder=\'Database Password\' value=\'\'>\n\t          </p>\n\t          <p>\n\t              Lychee will create its own database. If required, you can enter the name of an existing database instead:\n\t              <input name=\'dbName\' class=\'text\' type=\'text\' placeholder=\'Database Name (optional)\' value=\'\'>\n\t              <input name=\'dbTablePrefix\' class=\'text\' type=\'text\' placeholder=\'Table prefix (optional)\' value=\'\'>\n\t          </p>\n\t          ';

	basicModal.show({
		body: msg,
		buttons: {
			action: {
				title: 'Connect',
				fn: action
			}
		}
	});
};

settings.createLogin = function () {

	var action = function action(data) {

		var username = data.username;
		var password = data.password;

		if (username.length < 1) {
			basicModal.error('username');
			return false;
		}

		if (password.length < 1) {
			basicModal.error('password');
			return false;
		}

		basicModal.close();

		var params = {
			username: username,
			password: password
		};

		api.post('Settings::setLogin', params, function (data) {

			if (data !== true) {

				basicModal.show({
					body: '<p>Unable to save login. Please try again with another username and password!</p>',
					buttons: {
						action: {
							title: 'Retry',
							fn: settings.createLogin
						}
					}
				});
			}
		});
	};

	var msg = '\n\t          <p>\n\t              Enter a username and password for your installation:\n\t              <input name=\'username\' class=\'text\' type=\'text\' placeholder=\'New Username\' value=\'\'>\n\t              <input name=\'password\' class=\'text\' type=\'password\' placeholder=\'New Password\' value=\'\'>\n\t          </p>\n\t          ';

	basicModal.show({
		body: msg,
		buttons: {
			action: {
				title: 'Create Login',
				fn: action
			}
		}
	});
};

settings.setLogin = function () {

	var action = function action(data) {

		var oldPassword = data.oldPassword || '';
		var username = data.username || '';
		var password = data.password || '';

		if (oldPassword.length < 1) {
			basicModal.error('oldPassword');
			return false;
		}

		if (username.length < 1) {
			basicModal.error('username');
			return false;
		}

		if (password.length < 1) {
			basicModal.error('password');
			return false;
		}

		basicModal.close();

		var params = {
			oldPassword: oldPassword,
			username: username,
			password: password
		};

		api.post('Settings::setLogin', params, function (data) {

			if (data !== true) lychee.error(null, params, data);
		});
	};

	var msg = '\n\t          <p>\n\t              Enter your current password:\n\t              <input name=\'oldPassword\' class=\'text\' type=\'password\' placeholder=\'Current Password\' value=\'\'>\n\t          </p>\n\t          <p>\n\t              Your username and password will be changed to the following:\n\t              <input name=\'username\' class=\'text\' type=\'text\' placeholder=\'New Username\' value=\'\'>\n\t              <input name=\'password\' class=\'text\' type=\'password\' placeholder=\'New Password\' value=\'\'>\n\t          </p>\n\t          ';

	basicModal.show({
		body: msg,
		buttons: {
			action: {
				title: 'Change Login',
				fn: action
			},
			cancel: {
				title: 'Cancel',
				fn: basicModal.close
			}
		}
	});
};

settings.setSorting = function () {

	var sortingPhotos = [];
	var sortingAlbums = [];

	var action = function action() {

		sortingAlbums[0] = $('.basicModal select#settings_albums_type').val();
		sortingAlbums[1] = $('.basicModal select#settings_albums_order').val();

		sortingPhotos[0] = $('.basicModal select#settings_photos_type').val();
		sortingPhotos[1] = $('.basicModal select#settings_photos_order').val();

		basicModal.close();
		albums.refresh();

		var params = {
			typeAlbums: sortingAlbums[0],
			orderAlbums: sortingAlbums[1],
			typePhotos: sortingPhotos[0],
			orderPhotos: sortingPhotos[1]
		};

		api.post('Settings::setSorting', params, function (data) {

			if (data === true) {
				lychee.sortingAlbums = 'ORDER BY ' + sortingAlbums[0] + ' ' + sortingAlbums[1];
				lychee.sortingPhotos = 'ORDER BY ' + sortingPhotos[0] + ' ' + sortingPhotos[1];
				lychee.load();
			} else lychee.error(null, params, data);
		});
	};

	var msg = '\n\t          <p>\n\t              Sort albums by\n\t              <span class="select">\n\t                  <select id=\'settings_albums_type\'>\n\t                      <option value=\'id\'>Creation Time</option>\n\t                      <option value=\'title\'>Title</option>\n\t                      <option value=\'description\'>Description</option>\n\t                      <option value=\'public\'>Public</option>\n\t                  </select>\n\t              </span>\n\t              in an\n\t              <span class="select">\n\t                  <select id=\'settings_albums_order\'>\n\t                      <option value=\'ASC\'>Ascending</option>\n\t                      <option value=\'DESC\'>Descending</option>\n\t                  </select>\n\t              </span>\n\t              order.\n\t          </p>\n\t          <p>\n\t              Sort photos by\n\t              <span class="select">\n\t                  <select id=\'settings_photos_type\'>\n\t                      <option value=\'id\'>Upload Time</option>\n\t                      <option value=\'takestamp\'>Take Date</option>\n\t                      <option value=\'title\'>Title</option>\n\t                      <option value=\'description\'>Description</option>\n\t                      <option value=\'public\'>Public</option>\n\t                      <option value=\'star\'>Star</option>\n\t                      <option value=\'type\'>Photo Format</option>\n\t                  </select>\n\t              </span>\n\t              in an\n\t              <span class="select">\n\t                  <select id=\'settings_photos_order\'>\n\t                      <option value=\'ASC\'>Ascending</option>\n\t                      <option value=\'DESC\'>Descending</option>\n\t                  </select>\n\t              </span>\n\t              order.\n\t          </p>\n\t          ';

	basicModal.show({
		body: msg,
		buttons: {
			action: {
				title: 'Change Sorting',
				fn: action
			},
			cancel: {
				title: 'Cancel',
				fn: basicModal.close
			}
		}
	});

	if (lychee.sortingAlbums !== '') {

		sortingAlbums = lychee.sortingAlbums.replace('ORDER BY ', '').split(' ');

		$('.basicModal select#settings_albums_type').val(sortingAlbums[0]);
		$('.basicModal select#settings_albums_order').val(sortingAlbums[1]);
	}

	if (lychee.sortingPhotos !== '') {

		sortingPhotos = lychee.sortingPhotos.replace('ORDER BY ', '').split(' ');

		$('.basicModal select#settings_photos_type').val(sortingPhotos[0]);
		$('.basicModal select#settings_photos_order').val(sortingPhotos[1]);
	}
};

settings.setDropboxKey = function (callback) {

	var action = function action(data) {

		var key = data.key;

		if (data.key.length < 1) {
			basicModal.error('key');
			return false;
		}

		basicModal.close();

		api.post('Settings::setDropboxKey', { key: key }, function (data) {

			if (data === true) {
				lychee.dropboxKey = key;
				if (callback) lychee.loadDropbox(callback);
			} else lychee.error(null, params, data);
		});
	};

	var msg = lychee.html(_templateObject36, lychee.dropboxKey);

	basicModal.show({
		body: msg,
		buttons: {
			action: {
				title: 'Set Dropbox Key',
				fn: action
			},
			cancel: {
				title: 'Cancel',
				fn: basicModal.close
			}
		}
	});
};
/**
 * @description This module takes care of the sidebar.
 */

sidebar = {

	_dom: $('.sidebar'),
	types: {
		DEFAULT: 0,
		TAGS: 1
	},
	createStructure: {}

};

sidebar.dom = function (selector) {

	if (selector == null || selector === '') return sidebar._dom;

	return sidebar._dom.find(selector);
};

sidebar.bind = function () {

	// This function should be called after building and appending
	// the sidebars content to the DOM.
	// This function can be called multiple times, therefore
	// event handlers should be removed before binding a new one.

	// Event Name
	var eventName = lychee.getEventName();

	sidebar.dom('#edit_title').off(eventName).on(eventName, function () {
		if (visible.photo()) photo.setTitle([photo.getID()]);else if (visible.album()) album.setTitle([album.getID()]);
	});

	sidebar.dom('#edit_description').off(eventName).on(eventName, function () {
		if (visible.photo()) photo.setDescription(photo.getID());else if (visible.album()) album.setDescription(album.getID());
	});

	sidebar.dom('#edit_tags').off(eventName).on(eventName, function () {
		photo.editTags([photo.getID()]);
	});

	sidebar.dom('#tags .tag span').off(eventName).on(eventName, function () {
		photo.deleteTag(photo.getID(), $(this).data('index'));
	});

	return true;
};

sidebar.toggle = function () {

	if (visible.sidebar() || visible.sidebarbutton()) {

		header.dom('.button--info').toggleClass('active');
		lychee.content.toggleClass('content--sidebar');
		sidebar.dom().toggleClass('active');

		return true;
	}

	return false;
};

sidebar.setSelectable = function () {
	var selectable = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;


	// Attributes/Values inside the sidebar are selectable by default.
	// Selection needs to be deactivated to prevent an unwanted selection
	// while using multiselect.

	if (selectable === true) sidebar.dom().removeClass('notSelectable');else sidebar.dom().addClass('notSelectable');
};

sidebar.changeAttr = function (attr) {
	var value = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '-';
	var dangerouslySetInnerHTML = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;


	if (attr == null || attr === '') return false;

	// Set a default for the value
	if (value == null || value === '') value = '-';

	// Escape value
	if (dangerouslySetInnerHTML === false) value = lychee.escapeHTML(value);

	// Set new value
	sidebar.dom('.attr_' + attr).html(value);

	return true;
};

sidebar.createStructure.photo = function (data) {

	if (data == null || data === '') return false;

	var editable = false;
	var exifHash = data.takestamp + data.make + data.model + data.shutter + data.aperture + data.focal + data.iso;
	var structure = {};
	var _public = '';

	// Enable editable when user logged in
	if (lychee.publicMode === false) editable = true;

	// Set value for public
	switch (data.public) {

		case '0':
			_public = 'No';
			break;
		case '1':
			_public = 'Yes';
			break;
		case '2':
			_public = 'Yes (Album)';
			break;
		default:
			_public = '-';
			break;

	}

	structure.basics = {
		title: 'Basics',
		type: sidebar.types.DEFAULT,
		rows: [{ title: 'Title', value: data.title, editable: editable }, { title: 'Uploaded', value: data.sysdate }, { title: 'Description', value: data.description, editable: editable }]
	};

	structure.image = {
		title: 'Image',
		type: sidebar.types.DEFAULT,
		rows: [{ title: 'Size', value: data.size }, { title: 'Format', value: data.type }, { title: 'Resolution', value: data.width + ' x ' + data.height }]
	};

	// Only create tags section when user logged in
	if (lychee.publicMode === false) {

		structure.tags = {
			title: 'Tags',
			type: sidebar.types.TAGS,
			value: build.tags(data.tags),
			editable: editable
		};
	} else {

		structure.tags = {};
	}

	// Only create EXIF section when EXIF data available
	if (exifHash !== '0') {

		structure.exif = {
			title: 'Camera',
			type: sidebar.types.DEFAULT,
			rows: [{ title: 'Captured', value: data.takedate }, { title: 'Make', value: data.make }, { title: 'Type/Model', value: data.model }, { title: 'Shutter Speed', value: data.shutter }, { title: 'Aperture', value: data.aperture }, { title: 'Focal Length', value: data.focal }, { title: 'ISO', value: data.iso }]
		};
	} else {

		structure.exif = {};
	}

	structure.sharing = {
		title: 'Sharing',
		type: sidebar.types.DEFAULT,
		rows: [{ title: 'Public', value: _public }]
	};

	// Construct all parts of the structure
	structure = [structure.basics, structure.image, structure.tags, structure.exif, structure.sharing];

	return structure;
};

sidebar.createStructure.album = function (data) {

	if (data == null || data === '') return false;

	var editable = false;
	var structure = {};
	var _public = '';
	var hidden = '';
	var downloadable = '';
	var password = '';

	// Enable editable when user logged in
	if (lychee.publicMode === false) editable = true;

	// Set value for public
	switch (data.public) {

		case '0':
			_public = 'No';
			break;
		case '1':
			_public = 'Yes';
			break;
		default:
			_public = '-';
			break;

	}

	// Set value for hidden
	switch (data.visible) {

		case '0':
			hidden = 'Yes';
			break;
		case '1':
			hidden = 'No';
			break;
		default:
			hidden = '-';
			break;

	}

	// Set value for downloadable
	switch (data.downloadable) {

		case '0':
			downloadable = 'No';
			break;
		case '1':
			downloadable = 'Yes';
			break;
		default:
			downloadable = '-';
			break;

	}

	// Set value for password
	switch (data.password) {

		case '0':
			password = 'No';
			break;
		case '1':
			password = 'Yes';
			break;
		default:
			password = '-';
			break;

	}

	structure.basics = {
		title: 'Básico',
		type: sidebar.types.DEFAULT,
		rows: [{ title: 'Título', value: data.title, editable: editable }, { title: 'Descripción', value: data.description, editable: editable }]
	};

	structure.album = {
		title: 'Álbum',
		type: sidebar.types.DEFAULT,
		rows: [{ title: 'Creado en', value: data.sysdate }, { title: 'Fótografias', value: data.num }]
	};

	structure.share = {
		title: 'Compartir',
		type: sidebar.types.DEFAULT,
		rows: [{ title: 'Publicó', value: _public }, { title: 'Oculto', value: hidden }, { title: 'Descargable', value: downloadable }, { title: 'Contraseña', value: password }]
	};

	// Construct all parts of the structure
	structure = [structure.basics, structure.album, structure.share];

	return structure;
};

sidebar.render = function (structure) {

	if (structure == null || structure === '' || structure === false) return false;

	var html = '';

	var renderDefault = function renderDefault(section) {

		var _html = '';

		_html += '\n\t\t         <div class=\'sidebar__divider\'>\n\t\t             <h1>' + section.title + '</h1>\n\t\t         </div>\n\t\t         <table>\n\t\t         ';

		section.rows.forEach(function (row) {

			var value = row.value;

			// Set a default for the value
			if (value === '' || value == null) value = '-';

			// Wrap span-element around value for easier selecting on change
			value = lychee.html(_templateObject37, row.title.toLowerCase(), value);

			// Add edit-icon to the value when editable
			if (row.editable === true) value += ' ' + build.editIcon('edit_' + row.title.toLowerCase());

			_html += lychee.html(_templateObject38, row.title, value);
		});

		_html += '\n\t\t         </table>\n\t\t         ';

		return _html;
	};

	var renderTags = function renderTags(section) {

		var _html = '';
		var editable = '';

		// Add edit-icon to the value when editable
		if (section.editable === true) editable = build.editIcon('edit_tags');

		_html += lychee.html(_templateObject39, section.title, section.title.toLowerCase(), section.value, editable);

		return _html;
	};

	structure.forEach(function (section) {

		if (section.type === sidebar.types.DEFAULT) html += renderDefault(section);else if (section.type === sidebar.types.TAGS) html += renderTags(section);
	});

	return html;
};
/**
 * @description Swipes and moves an object.
 */

swipe = {

	obj: null,
	tolerance: 150,
	offset: 0

};

swipe.start = function (obj, tolerance) {

	if (obj) swipe.obj = obj;
	if (tolerance) swipe.tolerance = tolerance;

	return true;
};

swipe.move = function (e) {

	if (swipe.obj === null) return false;

	swipe.offset = -1 * e.x;

	swipe.obj.css({
		WebkitTransform: 'translateX(' + swipe.offset + 'px)',
		MozTransform: 'translateX(' + swipe.offset + 'px)',
		transform: 'translateX(' + swipe.offset + 'px)'
	});
};

swipe.stop = function (e, left, right) {

	// Only execute once
	if (swipe.obj == null) return false;

	if (e.x <= -swipe.tolerance) {

		left(true);
	} else if (e.x >= swipe.tolerance) {

		right(true);
	} else {

		swipe.obj.css({
			WebkitTransform: 'translateX(0px)',
			MozTransform: 'translateX(0px)',
			transform: 'translateX(0px)'
		});
	}

	swipe.obj = null;
	swipe.offset = 0;
};
/**
 * @description Takes care of every action an album can handle and execute.
 */

upload = {};

upload.show = function (title, files, callback) {

	basicModal.show({
		body: build.uploadModal(title, files),
		buttons: {
			action: {
				title: 'Close',
				class: 'hidden',
				fn: basicModal.close
			}
		},
		callback: callback
	});
};

upload.notify = function (title, text) {

	if (text == null || text === '') text = 'You can now manage your new photo(s).';

	if (!window.webkitNotifications) return false;

	if (window.webkitNotifications.checkPermission() !== 0) window.webkitNotifications.requestPermission();

	if (window.webkitNotifications.checkPermission() === 0 && title) {
		var popup = window.webkitNotifications.createNotification('', title, text);
		popup.show();
	}
};

upload.start = {

	local: function local(files) {

		var albumID = album.getID();
		var error = false;
		var warning = false;

		var process = function process(files, file) {

			var formData = new FormData();
			var xhr = new XMLHttpRequest();
			var pre_progress = 0;
			var progress = 0;
			var next_file_started = false;

			var finish = function finish() {

				window.onbeforeunload = null;

				$('#upload_files').val('');

				if (error === false && warning === false) {

					// Success
					basicModal.close();
					upload.notify('Upload complete');
				} else if (error === false && warning === true) {

					// Warning
					$('.basicModal #basicModal__action.hidden').show();
					upload.notify('Upload complete');
				} else {

					// Error
					$('.basicModal #basicModal__action.hidden').show();
					upload.notify('Upload complete', 'Failed to upload one or more photos.');
				}

				albums.refresh();

				if (album.getID() === false) lychee.goto('0');else album.load(albumID);
			};

			formData.append('function', 'Photo::add');
			formData.append('albumID', albumID);
			formData.append(0, file);

			xhr.open('POST', api.path);

			xhr.onload = function () {

				var data = null;
				var wait = false;
				var errorText = '';

				var isNumber = function isNumber(n) {
					return !isNaN(parseFloat(n)) && isFinite(n);
				};

				try {
					data = JSON.parse(xhr.responseText);
				} catch (e) {
					data = '';
				}

				file.ready = true;

				// Set status
				if (xhr.status === 200 && isNumber(data)) {

					// Success
					$('.basicModal .rows .row:nth-child(' + (file.num + 1) + ') .status').html('Finished').addClass('success');
				} else {

					if (data.substr(0, 6) === 'Error:') {

						errorText = data.substr(6) + ' Please take a look at the console of your browser for further details.';
						error = true;

						// Error Status
						$('.basicModal .rows .row:nth-child(' + (file.num + 1) + ') .status').html('Failed').addClass('error');

						// Throw error
						if (error === true) lychee.error('Upload failed. Server returned an error!', xhr, data);
					} else if (data.substr(0, 8) === 'Warning:') {

						errorText = data.substr(8);
						warning = true;

						// Warning Status
						$('.basicModal .rows .row:nth-child(' + (file.num + 1) + ') .status').html('Skipped').addClass('warning');

						// Throw error
						if (error === true) lychee.error('Upload failed. Server returned a warning!', xhr, data);
					} else {

						errorText = 'Server returned an unknown response. Please take a look at the console of your browser for further details.';
						error = true;

						// Error Status
						$('.basicModal .rows .row:nth-child(' + (file.num + 1) + ') .status').html('Failed').addClass('error');

						// Throw error
						if (error === true) lychee.error('Upload failed. Server returned an unkown error!', xhr, data);
					}

					$('.basicModal .rows .row:nth-child(' + (file.num + 1) + ') p.notice').html(errorText).show();
				}

				// Check if there are file which are not finished
				for (var i = 0; i < files.length; i++) {

					if (files[i].ready === false) {
						wait = true;
						break;
					}
				}

				// Finish upload when all files are finished
				if (wait === false) finish();
			};

			xhr.upload.onprogress = function (e) {

				if (e.lengthComputable !== true) return false;

				// Calculate progress
				progress = e.loaded / e.total * 100 | 0;

				// Set progress when progress has changed
				if (progress > pre_progress) {
					$('.basicModal .rows .row:nth-child(' + (file.num + 1) + ') .status').html(progress + '%');
					pre_progress = progress;
				}

				if (progress >= 100 && next_file_started === false) {

					// Scroll to the uploading file
					var scrollPos = 0;
					if (file.num + 1 > 4) scrollPos = (file.num + 1 - 4) * 40;
					$('.basicModal .rows').scrollTop(scrollPos);

					// Set status to processing
					$('.basicModal .rows .row:nth-child(' + (file.num + 1) + ') .status').html('Processing');

					// Upload next file
					if (file.next != null) {
						process(files, file.next);
						next_file_started = true;
					}
				}
			};

			xhr.send(formData);
		};

		if (files.length <= 0) return false;
		if (albumID === false || visible.albums() === true) albumID = 0;

		for (var i = 0; i < files.length; i++) {

			files[i].num = i;
			files[i].ready = false;

			if (i < files.length - 1) files[i].next = files[i + 1];else files[i].next = null;
		}

		window.onbeforeunload = function () {
			return 'Lychee is currently uploading!';
		};

		upload.show('Uploading', files, function () {

			// Upload first file
			process(files, files[0]);
		});
	},

	url: function url() {
		var _url = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';

		var albumID = album.getID();

		_url = typeof _url === 'string' ? _url : '';

		if (albumID === false) albumID = 0;

		var action = function action(data) {

			var files = [];

			if (data.link && data.link.length > 3) {

				basicModal.close();

				files[0] = {
					name: data.link
				};

				upload.show('Importing URL', files, function () {

					$('.basicModal .rows .row .status').html('Importing');

					var params = {
						url: data.link,
						albumID: albumID
					};

					api.post('Import::url', params, function (data) {

						// Same code as in import.dropbox()

						if (data !== true) {

							$('.basicModal .rows .row p.notice').html('The import has been finished, but returned warnings or errors. Please take a look at the log (Settings -> Show Log) for further details.').show();

							$('.basicModal .rows .row .status').html('Finished').addClass('warning');

							// Show close button
							$('.basicModal #basicModal__action.hidden').show();

							// Log error
							lychee.error(null, params, data);
						} else {

							basicModal.close();
						}

						upload.notify('Import complete');

						albums.refresh();

						if (album.getID() === false) lychee.goto('0');else album.load(albumID);
					});
				});
			} else basicModal.error('link');
		};

		basicModal.show({
			body: lychee.html(_templateObject40, _url),
			buttons: {
				action: {
					title: 'Import',
					fn: action
				},
				cancel: {
					title: 'Cancel',
					fn: basicModal.close
				}
			}
		});
	},

	server: function server() {

		var albumID = album.getID();
		if (albumID === false) albumID = 0;

		var action = function action(data) {

			var files = [];

			files[0] = {
				name: data.path
			};

			upload.show('Importing from server', files, function () {

				$('.basicModal .rows .row .status').html('Importing');

				var params = {
					albumID: albumID,
					path: data.path
				};

				api.post('Import::server', params, function (data) {

					albums.refresh();
					upload.notify('Import complete');

					if (data === 'Notice: Import only contained albums!') {

						// No error, but the folder only contained albums

						// Go back to the album overview to show the imported albums
						if (visible.albums()) lychee.load();else lychee.goto();

						basicModal.close();

						return true;
					} else if (data === 'Warning: Folder empty or no readable files to process!') {

						// Error because the import could not start

						$('.basicModal .rows .row p.notice').html('Folder empty or no readable files to process. Please take a look at the log (Settings -> Show Log) for further details.').show();

						$('.basicModal .rows .row .status').html('Failed').addClass('error');

						// Log error
						lychee.error('Could not start import because the folder was empty!', params, data);
					} else if (data !== true) {

						// Maybe an error, maybe just some skipped photos

						$('.basicModal .rows .row p.notice').html('The import has been finished, but returned warnings or errors. Please take a look at the log (Settings -> Show Log) for further details.').show();

						$('.basicModal .rows .row .status').html('Finished').addClass('warning');

						// Log error
						lychee.error(null, params, data);
					} else {

						// No error, everything worked fine

						basicModal.close();
					}

					if (album.getID() === false) lychee.goto('0');else album.load(albumID);

					// Show close button
					$('.basicModal #basicModal__action.hidden').show();
				});
			});
		};

		basicModal.show({
			body: lychee.html(_templateObject41, lychee.location),
			buttons: {
				action: {
					title: 'Import',
					fn: action
				},
				cancel: {
					title: 'Cancel',
					fn: basicModal.close
				}
			}
		});
	},

	dropbox: function dropbox() {

		var albumID = album.getID();
		if (albumID === false) albumID = 0;

		var success = function success(files) {

			var links = '';

			for (var i = 0; i < files.length; i++) {

				links += files[i].link + ',';

				files[i] = {
					name: files[i].link
				};
			}

			// Remove last comma
			links = links.substr(0, links.length - 1);

			upload.show('Importing from Dropbox', files, function () {

				$('.basicModal .rows .row .status').html('Importing');

				var params = {
					url: links,
					albumID: albumID
				};

				api.post('Import::url', params, function (data) {

					// Same code as in import.url()

					if (data !== true) {

						$('.basicModal .rows .row p.notice').html('The import has been finished, but returned warnings or errors. Please take a look at the log (Settings -> Show Log) for further details.').show();

						$('.basicModal .rows .row .status').html('Finished').addClass('warning');

						// Show close button
						$('.basicModal #basicModal__action.hidden').show();

						// Log error
						lychee.error(null, params, data);
					} else {

						basicModal.close();
					}

					upload.notify('Import complete');

					albums.refresh();

					if (album.getID() === false) lychee.goto('0');else album.load(albumID);
				});
			});
		};

		lychee.loadDropbox(function () {
			Dropbox.choose({
				linkType: 'direct',
				multiselect: true,
				success: success
			});
		});
	}

};
/**
 * @description Responsible to reflect data changes to the UI.
 */

view = {};

view.albums = {

	init: function init() {

		view.albums.title();
		view.albums.content.init();
	},

	title: function title() {

		lychee.setTitle('Galería', false);
	},

	content: {

		scrollPosition: 0,

		init: function init() {

			var smartData = '';
			var albumsData = '';

			// Smart Albums
			if (lychee.publicMode === false) {
				albums.parse(albums.json.smartalbums.unsorted);
				albums.parse(albums.json.smartalbums.public);

				// Original
				// smartData = build.divider('Smart Albums') + build.album(albums.json.smartalbums.unsorted) + build.album(albums.json.smartalbums.public) + build.album(albums.json.smartalbums.starred) + build.album(albums.json.smartalbums.recent)

				// Custom by Homebook
				smartData = build.divider('Nuestros Proyectos') + build.album(albums.json.smartalbums.public);
			}

			// Albums
			if (albums.json.albums && albums.json.num !== 0) {

				// Custom by Homebook
				albums.parse(albums.json.smartalbums.starred);
				albums.parse(albums.json.smartalbums.recent);

				$.each(albums.json.albums, function () {
					albums.parse(this);
					albumsData += build.album(this);
				});

				// Add divider
				if (lychee.publicMode === false) albumsData = build.divider('Mis Álbumes') + build.album(albums.json.smartalbums.starred) + build.album(albums.json.smartalbums.recent) + albumsData;
			}

			if (smartData === '' && albumsData === '') {
				lychee.content.html('');
				$('body').append(build.no_content('eye'));
			} else {
				lychee.content.html(smartData + albumsData);
			}

			// Restore scroll position
			if (view.albums.content.scrollPosition != null && view.albums.content.scrollPosition !== 0) {
				$(document).scrollTop(view.albums.content.scrollPosition);
			}
		},

		title: function title(albumID) {

			var title = albums.getByID(albumID).title;

			title = lychee.escapeHTML(title);

			$('.album[data-id="' + albumID + '"] .overlay h1').html(title).attr('title', title);
		},

		delete: function _delete(albumID) {

			$('.album[data-id="' + albumID + '"]').css('opacity', 0).animate({
				width: 0,
				marginLeft: 0
			}, 300, function () {
				$(this).remove();
				if (albums.json.num <= 0) lychee.content.find('.divider:last-child').remove();
			});
		}

	}

};

view.album = {

	init: function init() {

		album.parse();

		view.album.sidebar();
		view.album.title();
		view.album.public();
		view.album.content.init();

		album.json.init = 1;
	},

	title: function title() {

		if ((visible.album() || !album.json.init) && !visible.photo()) {

			switch (album.getID()) {
				case 'f':
					lychee.setTitle('Favoritas', false);
					break;
				case 's':
					lychee.setTitle('Publicas', false);
					break;
				case 'r':
					lychee.setTitle('Recientes', false);
					break;
				case '0':
					lychee.setTitle('Unsorted', false);
					break;
				default:
					if (album.json.init) sidebar.changeAttr('title', album.json.title);
					lychee.setTitle(album.json.title, true);
					break;
			}
		}
	},

	content: {

		init: function init() {

			var photosData = '';

			if (album.json.content && album.json.content !== false) {

				// Build photos
				$.each(album.json.content, function () {
					photosData += build.photo(this);
				});
			}

			// Save and reset scroll position
			view.albums.content.scrollPosition = $(document).scrollTop();
			requestAnimationFrame(function () {
				return $(document).scrollTop(0);
			});

			// Add photos to view
			lychee.content.html(photosData);
		},

		title: function title(photoID) {

			var title = album.json.content[photoID].title;

			title = lychee.escapeHTML(title);

			$('.photo[data-id="' + photoID + '"] .overlay h1').html(title).attr('title', title);
		},

		star: function star(photoID) {

			var $badge = $('.photo[data-id="' + photoID + '"] .icn-star');

			if (album.json.content[photoID].star === '1') $badge.addClass('badge--visible');else $badge.removeClass('badge--visible');
		},

		public: function _public(photoID) {

			var $badge = $('.photo[data-id="' + photoID + '"] .icn-share');

			if (album.json.content[photoID].public === '1') $badge.addClass('badge--visible');else $badge.removeClass('badge--visible');
		},

		delete: function _delete(photoID) {

			$('.photo[data-id="' + photoID + '"]').css('opacity', 0).animate({
				width: 0,
				marginLeft: 0
			}, 300, function () {
				$(this).remove();
				// Only when search is not active
				if (!visible.albums()) {
					album.json.num--;
					view.album.num();
				}
			});
		}

	},

	description: function description() {

		sidebar.changeAttr('description', album.json.description);
	},

	num: function num() {

		sidebar.changeAttr('images', album.json.num);
	},

	public: function _public() {

		if (album.json.public === '1') {

			$('#button_share_album').addClass('active').attr('title', 'Share Album');

			$('.photo .iconic-share').remove();

			if (album.json.init) sidebar.changeAttr('public', 'Yes');
		} else {

			$('#button_share_album').removeClass('active').attr('title', 'Make Public');

			if (album.json.init) sidebar.changeAttr('public', 'No');
		}
	},

	hidden: function hidden() {

		if (album.json.visible === '1') sidebar.changeAttr('hidden', 'No');else sidebar.changeAttr('hidden', 'Yes');
	},

	downloadable: function downloadable() {

		if (album.json.downloadable === '1') sidebar.changeAttr('downloadable', 'Yes');else sidebar.changeAttr('downloadable', 'No');
	},

	password: function password() {

		if (album.json.password === '1') sidebar.changeAttr('password', 'Yes');else sidebar.changeAttr('password', 'No');
	},

	sidebar: function (_sidebar) {
		function sidebar() {
			return _sidebar.apply(this, arguments);
		}

		sidebar.toString = function () {
			return _sidebar.toString();
		};

		return sidebar;
	}(function () {

		if ((visible.album() || !album.json.init) && !visible.photo()) {

			var structure = sidebar.createStructure.album(album.json);
			var html = sidebar.render(structure);

			sidebar.dom('.sidebar__wrapper').html(html);
			sidebar.bind();
		}
	})

};

view.photo = {

	init: function init() {

		photo.parse();

		view.photo.sidebar();
		view.photo.title();
		view.photo.star();
		view.photo.public();
		view.photo.photo();

		photo.json.init = 1;
	},

	show: function show() {

		// Change header
		lychee.content.addClass('view');
		header.setMode('photo');

		// Make body not scrollable
		$('body').css('overflow', 'hidden');

		// Fullscreen
		var timeout = null;
		$(document).bind('mousemove', function () {
			clearTimeout(timeout);
			header.show();
			timeout = setTimeout(header.hide, 2500);
		});

		lychee.animate(lychee.imageview, 'fadeIn');
	},

	hide: function hide() {

		header.show();

		lychee.content.removeClass('view');
		header.setMode('album');

		// Make body scrollable
		$('body').css('overflow', 'auto');

		// Disable Fullscreen
		$(document).unbind('mousemove');

		// Hide Photo
		lychee.animate(lychee.imageview, 'fadeOut');
		setTimeout(function () {
			lychee.imageview.hide();
			view.album.sidebar();
		}, 300);
	},

	title: function title() {

		if (photo.json.init) sidebar.changeAttr('title', photo.json.title);
		lychee.setTitle(photo.json.title, true);
	},

	description: function description() {

		if (photo.json.init) sidebar.changeAttr('description', photo.json.description);
	},

	star: function star() {

		if (photo.json.star === '1') {

			// Starred
			$('#button_star').addClass('active').attr('title', 'Unstar Photo');
		} else {

			// Unstarred
			$('#button_star').removeClass('active');
			$('#button_star').attr('title', 'Star Photo');
		}
	},

	public: function _public() {

		if (photo.json.public === '1' || photo.json.public === '2') {

			// Photo public
			$('#button_share').addClass('active').attr('title', 'Share Photo');

			if (photo.json.init) sidebar.changeAttr('public', 'Yes');
		} else {

			// Photo private
			$('#button_share').removeClass('active').attr('title', 'Make Public');

			if (photo.json.init) sidebar.changeAttr('public', 'No');
		}
	},

	tags: function tags() {

		sidebar.changeAttr('tags', build.tags(photo.json.tags), true);
		sidebar.bind();
	},

	photo: function (_photo) {
		function photo() {
			return _photo.apply(this, arguments);
		}

		photo.toString = function () {
			return _photo.toString();
		};

		return photo;
	}(function () {

		lychee.imageview.html(build.imageview(photo.json, visible.header()));

		var $nextArrow = lychee.imageview.find('a#next');
		var $previousArrow = lychee.imageview.find('a#previous');
		var photoID = photo.getID();
		var hasNext = album.json && album.json.content && album.json.content[photoID] && album.json.content[photoID].nextPhoto != null && album.json.content[photoID].nextPhoto !== '';
		var hasPrevious = album.json && album.json.content && album.json.content[photoID] && album.json.content[photoID].previousPhoto != null && album.json.content[photoID].previousPhoto !== '';

		if (hasNext === false || lychee.viewMode === true) {

			$nextArrow.hide();
		} else {

			var nextPhotoID = album.json.content[photoID].nextPhoto;
			var nextPhoto = album.json.content[nextPhotoID];

			$nextArrow.css('background-image', lychee.html(_templateObject42, nextPhoto.thumbUrl));
		}

		if (hasPrevious === false || lychee.viewMode === true) {

			$previousArrow.hide();
		} else {

			var previousPhotoID = album.json.content[photoID].previousPhoto;
			var previousPhoto = album.json.content[previousPhotoID];

			$previousArrow.css('background-image', lychee.html(_templateObject42, previousPhoto.thumbUrl));
		}
	}),

	sidebar: function (_sidebar2) {
		function sidebar() {
			return _sidebar2.apply(this, arguments);
		}

		sidebar.toString = function () {
			return _sidebar2.toString();
		};

		return sidebar;
	}(function () {

		var structure = sidebar.createStructure.photo(photo.json);
		var html = sidebar.render(structure);

		sidebar.dom('.sidebar__wrapper').html(html);
		sidebar.bind();
	})

};
/**
 * @description This module is used to check if elements are visible or not.
 */

visible = {};

visible.albums = function () {
	if (header.dom('.header__toolbar--public').hasClass('header__toolbar--visible')) return true;
	if (header.dom('.header__toolbar--albums').hasClass('header__toolbar--visible')) return true;
	return false;
};

visible.album = function () {
	if (header.dom('.header__toolbar--album').hasClass('header__toolbar--visible')) return true;
	return false;
};

visible.photo = function () {
	if ($('#imageview.fadeIn').length > 0) return true;
	return false;
};

visible.search = function () {
	if (search.hash != null) return true;
	return false;
};

visible.sidebar = function () {
	if (sidebar.dom().hasClass('active') === true) return true;
	return false;
};

visible.sidebarbutton = function () {
	if (visible.photo()) return true;
	if (visible.album() && $('#button_info_album:visible').length > 0) return true;
	return false;
};

visible.header = function () {
	if (header.dom().hasClass('header--hidden') === true) return false;
	return true;
};

visible.contextMenu = function () {
	return basicContext.visible();
};

visible.multiselect = function () {
	if ($('#multiselect').length > 0) return true;
	return false;
};
function gup(b) {

	b = b.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");

	var a = "[\\?&]" + b + "=([^&#]*)";
	var d = new RegExp(a);
	var c = d.exec(window.location.href);

	if (c === null) return '';else return c[1];
}
(function ($) {
	var Swipe = function Swipe(el) {
		var self = this;

		this.el = $(el);
		this.pos = { start: { x: 0, y: 0 }, end: { x: 0, y: 0 } };
		this.startTime;

		el.on('touchstart', function (e) {
			self.touchStart(e);
		});
		el.on('touchmove', function (e) {
			self.touchMove(e);
		});
		el.on('touchend', function (e) {
			self.swipeEnd();
		});
		el.on('mousedown', function (e) {
			self.mouseDown(e);
		});
	};

	Swipe.prototype = {
		touchStart: function touchStart(e) {
			var touch = e.originalEvent.touches[0];

			this.swipeStart(e, touch.pageX, touch.pageY);
		},

		touchMove: function touchMove(e) {
			var touch = e.originalEvent.touches[0];

			this.swipeMove(e, touch.pageX, touch.pageY);
		},

		mouseDown: function mouseDown(e) {
			var self = this;

			this.swipeStart(e, e.pageX, e.pageY);

			this.el.on('mousemove', function (e) {
				self.mouseMove(e);
			});
			this.el.on('mouseup', function () {
				self.mouseUp();
			});
		},

		mouseMove: function mouseMove(e) {
			this.swipeMove(e, e.pageX, e.pageY);
		},

		mouseUp: function mouseUp(e) {
			this.swipeEnd(e);

			this.el.off('mousemove');
			this.el.off('mouseup');
		},

		swipeStart: function swipeStart(e, x, y) {
			this.pos.start.x = x;
			this.pos.start.y = y;
			this.pos.end.x = x;
			this.pos.end.y = y;

			this.startTime = new Date().getTime();

			this.trigger('swipeStart', e);
		},

		swipeMove: function swipeMove(e, x, y) {
			this.pos.end.x = x;
			this.pos.end.y = y;

			this.trigger('swipeMove', e);
		},

		swipeEnd: function swipeEnd(e) {
			this.trigger('swipeEnd', e);
		},

		trigger: function trigger(e, originalEvent) {
			var self = this;

			var event = $.Event(e),
			    x = self.pos.start.x - self.pos.end.x,
			    y = self.pos.end.y - self.pos.start.y,
			    radians = Math.atan2(y, x),
			    direction = 'up',
			    distance = Math.round(Math.sqrt(Math.pow(x, 2) + Math.pow(y, 2))),
			    angle = Math.round(radians * 180 / Math.PI),
			    speed = Math.round(distance / (new Date().getTime() - self.startTime) * 1000);

			if (angle < 0) {
				angle = 360 - Math.abs(angle);
			}

			if (angle <= 45 && angle >= 0 || angle <= 360 && angle >= 315) {
				direction = 'left';
			} else if (angle >= 135 && angle <= 225) {
				direction = 'right';
			} else if (angle > 45 && angle < 135) {
				direction = 'down';
			}

			event.originalEvent = originalEvent;

			event.swipe = { x: x, y: y, direction: direction, distance: distance, angle: angle, speed: speed };

			$(self.el).trigger(event);
		}
	};

	$.fn.swipe = function () {
		var swipe = new Swipe(this);

		return this;
	};
})(jQuery);