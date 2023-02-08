// Regular function
function sameElementCheckUtil(digit){
    const str = digit.toString();
    const check = str[0];
    let flag = true;
    for(let i=1;i<str.length;i++){
        if(str[i] !== check) flag = false;
    }
    return flag;
}

// arrow function
const sameElementCheckUtils = (digit) => {
    const str = digit.toString();
    const check = str[0];
    let flag = true;
    for(let i=1;i<str.length;i++){
        if(str[i] !== check) flag = false;
    }
    return flag;
}
const digit=222;
console.log(sameElementCheckUtil(digit));
const digits=223;
console.log(sameElementCheckUtils(digits));
