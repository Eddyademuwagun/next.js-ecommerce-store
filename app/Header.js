import Link from 'next/link';
import styles from './Header.module.scss';

export default function Header() {
  return (
    <header className={styles.header}>
      <div>
        <Link href="/">Homepage</Link>
        <Link href="/flights">Flights</Link>
        <Link href="/car-rental">Car Rental</Link>
        <Link href="/accommodation">Accommodation</Link>
        <Link href="/privacy-policy">Privacy Policy</Link>
        <Link href="/cookies-lang-switcher">Switch Language</Link>
      </div>
    </header>
  );
}
