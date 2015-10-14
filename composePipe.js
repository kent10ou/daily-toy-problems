// composePipe solutions

/* Higher order funcs are funcs that can take funcs as args and/or return funcs
compose and pipe are higher order funcs
*/

/*
// var expected outputs: 
var add1 = function (n) (return n+1);
var mult5 = function (n) (return n*5);
var maths = compose(add1, mult5);
maths(5); // 26 
*/

var compose = function (funcs) {
  // args = an array we can iterate over
  var args = Array.prototype.slice.call(arguments);

  //return function that passes the value through each function
  // moves right to left
  return function (val) {
    for(var i = args.length -1 ; i >=0; i--) {
      val = args[i](val);
    }
    return val;
  }
}


/*better way!!! we can use reduce!*/

var compose = function () {
  var args = Array.prototype.slice.call(arguments);

  return function (val) {
    return args.reduceRight(function(memo, fn) {
      return fn (memo);
    }, val);
  };
};