import apiAuth from '@/api/auth'

const state = {
    validationErrors: null,
    userToken: null,
    isLoggedIn: false
}

const mutations = {
    validateFields(state, formData) {
        let errors = {};
        let isRegister = false;

        let entries = Object.entries(formData);
        entries.forEach(elem => {
            if(elem[0] === 'password2') isRegister = true;
            if((elem[1].search(/^\s+$/) !== -1) || elem[1] === '') {
                errors[`${elem[0]}`] = [];
                errors[`${elem[0]}`].push(`This field is required`);
            };
        });

        if(isRegister) {
            let passwordErrors = formData['password1'] !== formData['password2']? 'Password mismatch': null;
            if(passwordErrors !== null) {
                errors['password1'] = [];
                errors['password1'].push(passwordErrors);
                errors['password2'] = [];
                errors['password2'].push(passwordErrors);
            }
        }

        if(Object.keys(errors).length !== 0) state.validationErrors = errors;
        else state.validationErrors = null;
    },

    registerStart(state) {
        state.validationErrors = null;
    },

    registerSuccess(state, userToken) {
        state.userToken = userToken;
        state.isLoggedIn = true;
        state.validationErrors = null;
    },

    registerFailure(state, errorMessages) {
        let errors = {};
        let entries = Object.entries(errorMessages);
        entries.forEach(elem => {
            console.log(elem[0]);
            if(elem[0] === 'password') {
                errors['password1'] = [];
                errors['password1'] = elem[1];
            } else {
                errors[elem[0]] = [];
                errors[elem[0]] = elem[1];
            }
        });
        state.validationErrors = errors;
    },

    loginStart(state) {
        state.validationErrors = null;
    },

    loginSuccess(state, userToken) {
        state.userToken = userToken;
        state.isLoggedIn = true;
        state.validationErrors = null;
    },

    loginFailure(state, errorMessage) {
        let errors = {"password": [errorMessage]};
        state.validationErrors = errors;
    }
}

const actions = {
    register(context, payload) {
        context.commit('registerStart');
        return new Promise(resolve => {
           apiAuth.register(JSON.stringify(payload)).then(response => {
              response.text().then(text => {
                  if(response.status < 400) {
                      context.commit('registerSuccess', JSON.parse(text));
                      resolve();
                  } else {
                      context.commit('registerFailure', JSON.parse(text).error.errors);
                  }
              })
           });
        });
    },

    login(context, payload) {
        return new Promise(resolve => {
            context.commit('loginStart');
            apiAuth.login(JSON.stringify(payload)).then(response => {
                response.text().then(text => {
                    if(response.status < 400) {
                        context.commit('loginSuccess', JSON.parse(text));
                        resolve();
                    } else {
                        context.commit('loginFailure', JSON.parse(text).error.message);
                    }
                })
            });
        });
    }
}

const getters = {
    isErrors(state) {
        if(state.validationErrors) return state.validationErrors;
        else return null;
    },

    isAnonymous(state) {
        return !state.isLoggedIn;
    }
}

export default {
    state,
    mutations,
    actions,
    getters
}