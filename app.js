

const iceCream = [{
    name: 'Cookie Dough',
    price: 1.25,
    quantity: 0,
    total: 0
},
{
    name: 'Vanilla',
    price: 1,
    quantity: 0,
    total: 0
},
{
    name: 'Strawberry',
    price: 1.25,
    quantity: 0,
    total: 0
    // @ts-ignore
}]

const toppings = [{
    name: 'Sprinkles',
    price: .25,
    quantity: 0,
    total: 0
},
{
    name: 'Chocolate Chips',
    price: .25,
    quantity: 0,
    total: 0
},
{
    name: 'Cookie Chunks',
    price: .5,
    quantity: 0,
    total: 0
}]


function addToppers(topItem) {
    for (let i = 0; i < toppings.length; i++) {
        if (topItem == toppings[i].name) {
            toppings[i].quantity += 1;

        }
    }
    drawToppers()
}

function drawToppers() {

    let orderTopping = ''
    const oderList = document.getElementById('toppings');
    for (let i = 0; i < toppings.length; i++) {
        const item = toppings[i]
        if (item.quantity > 0) {
            orderTopping += `<p class="mb-1 fw-bold"><i class="mdi mdi-ice-cream"></i> ${item.name} x${item.quantity} $${(item.price * item.quantity).toFixed(2)}</p>`
        }
    }
    oderList.innerHTML = orderTopping
}
function addIceCream(flavor) {
    for (let i = 0; i < iceCream.length; i++) {
        if (flavor == iceCream[i].name) {
            iceCream[i].quantity += 1;
        }
    }
    drawIceCream()
}


function drawIceCream() {

    let orderFlavors = ''
    const oder = document.getElementById('flavors');
    for (let i = 0; i < iceCream.length; i++) {
        const iceCF = iceCream[i]
        if (iceCF.quantity > 0) {
            orderFlavors += `<p class="mb-1 fw-bold"><i class="mdi mdi-ice-cream"></i> ${iceCF.name} ${iceCF.quantity} $${(iceCF.price * iceCF.quantity).toFixed(2)}</p>`
        }
    }
    oder.innerHTML = orderFlavors
}

function checkOut() {
    for (let i = 0; i < iceCream.length; i++) {
        const item = iceCream[i]
        const itemss = toppings[i]
        item.quantity = 0
        itemss.quantity = 0
    }
    drawIceCream()
    drawToppers()
}