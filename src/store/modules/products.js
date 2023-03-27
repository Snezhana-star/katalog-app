import apiProducts from '@/api/products';

const state = {
    isLoading: false,
    allProducts: null,
    successMessages: [],
}

const mutations = {
    removeSuccessMessage(state, index) {
        let newMessages = state.successMessages.filter((elem, i) => {
           if(i !== index) return true;
        });
        state.successMessages = newMessages;
    },

    getProductsStart(state) {
        state.isLoading = true;
    },

    getProductsSuccess(state, productsList) {
        state.isLoading = false;
        state.allProducts = productsList;
    },

    addToCartSuccess(state, message) {
        state.successMessages.push(message);
    }
}

const actions = {
    getProducts(context) {
        context.commit('getProductsStart');
        apiProducts.getProducts().then(response => {
            response.text().then(text => {
               if(response.status < 400) {
                   context.commit('getProductsSuccess', JSON.parse(text).data);
               } else {
                   console.log('Ошибочка');
               }
            });
        });
    },

    addToCart(context, payload) {
        apiProducts.addToCart(payload.token, payload.productId).then(response => {
            response.text().then(text => {
                if(response.status < 400) {
                    context.commit('addToCartSuccess', JSON.parse(text).data.message);
                } else {
                    console.log('Ошибочка');
                }
            });
        });
    }
}

const getters = {

}

export default {
    state,
    mutations,
    actions,
    getters
}