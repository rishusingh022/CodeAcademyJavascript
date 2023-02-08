// Regular function
function vowelCountUtil(str){
    const vowel = ['a','e','i','o','u'];
    let ans = 0;
    for (ch of str){
        if(vowel.includes(ch)) ans++;
    }
    return ans;
}
// arrow head function
const vowelCountUtils = (str) => {
    const vowel = ['a','e','i','o','u'];
    let ans = 0;
    for (ch of str){
        if(vowel.includes(ch)) ans++;
    }
    return ans;
}
str = "codeacademy"
console.log(vowelCountUtil(str));
console.log(vowelCountUtils(str));