const iceCream = [{
    name: 'Cookie Dough',
    price: 1.25,
    quantity: 0
},
{
    name: 'Vanilla',
    price: 1,
    quantity: 0
},
{
    name: 'Strawberry',
    price: 1.25,
    quantity: 0
    // @ts-ignore
}]

const toppings = [{
    name: 'Sprinkles',
    price: .25,
    quantity: 0
},
{
    name: 'Chocolate Chips',
    price: .25,
    quantity: 0
},
{
    name: 'Cookie Chunks',
    price: .5,
    quantity: 0
}]


function addToppers(topItem) {
    for (let i = 0; i < topItem.length; i++) {
        console.log(toppings[i].name)
        console.log(toppings[i].quantity += 1);
        console.log(toppings[i].price * toppings[i].quantity);
        if (topItem == toppings[i].name) {
            return
        }
    }
}

function drawOrder() {
    const oder = document.getElementById('order');

}