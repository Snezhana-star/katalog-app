import apiAuth from '@/api/auth'

const state = {
    validationErrors: null,
    userToken: null,
    isLoggedIn: false
}

const mutation = {
    registerSuccess(state, responseData) {

    },

    registerFailure(state, errorMessages) {

    }
}

const actions = {
    register(context, payload) {
        return new Promise(resolve => {
           apiAuth.register(payload.formData).then(response => {
              response.text().then(text => {
                  if(response.status < 400) {
                      console.log("Success: ", text);
                  } else {
                      console.log("Failure: ", text);
                  }
              })
           });
        });
    }
}

const getters = {

}

export default {
    state,
    mutation,
    actions,
    getters
}