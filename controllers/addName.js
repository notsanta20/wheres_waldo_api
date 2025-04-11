const { PrismaClient } = require(`../prisma/generated/prisma/client`);
const prisma = new PrismaClient();

async function addName(req, res) {
  const { name, time } = req.body;

  try {
    data = await prisma.leaderBoard.create({
      data: {
        player: name,
        timeTaken: time.currentTime,
      },
    });
    res.json({ message: `Player successfully added to Leaderboard` });
  } catch (err) {
    res
      .status(501)
      .json({ message: `Internal Server error, try again`, error: err });
  }
}

module.exports = addName;
