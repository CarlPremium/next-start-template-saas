import Link from 'next/link';

export default function Custom500() {
  return (
    <div style={{ textAlign: 'center', padding: '4rem' }}>
      <h1>500 - Server Error</h1>
      <p>Sorry, something went wrong.</p>
      <Link href="/">Go back home</Link>
    </div>
  );
}
