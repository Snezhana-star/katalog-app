import apiProducts from '@/api/products';
import helpers from "@/utils/helpers";

const state = {
    isLoading: false,
    products: null,
    cart: null,
    orders: null,
    successMessages: [],
    sum: 0,
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
        state.products = productsList;
    },

    addToCartSuccess(state, message) {
        state.successMessages.push(message);
    },

    getCartStart(state, message) {
        state.isLoading = true;
    },

    getCartSuccess(state, productsList) {
        state.isLoading = false;
        state.cart = helpers.cartDataConversion(productsList);
        state.sum = helpers.getSum(state.cart);
    },

    addProductSuccess(state, productsList) {
        state.cart = helpers.cartDataConversion(productsList);
        state.sum = helpers.getSum(state.cart);
    },

    deleteProductFromCartSuccess(state, productsList) {
        state.cart = helpers.cartDataConversion(productsList);
        state.sum = helpers.getSum(state.cart);
    },

    getOrderStart(state) {
        state.isLoading = true;
    },

    getOrderSuccess(state, productsList) {
        state.isLoading = false;
        state.orders = helpers.orderDataConversion(productsList, state.products);
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
    },

    getCart(context, payload) {
        context.commit('getCartStart');
        return new Promise(resolve => {
            apiProducts.getCart(payload.token).then(response => {
                response.text().then(text => {
                    if(response.status < 400) {
                        context.commit('getCartSuccess', JSON.parse(text).data);
                    } else {
                        resolve();
                    }
                });
            });
        });
    },

    addProduct(context, payload) {
        apiProducts.addToCart(payload.token, payload.productId).then(response => {
            response.text().then(text => {
                if(response.status < 400) {
                    apiProducts.getCart(payload.token).then(response => {
                        response.text().then(text => {
                                context.commit('addProductSuccess', JSON.parse(text).data);
                        });
                    });
                } else {
                    console.log('Ошибочка');
                }
            });
        });
    },

    deleteProductFromCart(context, payload) {
        apiProducts.deleteProductFromCart(payload.token, payload.productIds).then(results => {
            let flag = results.some(elem => {
                if(elem === 'ok') return true;
                else return false;
            });

            if(flag) {
                apiProducts.getCart(payload.token).then(response => {
                    response.text().then(text => {
                        context.commit('deleteProductFromCartSuccess', JSON.parse(text).data);
                    });
                });
            }
        });
    },

    toOrder(context, payload) {
        return new Promise(resolve => {
            apiProducts.toOrder(payload.token).then(response => {
                response.text().then(text => {
                    if(response.ok) {
                        resolve();
                    }
                    else console.log('Ошибочка');
                })
            });
        });
    },

    getOrder(context, payload) {
        context.commit('getOrderStart');
        return new Promise(resolve => {
            apiProducts.getOrder(payload.token).then(response => {
                response.text().then(text => {
                    if(response.ok) context.commit('getOrderSuccess', JSON.parse(text).data);
                    else resolve();
                });
            });
        });
    },
}

const getters = {

}

export default {
    state,
    mutations,
    actions,
    getters
}