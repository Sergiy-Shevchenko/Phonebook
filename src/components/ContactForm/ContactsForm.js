// import { useDispatch, useSelector } from 'react-redux';
import React, { useState } from 'react';
// import { Notify } from 'notiflix';
// import { addContact } from 'redux/operations';
// import { selectContacts } from 'redux/selector';

const styles = {

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
textAlign: 'center',
},
section: {
  width: 300,
  borderColor: 'black',
  paddingTop: 30,
  marginLeft: 'auto',
marginRight: 'auto',

  // width: '100%',
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



export const ContactsForm = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  // const dispatch = useDispatch();
  // const items = useSelector(selectContacts);

  const hendleChangetNane = ({ target: { value } }) => {
    setName(value);
  };

  const hendleChangeNumber = ({ target: { value } }) => {
    setNumber(value);
  };
  const hendleSubmit = event => {
    event.preventDefault();

    // const notmalizeNewContact = name.toLowerCase();
    // if (name === '') {
    //   return Notify.warning(`Please enter your name`);
    // }
    // if (number === '') {
    //   return Notify.warning(`${name} please enter your number`);
    // }
    // if (
    //   items.find(
    //     contact => contact.name.toLocaleLowerCase() === notmalizeNewContact
    //   )
    // ) {
    //   return Notify.failure(`${name} is alredy in contacts`);
    // }

    // dispatch(addContact({ name, number }));
    // resetForm();
  };
  // const resetForm = () => {
  //   setName('');
  //   setNumber('');
  // };

  return (
    <div style={styles.section}>
      <form  onSubmit={hendleSubmit}>
        <label>
        <h3 style={styles.title_input}>Name</h3>
          <input
           style={styles.input}
            type="text"
            value={name}
            onChange={hendleChangetNane}
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            // required
            // placeholder
          />
        </label>
        <label>
        <h3 style={styles.title_input}>Number</h3>
          <input
           style={styles.input}
            type="text"
            value={number}
            onChange={hendleChangeNumber}
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            // required
            // placeholder
          />
        </label>
        <button type="submit" style={styles.button}>
          Add contact
        </button>
      </form>
    </div>
  );
};
