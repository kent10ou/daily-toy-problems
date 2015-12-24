/*
characterFrequency (solution) 
1. loop through input
2. store unique chars and their freq
3. create result array using freq
4. sort the result array
*/

var characterFrequency = function (string) {
	var letter,result = [], frequencies = {}, i
	// store unique chars and their freqs
	for (i = 0; i < string.length; i++) {
		letter = string.charAt(i);
		frequencies[letter] = frequencies[letter] || 0;
		frequencies[letter]++;
	}

	// push pairs into final result array
	for (var letter in frequencies) {
		result.push([letter, frequencies[letter]])
	}

	// sort pairs appropriately
		// native sort takes in a cb func
	result.sort(function (a, b) {
		if (a[1] > b[1]) return -1;
		else if (a[1] < b[1]) return 1;
		else if (a[0] < b[0]) return -1;
		else if (a[0] > b[0]) return 1;
		return 0;
	})

	return result;
}

console.log(characterFrequency('mississippi'))
