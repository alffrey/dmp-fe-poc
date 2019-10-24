import React from 'react';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  heroButtons: {
    marginTop: theme.spacing(4),
  },
}));

const HeroUnit = (props) => {
  const classes = useStyles();
  console.log('alff1: ', props);

  return (
    <Container maxWidth="sm">
      <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
        {props.title}
      </Typography>
      <Typography variant="h5" align="center" color="textSecondary" paragraph>
        {props.shortDesc}
      </Typography>
      <div className={classes.heroButtons}>
        <Grid container spacing={2} justify="center">
          <Grid item>
            <Button variant="contained" color="primary">
              Main call to action
            </Button>
          </Grid>
          <Grid item>
            <Button variant="outlined" color="primary">
              Secondary action
            </Button>
          </Grid>
        </Grid>
      </div>
    </Container>
  )
}

export default HeroUnit;