function cartDataConversion(data) {
    let result = [];
    data.forEach(outer => {
        if(result.length !== 0) {
            let equalIndex = null;
            let flag = result.some((inner, index) => {
                if(inner['id'] === outer['product_id']) {
                    equalIndex = index;
                    return true;
                } else return false;
            });
            if(flag) result[equalIndex]['productIds'].push(outer['id']);
            else {
                result.push({
                    id: outer['product_id'],
                    productIds: [outer['id']],
                    name: outer['name'],
                    description: outer['description'],
                    price: outer['price']
                });
            }
        } else {
            result.push({
                id: outer['product_id'],
                productIds: [outer['id']],
                name: outer['name'],
                description: outer['description'],
                price: outer['price']
            });
        }
    })

    return result;
}

function getSum(data) {
    let sum = 0;
    data.forEach(elem => {
       sum += elem.price * elem.productIds.length;
    });
    return sum;
}

function orderDataConversion(order, products) {
    if(order === null && products === null) return null;
    let result = [];
    let arr = [];
    order.forEach(cartElem => {
        let obj = {
            orderId: cartElem['id'],
            sum: cartElem['order_price'],
            products: [{id: cartElem.products[0], amount: 0, name: null}],
        };
        cartElem.products.forEach(cartProductId => {
            let add = obj.products.every(elem => {
               if(elem.id !== cartProductId) return true;
               else {
                   elem.amount++;
                   return false;
               }
            });

            if(add) {
                obj.products.push({id: cartProductId, amount: 1, name: null});
            }
        });
        result.push(obj);
    });

    result.forEach(outer => {
       outer.products.forEach(product => {
           for(let i = 0; i < products.length; i++) {
               if(products[i]['id'] === (product.id + 1)) {
                   product.name = products[i]['name'];
                   break;
               }
           }
       });
    });

    return result;
}

export default {
    cartDataConversion,
    getSum,
    orderDataConversion
}