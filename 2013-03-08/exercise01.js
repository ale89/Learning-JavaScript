var array = [];

function pushInArray(n) {
	while (n>0) {
		array.unshift(n);
		n--;
	}
}

pushInArray(6);

var result = array.filter(function(item) {
			return (item % 2===0); }).
	     	   map(function(item) {
			return (item * 2); }).
		   filter(function(item) {
			return (item % 4===0); }).
		   reduce(function(prev,cur) {
			return (prev+cur); });

console.log(result);
			
