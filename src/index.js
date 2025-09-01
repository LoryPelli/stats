const OLD_URL = 'lorypelli.dev/stats';

export default {
    async fetch(request) {
        const url = new URL(request.url);
        return await fetch(`https://${OLD_URL}${url.pathname}`, request);
    },
};
