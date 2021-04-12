Vue.config.devtools = true;

var app = new Vue(
  {
    el: '#root',
    data: {

    },
    mounted() {
      axios.get('')
      .then((response) => {

      });
    }
  }
);
