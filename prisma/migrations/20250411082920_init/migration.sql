-- CreateTable
CREATE TABLE "Coords" (
    "id" TEXT NOT NULL,
    "character" TEXT NOT NULL,
    "xMin" INTEGER NOT NULL,
    "xMax" INTEGER NOT NULL,
    "yMin" INTEGER NOT NULL,
    "yMax" INTEGER NOT NULL,

    CONSTRAINT "Coords_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "LeaderBoard" (
    "id" TEXT NOT NULL,
    "player" TEXT NOT NULL,
    "timeTaken" TEXT NOT NULL,

    CONSTRAINT "LeaderBoard_pkey" PRIMARY KEY ("id")
);
