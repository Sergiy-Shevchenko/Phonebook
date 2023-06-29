import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { logIn } from 'redux/ayth/auth-operation';

const styles = {
  container: {
    paddingTop: 30,
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  title: {
    fontWisght: 500,
    fontSize: 36,
    textAlign: 'center',
    marginLeft: 'auto',
    marginRight: 'auto',
    color: 'rgb(0, 139, 252)',
  },
  title_input: {
    fontSize: 18,
    fontWisght: 100,
    paddingTop: 10,
    paddingBottom: 5,
    color: 'rgb(0, 139, 252)',
  },
  input: {
    fontSize: 18,
  },
  section: {
    width: 230,
    marginTop: 30,
    border: '1px solid rgb(0, 139, 252)',
    boxShadow: `0px 2px 2px rgba(0, 0, 0, 0.12), 0px 4px 4px rgba(0, 0, 0, 0.06),
  1px 4px 6px rgba(0, 0, 0, 0.16)`,
    borderRadius: '10px',
    padding: 10,
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  button: {
    fontSize: 16,
    marginTop: 15,
    marginLeft: 'auto',
    marginRight: 'auto',
    border: '1px solid grey',
    borderRadius: '2px',
    color: 'rgb(0, 139, 252)',
  },
};

export const LoginForm = () => {
  const dispatch = useDispatch();

  const [email, setMail] = useState('');
  const [password, setPassword] = useState('');

  const handleCange = ({ target: { name, value } }) => {
    switch (name) {
      case 'email':
        return setMail(value);
      case 'password':
        return setPassword(value);
      default:
        return;
    }
  };

  const handleSubmit = event => {
    event.preventDefault();
    dispatch(logIn({ email, password }));
    setMail('');
    setPassword('');
  };

  return (
    <div style={styles.container}>
      <h3 style={styles.title}>Log In form</h3>
      <div style={styles.section}>
        <form onSubmit={handleSubmit}>
          <label>
            <h3 style={styles.title_input}>E-mail</h3>
            <input
              style={styles.input}
              type="email"
              name="email"
              value={email}
              onChange={handleCange}
            />
          </label>

          <label>
            <h3 style={styles.title_input}>Password</h3>
            <input
              style={styles.input}
              type="password"
              name="password"
              value={password}
              onChange={handleCange}
            />
          </label>
          <button type="submit" style={styles.button}>
            Log In
          </button>
        </form>
      </div>
    </div>
  );
};
