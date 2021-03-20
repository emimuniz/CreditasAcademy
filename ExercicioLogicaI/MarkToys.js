const MarkToys = (prices, k) => {
    let total = 0; 
    prices.sort((a,b) => a - b)
    for (let i = 0; i < prices.length; i++) {
        total+= prices[i]
        if(total > k){
            return i 
        }
        
    }

    return price.length
}

console.log(MarkToys([1, 12, 5, 111, 200, 1000, 10], 50))