import {React} from 'react';
import { ContactsForm } from "components/ContactForm/ContactsForm";
//import ContactsList from 'components/ContactList/ContactsList';

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
    return (
        <div style={styles.container}>
             <h2 style={styles.title}>Phonebook</h2>
             <ContactsForm/>
         
            

        </div>   
      )        
}     
  
        