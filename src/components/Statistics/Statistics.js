// import React from "react"
import styles from './Statistics.module.css';
import PropTypes from 'prop-types';

function Statistics({ title, stats }) {
  return (
    <>
      <section className={styles.statistics}>
        {title && <h2 className={styles.title}>{title}</h2>}

        <ul className={styles.statList}>
          {stats.map(el => {
            const { id, label, percentage } = el;
            return (
              <li
                className={styles.item}
                key={id}
                style={{ backgroundColor: bgColor() }}
              >
                <span className={styles.label}>{label}</span>
                <span className={styles.percentage}>{percentage}%</span>
              </li>
            );
          })}
        </ul>
      </section>
    </>
  );
}

function bgColor() {
  return (
    '#' + (Math.random().toString(16) + '000000').substring(2, 8).toUpperCase()
  );
}

Statistics.defaultProps = {
  title: 'string',
};

Statistics.propTypes = {
  title: PropTypes.string,
  statData: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      parcentage: PropTypes.number,
    }),
  ),
};

export default Statistics;
