const productList = [
    {
        id:1,
        name: 't-shirt',
        description: 'best red t-shirt',
        sizes:['S', 'M', 'L', 'XL'],
        price: 1000,
        available: true
    },
    {
        id:2,
        name: 'shorts',
        description: 'green shorts',
        sizes:['S', 'M', 'L', 'XL'],
        price: 1500,
        available: true
    },
    {
        id:3,
        name: 'sneakers',
        description: 'nike sneakers',
        sizes:['42', '43', '44', '45'],
        price: 2500,
        available: false
    },
    {
        id:4,
        name: 'jacket',
        description: 'classic jacket',
        sizes:['S', 'M', 'L', 'XL'],
        price: 3500,
        available: true
    },
    {
        id:5,
        name: 'hat',
        description: 'big hat',
        sizes:['S', 'M', 'L', 'XL'],
        price: 900,
        available: true
    },
]


let shoppingCart = [
    {
        good: productList[0],
        amount: 2
    },
    {
        good: productList[2],
        amount: 1
    }
]

function totalCart(sC){
    let totalValus = {
        totalAmount:0,
        totalSum:0
    }
    for (let item = 0; item < sC.length; item++) {
        totalValus.totalAmount += sC[item]['amount'];
        totalValus.totalSum += sC[item]['good'].price*sC[item]['amount'];
      }
    return totalValus
}

function productAdd (productPosition,productAmount){
    if (productList[productPosition].available == true){
    shoppingCart.push({good:productList[productPosition],amount:productAmount})
    }

}

function productDel(productPosition){
    shoppingCart.splice(productPosition,1)
}

function allProductDell(){
    shoppingCart = []
}


allProductDell()
productAdd(4,3)
productAdd(3,2)
productAdd(1,4)
productDel(0)
console.log(shoppingCart)
console.log(totalCart(shoppingCart))
