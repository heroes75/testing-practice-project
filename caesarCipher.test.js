import caesarCipher from "./caesarCipher";

describe("caesarCipher", () => {
    let words = ["xyz", "HeLLo", "Hello, World!"];
    let res = ["abc", "KhOOr", "Khoor, Zruog!"];
    words.forEach((el, i) => {
        test("caesarCipher test" + (i + 1), () => expect(caesarCipher(el, 3)).toBe(res[i]))
    })
})