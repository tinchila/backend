class ProductManager {
  constructor() {
    this.products = [];
  }

  getProducts() {
    return this.products;
  }

  addProduct({ title, description, price, thumbnail, code, stock }) {
    if (this.products.some((product) => product.code === code)) {
      throw new Error("El código del producto ya está en uso.");
    }

    const id = this.generateProductId();
    const product = {id, title, description, price, thumbnail, code, stock};
    this.products.push(product);
    return product;
  }

  getProductById(id) {
    const product = this.products.find((product) => product.id === id);
    if (!product) {
      throw new Error("Producto no encontrado.");
    }
    return product;
  }

  generateProductId() {
    const generateId = this.products.map((product) => product.id);
    let newId;
    do {
      newId = Math.random();
    } while (generateId.includes(newId));
    return newId;
  }
}

const manager = new ProductManager();

console.log(manager.getProducts());


const newProduct = {
  title: "producto 1",
  description: "descripcion del producto 1",
  price: 2500,
  thumbnail: "imagen del producto 1",
  code: "abc123",
  stock: 53,
};

try {
  manager.addProduct(newProduct);
  console.log("Producto agregado satisfactoriamente.");
} catch (error) {
  console.error(error.message);
}

console.log(manager.getProducts());

try {
  const productById = manager.getProductById(newProduct.id);
  console.log("Producto encontrado por ID:", productById);
} catch (error) {
  console.error(error.message);
}
