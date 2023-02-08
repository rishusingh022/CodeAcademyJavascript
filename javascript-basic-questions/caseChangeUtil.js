// regular functions
function changeCaseUtil (str) {
    const arr = Array.from(str);
    for (let i = 0 ; i<str.length ; i++){
        if(str[i] === str[i].toUpperCase()){
            arr[i] = str[i].toLowerCase();
        }
        else{
            arr[i] = str[i].toUpperCase();
        }
    }
    return arr.join("");
}
// arrow function
const changeCaseUtils = () => {
    const arr = Array.from(str);
    for (let i = 0 ; i<str.length ; i++){
        if(str[i] === str[i].toUpperCase()){
            arr[i] = str[i].toLowerCase();
        }
        else{
            arr[i] = str[i].toUpperCase();
        }
    }
    return arr.join("");
} 
// using map arrow head function 
const changeCaseUtilss = (str) => {
    return str.split('').map(elem => elem === elem.toUpperCase() ? elem.toLowerCase() : elem.toUpperCase()).join('')
}
let str = "MeRRy hAD a LITTle lAMp";
console.log(changeCaseUtil(str));
console.log(changeCaseUtils(str));
console.log(changeCaseUtilss(str));