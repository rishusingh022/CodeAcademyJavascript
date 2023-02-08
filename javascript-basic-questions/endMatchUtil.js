// Regular function 
function endMatchUtil (str) {
    return str.endsWith("Script");
}
// arrow head functions
const endMatchUtils = (str) => str.endsWith("Script");

console.log(endMatchUtil("javaScript"));
console.log(endMatchUtils("javaScript"));
