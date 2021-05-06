const getWordLengths = (dataArray) => {
 const myArray = dataArray.map(item=>item.length)
    return myArray
};

module.exports = getWordLengths;