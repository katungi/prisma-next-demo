import { PrismaClient } from '@prisma/client';
import Head from 'next/head';
import Link from 'next/link';
import Card from '../components/cards';

const prisma = new PrismaClient();

/** @param {import('next').InferGetServerSidePropsType<typeof getServerSideProps> } props */
export default function Home({ data }) {
  return (
    <div className='flex flex-col items-center justify-center min-h-screen py-2'>
      <Head>
        <title>Music Box</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main className='flex flex-col items-center justify-center w-full flex-1 px-20 text-center'>
        <h1 className='text-2xl xs:text-3xl md:text-6xl font-bold'>
          Welcome to{' '}
          <a className='text-green-600' href='https://nextjs.org'>
            Music Box
          </a>
        </h1>

        <div className='mt-4 grid grid-cols-1 xs:grid-cols-3 md:grid-cols-4 xl:grid-cols-4 gap-4'>
          {data.map((item) => (
            <Card
              title={item.title}
              art={item.art}
              artist={item.artist}
              key={item.id}
            />
          ))}
        </div>
        <Link href='/create' passHref={true}>
          <button className='rounded-lg border-2 border-solid border-green-600 p-5 text-center text-green-600 mt-10'>
            Add to Music Box
          </button>
        </Link>
      </main>
    </div>
  );
}

export async function getServerSideProps() {
  const songs = await prisma.song.findMany();

  return {
    props: {
      data: songs,
    },
  };
}
