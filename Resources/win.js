exports.create = function() {
	var self = Ti.UI.createWindow({
		modal : true,
		navBarHidden : true,
		backgroundColor : 'transparent'
	});
	self.addEventListener('longpress', function() {
		self.close()
	})
	return self;
}
