import Image from 'next/image';
import Link from 'next/link';
import styles from './page.module.css';

export const metadata = {
  title: 'wings',
  description: 'Your flight broker',
};

export default function Home() {
  return (
    <div className={styles.page}>
      {/* <main className={styles.main}></main> */}
      <div>
        <Link href="/flights">
          <div className={styles.flights}>Flights</div>
        </Link>
        <Link href="/car-rental">
          <div className={styles.carRental}>Car Rental</div>
        </Link>
        <Link href="/accomodation">
          <div className={styles.accomodation}>Accomodation</div>
        </Link>
      </div>
    </div>
  );
}
