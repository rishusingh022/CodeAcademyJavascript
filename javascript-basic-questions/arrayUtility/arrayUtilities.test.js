const {doubleNumber , tripleNumberEvenFilter, tripleNumberEvenFilterReduce} = require('./arrayUtilities');
describe('array utilities',() => {
    describe('Double Number',() => {
        it('Should double the elements when the array is passed',() =>{
            const result = doubleNumber([1,2,3,4]);
            expect(result).toEqual([2,4,6,8]);
        });
        it('Should return -1 when input is not an array',() => {
            expect(() => doubleNumber('String')).toThrow('TypeError');
        });
    });
    describe('Triple Number',() => {
        it('Should Triple the elements when the array is passed and filter on modulus 2',() =>{
            const result = tripleNumberEvenFilter([1,2,3,4]);
            expect(result).toEqual([6,12]);
        });
        it('Should return -1 when input is not an array',() => {
            expect(() => tripleNumberEvenFilter('String')).toThrow('TypeError');
        });
    });
    describe('Triple Number',() => {
        it('Should Triple the elements when the array is passed and filter on modulus 2',() =>{
            const result = tripleNumberEvenFilterReduce([1,2,3,4]);
            expect(result).toEqual([6,12]);
        });
        it('Should return -1 when input is not an array',() => {
            expect(() => tripleNumberEvenFilterReduce('String')).toThrow('TypeError');
        });
    });
});