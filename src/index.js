const BASE_URL = 'https://lorypelli.dev/stats';

export default {
    async fetch(request) {
        const url = new URL(request.url);
        return await fetch(`${BASE_URL}${url.pathname}`, request);
    },
};
