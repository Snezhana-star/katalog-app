import settings from '@/api/settings';


async function register(formData) {
    settings.fetchBody.body = formData;
    let result = await fetch(`${settings.baseUrl}/signup`, settings.fetchBody);
    return result;
}

async function login(formData) {
    settings.fetchBody.body = formData;
    let result = await fetch(`${settings.baseUrl}/login`, settings.fetchBody);
    return result;
}

async function logout(token) {
    settings.fetchBody.headers.Authorization = `Bearer ${token}`;
    let result = await fetch(`${settings.baseUrl}/logout`, {headers: settings.fetchBody.headers});
    return result;
}

export default {
    register,
    login,
    logout
}