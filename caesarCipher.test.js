import caesarCipher from "./caesarCipher";

describe("caesarCipher", () => {
    test("caesarCipher test1", () => {
        let word = "xyz";
        let res = caesarCipher(word, 3);
        expect(res).toBe("abc")
    });
    test("caesarCipher test2", () => {
        let word = "HeLLo";
        let res = caesarCipher(word, 3);
        expect(res).toBe("KhOOr")
    });
    test("caesarCipher test3", () => {
        let word = "Hello, World!";
        let res = caesarCipher(word, 3);
        expect(res).toBe("Khoor, Zruog!")
    })
})