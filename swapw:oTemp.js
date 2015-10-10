//swapInPlace without temp variable

var arr = [5,2,1,3,6];

//swap 2nd and 5th index
//results = [5,6,1,3,2];

function (a, b, array) {
	array[a] = array[a] + array[b]
	array[a] = array[a] - array[b]
	array[a] = array[a] - array[b]
	return array
}
