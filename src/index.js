const BASE_URL = 'https://lorypelli.dev/stats';

export default {
    fetch: async ({ url }) =>
        await fetch(`${BASE_URL}${new URL(url).pathname}`),
};
