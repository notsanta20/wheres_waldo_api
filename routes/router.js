const express = require(`express`);
const router = express.Router();
const timer = require(`../controllers/timer`);
const checkCoord = require(`../controllers/checkCoord`);

router.get(`/timer`, timer);
router.get(`/checkCoord`, checkCoord);

module.exports = router;
