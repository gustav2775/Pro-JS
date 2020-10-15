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
        .then((result) => result.json())
        .catch((error) => {
          console.log(error);
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
      <main>
        <market ref="market"></market>
      </main>
    </div> `,
});
