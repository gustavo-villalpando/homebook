/**
 * @description This module takes care of the nav-links.
 */

navLinks = {

	_dom: $('.nav-links'),

	defaultLink: $('#default-link'),

	currentLink: null,

	extraLink: $('#extra-link'),
	showExtraLink: false

}

navLinks.init = function() {

	if (lychee.publicMode===true) {
		
		navLinks.hide()

		return false
	}

	navLinks.show()
	navLinks.bind()

	return true
}

navLinks.dom = function(selector) {

	if (selector==null || selector==='') return navLinks._dom

	return navLinks._dom.find(selector)

}

navLinks.bind = function() {

	// Event Name
	let eventName = lychee.getEventName()
	navLinks.dom('.album')      .on(eventName, navLinks.selectLink)

	return true

}

navLinks.show = function() {

	navLinks.dom().removeClass('navLinks--hidden')

	let albumID = ''
	let hash    = document.location.hash.replace('#', '').split('/')

	if (hash[0]!=null) albumID = hash[0]

	if (!albumID)	albumID = 0

	if (albumID>0) 	return true
	
	navLinks.currentLink = navLinks.dom('a[data-id="' + albumID + '"]')
	navLinks.currentLink.addClass('selected')

	return true

}

navLinks.addExtraLink = function(albumID, title) {

	navLinks.extraLink.html(title)
	navLinks.extraLink.attr('data-id', albumID)

	if (navLinks.showExtraLink===true)	return true

	if (navLinks.currentLink!==null)	navLinks.currentLink.removeClass('selected')

	navLinks.currentLink = navLinks.extraLink
	navLinks.currentLink.addClass('selected')

	navLinks.showExtraLink = true

	return true

}

navLinks.removeExtraLink = function() {
	if(navLinks.showExtraLink!==true) return true

	navLinks.extraLink.html('')
	navLinks.extraLink.attr('data-id', '')
	navLinks.showExtraLink = false

	return true
}

navLinks.hide = function(e) {
	
	if (lychee.publicMode===true && !visible.navLinks()) return false
	
	navLinks.dom().addClass('navLinks--hidden')

	return true

}

navLinks.selectLink = function (){

	$this = $(this)
	
	if ($this.hasClass('selected')===true) return false

	navLinks.currentLink.removeClass('selected')
	$this.addClass('selected')
	navLinks.currentLink =  $this

	navLinks.removeExtraLink()

	return true
}