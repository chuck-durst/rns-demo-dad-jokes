/**
 * This is where your app routes are defined
 *
 * A route should look like this :
 * '/readme': { page: '/readme', prefetch: true, neverCache: false },
 *
 * - '/readme' : The route name. This name will mainly be used to define links through the app
 * - 'page': This is the only required attribute. It is the path to the page component in the /client/pages folder
 * - 'prefetch' : This allows you to enable the NextJs prefetch feature on every link that point to this route
 * - 'neverCache' : By default when the cache is enabled, all the pages will be cached but you can still disable this feature for
 * some predefined routes using this parameter.
 *
 * Note that you can add as many other attributes as you need to the routes. Adversely to the v1 of this
 * starter, the routes are not computed pre-processed anymore and will always be used as defined bellow. This allows you to import this file
 * anywhere you may need access to them.
 * The routes are also still accessible through the redux store under app.routes
 */

module.exports = {
  '/': { page: '/index', prefetch: true, neverCache: true },
  '/dad-jokes': { page: '/dad-jokes', prefetch: true, neverCache: true },
};
