var DIGIT_VALUES = {
  I: 1,
  V: 5,
  X: 10,
  L: 50,
  C: 100,
  D: 500,
  M: 1000
};

var translateRomanNumeral = function (romanNumeral) {
	var total = 0;
	for (var i = 0; i < romanNumeral.length; i++ ) {
		var currentVal = DIGIT_VALUES[romanNumeral.charAt(i)];
		var nextVal = DIGIT_VALUES[romanNumeral.charAt(i+1)];

		if (nextVal && currentVal < nextVal) {
			total -= currentVal;
		} else {
			total += currentVal;
		}
	}
	return total;
};

console.log(translateRomanNumeral("XIV"));