import { Reack } from 'react';
import phone from '../Icons/telephonepng.parspng.com-5.png'

const styles = {
  container: {
    minHeigth: 'calc(100vh-50px)',
    // display: 'flex',
    alignItems: 'center',
   
  },
  title: {
    fontWisght: 500,
    fontSize: 48,
    textAlign: 'center',
    marginLeft: 'auto',
    marginRight: 'auto',
  },
 img: {
  display: 'block',
  marginLeft: 'auto',
  marginRight: 'auto',
 },
};

export const HomePage = () => {
    return (
      <div style={styles.container}>
        <h2 style={styles.title}>Welcome to phonebook!</h2>
        <img style={styles.img} src={phone}  alt='phone'/> 
      </div>
    );
  };
