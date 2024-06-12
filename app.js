

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
            item.total = item.price * item.quantity
            orderTopping += `<p class="mb-1 fw-bold"><i class="mdi mdi-ice-cream"></i> ${item.name} x${item.quantity} $${item.price} $${(item.total).toFixed(2)}</p>`
        }
    } addTotal()
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
            iceCF.total = iceCF.price * iceCF.quantity
            orderFlavors += `<p class="mb-1 fw-bold"><i class="mdi mdi-ice-cream"></i> ${iceCF.name} ${iceCF.quantity} $${iceCF.price} $${(iceCF.total).toFixed(2)}</p>`
        }
    }
    oder.innerHTML = orderFlavors
    addTotal()
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

// console.log(`- ${menu[0].name} x${menu[0].quantity} $${menu[0].price * menu[0].quantity}`);

function addTotal() {
    const totalPrice = document.getElementById("total")

    for (let i = 0; i < toppings.length; i++) {
        const toppingItems = toppings[i]
        if (toppingItems.quantity > 0) {
            console.log(`$${toppingItems.total}`)
        }
    }
    for (let i = 0; i < iceCream.length; i++) {
        const item = iceCream[i]
        if (item.quantity > 0) {
            console.log(`$${item.total}`)

        }
    }
}