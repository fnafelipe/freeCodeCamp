// Função que processa carrinho de compras e calcula total com desconto e frete
function calculateTotalPrice(products) {
  var totalPrice = 0;
  var totalProducts = products.length;
  for (var i = 0; i < totalProducts; i++) {
    totalPrice = totalPrice + products[i].Price * products[i].Quantity;
  }
  return totalPrice;
}

function calculateTotalDiscount(clientType, hasDiscount, totalPrice) {
  var totalDiscount;
  if (clientType == "C") {
    totalDiscount = calculateTotalDiscountForCommonClient(
      hasDiscount,
      totalPrice,
    );
  } else if (clientType == "V") {
    totalDiscount = calculateTotalDiscountForVipClient(hasDiscount, totalPrice);
  }
  return totalDiscount;
}

function calculateTotalDiscountForCommonClient(hasDiscount, totalPrice) {
  var totalDiscount = hasDiscount ? totalPrice * 0.1 : totalPrice * 0;
  return totalDiscount;
}

function calculateTotalDiscountForVipClient(hasDiscount, totalPrice) {
  var totalDiscount = hasDiscount ? totalPrice * 0.15 : totalPrice * 0;
  return totalDiscount;
}

function calculateDiscountedPrice(totalPrice, totalDiscount) {
  totalTaxes = totalPrice - totalDiscount;
  return totalTaxes;
}

function calculateTotalTaxes(discountedPrice) {
  var totalTaxes = discountedPrice > 100 ? 0 : 15;
  return totalTaxes;
}

function calculateFinalPrice(discountedPrice, totalTaxes) {
  var finalPrice = discountedPrice + totalTaxes;
  return finalPrice > 100 ? finalPrice : 0;
}

function calculatePrice(products, clientType, hasDiscount) {
  var totalPrice = calculateTotalPrice(products);

  var totalDiscount = calculateTotalDiscount(
    clientType,
    hasDiscount,
    totalPrice,
  );

  var discountedPrice = calculateDiscountedPrice(totalPrice, totalDiscount);

  var totalTaxes = calculateTotalTaxes(discountedPrice);

  var finalPrice = calculateFinalPrice(discountedPrice, totalTaxes);

  return finalPrice;
}

// Exemplo de uso:
const products = [
  { Price: 50, Quantity: 2 }, // produto de R$ 50, quantidade 2
  { Price: 30, Quantity: 1 }, // produto de R$ 30, quantidade 1
];

// c = itens, t = tipo de cliente ("C" para Comum, "V" para VIP), d = tem cupom de desconto (true/false)
console.log(calculatePrice(products, "V", true));
