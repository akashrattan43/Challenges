function calculator(a, b, operator) {
    let result = 0

    switch (operator) {
        case '+':
            result = a + b
        break

        case '-':
            result = a - b
        break

        case '/':
            result = a / b
        break

        case '*':
            result = a * b
        break
    }
    return result
}

module.exports = calculator;
