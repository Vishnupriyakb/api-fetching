prices = [250, 300, 200, 400, 500, 450, 350]

def max_pepper_profit(prices):
    min_price = prices[0]
    max_profit = 0

    for price in prices:
        if price < min_price:
            min_price = price
        profit = price - min_price
        if profit > max_profit:
            max_profit = profit

    return max_profit

print("Maximum profit:", max_pepper_profit(prices))
