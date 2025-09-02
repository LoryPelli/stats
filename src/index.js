const BASE_URL = 'https://lorypelli.dev/stats';

export default {
    fetch: async (/** @type { Request } */ req) =>
        await fetch(BASE_URL + new URL(req.url).pathname, req),
};
