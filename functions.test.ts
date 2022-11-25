const {shuffleArray} = require('./utils')

describe('shuffleArray should', () => {
    it('should return an array', () => {
        const array = shuffleArray([]);
        expect(array);
    });
});

describe('shuffleArray should', () => {
    it('should contain same items', () =>{
        const shuffle = shuffleArray([]);
        expect(shuffle).toContain(shuffleArray);
})

})