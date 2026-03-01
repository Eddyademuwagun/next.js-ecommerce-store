import styles from './Flights.module.scss';

export default function Flight({ flight }) {
  return (
    <div className={styles.fligtCardContainer}>
      <div className={`${styles.card} ${styles.bigCard}`}>
        <img className={styles.image} src={flight.image} alt={flight.image} />
        <div>From: {flight.from}</div>
        <div>To: {flight.to}</div>
        <div>Departure: {flight.departure} </div>
        <div>Airline: {flight.airline} </div>
        <div>Duration: {flight.duration} </div>
        <div>Price: {flight.price}</div>
      </div>
    </div>
  );
}
