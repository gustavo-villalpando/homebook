/**
 * @description Takes care of every action an album can handle and execute.
 */

album = {

	json: null

}

album.getID = function() {

	let id = null

	let isID = (id) => {
		if (id==='0' || id==='f' || id==='s' || id==='r') return true
		return $.isNumeric(id)
	}

	if (photo.json)      id = photo.json.album
	else if (album.json) id = album.json.id

	// Search
	if (isID(id)===false) id = $('.album:hover, .album.active').attr('data-id')
	if (isID(id)===false) id = $('.photo:hover, .photo.active').attr('data-album-id')

	if (isID(id)===true) return id
	else                 return false

}

album.load = function(albumID, refresh = false) {

	password.get(albumID, function() {

		if (refresh===false) lychee.animate('.content', 'contentZoomOut')

		let startTime = new Date().getTime()

		let params = {
			albumID,
			password: password.value
		}

		api.post('Album::get', params, function(data) {

			let waitTime = 0

			if (data==='Warning: Album private!') {

				if (document.location.hash.replace('#', '').split('/')[1]!=undefined) {
					// Display photo only
					lychee.setMode('view')
				} else {
					// Album not public
					lychee.content.show()
					lychee.goto()
				}
				return false
			}

			if (data==='Warning: Wrong password!') {
				album.load(albumID, refresh)
				return false
			}

			album.json = data

			// Calculate delay
			let durationTime = (new Date().getTime() - startTime)
			if (durationTime>300) waitTime = 0
			else                  waitTime = 300 - durationTime

			// Skip delay when refresh is true
			// Skip delay when opening a blank Lychee
			if (refresh===true)                                            waitTime = 0
			if (!visible.albums() && !visible.photo() && !visible.album()) waitTime = 0

			setTimeout(() => {

				view.album.init()

				if (refresh===false) {
					lychee.animate(lychee.content, 'contentZoomIn')
					header.setMode('album')
				}

			}, waitTime)

		})

	})

}

album.parse = function() {

	if (!album.json.title) album.json.title = 'Untitled'

}

album.add = function() {

	const action = function(data) {

		let title = data.title

		const isNumber = (n) => (!isNaN(parseFloat(n)) && isFinite(n))

		basicModal.close()

		let params = {
			title
		}

		api.post('Album::add', params, function(data) {

			if (data!==false && isNumber(data)) {
				albums.refresh()
				lychee.goto(data)
			} else {
				lychee.error(null, params, data)
			}

		})

	}

	basicModal.show({
		body: `<p>Ingresa el título para el nuevo album: <input class='text' name='title' type='text' maxlength='50' placeholder='Título' value='Título'></p>`,
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
	})

}

album.addSetPhoto = function(photoIDs) {

	const action = function(data) {

		let title = data.title

		const isNumber = (n) => (!isNaN(parseFloat(n)) && isFinite(n))

		basicModal.close()

		// @Homebook Inicia Efecto de eliminar fotografias cuando se mueven de album
		let nextPhoto = null
		let previousPhoto = null

		if (!photoIDs) return false
		if (photoIDs instanceof Array===false) photoIDs = [ photoIDs ]

		photoIDs.forEach(function(id, index, array) {

			// Change reference for the next and previous photo
			if (album.json.content[id].nextPhoto!==''||album.json.content[id].previousPhoto!=='') {

				nextPhoto     = album.json.content[id].nextPhoto
				previousPhoto = album.json.content[id].previousPhoto

				album.json.content[previousPhoto].nextPhoto = nextPhoto
				album.json.content[nextPhoto].previousPhoto = previousPhoto

			}

			delete album.json.content[id]
			view.album.content.delete(id)

		})

		albums.refresh()

		// Go to next photo if there is a next photo and
		// next photo is not the current one. Show album otherwise.
		if (visible.photo() && nextPhoto!=null && nextPhoto!==photo.getID()) lychee.goto(album.getID() + '/' + nextPhoto)
		else if (!visible.albums())                                          lychee.goto(album.getID())	
		// @Homebook Termina Efecto de eliminar fotografias cuando se mueven de album

		let params = {
			title,
			photoIDs: photoIDs.join()
		}

		api.post('Album::addSetPhoto', params, function(data) {

			if (data!==true && isNumber(data)!==true)	lychee.error(null, params, data)

		})

	}

	basicModal.show({
		body: `<p>Ingresa el título para el nuevo album: <input class='text' name='title' type='text' maxlength='50' placeholder='Título' value='Título'></p>`,
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
	})

}

