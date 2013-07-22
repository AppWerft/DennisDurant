// this sets the background color of the master UIView (when there are no windows/tab groups on it)
Titanium.UI.setBackgroundImage('Default.png');

var self = Ti.UI.createWindow({
	backgroundColor : 'transparent'
});
self.open();
Ti.App.Carousel = require('com.obscure.ticarousel');
self.carousel = Ti.App.Carousel.createCarouselView({
	top : 10,
	carouselType : Ti.App.Carousel.CAROUSEL_TYPE_CYLINDER,
	views : [],
	itemWidth : 290,
	opacity : 0.1,
	numberOfVisibleItems : 12,
	wrap : true,
});

self.add(self.carousel);

//self.add(require('module/intkey.character').create(intkey.characters[1]));

var views = require('carouselviews').create();
self.carousel.views = views;
self.carousel.animate({
	opacity : 1,
	duration : 700
}, function() {
	self.carousel.scrollToIndex(7, {
		duration : 1000
	});
})
self.carousel.reloadData();
self.carousel.scrollToIndex(7);
self.carousel.addEventListener('select', function(_e) {
	switch (views[_e.currentIndex].key) {
		case "yt":
			require('youtube').create();
			break;
		case "cal":
			require('events').create();
			break;
		case 'itunes':
			require('itunes').create();
			break;
		case 'fb':
			require('fb').create();
			break;
	}
})

self.add(Ti.UI.createLabel({
	text : 'dennis durant',
	color : 'white',
	bottom : 50,
	height : 100,
	font : {
		fontFamily : 'Okuda',
		fontSize : 90
	}
}));
