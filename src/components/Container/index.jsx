import PropTypes from 'prop-types';
import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
  Container: {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '0 15px',
    '& h2': {
      display: 'inline-block',
      marginTop: '20px',
      marginBottom: '20px',
      fontSize: '35px',
      fontWeight: 'bold',
      backgroundImage:
        'linear-gradient(to left, violet, indigo, blue, green, black, orange, red)',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
    },
  },
});

const Container = ({ children }) => {
  const classes = useStyles();
  return <div className={classes.Container}>{children}</div>;
};

Container.propTypes = {
  children: PropTypes.node.isRequired,
};
export default Container;
