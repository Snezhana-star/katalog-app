import settings from '@/api/settings';
settings.fetchBody.method = 'POST';

async function register(formData) {
    settings.fetchBody.body = formData;
    let result = await fetch(`${settings.baseUrl}/singup`, settings.fetchBody);
    return result;
}

export default {
    register
}