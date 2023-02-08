const largeEvenNumberUtil = require('./largestEvenUtils');
const sameElementCheckUtil = require('./sameElementCheckUtil')
const changeCaseUtil = require('./caseChangeUtil')
const longestStringUtil = require('./longestStringUtil')
const checkLeapYearUtil = require('./checkLeapYearUtil')
const endMatchUtil = require('./endMatchUtil')
const concatenateStringUtil = require('./concatenateStringUtil')
const vowelCountUtil = require('./vowelCountUtil')
const replaceCharacterUtil = require('./replaceCharacterUtil')

describe("largeEvenNumberUtilsTest", () => {
    const testCases = [
        {
            input: [1, 3, 5, 7],
            output: -1
        },
        {
            input: [1, 2, 3, 4, 5],
            output: 4
        },
        {
            input: [1, 2, 3, 4, 10],
            output: 10
        }
    ];
    testCases.forEach(test => {
        it(`for input [${test.input}]`, () => {
            expect(largeEvenNumberUtil(test.input)).toEqual(test.output);
        });
    });
});
describe("sameElementCheckUtilsTest", () => {
    const testCases = [
        {
            input: 22,
            output: true
        },
        {
            input: 23,
            output: false
        },
        {
            input: 545,
            output: false
        }
    ];
    testCases.forEach(test => {
        it(`for input ${test.input}`, () => {
            expect(sameElementCheckUtil(test.input)).toEqual(test.output);
        });
    });
});
describe("caseChangeUtilsTest", () => {
    const testCases = [
        {
            input: "MeRRy hAD a LITTle lAMp",
            output: "mErrY Had A littLE LamP"
        },
        {
            input: "AbC",
            output: "aBc"
        },
        {
            input: "SwapniL",
            output: "sWAPNIl"
        }
    ];
    testCases.forEach(test => {
        it(`for input ${test.input}`, () => {
            expect(changeCaseUtil(test.input)).toEqual(test.output);
        });
    });
});

describe("endMatchUtilsTest", () => {
    const testCases = [
        {
            input: ["we", "love", "code", "academy"],
            output: "academy"
        },
        {
            input: ["we", "love", "code",],
            output: "love"
        },
        {
            input: ["we", "love"],
            output: "love"
        }
    ];
    testCases.forEach(test => {
        it(`for input [${test.input}]`, () => {
            expect(longestStringUtil(test.input)).toEqual(test.output);
        });
    });
});
describe("checkLeapYearUtilsTest", () => {
    const testCases = [
        {
            input: 2000,
            output: true
        },
        {
            input: 2003,
            output: false
        },
        {
            input: 2004,
            output: true
        }
    ];
    testCases.forEach(test => {
        it(`for input ${test.input}`, () => {
            expect(checkLeapYearUtil(test.input)).toEqual(test.output);
        });
    });
});

describe("endMatchUtil", () => {
    const testCases = [
        {
            input: "javaScript",
            output: true
        },
        {
            input: "Script",
            output: true
        },
        {
            input: "SwapniL",
            output: false
        }
    ];
    testCases.forEach(test => {
        it(`for input ${test.input}`, () => {
            expect(endMatchUtil(test.input)).toEqual(test.output);
        });
    });
});
describe("concatenateStringUtilsTest", () => {
    const testCases = [
        {
            input: ["code", "academy"],
            output: "odecademy"
        },
        {
            input: ["Swapnil", "kumar"],
            output: "wapnilumar"
        },
        {
            input: ["academy" , "2023"],
            output: "cademy023"
        }
    ];
    testCases.forEach(test => {
        it(`for input [${test.input}]`, () => {
            expect(concatenateStringUtil(test.input)).toEqual(test.output);
        });
    });
});

describe("vowelCountUtilsTest", () => {
    const testCases = [
        {
            input: "codeacademy",
            output: 5
        },
        {
            input: "abc",
            output: 1
        },
        {
            input: "SwapniL",
            output: 2
        }
    ];
    testCases.forEach(test => {
        it(`for input ${test.input}`, () => {
            expect(vowelCountUtil(test.input)).toEqual(test.output);
        });
    });
});

describe("replaceCharacterUtil", () => {
    const testCases = [
        {
            input: "codeacademy",
            output: "dpefbdbefnz"
        },
        {
            input: "lazyinterns",
            output: "mbazjoufsot"
        },
        {
            input: "abc",
            output: "bcd"
        }
    ];
    testCases.forEach(test => {
        it(`for input ${test.input}`, () => {
            expect(replaceCharacterUtil(test.input)).toEqual(test.output);
        });
    });
});