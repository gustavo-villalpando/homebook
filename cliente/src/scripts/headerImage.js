
/**
 * @description This module takes care of the header-image.
 */

headerImage = {

	_dom: $('#header-image')

}

headerImage.load = function() {

	//api.post('Photo::get', params, function(data) {
		
		let data = {
			showHeaderImage		: true,
			urlImage			: 'http://demo.themetorium.net/html/sepia/assets/img/misc/page-header-bg-19.jpg',
			haveHeaderTitle		: true,
			title 				: 'Homebook',
			description			: ''
		}

		if (data.showHeaderImage!==true) 	return true;
		
		let headerImageBox = ''

		headerImageBox = build.headerImage(data.urlImage, data.haveHeaderTitle, data.title, data.description)

		headerImage._dom.html(headerImageBox)
	//}

}

