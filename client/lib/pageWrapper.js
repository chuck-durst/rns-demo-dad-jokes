import withI18next  from './withI18next';
import withPageData from './withPageData';
import { connect }  from 'react-redux';


/**
 * This is a page wrapper that does the following things:
 * - connect the component to redux
 * - connect the component to i18next
 * - inject pageData after having fetching it from the API
 * @param Component
 * @param {string} name: the slug name of the page (used by the api, etc)
 * @param {array} locales: additional locales that can be injected to the page
 * @param {function} mapStateToProps: you know what it is
 * @returns {*}
 */
export default (Component, {
  name,
  locales = [],
  mapStateToProps = null
}) => {
  return withPageData(name)(
    withI18next([name, ...locales])(
      connect(mapStateToProps)(
        Component
      )
    )
  );
};