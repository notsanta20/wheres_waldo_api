const express = require(`express`);
const router = express.Router();
const checkCoord = require(`../controllers/checkCoord`);
const leaderBoard = require(`../controllers/leaderBoard`);
const addName = require(`../controllers/addName`);

router.get(`/checkCoord`, checkCoord);
router.get(`/leaderBoard`, leaderBoard);
router.post(`/leaderBoard`, addName);

module.exports = router;
