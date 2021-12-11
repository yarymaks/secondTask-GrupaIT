import { createUseStyles } from 'react-jss';
const useStyles = createUseStyles({
  Library: {
    width: '700px',
    border: '2px solid black',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: '10px',
    padding: '10px 10px',
    '& button': {
      border: ' 2px solid rgba(136,31,136,0.87)',
      borderRadius: '20px 0px 20px 0px',
      backgroundColor: 'white',
      padding: '5px 30px',
      '&:hover, &:focus': {
        backgroundColor: 'indigo',
        borderColor: 'indigo',
        color: 'white',
        outline: 'none ',
      },
    },
  },
  LibraryInput: {
    display: 'flex',
    width: '215px',
    flexDirection: 'column',
    marginBottom: '20px',
    '& span': {
      marginBottom: '10px',
      fontSize: '20px',
    },
    '& input': {
      minWidth: '225px',
      border: 'none',
      borderRadius: '10px',
      padding: '5px 15px',
      fontSize: '15px',
      '&:hover, &:focus': {
        outline: 'none',
      },
    },
  },
  LibrarySubmit: {
    width: '150px',
  },
});

export default useStyles;
