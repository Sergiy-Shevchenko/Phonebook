import phone from '../components/Icons/telephonepng.parspng.com-5.png'

const styles = {
  container: {
    minHeigth: 'calc(100vh-50px)',
        alignItems: 'center',
   
  },
  title: {
    fontWisght: 500,
    fontSize: 36,
    textAlign: 'center',
    marginLeft: 'auto',
    marginRight: 'auto',
    color: 'rgba(5, 5, 254, 0.7)'
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
