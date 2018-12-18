/**
 * Here you can define some custom parameters about the environment variables
 * If a variable is required: the app will throw an error on first launch if not defined
 * If "client" is enabled, the variable will be available from the client side (be careful!)
 */

module.exports = {
  allowedVariables: {

    // SERVER

    'PORT': { client: true, required: true },
    'PROTOCOL': { client: true, required: true },
    'HOST': { client: true, required: true },
    'ENABLE_SOURCE_MAP': { client: true, required: false },
    'KEEP_DEV_TOOLS_ON_PRODUCTION': { client: true, required: false },

    // HTPASSWD

    'HTPASSWD_USER': { client: true, required: false },
    'HTPASSWD_PASSWORD': { client: true, required: false },
    'ENABLED_HTPASSWD': { client: true, required: false },

    // API

    'ENABLE_FAKE_API': { client: true, required: false },
    'API_HOST': { client: true, required: true },
    'API_PORT': { client: true, required: false },
    'API_PROTOCOL': { client: true, required: true },
    'API_PATHNAME': { client: true, required: true },

    // CACHING

    'ENABLE_SSR_CACHING': { client: true, required: false },
    'SRR_CACHE_MAX_SIZE': { client: false, required: false },
    'SSR_CACHE_MAX_AGE': { client: false, required: false },
    'ENABLE_SERVICE_WORKER': { client: true, required: false },
  },
};