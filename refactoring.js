// 1 задание
// В следующем коде несколько раз повторяются похожие операции. Проведите рефакторинг, чтобы избежать дублирования,
// используя функции или другие средства:
const product1 = { name: 'Product 1', price: 10 };
const product2 = { name: 'Product 2', price: 20 };
const total1 = product1.price * 1.2;
const total2 = product2.price * 1.2;
console.log('Total for Product 1:', total1);
console.log('Total for Product 2:', total2);

//const product1 = { name: 'Product 1', price: 10 };
//const product2 = { name: 'Product 2', price: 20 };
//const taxRate = 1.2;

//function totalPrice(price, taxRate) {
//return price * taxRate;
//}

//console.log(`Total for ${product1.name}:`, totalPrice(product1.price, taxRate));




// 2 задание
// Код ниже содержит сложные вложенные условия. Упростите его, чтобы улучшить читаемость и уменьшить вероятность ошибок:
if (user.isAdmin) {
  if (user.isActive) {
    if (user.age > 18) {
      console.log('Access granted');
    }
  }
}
console.log ()





function checkStock(item) {
  return Math.random() < 0.5; 
}

function validate(order) {
  
  if (!order.id || !order.items || order.items.length === 0) {
    console.log('Invalid order');
    return false;
  }
  return true;
}
function calculate(order) {
  
  let total = 0;
  for (let item of order.items) {
    total += item.price * item.quantity;
  }
  return total;
}
function presenceCheck(order) {
  
  for (let item of order.items) {
    if (!checkStock(item)) {
      console.log('Item out of stock:', item.name);
      return false;
    }
  }
  return true
}

function processOrder(order) {
  if (!validate(order)) {
    return;
  }
  if (!presenceCheck(order)) {
    return;
  }
  const total = calculate(order);
  console.log('Order processed with total:', total);
}


const myOrder = {
  id: 123,
  items: [
    { name: 'Product A', price: 10, quantity: 2 },
    { name: 'Product B', price: 15, quantity: 1 }
  ]
};

processOrder(myOrder);
