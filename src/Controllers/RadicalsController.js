const Radicals = require('../Models/RadicalsSchema');

const getRadicalsList = async (req, res) => {
    return res.json(await Radicals.find());
}

const registerRadical = async (req, res) => {
    const {
        shape, meaning
    } = req.body;

    try {
        const newRadical = await Radicals.create({
            shape,
            meaning
        });
        return res.json(newRadical);
    } catch (err) {
        return res.json(err);
    }
}

const deleteRadical = async (req, res) => {
    const { id } = req.params;

    const deletedRadical = await Radicals.findOneAndDelete({ _id: id });
    return res.json(deletedRadical);
}

module.exports = {
    getRadicalsList, registerRadical, deleteRadical,
};