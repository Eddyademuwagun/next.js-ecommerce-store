'use client';

import { useState } from 'react';
import Accommodation from './Accommodation';
import styles from './Accommodation.module.scss';

export default function AccommodationPage() {
  const [accommodations, setAccommodation] = useState([]);
  return (
    <>
      <div className={styles.background}>
        <div className={styles.accommodation}>
          <h1>Accommodation</h1>
          <p>
            {''}
            <i>Designed for Business, Built for Rest</i>
          </p>
        </div>

        <div className={styles.accommodationBox}>
          {' '}
          <div className={`${styles.card} ${styles.smallCard}`}>
            <div className={styles.accommodationCardBox}>
              <div>City</div>
            </div>
          </div>
        </div>

        <div className={styles.accommodationBox}>
          <div className={`${styles.card} ${styles.smallCard}`}>
            <div className={styles.accommodationCardBox}>
              <div>Check-in date</div>
            </div>
          </div>
        </div>

        <div className={styles.accommodationBox}>
          {' '}
          <div className={`${styles.card} ${styles.smallCard}`}>
            <div className={styles.accommodationCardBox}>
              <div>Check-out date</div>
            </div>
          </div>
        </div>

        <div className={styles.accommodationBox}>
          {' '}
          <div className={`${styles.card} ${styles.smallCard}`}>
            <div className={styles.accommodationCardBox}>
              <div>Number Of Guests</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
