const Radicals = require('../Models/RadicalsSchema');

const getRadicalsList = async (req, res) => {
    return res.json(await Radicals.find({}).sort({"strokeCount": 1}));
}

const getRadicalByID = async (req, res) => {
    const { id } = req.params;
    try {
        return res.json(await Radicals.findOne({ _id: id }));
    } catch (err) {
        return err;
    }
};

const getRadicalByIDs = async (req, res) => {
    const {
        radicalsList 
    } = req.body;

    try {
        const response = await Radicals.find({'_id':{$in:radicalsList}});
        return res.json(response);
    } catch (err) {
        return err;
    };
};

const registerRadical = async (req, res) => {
    const {
        shape, meaning, strokeCount,
    } = req.body;

    try {
        const newRadical = await Radicals.create({
            shape,
            meaning,
            strokeCount
        });
        return res.json(newRadical);
    } catch (err) {
        if (err.code === 11000) {
            return res.json({ 'err': 'duplicated' });
        } 
        return res.json(err);
    }
}

const updateRadical = async (req, res) => {
    const { id } = req.params;
    const {
        shape, meaning, strokeCount
    } = req.body;

    try {
        const updatedRadical = await Radicals.findOneAndUpdate({ _id: id }, {
            shape,
            meaning,
            strokeCount
        }, { new: true });
        return res.json(updatedRadical);
    } catch (err) {
        if (err.code === 11000) {
            return res.json({ 'err': 'duplicated' });
        }
        return res.json(err);
    }
}

const deleteRadical = async (req, res) => {
    const { id } = req.params;

    const deletedRadical = await Radicals.findOneAndDelete({ _id: id });
    return res.json(deletedRadical);
}

module.exports = {
    getRadicalsList, getRadicalByID, getRadicalByIDs, registerRadical, updateRadical, deleteRadical,
};