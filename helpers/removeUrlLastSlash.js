module.exports = (url = '') => url.length > 1 ? url.replace(/\/$/, "") : '/';