<template>
  <div id="app">
    <G_Header />
    <G_Home />
    <G_Footer />
  </div>
</template>
<script>
  import G_Header from "@/components/common/header/Header";
  import G_Footer from "@/components/common/footer/Footer";
  import G_Home from "@/views/v1/Home";
  export default {
    name:'App',
    components:{//注冊
      G_Header,
      G_Home,
      G_Footer
    }
  }
</script>
<style>
  @import "assets/css/base.css";
  @import "assets/css/main.css";
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }

  #nav {
    padding: 30px;
  }

  #nav a {
    font-weight: bold;
    color: #2c3e50;
  }

  #nav a.router-link-exact-active {
    color: #42b983;
  }
</style>
