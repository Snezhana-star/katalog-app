import settings from '@/api/settings';

async function getProducts() {
    let result = await fetch(`${settings.baseUrl}/products`, {headers:  settings.fetchBody.headers});
    return result;
}

export default {
    getProducts
}