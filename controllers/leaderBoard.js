const { PrismaClient } = require(`@prisma/client`);
const prisma = new PrismaClient();

async function leaderBoard(req, res) {
  try {
    const data = await prisma.users.findMany({});
    res.json({ message: `LeaderBoard`, users: data });
  } catch (err) {
    res
      .status(501)
      .json({ message: `Internal Server error, try again`, error: err });
  }
}

module.exports = leaderBoard;
