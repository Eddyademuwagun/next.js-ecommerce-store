'use client';

import { useState } from 'react';
import styles from './Flights.module.scss';

export default function FlightsPage() {
  const [selectedDepartureDate, setSelectedDepartureDate] = useState('');
  const [selectedReturnDate, setSelectedReturnDate] = useState('');
  const [selectFrom, setSelectFrom] = useState('');
  const [selectTo, setSelectTo] = useState('');
  const availableFlights = [
    {
      from: 'Athens',
      to: 'Vienna',
      departure: '7.4.2026',
      airline: 'lot',
      duration: '2hrs',
      price: '€70',
    },
    {
      from: 'Paris',
      to: 'Amsterdam',
      departure: '7.4.2026',
      airline: 'birds',
      duration: '2hrs',
      price: '€150',
    },
  ];
  return (
    <>
      <div className={styles.flights}>
        <h1>flights</h1>
        <br></br>
        <br></br>
        <p>Discover your next adventure</p>
      </div>

      <div className={styles.fligtContainer}>
        <div className={styles.flightCard}>
          <div className={styles.fligtCardContainer}>
            <div>From</div>
            <select
              value={selectFrom}
              onChange={(e) => setSelectFrom(e.target.value)}
            >
              <option value="">Choose city</option>
              <option value="vienna">Vienna</option>
              <option value="amsterdam">Amsterdam</option>
              <option value="london">London</option>
              <option value="paris">Paris</option>
              <option value="athens">Athens</option>
            </select>
          </div>
        </div>
        <div className={styles.flightCard}>
          <div className={styles.fligtCardContainer}>
            <div>To</div>
            <select
              value={selectTo}
              onChange={(e) => setSelectTo(e.target.value)}
            >
              <option value="">Choose city</option>
              <option value="vienna">Vienna</option>
              <option value="amsterdam">Amsterdam</option>
              <option value="london">London</option>
              <option value="paris">Paris</option>
              <option value="athens">Athens</option>
            </select>
          </div>
        </div>
        <div className={styles.flightCard}>
          <div className={styles.fligtCardContainer}>
            <div>Departure</div>
            <div className={styles.dateTab}>
              <input
                id="flight-date"
                type="date"
                value={selectedDepartureDate}
                onChange={(e) => setSelectedDepartureDate(e.target.value)}
              />
            </div>
            {selectedDepartureDate && (
              <p className={styles.selectedDate}>{selectedDepartureDate}</p>
            )}
          </div>
        </div>
        <div className={styles.flightCard}>
          <div className={styles.fligtCardContainer}>
            <div>Return</div>
            <div className={styles.dateTab}>
              <input
                id="flight-date"
                type="date"
                value={selectedReturnDate}
                onChange={(e) => setSelectedReturnDate(e.target.value)}
              />
            </div>
            {selectedReturnDate && (
              <p className={styles.selectedDate}>{selectedReturnDate}</p>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
