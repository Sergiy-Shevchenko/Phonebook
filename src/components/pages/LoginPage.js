import { useState } from "react"
import { useDispatch } from "react-redux";




export const Login = () => {

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
    <div>
        <h3>Login page</h3>

        <form onSubmit={handleSubmit} autoComplete="off"/>
        <label>
        E-mail
        <input
        type='email'
        name='email'
        value={email}
        onChange={handleCange}        
        />
        </label>

        <label>
        Password
        <input
        type='password'
        name='password'
        value={password}
        onChange={handleCange}        
        />
        </label>
        <button type="submit">Enter</button>
    </div>
)



}