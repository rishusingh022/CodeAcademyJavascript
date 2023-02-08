// Regular functions
function concatenateStringUtil (strArr) {
    return strArr[0].substr(1) + strArr[1].substr(1);
}
// arrow head function 
const concatenateStringUtils = (strArr) => strArr[0].substr(1) + strArr[1].substr(1);

const strArr = ["code", "academy"]
console.log(concatenateStringUtil(strArr));
console.log(concatenateStringUtils(strArr));