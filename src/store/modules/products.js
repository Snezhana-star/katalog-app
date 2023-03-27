import apiProducts from '@/api/products';

const state = {
    isLoading: false,
    allProducts: null,
}

const mutations = {
    getProductsStart(state) {
        state.isLoading = true;
    },

    getProductsSuccess(state, productsList) {
        state.isLoading = false;
        state.allProducts = productsList;
    },
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