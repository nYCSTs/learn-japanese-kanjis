const express = require('express');
const routes = express.Router();
const KanjiController = require('./Controllers/KanjiController');
const RadicalsController = require('./Controllers/RadicalsController');

routes.get('/kanji/', KanjiController.getKanjiList);
routes.get('/kanji/shuffle', KanjiController.getShuffledKanjiList);
routes.post('/kanji/add', KanjiController.addKanji);
routes.put('/kanji/update/:id', KanjiController.updateKanji);
routes.delete('/kanji/delete/:id', KanjiController.deleteKanji);

routes.get('/radicals/', RadicalsController.getRadicalsList);
routes.get('/radical/:id', RadicalsController.getRadicalByID);
routes.post('/radicals/add', RadicalsController.registerRadical);
routes.put('/radicals/update/:id', RadicalsController.updateRadical);
routes.delete('/radicals/delete/:id', RadicalsController.deleteRadical);

module.exports = routes;