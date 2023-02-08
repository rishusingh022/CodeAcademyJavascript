// Regular function
function checkLeapYearUtil(year){
    return year % 400 === 0 ? true : year % 100 !==0 ? year %4 ===0 ? true : false : false ;
}
// arrow head function
const checkLeapYearUtils = (year) => {
    return year % 400 === 0 ? true : year % 100 !==0 ? year %4 ===0 ? true : false : false ;
}
console.log(checkLeapYearUtil(2003));
console.log(checkLeapYearUtils(2004));