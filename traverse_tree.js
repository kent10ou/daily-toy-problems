/*
var tree = {
	name: 'fred',
	data: 33,
	contents: [
		{
			name: 'ned',
			data: 61,
			contents: [
				{
					name: 'ted',
					data: 42
				},
				{
					name: 'ned',
					data: 53,
					contents: [
						{
							name: 'zed',
							data: 40
						}
					]
				}
			]
		}
	]
}

{
fred: 33,
fred/ned: 61,
fred/ned/ted: 42,
fred/ned/ned: 53,
fred/ned/ned/zed: 40
}
*/


var container = {};
var path = '';
var traverse = function (obj) {
	//set name = data
	if (path.length === 0) {
		path = obj.name;	
	} else {
		path += '/' + obj.name;
	}
	container[path] = obj.data;

	//check if obj.contents exist
		//base case: if no --> 
		//if yes, recurse
	if (!obj.contents) {
		return;
	} else {
		for (var i = 0; i < obj.contents.length; i++) {
			traverse(obj.contents[i]);
		}
	}
	return container;
}