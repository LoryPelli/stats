const BASE_URL = 'https://lorypelli.dev/stats';

export default {
    /** @param { Request } req */
    fetch: (req) => fetch(BASE_URL + new URL(req.url).pathname, req),
};
