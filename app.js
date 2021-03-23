const vm = new Vue({
  el: "#app",
  data: {
    mensagem: "Uma mensagem",
    produtos: [],
  },

  methods: {
    fetchProdutos() {
      fetch("./api/produtos.json")
        .then((r) => r.json())
        .then((r) => {
          this.produtos = r;
        });
    },
  },

  filters: {
    precoFormatado(valor) {
      return valor.toLocaleString("pt-br", {
        style: "currency",
        currency: "BRL",
      });
    },
  },
  created() {
    this.fetchProdutos();
  },
});
