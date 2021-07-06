const express = require('express');
const routes = express.Router();
const KanjiController = require('./Controllers/KanjiController');
const RadicalsController = require('./Controllers/RadicalsController');

routes.get('/kanji/', KanjiController.getKanjiList);
routes.post('/kanji/add', KanjiController.addKanji);
routes.put('/kanji/update/:id', KanjiController.updateKanji);
routes.delete('/kanji/delete/:id', KanjiController.deleteKanji);

routes.get('/radicals/', RadicalsController.getRadicalsList);
routes.post('/radicals/add', RadicalsController.registerRadical);
routes.delete('/radicals/delete/:id', RadicalsController.deleteRadical);

module.exports = routes;