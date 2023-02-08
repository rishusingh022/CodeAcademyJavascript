const doubleNumber = (numbers) => {
    if(!Array.isArray(numbers)){ 
        throw new Error('TypeError');
    }
    return numbers.map(element => element*2).filter(elem => elem%2===0);
};
const tripleNumberEvenFilter = (numbers) => {
    if(!Array.isArray(numbers)){ 
        throw new Error('TypeError');
    }
    return numbers.map(element => element*3).filter(elem => elem%2===0);
};
const tripleNumberEvenFilterReduce = (numbers) => {
    if(!Array.isArray(numbers)){ 
        throw new Error('TypeError');
    }
    const result = numbers.reduce((accumulator,current) =>{
        if((current*3)%2==0){
            accumulator.push(current*3);
        }
        return accumulator;
    },[]);
    return result;
};
module.exports = {doubleNumber , tripleNumberEvenFilter, tripleNumberEvenFilterReduce};