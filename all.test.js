const {
    parser
} = require("./main")

test('Parse test case 1', function () {
    const input = "x"
    var output = parser.parse(input);
    expect(output).toBe("")
})

test('Parse test case 2', function () {
    const input = "x+x"
    var output = parser.parse(input);
    expect(output).toBe("")
})

test('Parse test case 3', function () {
    const input = "x+x+x"
    var output = parser.parse(input);
    expect(output).toBe("")
})

test('Parse test case 4', function () {
    const input = "(x)"
    var output = parser.parse(input);
    expect(output).toBe("")
})

test('Parse test case 5', function () {
    const input = "(x+x)"
    var output = parser.parse(input);
    expect(output).toBe("")
})

test('Parse test case 6', function () {
    const input = "(x+x+x)"
    var output = parser.parse(input);
    expect(output).toBe("")
})

test('Parse test case 7', function () {
    const input = "((x))"
    var output = parser.parse(input);
    expect(output).toBe("")
})


test('Parse test case 8', function () {
    const input = "(((x)))"
    var output = parser.parse(input);
    expect(output).toBe("")
})

test('Parse test case 9', function () {
    const input = "(((x+x)))"
    var output = parser.parse(input);
    expect(output).toBe("")
})

test('Parse test case 10', function () {
    const input = "((x+x+x))"
    var output = parser.parse(input);
    expect(output).toBe("")
})


test('Parse test case 11', function () {
    const input = "(())"
    const t = () => {
        var output = parser.parse(input);
        console.log(output)
    }
    expect(t).toThrow(SyntaxError)
})

test('Parse test case 12', function () {
    const input = "x*x"
    const t = () => {
        var output = parser.parse(input);
        console.log(output)
    }
    expect(t).toThrow(SyntaxError)
})

test('Parse test case 13', function () {
    const input = "(x*x)"
    const t = () => {
        var output = parser.parse(input);
        console.log(output)
    }
    expect(t).toThrow(SyntaxError)
})

test('Parse test case 14', function () {
    const input = "syntaxError"
    const t = () => {
        var output = parser.parse(input);
        console.log(output)
    }
    expect(t).toThrow(SyntaxError)
})

test('Parse test case 15', function () {
    const input = "+"
    const t = () => {
        var output = parser.parse(input);
        console.log(output)
    }
    expect(t).toThrow(SyntaxError)
})