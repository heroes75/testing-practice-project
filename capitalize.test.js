import capitalize from "./capitalize";

describe("capitalize", () => {
    test("capitalize test1", () => {
        let word = "abcD";
        let res = capitalize(word)
        expect(res).toBe("D")
    })
})