exports.create = function(event) {

	var self = Ti.UI.createTableViewRow({
		backgroundColor : 'black',
		event : event,
		height : 90
	});
	self.add(Ti.UI.createLabel({
		text : event.name,
		left : 100,
		top : 0,
		color : 'white',
		width : Ti.UI.FILL,
		font : {
			fontWeight : 'bold',
			fontFamily : 'Okuda',
			fontSize : 28
		},
		height : 35
	}));
	self.add(Ti.UI.createLabel({
		text : event.location,
		left : 100,
		top : 35,
		width : Ti.UI.FILL,
		color : 'white',
		font : {
			fontWeight : 'bold',
			fontFamily : 'Okuda',
			fontSize : 18
		},
		height : 22
	}));
	console.log(event);
	if (event['start_time'])
		self.add(Ti.UI.createLabel({
			text : require('vendor/moment')(event['start_time']).format('D.M.YYYY HH:mm') + ' Uhr',
			left : 100,
			top : 55,
			width : Ti.UI.FILL,
			color : 'white',
			font : {
				fontSize : 14
			},
			height : 22
		}));
	Ti.App.FB.requestWithGraphPath(event.id + '/photos', {}, 'GET', function(e) {
		if (e.success) {
			var res = JSON.parse(e.result);
			try {

				self.add(Ti.UI.createImageView({
					image : res.data[0].images[0].source,
					top : 0,
					left : 0,
					width : 80,
					height : 'auto'
				}));
			} catch(E) {
			}
		}
	});
	return self

}
