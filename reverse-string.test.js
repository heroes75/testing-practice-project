import reverseString from "./reverse-string";

describe("reverse string", () => {
       let words = ["qwerty", "bonjour", ""]
        let reverseWords = ["ytrewq", "ruojnob", ""]
        words.forEach((el, i) => {
            test("reverse string test" + i, () => {
            expect(reverseString(el)).toBe(reverseWords[i])
        })
    })

})