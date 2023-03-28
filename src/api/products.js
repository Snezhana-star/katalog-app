import settings from '@/api/settings';

async function getProducts() {
    let result = await fetch(`${settings.baseUrl}/products`, {headers:  settings.fetchBody.headers});
    return result;
}

async function addToCart(token, id) {
    settings.fetchBody.headers.Authorization = `Bearer ${token}`;
    let result = await fetch(`${settings.baseUrl}/cart/${id}`, settings.fetchBody);
    return result;
}

async function getCart(token) {
    settings.fetchBody.headers.Authorization = `Bearer ${token}`;
    let result = await fetch(`${settings.baseUrl}/cart`, {headers: settings.fetchBody.headers});
    return result;
}

async function deleteProductFromCart(token, productIdsArray) {
    settings.fetchBody.method = 'DELETE';
    settings.fetchBody.headers.Authorization = `Bearer ${token}`;
    let promises = [];
    for(let id of productIdsArray) {
        let promise = new Promise((resolve, reject) => {
            fetch(`${settings.baseUrl}/cart/${id}`, settings.fetchBody).then(response => {
                if(response.ok) resolve('ok');
                else reject(response.text());
            });
        });
        promises.push(promise);
    }

    let result = await Promise.all(promises);
    return result;
}

async function toOrder(token) {
    settings.fetchBody.headers.Authorization = `Bearer ${token}`;
    let result = await fetch(`${settings.baseUrl}/order`, settings.fetchBody);
    return result;
}

async function getOrder(token) {
    settings.fetchBody.headers.Authorization = `Bearer ${token}`;
    let result = await fetch(`${settings.baseUrl}/order`, {headers: settings.fetchBody.headers});
    return result;
}

export default {
    getProducts,
    addToCart,
    getCart,
    deleteProductFromCart,
    toOrder,
    getOrder
}