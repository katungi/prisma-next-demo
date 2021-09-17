import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

export default async function SongAPI(req, res) {
  const data = JSON.parse(req.body);
  const createdSong = await prisma.song.create({
    data,
  });

  console.log(createdSong);
  res.json(createdSong);
}
