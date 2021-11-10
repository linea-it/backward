import { makeStyles } from '@material-ui/core/styles';

const styles = makeStyles(() => ({
  bodyTextBigger: {
    fontSize: '1.25rem',

    '& ul, & ol': {
      marginTop: 0,
    },
  },
}));

export default styles;
