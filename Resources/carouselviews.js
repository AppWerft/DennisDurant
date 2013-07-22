exports.create = function() {
	var self = [];
	var items = {
		yit : 'bilder/start-just_in_time.jpg',
		band : 'bilder/start-dennis_durant_band_2012.jpg',
		schauspiel : 'bilder/start-durant_schauspiel_2012.jpg',
		fb : 'bilder/start-facebook.jpg',
		spam : 'bilder/newsletter-1.gif',
		itunes : 'bilder/itunes-1.gif',
		yt : 'bilder/start-youtube.jpg',
		cal : 'bilder/start-termine.jpg'
	};
	for (var key in  items)
		self.push(Ti.UI.createImageView({
			image : 'http://dennisdurant.com/' + items[key],
			key : key,
			width : 260,
			height : 260
		}));
	return self;
}
