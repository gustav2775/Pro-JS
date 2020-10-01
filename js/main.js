const API =
  "https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses";

const app = new Vue({
  el: "#app",
  data: {
    showCart: false,
    catalogUrl: "/catalogData.json",
    bascerProdURl: "/getBasket.json",
    products: [],
    imgCatalog: "https://placehold.it/200x150",
    imgBascetProd: "https://placehold.it/50x50",
    productsInBascet: [],
    positiveFilter : [],
    userSearch:'',
  },
  methods: {
    getJson(url) {
      return fetch(url)
        .then((result) => result.json())
        .catch((error) => {
          console.log(error);
        });
    },

    addProduct(product) {
      //ищу совпадения в массиве по id
      let trueProduct = this.productsInBascet.find( e => e.id_product === product.id_product);
      if (trueProduct) {
        trueProduct.quantity++;
      } else {
        this.productsInBascet.push({ ...product, quantity: 1 });
      }
    },

    remove(product){
      if ( product.quantity > 1){
        product.quantity --
      }else{
        this.productsInBascet.splice(this.productsInBascet.indexOf(product),1)
      }
    },

    /* bascetName() {
      if (productsInBascet.length === 0) {
        this.btnBasketName = "Корзина пуста";
      } else {
        this.btnBasketName = `В корзине ${productsInBascet.length} товаров`;
      }
    }, */
    
    filterGoods(){
      //создаю регулярное выражение
      let regexp = new RegExp(this.userSearch, 'i');
      //с помощью метода filter перебираю массив и ищу совпадения. Пложительные значение записываю в массив.
      this.positiveFilter = this.products.filter(e => regexp.test(e.product_name));
      if(this.positiveFilter.lenght === 0) this.positiveFilter.lenght = this.products
    }
  },

  mounted() {
    this.getJson(`${API + this.catalogUrl}`).then((data) => {
      for (let el of data) {
        this.products.push(el);

      }
    });
    // чтобы при загрузке страницы были ведны все товары
    if(this.positiveFilter.length === 0) this.positiveFilter = this.products;

    //Не могу разобраться почему выдает data is not iterable. Прошу объясните.
    /* this.getJson(`${API + this.bascerProdURl}`).then((data) => {
      for (let el of data) {
        this.productsInBascet.push(el);
      }
    });  */
  },
});
