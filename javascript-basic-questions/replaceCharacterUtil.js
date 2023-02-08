//Regular functions
function replaceCharacterUtil(str){
    const arr = Array.from(str);
    for (let i = 0 ; i<str.length ; i++){
        arr[i] = String.fromCharCode((str[i].charCodeAt()+1-97)%26 + 97 )
    }
    return arr.join("");
}
// arrow head function
const replaceCharacterUtils = (str) => {
    const arr = Array.from(str);
    for (let i = 0 ; i<str.length ; i++){
        arr[i] = String.fromCharCode((str[i].charCodeAt()+1-97)%26 + 97 )
    }
    return arr.join("");
}
str = "codeacademy";
console.log(replaceCharacterUtil(str));
console.log(replaceCharacterUtils(str));