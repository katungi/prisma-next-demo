-- CreateTable
CREATE TABLE "Song" (
    "id" SERIAL NOT NULL,
    "art" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "artist" TEXT NOT NULL,

    CONSTRAINT "Song_pkey" PRIMARY KEY ("id")
);
