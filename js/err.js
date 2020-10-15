Vue.component("errors", {
  data() {
    return {
      textError: "",
    };
  },
  methods: {
    error(text) {
      this.textError = text;
    },
  },
  template: `
    <div class= "errors">  
        <p > {{textError}} </p>
    </div>
    `,
});
