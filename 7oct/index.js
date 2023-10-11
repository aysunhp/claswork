let productName = window.prompt("Enter product name");
let productCostPrice = Number(window.prompt("Enter cost price"));
let productSalePrice = Number(window.prompt("Enter sale price"));

if (window.confirm(`does ${productName} has discount`)) {
  let discountPercentage = Number(window.prompt("enter percentage"));
  let profit =
    productSalePrice -
    (productSalePrice * discountPercentage) / 100 -
    productCostPrice;

  if (discountPercentage < 100) {
    window.alert(`Pandora Necklace profit is ${profit} usd`);
  } else {
    window.alert(`You have not any profit`);
  }
} else {
  let profit = productSalePrice - productCostPrice;
  window.alert(`Pandora Necklace profit is ${profit} usd`);
}
