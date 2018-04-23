const express   = require('express');
const next      = require('next');
const config    = require('../config');
const getRoutes = require('./routes');

const dev    = process.env.NODE_ENV !== 'production';
const app    = next({ dev, dir: config.server.clientDir });
const routes = getRoutes();
app.prepare()
  .then(() => {
    const server = express();

    //  Map over all the defined routes
    // and add a get handler to the server for
    // each of them
    Object.entries(routes).forEach(([path, route]) => {
      server.get(path, (req, res) => {
        const queryParams = {};

        // Add needed parameters to the response
        if (route.queryParams && route.queryParams.length > 0) {
          route.queryParams.forEach(param => {
            queryParams[param] = req.params[param];
          });
        }

        return app.render(req, res, route.page, queryParams);
      });
    });

    // Default server entry
    server.get('*', (req, res) => {
      return app.getRequestHandler()(req, res);
    });

    // Listen on the port defined in the config file
    server.listen(config.server.port, (err) => {
      if (err) throw err;
      console.log('> Ready on http://localhost:' + config.server.port);
    });
  })
  .catch((ex) => {
    console.error(ex.stack);
    process.exit(1);
  });