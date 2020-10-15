const API =
  "https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses";

const app = new Vue({
  el: "#app",
  data() {
    return {
      products: [],
      positiveFilter: [],
    };
  },
  methods: {
    getJson(url) {
      return fetch(url)
        .then((result) => result1.json())
        .catch((error) => {
          this.$refs.errors.error(error);
        });
    },
  },
  template: `
    <div>
      <header>
        <div class="logo">Интернет-магазин</div>
        <div class="cart">
          <search_form ref = 'search_form'></search_form> 
          <products_basket ref='products_basket'></products_basket>
        </div>
      </header>
      <errors ref="errors"></errors>
      <main>
        <market ref="market"></market>
      </main>
    </div> `,
});
