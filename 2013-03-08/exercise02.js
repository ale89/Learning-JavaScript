var array = [];

function pushRandomInArr(n) {
	while (n>0) {
		array.push(Math.round(Math.random()*100));
		n--;
	}
}

pushRandomInArr(7);

var result = array.filter(function(item) {
			return (item % 2!==0); }).
		   sort(function(val1,val2) {
			return (val1-val2); })

console.log(result); 
