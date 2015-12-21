/**
  * example usage:
  * var anagrams = allAnagrams('abc');
  * console.log(anagrams); // [ 'abc', 'acb', 'bac', 'bca', 'cab', 'cba' ]
  */

var allAnagrams = function (string) {
	var results = {};
	(function recurse (perm, left) {
		if (left === '') {
			results[left] = true;
		}
		for (var i = 0; i < left.length; i++) {
			recurse(perm + left[i], left.slice(0, i) + left.slice(i+1));
		}
	})('', string);

	return Object.keys(results);
}

var anagrams = allAnagrams('abc');
console.log(anagrams);