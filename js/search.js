Vue.component("search_form", {
  props: ["positiveFilter", "products"],
  data() {
    return {
      userSearch: "",
    };
  },
  methods: {
    filterGoods() {
      //создаю регулярное выражение
      let regexp = new RegExp(this.userSearch, "i");
      //с помощью метода filter перебираю массив и ищу совпадения. Пложительные значение записываю в массив.
      this.$root.positiveFilter = this.$root.products.filter(
        (e) => regexp.test(e.product_name)
      );
      if (this.$root.positiveFilter.lenght === 0)
        this.$root.positiveFilter.lenght = this.$root.products;
    },
  },
  template: ` <form action="#" class="search-form" @submit.prevent="filterGoods">
                    <input type="text" class="search-field" v-model="userSearch">
                    <button class="btn-search" type="submit">
                        <i class="fas fa-search"></i>
                    </button>
                </form>`,
});
