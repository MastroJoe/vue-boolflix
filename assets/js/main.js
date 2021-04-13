Vue.config.devtools = true;

var app = new Vue (
  {
    el: '#root',
    data: {
      query: '',
      research: [],
      lang: 'IT',
      api_key: '5c84cd901d12758e8354438597cfa2b2',
      uri: 'https://api.themoviedb.org/3',
    },

    methods: {
      // funzione ricerca film e serie TV
      search: function(){
        // verifica input utente
        if (this.query != '') {
          // Chiamata axios per film e serie TV da input utente
          axios.get(`${this.uri}/search/movie?api_key=${this.api_key}&query=${this.query}&language=${this.lang}`)
          .then((response) => {
            this.research = [...this.research, ...response.data.results];
            // console.log(this.research);
          });
          axios.get(`${this.uri}/search/tv?api_key=${this.api_key}&query=${this.query}&language=${this.lang}`)
          .then((response) => {
            this.research = [...this.research, ...response.data.results];
          });
        } else {
        }
      },
      // funzione che prende il titolo del film e serie TV
      getTitle: function(obj) {
        if (obj.title) {
          return obj.title;
        } else {
          return obj.name;
        }
      },
      // funzione che prende il titolo originale del film e serie TV
      getOriginalTitle: function(obj) {
        if (obj.original_title) {
          return obj.original_title;
        } else {
          return obj.original_name;
        }
      }
    }
});
