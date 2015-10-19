
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