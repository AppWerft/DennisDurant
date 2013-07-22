exports.create = function() {
	//  http://gdata.youtube.com/feeds/api/users/DWEDA10/uploads?v=2&alt=json
	var self = require('win').create();
	var id = 'PLB453A0AC718531CB';
	var gigs = {
		"w5hD15gRNR4" : "Dennis Durant - Just in time",
		"XFfoMuYZ5rw" : "Dennis Durant - Just in time - CD Release Konzert",
		"s1hpt0Hsxps" : "Dennis Durant - Mein Sankt Pauli",
		"a90pnub8u5w" : "Dennis Durant - New York's not my home by Jim Croce",
		"mxMrg8ZcRCQ" : "Dennis Durant - I'll have to say I love you in a song by Jim Croce",
		"-S5YVIktVEY" : "Dennis Durant  -  Photographs and Memories by Jim Croce",
		"-ivqLWetNP0" : "TV Bericht über Dennis Durant",
		"MMFup85Y1oc" : "Dennis Durant - If you could read my mind by Gordon Lightfoot",
		"tB5bwlm6d5w" : "Dennis Durant & Band - Commundo Unplugged Tour 2011",
		"R9kcEBXiH64" : "Dennis Durant & Band - Alstervergnügen 2011",
		"OwKgQA8iCXc" : "Dennis Durant & Band - Live im Casino Hamburg - Walking in Memphis",
		"IpmcH0C1lXc" : "Dennis Durant & Band - Live in der Trude in Hamburg 2011",
		"S2MXgd3n_vo" : "Dennis Durant - Kiez Küchen Konzert"
	}
	var rows = [];
	var i = 0;
	for (var key in gigs) {
		rows[i] = Ti.UI.createTableViewRow({
			backgroundColor : 'black',
			height : 70,
			yt : key
		});
		rows[i].add(Ti.UI.createImageView({
			left : 0,
			top : 0,
			width : 90,

			height : 'auto',
			image : 'http://i1.ytimg.com/vi/' + key + '/default.jpg'
		}));
		rows[i].add(Ti.UI.createLabel({
			text : gigs[key],
			left : 100,
			color : 'white',
			font : {
				fontWeight : 'bold',
				fontFamily : 'Okuda',
				fontSize : 28
			},
			height : 60
		}));
		i++;
	}
	var tv = Ti.UI.createTableView({
		data : rows,
		top : 0,
	});
	self.add(tv);
	tv.addEventListener('click', function(_e) {
		var get_yt_clip = require('vendor/get_yt_clip');
		var videoPlayer = Titanium.Media.createVideoPlayer({
			autoplay : false,
			mediaControlStyle : Titanium.Media.VIDEO_CONTROL_DEFAULT,
			scalingMode : Titanium.Media.VIDEO_SCALING_ASPECT_FIT,
			bottom : 0,
			height : 200,
			width : 320,
			backgroundColor : '#000'
		});
		self.add(videoPlayer)
		tv.setBottom(200);
		get_yt_clip(_e.rowData.yt, function(_err, _url) {
			//	console.log(JSON.parse(_res));
			videoPlayer.url = _url;
			videoPlayer.play();
		});
	});
	self.addEventListener('close', function() {
		if (videoplayer && videoplayer.playing)
			videoplayer.stop()
	});
	self.open();
}
