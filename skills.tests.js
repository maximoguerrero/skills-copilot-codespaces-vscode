const { calculateNumbers } = require('./skills'); // adjust the path as needed

test('calculateNumbers adds two numbers correctly', () => {
    const output = calculateNumbers(2, 3);
    expect(output).toBe(5);
});