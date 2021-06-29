const Kanjis = require('../Models/KanjiSchema');
const { shuffleKanjiList, generateListWords } = require ('../Utilities/usefulFunctions');

const getKanjiList = async (req, res) => {
    return res.json(shuffleKanjiList(await Kanjis.find()));
};

const addKanji = async (req, res) => {
    const {
        kanji, onyomiReading, kunyomiReading, meaning
    } = req.body;

    if (!kanji || !meaning) {
        return res.json({ "err": "invalid values" });
    }

    try {
        const newKanji = await Kanjis.create({
            kanji,
            onyomiReading: generateListWords(onyomiReading),
            kunyomiReading: generateListWords(kunyomiReading),
            meaning: generateListWords(meaning),
        });
        console.log("OK: " + newKanji);
        return res.json(newKanji);
    } catch (err) {
        if (err.code === 11000) {
            return res.json({ 'err': 'duplicated' });
        } 
        return res.json(err);
    }
};

const updateKanji = async (req, res) => {
    const { id } = req.params;
    
    const {
        kanji, onyomiReading, kunyomiReading, meaning
    } = req.body;

    if (!kanji || !onyomiReading || !kunyomiReading || !meaning) {
        return res.json({ "err": "invalid values" });
    }

    try {
        const updatedKanji = await Kanjis.findOneAndUpdate({ _id: id }, {
            kanji, 
            onyomiReading,
            kunyomiReading,
            meaning,
        }, { new: true });
        return res.json(updatedKanji);
    } catch (err) {
        return res.json(err);
    }
};

const deleteKanji = async (req, res) => {
    const { id } = req.params;
    try {
        const deletedAnime = await Kanjis.findOneAndDelete({ _id: id });
        return res.json(deletedAnime);
    } catch (err) {
        return res.json(err);
    }
}

module.exports = {
    getKanjiList, addKanji, updateKanji, deleteKanji
};