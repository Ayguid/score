<template>
  <div class="container">






    <form class="" @submit.prevent="logOut" action="" method="post">

      <div class="form-group">
        <input type="submit" class="form-control" name="Submit" value="LogOut">
      </div>

    </form>












  </div>
</template>

<script>
export default {


  data(){
    return  {

    }
  },
  methods: {
    logOut: function(e) {

      axios({
        method: 'post', //you can set what request you want to be
        url: 'api/logout',
        headers: {
          Authorization: 'Bearer ' + this.$root.access_token
        }
      })
      .then(function (response) {
        if (response.status == "201" || response.status == "200") {
          localStorage.removeItem('access_token');
          console.log(response);
          e.target.reset();
        }
      })
      .catch(function (error) {
        alert(error);
      });
    },


  },


  mounted() {


  }
}
</script>
