function findMaxNumber(num) {
    let max = num[0]

    for(let i = 1; i < num.length; i++) {
        if(num[i] > max) {
            max = num[i]
        }
    }
    return max
}

module.exports = findMaxNumber;
