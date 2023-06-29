// import phone from '../components/Icons/telephonepng.parspng.com-5.png'
import book from '../components/Icons/pngtree-blue-phone-book.png';

const styles = {
  container: {
    width: 1400,
    minHeigth: 'calc(100vh-50px)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 250,
    paddingLeft: 25,
    paddingRight: 25,
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  title: {
    fontWisght: 500,
    fontSize: 36,
    textAlign: 'center',

    marginRight: 30,
    color: 'rgb(0, 139, 252)',
  },
  img: {
    display: 'block',
    width: 150,
  },
};

export const HomePage = () => {
  return (
    <div style={styles.container}>
      <img style={styles.img} src={book} alt="book" />
      <h2 style={styles.title}>Welcome to phonebook!</h2>
    </div>
  );
};
