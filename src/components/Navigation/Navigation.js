import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from 'redux/ayth/auth-selector';
import logo from '../Icons/telephonepng.parspng.com-5.png';
import css from './Navigation.styles.module.css';

export const Navigation = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  return (
    <div className={css.navi}>
      <img className={css.img} src={logo} alt="logo" />
      <h2 className={css.title}>Phonebook</h2>
      <nav className={css.list}>
        <NavLink className={css.item} to="/">
          Home
        </NavLink>
        {isLoggedIn && (
          <NavLink className={css.item} to="phonebook">
            Contacts
          </NavLink>
        )}
      </nav>
    </div>
  );
};
