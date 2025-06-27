import analyzeArray from "./analyze-array";

describe("analyzeArr", () => {
    let arrays = [[1,8,3,4,2,6], [1,8,3,4,2,-3], [5,5,5,5,5,5,5]];
    let objs = [
        {
            average: 4,
            min: 1,
            max: 8,
            length: 6
        },
        {
            average: 2.5,
            min: -3,
            max: 8,
            length: 6
        },
        {
            average: 5,
            min: 5,
            max: 5,
            length: 7
        }
    ]
    arrays.forEach((el, i) => {
        test("analyzeArr test" + (i + 1), () => 
            expect(analyzeArray(el)).toEqual(objs[i])
        )
    })
    
})