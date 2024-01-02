import Image from 'next/image';
import Link from 'next/link';
// import styles from './page.module.css'

export default function Home() {
  return (
    <main>
      <h3>Thi is HomePage</h3>
      <Link href="/contact">
        Contact Page
        <br />
      </Link>

      <Link href="/about">
        About Page
        <br />
      </Link>
    </main>
  );
}
