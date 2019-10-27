import { Typography }          from '@material-ui/core';
import Button                  from '@material-ui/core/Button';
import Card                    from '@material-ui/core/Card';
import Divider                 from '@material-ui/core/Divider';
import Grid                    from '@material-ui/core/Grid';
import List                    from '@material-ui/core/List';
import ListItem                from '@material-ui/core/ListItem';
import ListItemText            from '@material-ui/core/ListItemText';
import NoSSR                   from '@material-ui/core/NoSsr';
import axios                   from 'axios';
import React                   from 'react';
import { addJoke, removeJoke } from '../../store/actions/jokes.actions';
import Layout                  from '../components/common/PageLayout';
import pageWrapper             from '../lib/pageWrapper';


const styles = theme => ({});

function DadJokes({ classes, dispatch, favoriteJokes }) {
  const [jokes, setJokes] = React.useState([]);

  async function fetchJokes() {
    const result       = await axios('https://icanhazdadjoke.com/', {
      headers: {
        accept: 'application/json',
      },
    });
    const { id, joke } = result.data;

    setJokes([...jokes, { id, joke }]);
  }

  function addFavJoke(joke) {
    return () => dispatch(addJoke(joke));
  }

  function removeFavJoke(joke) {
    return () => dispatch(removeJoke(joke));
  }

  return (
    <Layout>
      <Grid container direction="column" alignItems="center" spacing={4}>
        <Grid item>
          <Button variant="contained" color="primary" onClick={fetchJokes}>
            Fetch a joke !
          </Button>
        </Grid>
        <Grid item>
          <Card style={{ width: '100%' }}>
            <List elevation={4}>
              {
                jokes.map(({ id, joke }) => (
                  <React.Fragment key={id}>
                    <ListItem onClick={addFavJoke({ id, joke })}>
                      <ListItemText
                        primary={joke}
                      />
                    </ListItem>
                    <Divider/>
                  </React.Fragment>
                ))
              }
            </List>
          </Card>
        </Grid>
        <NoSSR>
          {
            !!favoriteJokes && favoriteJokes.length > 0 &&
            <Grid item>
              <Typography variant="h4" paragraph>
                My Favorite Jokes
              </Typography>
              <Card style={{ width: '100%' }}>
                <List elevation={4}>
                  {
                    favoriteJokes.map(({ id, joke }) => (
                      <React.Fragment key={id}>
                        <ListItem onClick={removeFavJoke({ id, joke })}>
                          <ListItemText
                            primary={joke}
                          />
                        </ListItem>
                        <Divider/>
                      </React.Fragment>
                    ))
                  }
                </List>
              </Card>
            </Grid>
          }
        </NoSSR>
      </Grid>
    </Layout>
  );
}

const mapStateToProps = ({ jokes }) => ({
  favoriteJokes: jokes,
});

export default pageWrapper(DadJokes, {
  name: 'dad-jokes',
  mapStateToProps,
  styles,
});
