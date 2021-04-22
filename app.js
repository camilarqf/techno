const vm = new Vue({
  el: "#app",
  data: {
    mensagem: "Uma mensagem",
    produtos: [],
    produto: false,
  },

  methods: {
    fetchProdutos() {
      fetch("./api/produtos.json")
        .then((r) => r.json())
        .then((r) => {
          this.produtos = r;
        });
    },

    fetchProduto(id) {
      fetch(`./api/produtos/${id}/dados.json`)
        .then((r) => r.json())
        .then((r) => {
          this.produto = r;
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
