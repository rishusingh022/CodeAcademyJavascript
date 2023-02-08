// regular function 
function largeEvenNumberUtil(arr){
    let flag = false;
    let ans = Number.MIN_VALUE;
    for(let i=0;i<arr.length;i++){
        if(arr[i]%2 === 0 && arr[i] > ans){
            ans = arr[i];
            flag = true;
        }
    }
    if(!flag) return -1;
    else return ans;
}
// arrow function
const EvenUtil = (number) => number%2 === 0 ;
const maxUtil = (num1,num2) => Math.max(num1,num2) ;

const largeEvenNumberUtils = (arr) => {
    let ans = -1;
    arr.forEach(element => {
        if(EvenUtil(element)) ans = maxUtil (ans,element);
    });
    return ans;
}
const arr = [1,2,3,4,5,6,7,8,9];
console.log(largeEvenNumberUtils(arr));
console.log(largeEvenNumberUtil(arr));