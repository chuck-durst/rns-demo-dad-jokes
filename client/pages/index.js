import Button      from '@material-ui/core/Button';
import Grid        from '@material-ui/core/Grid';
import Typography  from '@material-ui/core/Typography';
import React       from 'react';
import Link        from '../components/common/Link';
import Layout      from '../components/common/PageLayout';
import LazyImage   from '../components/utils/LazyImage';
import pageWrapper from '../lib/pageWrapper';


const styles = theme => ({
  title: {
    marginBottom: theme.spacing(4),
  },
});

const Home = React.memo(function ({ pageData, classes }) {
  return (
    <Layout pageData={pageData}>
      <Grid container alignItems="center" direction="column" spacing={5} style={{ height: '100%' }}>
        <Grid item>
          <Typography variant="h1" className={classes.title} align="center" paragraph>
            Welcome to Dad Jokes !
          </Typography>
        </Grid>
        <Grid item>
          <LazyImage src="/static/imgs/logo.jpg" width={200} className="rotating"/>
        </Grid>
        <Grid item>
          <Link to="/dad-jokes" noTypo>
            <Button variant="contained" color="primary">Get a Joke NOW</Button>
          </Link>
        </Grid>
      </Grid>
    </Layout>
  );
});


export default pageWrapper(Home, {
  name: 'home',
  styles,
});
