export default function caesarCipher(str, nbr) {
    function replacer(cores) {
    let char = cores.charCodeAt(0);
    if(cores.toUpperCase() === cores) {
        let charRot = char + nbr;
        if(charRot > 90) {
            return String.fromCharCode(64 + (charRot % 90))
        } else {
            return String.fromCharCode(charRot)
        }
    } else {
        let charRot = char + nbr;
        if(charRot > 122) {
            return String.fromCharCode(96 + (charRot % 122))
        } else {
            return String.fromCharCode(charRot)
        }
    }
}
    return str.replace(/[a-zA-Z]/g, replacer)
}

