const shuffleKanjiList = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

const generateListWords = (str) => {
    return str.split(',').map((word) => word.trim());
}

module.exports = {
    shuffleKanjiList, generateListWords
};