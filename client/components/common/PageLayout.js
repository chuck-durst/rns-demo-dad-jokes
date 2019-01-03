import Grid           from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';
import PropTypes      from 'prop-types';
import React          from 'react';
import Inspector      from 'react-inspector';
import config         from '../../../config';
import Error          from '../../pages/_error';
import Head           from './Head';
import Header         from './Header';

const styles = theme => ({

  root: {
    '&.full-page .page-layout-content': {
      [theme.breakpoints.down('sm')]: {
        paddingTop: `${theme.spacing.unit * 2}px`,
      },
    },
  },

  layout: {
    margin: '0 auto',
    background: theme.palette.grey[50],
  },

  container: {
    maxWidth: config.layout.pageContentMaxWidth,
    minHeight: '100vh',
    margin: 'auto',
  },

  content: {
    paddingTop: `${theme.spacing.unit * 8}px`,
    paddingLeft: theme.styles.responsivePadding.paddingLeft,
    paddingRight: theme.styles.responsivePadding.paddingRight,
    [theme.breakpoints.down('md')]: {
      paddingTop: `${theme.spacing.unit * 8}px`,
      ...theme.styles.responsivePadding[theme.breakpoints.down('md')],
    },
    [theme.breakpoints.down('sm')]: {
      paddingTop: `${theme.spacing.unit * 6}px`,
      ...theme.styles.responsivePadding[theme.breakpoints.down('sm')],
    },
    [theme.breakpoints.down('xs')]: {
      paddingTop: `${theme.spacing.unit * 6}px`,
      ...theme.styles.responsivePadding[theme.breakpoints.down('xs')],
    },
  },
});


/**
 *  This component is a simple page layout that must be added to every page of the app.
 *  Note that in order to work properly, it needs a 'pageData' prop that contains
 *  all the information about the current page (those information have generally been fetched from an API but it can also
 *  be a simple config file or anything else). This prop will principally be used for SEO purpose, like generating the page <head>
 *  tag with some metas, title, etc.
 *
 *  Note that all other props passed to this component (except 'children' of course) will be passed
 *  to the Head component. It means that you can easily override some pageData properties like title for example.
 * @param props
 * @returns {*}
 */
const PageLayout = withStyles(styles)(function Layout(props) {

  let {
        pageData, // The pageData object received by the component
        children, // the page content
        classes,
        backgroundColor, // The background color of the page
        debug, // An object to display on the inspector tool (dev only)
        ...rest // Any other property will be assigned to the pageData object
      } = props;

  // Display an error if pageData is not defined or if it contains an error
  if (!pageData || pageData.error === 404 || (pageData.error && pageData.error !== 404)) {
    const statusCode = pageData && pageData.statusCode ? pageData.statusCode : 404;
    return <Error statusCode={statusCode}/>;
  }

  Object.assign(pageData || {}, rest);

  return (
    <div className={`${ classes.root } page-${pageData.title}`}>
      <Head {...pageData}/>
      <Header/>
      <Grid container className={classes.layout} style={backgroundColor ? { backgroundColor } : {}}>
        <Grid item xs={12}>
          <div className={classes.container}>
            <div className={classes.content}>
              {children}
            </div>
          </div>
        </Grid>
      </Grid>

      {
        // Optional inspector tool displayed at the bottom of the page
        process.env.NODE_ENV === 'development' && typeof debug === 'object' &&
        <div style={{
          position: 'fixed',
          bottom: 0,
          left: 0,
          width: '100%',
          zIndex: 1000,
        }}>
          <Inspector
            theme="chromeDark"
            data={debug}
            expandLevel={0}
          />
        </div>
      }
    </div>
  );
});

PageLayout.propTypes = {
  pageData: PropTypes.object,
  children: PropTypes.any,
  classes: PropTypes.object,
  backgroundColor: PropTypes.string,
  debug: PropTypes.object,
};

export default PageLayout;
