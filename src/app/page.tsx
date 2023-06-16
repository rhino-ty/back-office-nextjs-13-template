import Link from 'next/link';

export default function Home() {
  return (
    <main className='flex min-h-screen flex-row items-center justify-center'>
      Hi! This is
      <Link
        href='https://m3.material.io/'
        className='ml-1 hover:text-blue-400 animate-bounce'
      >
        Home
      </Link>
      !
    </main>
  );
}
