//HR solution
var buyAndSellStockOnce = function(prices) { 
	var lowest = prices[0]; 
	var maxProfit = prices[1] - prices[0]; 
	prices.forEach(function(price, i, arr) { 
		if (price < lowest) { 
			lowest = price; 
		} 
		if (price - lowest > maxProfit) { 
			maxProfit = price - lowest; 
		} 
	}); 
	return maxProfit; 
}; 
var prices = [310, 315, 275, 295, 260, 270, 290, 230, 255, 250]; 
var profit = buyAndSellStockOnce(prices); 
console.log(profit); 



//O(n^2)
function get_max_profit (array) {
    var max_profit = 0;
    // go through every time
    for (var i = 0; i < array.length; i++) {
		// for every time, go through every OTHER time
        for (var j = 0; j < array.length; j++) {
            // for each pair, find the earlier and later times
        	var earlier_time = Math.min(i, j);
            var later_time = Math.max(i, j);
            
            // use those to find the earlier and later prices
            var earlier_price = array[earlier_time];
            var later_price = array[later_time];
            
            // see what our profit would be if we bought at the earlier price and sold at later price
            var potential_profit = later_price - earlier_price;
            
            max_profit = Math.max(max_profit, potential_profit);
        }
    }
    console.log(max_profit);
    return max_profit;
}


stock_prices_yesterday = [10, 7, 5, 8, 11, 9];
get_max_profit(stock_prices_yesterday); // returns 6 (buying at 5 and selling at 11)
/*
But that will take O(n^2) time, since we have two nested loops—for every time, 
    we're going through every other time. Can we do better?

Since we're trying to loop through the set once, let's use a greedy ↴ approach, where we keep a running maxProfit until we reach the end. 
We'll start our maxProfit at $0. As we're iterating, how do we know if we've found a new maxProfit?

At each iteration, our maxProfit is either:

the same as the maxProfit at the last time step, or
the max profit we can get by selling at the currentPrice
How do we know when we have case (2)?

The max profit we can get by selling at the currentPrice is simply the difference between the currentPrice and the minPrice from earlier in the day. 
If this difference is greater than the current maxProfit, we have a new maxProfit.

So for every price, we’ll need to:

keep track of the lowest price we’ve seen so far
see if we can get a better profit
*/
// O(n)
function getMaxProfit (stockPricesYesterday) {
	var minPrice = stockPricesYesterday[0];
	var maxProfit = 0;

	for (var i = 0; i < stockPricesYesterday; i++) {
		// ensure min_price is the lowest price we've seen so far
		minPrice = Math.min(minPrice, currentPrice);
		// see what our profit would be if we bought at the min price and sold at the current price
		var potentialProfit = currentPrice - minPrice;
		// update maxProfit if we can do better
		maxProfit = Math.max(maxProfit, potentialProfit);
	}
	return maxProfit;
}


/* Final solution:
We’ll greedily ↴ walk through the array to track the max profit and lowest price so far.

For every price, we check if:

we can get a better profit by buying at minPrice and selling at the currentPrice
we have a new minPrice
To start, we initialize:

minPrice as the first price of the day
maxProfit as the first profit we could get
We decided to return a negative profit if the price decreases all day and we can't make any money. 
We could have thrown an error instead, but returning the negative profit is cleaner, makes our function less opinionated, 
and ensures we don't lose information.
*/

function getMaxProfit (stockPricesYesterday) {
	// make sure we have at least 2 prices
	if (stockPricesYesterday.length < 2) {
		throw new IllegalArgumentException("Getting a profit requires at least 2 prices");
	}
	// we'll greedily update minPrice and maxProfit, so we initialize
  // them to the first price and the first possible profit
	var minPrice = stockPricesYesterday[0];
	var maxProfit = stockPricesYesterday[1] - stockPricesYesterday[0];

  // start at the second (index 1) time
  // we can't sell at the first time, since we must buy first,
  // and we can't buy and sell at the same time!
  // if we started at index 0, we'd try to buy /and/ sell at time 0.
  // this would give a profit of 0, which is a problem if our
  // maxProfit is supposed to be /negative/--we'd return 0!
  for (var i = 1; i < stockPricesYesterday.length; i++) {
  	var currentPrice = stockPricesYesterday[i];
  	// see what our profit would be if we bought at the min price and sold at the current price
  	var potentialProfit = currentPrice - minPrice;

  	maxProfit = Math.max(maxProfit, potentialProfit);

  	// update minPrice so it's always the lowest price we've seen so far
  	minPrice = Math.min(minPrice, currentPrice);
  }
  return maxProfit;
}
