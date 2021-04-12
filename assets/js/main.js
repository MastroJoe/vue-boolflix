Vue.config.devtools = true;

var app = new Vue (
  {
    el: '#root',
    data: {
      input:'',
      research:'',
    },

    methods: {
      // funzione ricerca film e serie TV
      search: function () {
        // verifica input utente
        if (this.input != '') {
          // Chiamata axios per film e serie TV da input utente
          axios.get(`https://api.themoviedb.org/3/search/multi?api_key=5c84cd901d12758e8354438597cfa2b2&query=${this.input}`)
          .then((response) => {
            this.research = (response.data.results);
            // console.log(this.research);
          });
        } else {
        }
      },
    }
});
