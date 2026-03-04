'use client';

import { useState } from 'react';
// import { getFlights } from '../database/flights';
import Flight from './Flight';
import styles from './Flights.module.scss';

export default function FlightsPage() {
  const [selectedDepartureDate, setSelectedDepartureDate] = useState('');
  const [selectedReturnDate, setSelectedReturnDate] = useState('');
  const [selectFrom, setSelectFrom] = useState('');
  const [selectTo, setSelectTo] = useState('');
  const availableFlights = [];
  // [
  // {
  //   id: 1,
  //   from: 'Athens',
  //   to: 'Vienna',
  //   departure: '7.4.2026',
  //   airline: 'lot',
  //   duration: '2hrs',
  //   price: '€70',
  //   image: 'lot.jpg',
  // },
  //   {
  //     id: 2,
  //     from: 'Paris',
  //     to: 'Amsterdam',
  //     departure: '7.4.2026',
  //     airline: 'birds',
  //     duration: '2hrs',
  //     price: '€150',
  //     image: 'bird.jpg',
  //   },
  // ];
  return (
    <>
      <div className={styles.flights}>
        <h1>flights</h1>
        <br></br>
        <br></br>
        <p>
          {' '}
          <i>Discover your next adventure</i>
        </p>
      </div>

      <div className={styles.background}>
        {' '}
        <div className={styles.fligtContainer}>
          <div className={`${styles.card} ${styles.smallCard}`}>
            <div className={styles.fligtCardContainer}>
              <div>From</div>
              <select
                value={selectFrom}
                onChange={(e) => setSelectFrom(e.target.value)}
              >
                <option value="">Choose city</option>
                <option value="Vienna">Vienna</option>
                <option value="Amsterdam">Amsterdam</option>
                <option value="London">London</option>
                <option value="Paris">Paris</option>
                <option value="Athens">Athens</option>
              </select>
            </div>
          </div>
          <div className={`${styles.card} ${styles.smallCard}`}>
            <div className={styles.fligtCardContainer}>
              <div>To</div>
              <select
                value={selectTo}
                onChange={(e) => setSelectTo(e.target.value)}
              >
                <option value="">Choose city</option>
                <option value="Vienna">Vienna</option>
                <option value="Amsterdam">Amsterdam</option>
                <option value="London">London</option>
                <option value="Paris">Paris</option>
                <option value="Athens">Athens</option>
              </select>
            </div>
          </div>
          <div className={`${styles.card} ${styles.smallCard}`}>
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
          <div className={`${styles.card} ${styles.smallCard}`}>
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
        <ul>
          {availableFlights.map((flight) => {
            if (selectFrom === flight.from && selectTo === flight.to) {
              return (
                <li key={`flight-${flight.id}`}>
                  <Flight flight={flight} />
                </li>
              );
            }
          })}
        </ul>
      </div>
    </>
  );
}
