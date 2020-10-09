Vue.component("productInBasket", {
  prop: [],
  data() {
    return {
      showCart: false,
      catalogUrl: "/catalogData.json",
      bascerProdUrl: "/getBasket.json",
      imgBascetProd: "https://placehold.it/50x50",
      productsInBascet: [],
    };
  },
  methods: {
    addProduct(product) {
      //ищу совпадения в массиве по id
      let trueProduct = this.productsInBascet.find(
        (e) => e.id_product === product.id_product
      );
      if (trueProduct) {
        trueProduct.quantity++;
      } else {
        this.productsInBascet.push({ ...product, quantity: 1 });
      }
    },

    remove(product) {
      if (product.quantity > 1) {
        product.quantity--;
      } else {
        this.productsInBascet.splice(this.productsInBascet.indexOf(product), 1);
      }
    },
  },
  template: ` <button class="btn-cart" type="button" @click="showCart = !showCart"> Корзина </button>
            <div class="bascet" v-show="showCart">
                <div class="err" v-if='productsInBascet.length === 0'> Нет товаров</div>
                <div class="bascetProdBascet" v-for="product of productsInBascet">
                <img :src="imgBascetProd" alt="Some img">
                <h4>{{product.product_name}}</h4>
                <div class="deck">
                    <p class="price">Цена за ед. {{product.price}}₽</p>
                    <p class="quantity">Колличество: {{product.quantity}} </p>
                </div>
                <p class="prodSum">{{product.quantity *product.price}} ₽ </p>
                <button class="btnDelete" @click="remove(product)">Del</button>
            </div>
            </div>`,
});
