const findNeedle = (dataArray, word) => {
    const index = dataArray.findIndex(item => item === "needle");
    return index;
};

module.exports = findNeedle;