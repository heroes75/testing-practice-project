export default calculator = (() => {
    const add = (a, b) =>  a + b;
    const sub = (a, b) =>  a - b;
    const mult = (a, b) =>  a * b === -0 ? 0 : a * b;
    const div = (a, b) =>  a / b === -0 ? 0 : a / b;
    return {add, sub, mult, div}
})()
