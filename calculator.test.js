import calculator from "./calculator";

describe("calculator addition", () => {
    test("addition test1", () => {
        let a = 1;
        let b = 3;
        let res = calculator.add(a, b)
        expect(res).toBe(4)
    });
    test("addition test2", () => {
        let a = 0;
        let b = -6;
        let res = calculator.add(a, b)
        expect(res).toBe(-6)
    })
    test("addition test3", () => {
        let a = 0;
        let b = 0;
        let res = calculator.add(a, b)
        expect(res).toBe(0)
    })
})

describe("calculator subtraction", () => {
    test("subtraction test1", () => {
        let a = 1;
        let b = 3;
        let res = calculator.sub(a, b)
        expect(res).toBe(-2)
    });
    test("subtraction test2", () => {
        let a = 0;
        let b = -6;
        let res = calculator.sub(a, b)
        expect(res).toBe(6)
    })
    test("subtraction test3", () => {
        let a = 0;
        let b = 0;
        let res = calculator.sub(a, b)
        expect(res).toBe(0)
    });
});
describe("calculator multiplication", () => {
    test("multiplication test1", () => {
        let a = 5;
        let b = 3;
        let res = calculator.mult(a, b)
        expect(res).toEqual(15)
    });
    test("multiplication test2", () => {
        let a = 0;
        let b = -6;
        let res = calculator.mult(a, b)
        expect(res).toEqual(0)
    })
    test("multiplication test3", () => {
        let a = -5;
        let b = -5;
        let res = calculator.mult(a, b)
        expect(res).toEqual(25)
    });
})
describe("calculator division", () => {
    test("division test1", () => {
        let a = 8;
        let b = 2;
        let res = calculator.div(a, b)
        expect(res).toEqual(4)
    });
    test("division test2", () => {
        let a = 0;
        let b = -6;
        let res = calculator.div(a, b)
        expect(res).toEqual(0)
    })
    test("division test3", () => {
        let a = -5;
        let b = 0;
        let res = calculator.div(a, b)
        expect(res).toEqual(-Infinity)
    });
    test("division test3", () => {
        let a = 0;
        let b = 0;
        let res = calculator.div(a, b)
        expect(res).toEqual(NaN)
    });
})