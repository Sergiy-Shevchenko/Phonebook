import {React, useEffect} from 'react';
import { ContactsForm } from "components/ContactForm/ContactsForm";
import { Filter } from 'components/Filter/Filter';
import ContactsList from 'components/ContactList/ContactsList';
import { useDispatch } from 'react-redux';
import { fethcContacts } from 'redux/contacts/contacts-operations';

const styles = {
    container: {
      widht: 400,
    alignItems: 'center',
    },
    title: {
      
      fontWisght: 400,
      fontSize: 36,
      textAlign: 'center',
      marginLeft: 'auto',
      marginRight: 'auto',
    },
    title_contacts: {
      fontWisght: 400,
      fontSize: 24,
      textAlign: 'center',
      marginLeft: 'auto',
      marginRight: 'auto',
      marginBottom: 15,
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
             <h3 style={styles.title_contacts}>Find contacts by name</h3>
             <Filter/>
             <ContactsList/>
            
            

        </div>   
      )        
}     
  
        