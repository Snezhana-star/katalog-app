import settings from '@/api/settings';
settings.fetchBody.method = 'POST';

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

export default {
    register,
    login
}