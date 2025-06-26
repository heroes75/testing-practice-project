import capitalize from "./capitalize";

describe("capitalize", () => {
    test("capitalize test1", () => {
        let word = "abcD";
        let res = capitalize(word)
        expect(res).toBe("D")
    });

    test("capitalize test2", () => {
        let word = "Loulou";
        let res = capitalize(word)
        expect(res).toBe("L")
    });

     test("capitalize test2", () => {
        let word = "mimi";
        let res = capitalize(word)
        expect(res).toBe("")
    });
})