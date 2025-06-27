import calculator from "./calculator";

describe("calculator addition", () => {
    let nubrs = [[1, 3], [0, -6], [0, 0]];
    let res = [4, -6, 0];
    nubrs.forEach((el, i) => {
        test("addition test" + (i + 1), () => 
            expect(calculator.add(el[0], el[1])).toBe(res[i])
        )
    })
})

describe("calculator subtraction", () => {
    let nubrs = [[1, 3], [0, -6], [0, 0]];
    let res = [-2, 6, 0];
    nubrs.forEach((el, i) => {
        test("subtraction test" + (i + 1), () => 
            expect(calculator.sub(el[0], el[1])).toBe(res[i])
        )
    })
});
describe("calculator multiplication", () => {
    let nubrs = [[5, 3], [0, -6], [-5, -5]];
    let res = [15, 0, 25];
    nubrs.forEach((el, i) => {
        test("multiplication test" + (i + 1), () => 
            expect(calculator.mult(el[0], el[1])).toBe(res[i])
        )
    })
})
describe("calculator division", () => {
    let nubrs = [[8, 2], [0, -6], [-5, 0], [0, 0]];
    let res = [4, 0, -Infinity, NaN];
    nubrs.forEach((el, i) => {
        test("division test" + (i + 1), () => 
            expect(calculator.div(el[0], el[1])).toBe(res[i])
        )
    })
})