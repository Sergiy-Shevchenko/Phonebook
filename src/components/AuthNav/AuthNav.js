import { NavLink } from 'react-router-dom';
import css from './AuthNav.styles.module.css';

export const AuthNav = () => {
  return (
    <div className={css.navi}>
      <nav className={css.list}>
        <NavLink className={css.item} to="login">
          Log In
        </NavLink>
        <NavLink className={css.item} to="registration">
          Register
        </NavLink>
      </nav>
    </div>
  );
};
