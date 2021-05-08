//check wachtwoordlengte <=9

const { hasRightLength, isNotNull, hasUpperCaseCharacter, hasLowerCaseCharacter, hasDigit,verifyPassword } = require("./passwordverifier.js");

test("check amount of used characters", ()=> {
    const password = " djlsdkf";
    const passwordLength = hasRightLength(password);
    expect(hasRightLength(password)).toBeTruthy();
});

test("check if password is null", () => {
    const password = null;
    expect(isNotNull(password)).toBeTruthy();
});

test("check if password has one or more uppercases", () => {
    const password = "thisIsAstring";
    expect(hasUpperCaseCharacter(password)).toBeTruthy();
});

test("check if password has one or more lowercases", () => {
    const password = "Yu";
    expect(hasLowerCaseCharacter(password)).toBeTruthy();
});

test("check is password has one or more numbers ",() => {
    const password = "Yudfksfk9";
    expect(hasDigit(password)).toBeTruthy();
});

test("check if verifyPassword function works", () => {
    const password = "123qweASD";
    expect(verifyPassword(password)).toBeTruthy();
});






