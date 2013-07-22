exports.create = function() {
	function getEventList() {
		Ti.App.FB.requestWithGraphPath('75077201278/events', {}, 'GET', function(e) {
			if (e.success) {
				var events = JSON.parse(e.result).data;
				events.sort(function(a, b) {
					if (a['start_time'] < b['start_time']) {
						return -1;
					}
					if (a.dist > b.dist) {
						return 1;
					}
					return 0;
				});
				var rows = [];
				for (var i = 0; i < events.length; i++) {
					var event = events[i];
					rows[i] = require('events.row').create(event);
				}
			}
			tv.setData(rows);
		});
	}

	var self = require('win').create();
	var tv = Ti.UI.createTableView({
		backgroundColor : 'transparent'
	});
	self.add(tv);
	Ti.App.FB = require('facebook');
	Ti.App.FB.appid = Ti.App.Properties.getString('fb_appid');
	Ti.App.FB.permissions = ['friends_events'];
	Ti.App.FB.forceDialogAuth = false;
	Ti.App.FB.logout();
	Ti.App.FB.addEventListener('login', function(e) {
		console.log(e);
		if (e.success)
			getEventList();
	});
	self.addEventListener('open', function(e) {
		if (Ti.App.FB.getKoggedIn())
			getEventList();
	});
	if (!Ti.App.FB.getLoggedIn()) {
		Ti.App.FB.authorize();
	}
	self.open();
}
