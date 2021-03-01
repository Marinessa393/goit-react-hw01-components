import React from 'react';
import s from './TransactionHistory.module.css';
import PropTypes from 'prop-types';

function TransactionHistory({ items }) {
  return (
    <>
      <table className={s.transactionHistory}>
        <thead>
          <tr>
            <th className={s.title}>Type</th>
            <th className={s.title}>Amount</th>
            <th className={s.title}>Currency</th>
          </tr>
        </thead>
        <tbody>
          {items.map(el => {
            const { id, type, amount, currency } = el;
            return (
              <tr key={id}>
                <td className={s.firstItem}>{type}</td>
                <td className={s.secondItem}>{amount}</td>
                <td className={s.thirdItem}>{currency}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
}

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    }),
  ),
};

export default TransactionHistory;
