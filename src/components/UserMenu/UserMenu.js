import { useDispatch, useSelector } from 'react-redux';
import css from './UserMenu.styles.module.css';
import { selectUserName } from 'redux/ayth/auth-selector';
import { logOut } from 'redux/ayth/auth-operation';
import user from '../Icons/user.png';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const name = useSelector(selectUserName);

  return (
    <div className={css.list}>
      <img className={css.img} src={user} alt="user" />
      <p className={css.item}>Welcome {name}</p>
      <button
        type="button"
        onClick={() => dispatch(logOut())}
        className={css.button}
      >
        Exit
      </button>
    </div>
  );
};
