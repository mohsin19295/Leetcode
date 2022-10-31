 // https://leetcode.com/problems/best-time-to-buy-and-sell-stock/

var maxProfit = function(prices) {
    let [left, right, max_profit] = [0, 1, 0];
    
    while (right < prices.length){
        if (prices[right] > prices[left]){
            let profit = prices[right] - prices[left];
            
            max_profit = Math.max(max_profit, profit);
        } else {
            left = right;
        }
        right++
    }
    return max_profit
};

console.log(maxProfit([7, 1, 5, 3, 6, 4]));
console.log(maxProfit([7, 6, 4, 3, 1]));