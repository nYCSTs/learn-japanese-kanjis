const express = require('express');
const routes = express.Router();
const KanjiController = require('./Controllers/KanjiController');

routes.get('/kanji/', KanjiController.getKanjiList);
routes.post('/kanji/add', KanjiController.addKanji);
routes.put('/kanji/update/:id', KanjiController.updateKanji);
routes.delete('/kanji/delete/:id', KanjiController.deleteKanji);

module.exports = routes;