<template>
  <div class="container">











    <form class="" @submit="formRegister" action="" method="post">

<div class="form-group">
      <input type="text" class="form-control" name="name" value=""placeholder="Nombre"><br>
 </div>
<div class="form-group">
      <input type="email" class="form-control" name="email" value=""placeholder="Email"><br>
 </div>
<div class="form-group">
      <input type="password" class="form-control" name="password" value=""placeholder="password"><br>
 </div>
<div class="form-group">
      <input type="password" class="form-control" name="password_confirmation" value=""placeholder="confirme password"><br>
 </div>
<div class="form-group">
      <input type="submit" class="form-control" name="Submit" value="Submit">
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

    formRegister: function(e) {
      e.preventDefault();
      var currentObj = this;
      const config = {
        headers: {
          'content-type': 'application/json',
          'X-Requested-With': 'XMLHttpRequest'
        }
      }
      var formData = new FormData(e.target);
      axios.post('api/register', formData, config)
      .then(function (response) {
        console.log(response);
        if (response.status == "201") {
          alert(JSON.stringify(response.data));
          e.target.reset();
        }
        if (response.data.errors) {
          alert(JSON.stringify(response.data.errors));
        }
      })
      .catch(function (error) {
        currentObj.output = error;
      });
    },


  },


  mounted() {
    // console.log('Component mounted.')
  }
}
</script>
