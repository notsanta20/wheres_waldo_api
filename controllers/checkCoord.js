const { PrismaClient } = require(`../prisma/generated/prisma/client`);
const prisma = new PrismaClient();

async function checkCoord(req, res) {
  const { x, y, char } = req.query;
  const data = await prisma.coords.findFirst({
    where: {
      character: char,
    },
  });

  if (x > data.xMin && x < data.xMax && y > data.yMin && y < data.yMax) {
    res.json({ message: `You found ${char}`, found: true });
  } else {
    res.json({
      message: `${char} is not there, look somewhere else!!`,
      found: false,
    });
  }
}

module.exports = checkCoord;
