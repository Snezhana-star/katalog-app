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

export default {
    cartDataConversion
}