album.delete = function(albumIDs) {

	let action = {}
	let cancel = {}
	let msg    = ''

	if (!albumIDs) return false
	if (albumIDs instanceof Array===false) albumIDs = [ albumIDs ]

	action.fn = function() {

		basicModal.close()

		let params = {
			albumIDs: albumIDs.join()
		}

		api.post('Album::delete', params, function(data) {

			if (visible.albums()) {

				albumIDs.forEach(function(id) {
					albums.json.num--
					view.albums.content.delete(id)
					albums.deleteByID(id)
				})

			} else {

				albums.refresh()
				lychee.goto()

			}

			if (data!==true) lychee.error(null, params, data)

		})

	}

	if (albumIDs.toString()==='0') {

		action.title = 'Clear Unsorted'
		cancel.title = 'Keep Unsorted'

		msg = `<p>Are you sure you want to delete all photos from 'Unsorted'?<br>This action can't be undone!</p>`

	} else if (albumIDs.length===1) {

		let albumTitle = ''

		action.title = 'Eliminar Álbum y Fotografías'
		cancel.title = 'Dejar Álbum'

		// Get title
		if (album.json)       albumTitle = album.json.title
		else if (albums.json) albumTitle = albums.getByID(albumIDs).title

		// Fallback for album without a title
		if (albumTitle==='') albumTitle = 'Sin título'

		msg = lychee.html`<p>¿Estás seguro que quieres borrar el álbum '$${ albumTitle }' y todas las fotos que contiene? ¡Ojó!, Esta acción es irreversible.</p>`

	} else {

		action.title = 'Eliminar Álbumes y Fotografías'
		cancel.title = 'Dejar Álbumes'

		msg = lychee.html`<p>¿Estás seguro que quieres borrar los $${ albumIDs.length } álbumes seleccionados y todas las fotos que contienen? ¡Ojó!, Esta acción es irreversible.</p>`

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
	})

}

album.setTitle = function(albumIDs) {

	let oldTitle = ''
	let msg      = ''

	if (!albumIDs) return false
	if (albumIDs instanceof Array===false) albumIDs = [ albumIDs ]

	if (albumIDs.length===1) {

		// Get old title if only one album is selected
		if (album.json)       oldTitle = album.json.title
		else if (albums.json) oldTitle = albums.getByID(albumIDs).title

	}

	const action = function(data) {

		basicModal.close()

		let newTitle = data.title

		if (visible.album()) {

			// Rename only one album

			album.json.title = newTitle
			view.album.title()

			if (albums.json) albums.getByID(albumIDs[0]).title = newTitle

		} else if (visible.albums()) {

			// Rename all albums

			albumIDs.forEach(function(id) {
				albums.getByID(id).title = newTitle
				view.albums.content.title(id)
			})

		}

		let params = {
			albumIDs : albumIDs.join(),
			title    : newTitle
		}

		api.post('Album::setTitle', params, function(data) {

			if (data!==true) lychee.error(null, params, data)

		})

	}

	let input = lychee.html`<input class='text' name='title' type='text' maxlength='50' placeholder='Título' value='$${ oldTitle }'>`

	if (albumIDs.length===1) msg = lychee.html`<p>Ingresa el nuevo título para este álbum: ${ input }</p>`
	else                     msg = lychee.html`<p>Ingresa el título para los $${ albumIDs.length } álbumes seleccionados: ${ input }</p>`

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
	})

}

album.setDescription = function(albumID) {

	let oldDescription = album.json.description

	const action = function(data) {

		let description = data.description

		basicModal.close()

		if (visible.album()) {
			album.json.description = description
			view.album.description()
		}

		let params = {
			albumID,
			description
		}

		api.post('Album::setDescription', params, function(data) {

			if (data!==true) lychee.error(null, params, data)

		})

	}

	basicModal.show({
		body: lychee.html`<p>Ingresa una descripción para este álbum: <input class='text' name='description' type='text' maxlength='800' placeholder='Descripción' value='$${ oldDescription }'></p>`,
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
	})

}

