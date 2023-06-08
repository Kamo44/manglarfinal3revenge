const express = require("express");
const router = express.Router();

// Controllers
const { renderIndex, renderAbout, renderHome, renderCargaHogar, renderPanelSolar} = require("../controllers/index.controller");

router.get("/", renderIndex);
router.get("/about", renderAbout);
router.get("/home", renderHome);
router.get("/CargaHogar", renderCargaHogar);
router.get("/PanelSolar", renderPanelSolar);
module.exports = router;
