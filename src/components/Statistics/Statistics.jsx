import css from './statistic.module.css';

const Statistics = ({ good, bad, neutral, total, positivePercentage }) => {
  return (
    <ul className={css.stat_list}>
      <li className={css.stat_item}>
        Good: <span> {good}</span>
      </li>
      <li className={css.stat_item}>
        Neutral: <span>{neutral}</span>
      </li>
      <li className={css.stat_item}>
        Bad: <span>{bad}</span>
      </li>
      <li className={css.stat_item}>
        Total: <span>{total}</span>
      </li>
      <li className={css.stat_item}>
        Positive feedback:{' '}
        <span
          style={
            parseInt(positivePercentage) > 49
              ? { color: 'green' }
              : { color: 'red' }
          }
        >
          {positivePercentage}
        </span>
      </li>
    </ul>
  );
};
export default Statistics;
