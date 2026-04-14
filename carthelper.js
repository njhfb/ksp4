const products = [
    { id: "ёж", name: "Ёж", price: 1500 },
    { id: "маг", name: "Маг", price: 2000 },
    { id: "гуфи", name: "Гуфи", price: 3500 }
];
    
let cart = [];

function saveCart() {
}

function getTotal() {
    let total = 0;
    for (let i = 0; i < cart.length; i++) {
        total = total + cart[i].price;
    }
    return total;
}

function renderCart() {
    let container = document.getElementById('cartContent');
    if (!container) {
        return;
    }
    
    if (cart.length === 0) {
        container.innerHTML = '<p>Корзина пуста</p>';
        return;
    }
    
    let html = '<ul>';
    for (let i = 0; i < cart.length; i++) {
        html += '<li>';
        html += cart[i].name + ' - ' + cart[i].price + ' ₽';
        html += ' <button onclick="removeItem(' + i + ')">Удалить</button>';
        html += '</li>';
    }
    html += '</ul>';
    html += '<p><strong>Итого: ' + getTotal() + ' ₽</strong></p>';
    html += '<button onclick="clearCart()">Очистить корзину</button>';
    html += ' <button onclick="checkout()">Оплатить</button>';
    
    container.innerHTML = html;
}

function removeItem(index) {
    cart.splice(index, 1);
    saveCart();
    renderCart();
}

function clearCart() {
    if (cart.length === 0) {
        alert('Корзина пуста');
        return;
    }
    cart = [];
    saveCart();
    renderCart();
    alert('Корзина очищена');
}

function checkout() {
    if (cart.length === 0) {
        alert('Корзина пуста! Добавьте товары');
        return;
    }
    alert('Покупка на сумму ' + getTotal() + ' ₽ прошла успешно!');
    cart = [];
    saveCart();
    renderCart();
}

function addToCart(productId) {
    let product = null;
    for (let i = 0; i < products.length; i++) {
        if (products[i].id === productId) {
            product = products[i];
            break;
        }
    }
    
    if (product) {
        cart.push({ 
            id: product.id, 
            name: product.name, 
            price: product.price 
        });
        saveCart();
        alert(product.name + ' добавлен в корзину!');
        
        if (document.getElementById('cartContent')) {
            renderCart();
        }
    }
}

