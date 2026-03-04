'use client';

import { useEffect, useState } from 'react';
// import { getFlights } from '../database/flights';
import Flight from './Flight';
import styles from './Flights.module.scss';

export default function FlightsPage() {
  const [selectedDepartureDate, setSelectedDepartureDate] = useState('');
  const [selectedReturnDate, setSelectedReturnDate] = useState('');
  const [selectFrom, setSelectFrom] = useState('');
  const [selectTo, setSelectTo] = useState('');
  const [availableFlights, setAvailableFlights] = useState([]);
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

  useEffect(
    () => {
      async function fetchUsers() {
        console.log('start fetching');
        console.log('length1: ' + availableFlights.length);
        const response = await fetch(
          'http://localhost:3000/api/products/flights',
        );
        console.log('response. ' + response);
        const json = await response.json();
        console.log('json: ' + json);

        setAvailableFlights(json);
        console.log('availableFlights' + availableFlights);
        console.log('length2: ' + availableFlights.length);
      }

      fetchUsers().catch((error) => {
        console.error(error);
      });
    },
    // Empty dependencies array = fetch once, on page load
    [],
  );

  if (availableFlights.length === 0) {
    return <>Loading...</>;
  }
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
            if (
              selectFrom === flight.departureCity &&
              selectTo === flight.arrivalCity
            ) {
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
