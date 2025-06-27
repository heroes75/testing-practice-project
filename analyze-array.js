export default function analyzeArray(par) {
    return {
        average: par.reduce((prev, cur) => prev + cur, 0) / par.length,
        length: par.length,
        min: Math.min(...par),
        max: Math.max(...par)
    }
}