export default function capitalize(par) {
    return par.match(/[A-Z]/) === null ? "" : par.match(/[A-Z]/)[0]
}