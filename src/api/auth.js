import settings from '@/api/settings';
settings.fetchBody.method = 'POST';

async function register(formData) {
    settings.fetchBody.body = formData;
    console.log(settings.fetchBody);
    console.log(formData);
    let result = await fetch(`${settings.baseUrl}/signup`, settings.fetchBody);
    return result;
}

export default {
    register
}