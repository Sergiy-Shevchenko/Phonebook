import {React, useEffect} from 'react';
import { ContactsForm } from "components/ContactForm/ContactsForm";
import { Filter } from 'components/Filter/Filter';
import ContactsList from 'components/ContactList/ContactsList';
import ContactsItem from 'components/ContactItem/ContactItem';
import { useDispatch } from 'react-redux';
import { fethcContacts } from 'redux/contacts/contacts-operations';

const styles = {
    container: {
    alignItems: 'center',
    },
    title: {
      fontWisght: 400,
      fontSize: 36,
      textAlign: 'center',
      marginLeft: 'auto',
      marginRight: 'auto',
    },
  };

export const Phonebook = () => {
  const dispatch = useDispatch()

  useEffect(()=>{
    dispatch(fethcContacts())
  }, [dispatch])
    return (
        <div style={styles.container}>
             <h2 style={styles.title}>Phonebook</h2>
             <ContactsForm/>
             <h2 style={styles.title}>Contacts</h2>
             <h3>Find contacts by name</h3>
             {/* <Filter/> */}
             <ContactsList/>
             <ContactsItem/> 
            

        </div>   
      )        
}     
  
        