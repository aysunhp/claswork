class Product {
  salePrice = 0;
  costPrice = 0;
  discountPercentage = 0;
  constructor(
    name,
    costPrice,
    salePrice,
    isDiscount = false,
    discountPercentage = 0
  ) {
    (this.name = name),
      (this.#costPrice = costPrice),
      (this.salePrice = salePrice),
      (this.discountPercentage = discountPercentage),
      this.disDiscount = isDiscount,
  }
  getProfit = function (costPrice, salePrice, discountPercentage) {
    return salePrice - (salePrice * discountPercentage) / 100 - costPrice;
  };
}

let jaket=new Product("cardigan zara",50,100,false);
console.log(jaket.getProfit());
