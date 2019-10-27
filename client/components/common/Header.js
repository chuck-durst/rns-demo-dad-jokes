import AppBar           from '@material-ui/core/AppBar';
import Avatar           from '@material-ui/core/Avatar';
import Grid             from '@material-ui/core/Grid';
import Toolbar          from '@material-ui/core/Toolbar';
import clx              from 'classnames';
import React            from 'react';
import envBoolean       from '../../../helpers/envBoolean';
import packageJson      from '../../../package';
import componentWrapper from '../../lib/componentWrapper';
import LangSwitch       from '../utils/LangSwitch';
import Link             from './Link';


const styles = theme => ({

  container: {
    [theme.breakpoints.down('xs')]: {
      padding: theme.spacing(2),
    },
  },

  title: {},

  link: {
    color: theme.palette.error.main,
    paddingRight: theme.spacing(4),

    [theme.breakpoints.down('xs')]: {
      marginBottom: theme.spacing(2),
    },
  },

  link__active: {
    color: theme.palette.secondary.main,
  },

  langSwitchSelect: {
    color: theme.palette.error.main,
  },

  langSwitchText: {
    fontSize: theme.typography.body1.fontSize,
  },

  githubLink: {
    marginLeft: theme.spacing(2),
    '& svg': {
      width: 30,

      [theme.breakpoints.down('xs')]: {
        width: 20,
      },
    },
  },

  miscContainer: {
    [theme.breakpoints.down('xs')]: {
      marginTop: theme.spacing(1),
    },
  },
});


/**
 * Header component of the App
 * You can keep and customize this component or remove it depending on your needs
 * @param props
 * @returns {*}
 * @constructor
 */
const Header = React.memo(function Header(props) {

  let {
        classes,
        t = e => e,
      } = props;

  const showDevToolsLinks = envBoolean(process.env.KEEP_DEV_TOOLS_ON_PRODUCTION) || process.env.NODE_ENV !== 'production';

  return (
    <AppBar position="static" color="primary">
      <Toolbar className={classes.container}>
        <Grid container alignItems="center" justify="flex-start" spacing={2}>
          <Grid item>
            <Avatar src="/static/imgs/logo.jpg"/>
          </Grid>
          <Grid item>
            <Grid container alignItems="center" justify="flex-start">
              <Grid item xs={12} md="auto">
                <Link to={'/'} className={clx(classes.title,
                  classes.link)} activeClassName={classes.link__active} variant="h5">
                  {packageJson.name}
                  <small> v{packageJson.version}</small>
                </Link>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  );
});

export default componentWrapper(Header, {
  styles,
});
