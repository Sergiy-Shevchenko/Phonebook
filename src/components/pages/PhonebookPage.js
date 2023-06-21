
const styles = {
    container: {
      minHeigth: 'calc(100vh-50px)',
      display: 'flex',
      alignItems: 'center',
    },
    title: {
      fontWisght: 500,
      fontSize: 48,
      textAlign: 'center',
      marginLeft: 'auto',
      marginRight: 'auto',
    },
  };

export const Phonebook = () => {
    return (
        <div style={styles.container}>
             <h2 style={styles.title}>Phonebook</h2>
        </div>   
      )        
}     
  
        