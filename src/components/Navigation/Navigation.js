import { NavLink } from 'react-router-dom';
import css from './Navigation.styles.module.css';

export const Navigation = () => {
  return (
    <div className={css.navi}>
      <h2 className={css.title}>Phonebook</h2>
      <nav className={css.list}>
        <NavLink className={css.item} to="/">
          Home
        </NavLink>
        <NavLink className={css.item} to="phonebook">
          Phonebook
        </NavLink>
      </nav>
    </div>
  );
};
