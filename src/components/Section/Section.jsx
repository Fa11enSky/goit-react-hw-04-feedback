import css from './section.module.css';
const Section = ({ title, children }) => {
  return (
    <section className={css.main}>
      <h1 className={css.main_title}>{title}</h1>
      {children}
    </section>
  );
};
export default Section;
