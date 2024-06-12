

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
    for (let i = 0; i < toppings.length; i++) {
        if (topItem == toppings[i].name) {
            toppings[i].quantity += 1;

        }
    }
    //  drawOrder()
}
function addIceCream(flavor) {
    for (let i = 0; i < iceCream.length; i++) {
        if (flavor == iceCream[i].name) {
            iceCream[i].quantity += 1;
        }

    }
    drawOrder()
}


function drawOrder() {

    let orderContent = ''
    const oder = document.getElementById('order');
    const oderList = document.getElementById('');

    for (let i = 0; i < iceCream.length; i++) {
        const item = iceCream[i]
        // console.log(`- ${item.name} x${item.quantity} $${item.price * item.quantity}`);
        if (item.quantity > 0) {
            orderContent += `<p class="mb-1 fw-bold"><i class="mdi mdi-ice-cream"></i> ${item.name} x${item.quantity} $${(item.price * item.quantity).toFixed(2)}</p>`
        }
    }
    oder.innerHTML = orderContent
}