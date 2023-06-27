import { useState } from "react"
// import { useDispatch } from "react-redux";

const styles = {
    container: {
        width: 300,
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
    },
    title_input: {
        fontSize: 18, 
        fontWisght: 100,
    paddingTop: 10,
    paddingBottom: 5,
    },
    input: {
      fontWisght: 100,
      fontSize: 24,
    //   textAlign: 'center',
    },
    section: {
        width: '100%',
    marginTop: 30,
    border: '1px solid grey',
    borderRadius: '10px',
    padding: 10,

        },
    button: {
        fontSize: 16,
        marginTop: 15,
        marginLeft: 'auto',
        marginRight: 'auto',
        border: '1px solid grey',
        borderRadius: '2px',
    } 
  };




export const LoginForm = () => {

// const dispatch = useDispatch()


// const [name, setName] = useState('');
const [email, setMail] = useState('');
const [password, setPassword] = useState('');

const handleCange = ({target:{name, value}}) => {
    switch(name) {
        case 'email':
            return setMail(value);
        case 'password': 
            return setPassword(value);
        default:
            return;
    }
}

const handleSubmit = event => {
    event.preventeDefault();
    // dispatch(authOperations.logIn({email, password}))
    setMail('')
    setPassword('')
};

return (
    <div style={styles.container}>
        <h3 style={styles.title}>Log In form</h3>
<div style={styles.section}>
<form onSubmit={handleSubmit} autoComplete="off"/>
        <label>
        <h3 style={styles.title_input}>E-mail</h3>
       
        <input style={styles.input}
        type='email'
        name='email'
        value={email}
        onChange={handleCange}        
        />
        </label>

        <label>
            <h3 style={styles.title_input}>Password</h3>
        
        <input style={styles.input}
        type='password'
        name='password'
        value={password}
        onChange={handleCange}        
        />
        </label>
        <button type="submit" style={styles.button}>Log In</button>


</div>
        
    </div>
)



}