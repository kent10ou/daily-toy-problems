//Check for if number is prime

var primeTester = function(n) {
  if(typeof n !== 'number' || n < 1 || n % 1 !== 0){
    // n isn't a number or n is less than 1 or n is not an integer
    return false;
  }
  // TODO: return true if n is prime, false otherwise

  // loop through all possible numbers from 2 to n
  // check if it is divisible by i, n % i === 0
  	// if it is return false
  // outside of for loop, return true
  for (var i = 2; i < n; i++) {
  	if (n % i === 0) {
  		return false
  	} 
  }
  return true;
};