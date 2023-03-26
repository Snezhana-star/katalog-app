import settings from '@/api/settings';


async function register(formData) {
    settings.fetchBody.method = 'POST';
    settings.fetchBody.body = formData;
    let result = await fetch(`${settings.baseUrl}/signup`, settings.fetchBody);
    return result;
}

async function login(formData) {
    settings.fetchBody.method = 'POST';
    settings.fetchBody.body = formData;
    let result = await fetch(`${settings.baseUrl}/login`, settings.fetchBody);
    return result;
}

async function logout(token) {
    let result = await fetch(`${settings.baseUrl}/logout`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        }
    });
    return result;
}

export default {
    register,
    login,
    logout
}