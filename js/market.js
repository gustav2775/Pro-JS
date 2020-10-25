Vue.component("market", {
  props: ["positiveFilter", "products"],
    data() {
      return {
        catalogUrl: "/catalogData.json",
        imgCatalog: "https://placehold.it/200x150",
      };
    },
   
    mounted() {
      this.$parent.getJson(`${API + this.catalogUrl}`).then((data) => {
        for (let el of data) {
          this.$root.products.push(el);
          this.$root.positiveFilter.push(el)
        }
      });
    },
  
    template: `
      <div class="products">
              <product v-for="product of this.$root.positiveFilter"
                  :key="product.id_product"
                  :img="imgCatalog"
                  :product="product"></product>
          </div>
      `,
  });
  
  Vue.component("product", {
    props: ["product", "img"],
    template: `
      <div class="product-item">
                  <img :src="img" alt="Some img">
                  <div class="desc">
                      <h3>{{product.product_name}}</h3>
                      <p>{{product.price}}₽</p>
                      <button class="buy-btn" @click="$root.$refs.products_basket.addProduct(product)">Купить</button>
                  </div>
              </div>
      `,
  });
  