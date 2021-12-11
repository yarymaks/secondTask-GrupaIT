import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
  BookItem: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    '&:not(:last-child)': {
      marginBottom: '10px',
    },
  },
  BookName: {
    minWidth: '150px',
  },
  BookInfo: {
    width: '125px',
  },
  BookButton: {
    border: ' 2px solid rgba(255,255,255,0.27)',
    borderRadius: '0px 10px 0px 10px',
    backgroundColor: 'purple',
    color: 'white',
    '&:hover, &:focus': {
      '.BookItem': {
        backgroundColor: 'black',
      },
      backgroundColor: 'black',
    },
  },
});
export default useStyles;
