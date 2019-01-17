<template>
    <div class="">





      <nav class="navbar navbar-expand-lg  navbar-dark bg-dark">
        <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
          <li class="nav-item">
            <router-link class="nav-link" :to="{ name: 'home' }">home</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" :to="{ name: 'app' }">app</router-link>
          </li>
          <li v-if="!$root.access_token" class="nav-item">
            <router-link class="nav-link" :to="{ name: 'login' }">login</router-link>
          </li>
          <li v-if="!$root.access_token" class="nav-item">
            <router-link class="nav-link" :to="{ name: 'register' }">register</router-link>
          </li>
          <li v-if="$root.access_token" class="nav-item">
            <router-link class="nav-link" :to="{ name: 'logout' }">logout</router-link>
          </li>
        </ul>
      </nav>






    </div>
</template>

<script>
    export default {
      data(){
        return  {
          
        }
      },
      computed: {
         // userLoggedIn: function () {
         //   return this.$root.access_token;
         // }
       },
        mounted() {
            // console.log('Component mounted.')
        }
    }
</script>
