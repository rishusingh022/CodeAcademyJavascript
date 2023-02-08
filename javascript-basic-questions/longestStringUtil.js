// Regular functions
function longestStringUtil(arrStr){
    let longlen = arrStr[0].length;
    let longstr = arrStr[0];
    arrStr.forEach(element => {
        if(element.length > longlen){
            longlen = element.length;
            longstr = element;
        }
    });
    return longstr;
}
// arrow head functions
const longestStringUtils = (arrStr) => {
    let longlen = arrStr[0].length;
    let longstr = arrStr[0];
    arrStr.forEach(element => {
        if(element.length > longlen){
            longlen = element.length;
            longstr = element;
        }
    });
    return longstr;
}
const arrStr = ["we", "love", "code", "academy"];
console.log(longestStringUtil(arrStr));
console.log(longestStringUtils(arrStr));