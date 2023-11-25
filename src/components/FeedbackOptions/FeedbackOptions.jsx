import css from './feedbackOptions.module.css';
const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <ul className={css.list}>
      {options.map(el => {
        return (
          <li key={el} className={css.list_item}>
            <button
              className={css.btn}
              type="button"
              data-id={el}
              onClick={()=>onLeaveFeedback(el)}
            >
              {el.slice(0, 1).toUpperCase() + el.slice(1, el.lenght)}
            </button>
          </li>
        );
      })}
    </ul>
  );
};
export default FeedbackOptions;
