import settings from '@/api/settings';

async function getProducts() {
    let result = await fetch(`${settings.baseUrl}/products`, {headers:  settings.fetchBody.headers});
    return result;
}

async function addToCart(token, productId) {
    settings.fetchBody.headers.Authorization = `Bearer ${token}`;
    let result = await fetch(`${settings.baseUrl}/cart/${productId}`, settings.fetchBody);
    return result;
}

async function getCart(token) {
    settings.fetchBody.headers.Authorization = `Bearer ${token}`;
    let result = await fetch(`${settings.baseUrl}/cart`, {headers: settings.fetchBody.headers});
    return result;
}

export default {
    getProducts,
    addToCart,
    getCart
}