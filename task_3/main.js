let product = {
    name: "Laptop", 
    price: 71999,
    inStock: true,
    brand: "MSI",
    specifications: {
        CPU: "i5-11400H",
        RAM: "8 GB",
        GPU: "NVIDIA GeForce RTX 3050 Laptop"
    },
    discount: {
      percentage: 10,
      expirationDate: "2024-02-09"
    }
}
    
let customer = {
name: "John",
budget: 80000
};
  

if (customer.budget < product.price) {
    console.log("У вас недостаточно средств для покупки этого товара.");
  } else {
    console.log(`Вы можете приобрести ${product.name} по цене ${product.price} рублей.`);
  
    console.log(`Технические характеристики:
Процессор: ${product.specifications.CPU}
Оперативная память: ${product.specifications.RAM}
Видеокарта: ${product.specifications.GPU}`);
  
    if (product.discount) {
      console.log(`Скидка ${product.discount.percentage}% до ${product.discount.expirationDate}`);
      let discountedPrice = product.price - (product.price * product.discount.percentage / 100);
      console.log(`Цена со скидкой: ${discountedPrice} рублей.`);
    }
  }