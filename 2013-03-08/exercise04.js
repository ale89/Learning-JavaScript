function select(data, key, values) {
	var result = [];
	for (var i = 0; i< data.length; i++) {
		var value = data[i][key];
		if (values.some(function (item) { return (value===item); })) {
			result.push(data[i]);
		}
	}
	return result;
}
