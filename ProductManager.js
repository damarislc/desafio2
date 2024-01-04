/**
 * Clase ProductManager
 * Contiene un arreglo de objetos.
 * El objeto debe contener los campos: title, description, price, thumbnail, code, stock
 * Consta de los siguientes métodos:
 * *addProduct - Añade productos al arreglo, recibe un objeto
 * *getProduct - Devuelve el arreglo de objetos
 * *getProductById - Devuelve el objeto según su Id
 */
class ProductManager {
  /**
   * Constructor que inicializa el arreglo vacío
   */
  constructor() {
    this.products = [];
  }

  /**
   * Método addProduct
   * @param {*} es un objeto desestructurado
   * @returns none
   */
  addProduct({ title, description, price, thumbnail, code, stock }) {
    if (this.products.some((product) => product.code === code)) {
      console.log(
        `El codigo "${code}" ya existe, favor de cambiarlo en el producto "${title}".`
      );
      return;
    }
    if (!(title && description && price && thumbnail && code && stock)) {
      console.log(`Favor de llenar todos los campos en el producto "${title}"`);
      return;
    }

    const product = {
      id: ProductManager.setId(),
      title,
      description,
      price,
      thumbnail,
      code,
      stock,
    };

    this.products.push(product);
  }

  /**
   * Método getProducts para obtener el arreglo de todos los productos
   * @returns el arreglo de productos
   */
  getProducts() {
    return this.products;
  }

  /**
   * Método getProductById para obtener el producto según su id
   * @param {*} id
   * @returns regresa el producto si lo encuentra o un mensaje de que no lo encontró.
   */
  getProductById(id) {
    const product = this.products.find((product) => product.id === id);
    return product === undefined
      ? `El producto con el id ${id} no existe`
      : product;
  }

  /**
   * Método estático para crear el id autoincremental.
   * @returns
   */
  static setId() {
    //return (this.lastId = !this.lastId ? 1 : this.lastId++);
    if (!this.lastId) this.lastId = 1;
    else this.lastId++;
    return this.lastId;
  }
}

/************************ TESTS *****************************/

//Los tests que utilicé para probar el código, descomentar si se quieren reutilizar.
/*
const productM = new ProductManager();
console.log(productM.getProducts());
product1 = {
  title: "Mi producto 1",
  description: "Descripcion",
  price: "123",
  thumbnail: "mi imagen",
  code: "abc",
  stock: 5,
};
product2 = {
  title: "Mi producto 2",
  description: "Descripcion",
  price: "456",
  thumbnail: "mi imagen",
  code: "abc",
  stock: 3,
};
product3 = {
  title: "Mi producto 3",
  description: "Descripcion",
  price: "789",
  thumbnail: "mi imagen",
  code: "def",
  stock: 10,
};
product4 = {
  title: "Mi producto 4",
  description: "Descripcion",
  price: "789",
  thumbnail: "mi imagen",
  //code: "def",
  stock: 10,
};
productM.addProduct(product1);
productM.addProduct(product2);
productM.addProduct(product3);
productM.addProduct(product4);
console.log(productM.getProducts());

console.log("****Product by id******");
console.log(productM.getProductById(2));
console.log(productM.getProductById(5));
*/
