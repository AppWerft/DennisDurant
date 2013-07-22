exports.create = function() {
	var self=require('win').create();
	self.add(Ti.UI.createWebView({
		url:'https://m.facebook.com/pages/Dennis-Durant/75077201278?ref=tn_tnmn',
		disableBounce:true
	}));
	self.open();
}	