album.setPublic = function(albumID, modal, e) {

	let password = ''

	albums.refresh()

	if (modal===true) {

		let text   = ''
		let action = {}

		action.fn = () => {

			// Call setPublic function without showing the modal
			album.setPublic(album.getID(), false, e)

		}

		// Album public = Editing a shared album
		if (album.json.public==='1') {

			action.title = 'Edit Sharing'
			text         = 'The sharing-properties of this album will be changed to the following:'

		} else {

			action.title = 'Share Album'
			text         = 'This album will be shared with the following properties:'

		}

		let msg = `
		          <p class='less'>${ text }</p>
		          <form>
		              <div class='choice'>
		                  <label>
		                      <input type='checkbox' name='hidden'>
		                      <span class='checkbox'>${ build.iconic('check') }</span>
		                      <span class='label'>Hidden</span>
		                  </label>
		                  <p>Only people with the direct link can view this album.</p>
		              </div>
		              <div class='choice'>
		                  <label>
		                      <input type='checkbox' name='downloadable'>
		                      <span class='checkbox'>${ build.iconic('check') }</span>
		                      <span class='label'>Downloadable</span>
		                  </label>
		                  <p>Visitors of your Lychee can download this album.</p>
		              </div>
		              <div class='choice'>
		                  <label>
		                      <input type='checkbox' name='password'>
		                      <span class='checkbox'>${ build.iconic('check') }</span>
		                      <span class='label'>Password protected</span>
		                  </label>
		                  <p>Album only accessible with a valid password.</p>
		                  <input class='text' name='passwordtext' type='password' placeholder='password' value=''>
		              </div>
		          </form>
		          `

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
		})

		if (album.json.public==='1' && album.json.visible==='0') $('.basicModal .choice input[name="hidden"]').click()
		if (album.json.downloadable==='1')                       $('.basicModal .choice input[name="downloadable"]').click()

		$('.basicModal .choice input[name="password"]').on('change', function() {

			if ($(this).prop('checked')===true) $('.basicModal .choice input[name="passwordtext"]').show().focus()
			else                                $('.basicModal .choice input[name="passwordtext"]').hide()

		})

		return true

	}

	// Set data
	if (basicModal.visible()) {

		// Visible modal => Set album public
		album.json.public = '1'

		// Set visible
		if ($('.basicModal .choice input[name="hidden"]:checked').length===1) album.json.visible = '0'
		else                                                                  album.json.visible = '1'

		// Set downloadable
		if ($('.basicModal .choice input[name="downloadable"]:checked').length===1) album.json.downloadable = '1'
		else                                                                        album.json.downloadable = '0'

		// Set password
		if ($('.basicModal .choice input[name="password"]:checked').length===1) {
			password            = $('.basicModal .choice input[name="passwordtext"]').val()
			album.json.password = '1'
		} else {
			password            = ''
			album.json.password = '0'
		}

		// Modal input has been processed, now it can be closed
		basicModal.close()

	} else {

		// Modal not visible => Set album private
		album.json.public = '0'

	}

	// Set data and refresh view
	if (visible.album()) {

		album.json.visible      = (album.json.public==='0') ? '1' : album.json.visible
		album.json.downloadable = (album.json.public==='0') ? '0' : album.json.downloadable
		album.json.password     = (album.json.public==='0') ? '0' : album.json.password

		view.album.public()
		view.album.hidden()
		view.album.downloadable()
		view.album.password()

		if (album.json.public==='1') contextMenu.shareAlbum(albumID, e)

	}

	let params = {
		albumID,
		public       : album.json.public,
		password     : password,
		visible      : album.json.visible,
		downloadable : album.json.downloadable
	}

	api.post('Album::setPublic', params, function(data) {

		if (data!==true) lychee.error(null, params, data)

	})

}

album.share = function(service) {

	let url  = location.href

	switch (service) {
		case 'twitter':
			window.open(`https://twitter.com/share?url=${ encodeURI(url) }`)
			break
		case 'facebook':
			window.open(`http://www.facebook.com/sharer.php?u=${ encodeURI(url) }&t=${ encodeURI(album.json.title) }`)
			break
		case 'mail':
			location.href = `mailto:?subject=${ encodeURI(album.json.title) }&body=${ encodeURI(url) }`
			break
	}

}

album.getArchive = function(albumID) {

	let link = ''
	let url  = `${ api.path }?function=Album::getArchive&albumID=${ albumID }`

	if (location.href.indexOf('index.html')>0) link = location.href.replace(location.hash, '').replace('index.html', url)
	else                                       link = location.href.replace(location.hash, '') + url

	if (lychee.publicMode===true) link += `&password=${ encodeURIComponent(password.value) }`

	location.href = link

}

album.merge = function(albumIDs) {

	let title  = ''
	let sTitle = ''
	let msg    = ''

	if (!albumIDs) return false
	if (albumIDs instanceof Array===false) albumIDs = [ albumIDs ]

	// Get title of first album
	if (albums.json) title = albums.getByID(albumIDs[0]).title

	// Fallback for first album without a title
	if (title==='') title = 'Untitled'

	if (albumIDs.length===2) {

		// Get title of second album
		if (albums.json) sTitle = albums.getByID(albumIDs[1]).title

		// Fallback for second album without a title
		if (sTitle==='') sTitle = 'Untitled'

		msg = lychee.html`<p>¿Estás seguro que quieres mezclar el álbum '$${ sTitle }' con el álbum '$${ title }'?</p>`

	} else {

		msg = lychee.html`<p>¿Estás seguro que quieres mezclar todos los álbumes seleccionados con el álbum  '$${ title }'?</p>`

	}

	const action = function() {

		basicModal.close()

		let params = {
			albumIDs: albumIDs.join()
		}

		api.post('Album::merge', params, function(data) {

			if (data!==true) {
				lychee.error(null, params, data)
			} else {
				albums.refresh()
				lychee.goto()
			}

		})

	}

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
	})

}