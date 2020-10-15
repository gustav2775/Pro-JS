Vue.component("products_basket", {
  data() {
    return {
      showCart: false,
      baskerProdURl: "/getBasket.json",
      imgBasketProd: "https://placehold.it/50x50",
      products_in_basket: [],
    };
  },
  
  methods: {
    addProduct(product) {
      //ищу совпадения в массиве по id
      let trueProduct = this.products_in_basket.find(
        (e) => e.id_product === product.id_product
      );
      if (trueProduct) {
        trueProduct.quantity++;
      } else {
        this.products_in_basket.push({ ...product, quantity: 1 });
      }
  
    },
 
    remove(product) {
      if (product.quantity > 1) {
        product.quantity--;
      } else {
        this.products_in_basket.splice(
          this.products_in_basket.indexOf(product),
          1
        );
      }
    },
  },

  mounted() {
    this.$parent.getJson(`${API + this.baskerProdURl}`).then((data) => {
      for (let el of data.contents) {
        this.products_in_basket.push(el);
      }
    });
  },

  template: `<div>
                <button class="btn-cart" type="button" @click="showCart = !showCart">Корзина</button>
                <div class="cart-block" v-show="showCart" >
                <p v-if="!products_in_basket.length">Корзина пуста</p>
                <prod_basket class="cart-item" 
                        v-for="item of products_in_basket" 
                        :key="item.id_product"
                        :cart-item="item" 
                        :img="imgBasketProd"
                        @remove="remove">
                </prod_basket>
            </div>
        </div>`
});

Vue.component('prod_basket', {
    props: ['cartItem', 'img'],
    template: `
      <div class="cart-item">
        <div class="product-bio">
          <img :src="img" alt="Some image">
            <div class="product-desc">
              <p class="product-title">{{cartItem.product_name}}</p>
              <p class="product-quantity">Количество: {{cartItem.quantity}}</p>
              <p class="product-single-price">{{cartItem.price}}₽ за единицу</p>
            </div>
        </div>
        <div class="right-block">
          <p class="product-price">{{cartItem.quantity*cartItem.price}}₽</p>
          <button class="del-btn" @click="$emit('remove', cartItem)">&times;</button>
        </div>
      </div>`
});
