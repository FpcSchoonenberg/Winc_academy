// Utility functions
//password is korter dan 9 karakters
// module.exports = { functionOne, functionTwo };
// const { functionOne, functionTwo } = require('./filepath');
const hasRightLength = (password) => {
    if (password.length <= 9 && password.length >=3 ) {
        return true;
    } else {
        return false;
    }
}

const isNotNull = (password) => {
    if (password === null) {
        return true;
    } else {
        return false;
    }
}

// password heeft 1 of meer uppercase karakters
const hasUpperCaseCharacter = (password) => {
    const numbUpper = password.length - password.replace(/[A-Z]/g, '').length;
    if (numbUpper >= 1) {
        return true;
    } else {
        return false;
    }
}

const hasLowerCaseCharacter = (password) => {
    const numbLower = password.length - password.replace(/[a-z]/g, '').length;
    if (numbLower >= 1) {
        return true;
    } else {
        return false;
    }
}

const hasDigit = (password) => {
    const numbers = password.length - password.replace(/[0-9]/g, '').length;
    if (numbers >= 1) {
        return true;
    } else {
        return false;
    }
}
const minimumConditionsReached = conditions => {
    trueConditions = conditions.filter(bool => bool);
    return trueConditions.length >= 3;
};

// "Outer" function
const verifyPassword = password => {
    const conditions = [
        isNotNull(password),
        hasRightLength(password),
        hasUpperCaseCharacter(password),
        hasDigit(password)
    ];
    const result = minimumConditionsReached(conditions) && hasLowerCaseCharacter(password);
    return result;
};

verifyPassword("123ASD")
module.exports = { hasRightLength, isNotNull, hasUpperCaseCharacter, hasLowerCaseCharacter, hasDigit,verifyPassword }