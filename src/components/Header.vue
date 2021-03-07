<template>
  <header class="md-layout md-elevation-10">
    <div class="md-layout-item">
        <img src="@/assets/logo.png" alt="Logotipo comemorativo de 20 anos da Karyon" class="logo fadeIn">
    </div>
    <div class="md-layout-item md-title">
      CRUD
    </div>
    <div class="md-layout-item md-subhead text-right main-menu"> 
      <router-link to="/" class="menu">
        <md-icon>home</md-icon><span>Home</span>
      </router-link>
      <router-link to="/gerenciamento" class="menu">
        <md-icon>table_chart</md-icon><span>Gerenciar</span>
      </router-link> 
      <router-link to="/sobre" class="menu">
        <md-icon>info</md-icon><span>Sobre</span>
      </router-link>      
    </div>
  </header>
  
</template>

<script>

export default {
  name: 'HeaderApp'
 
}
</script>

<style>
    @-webkit-keyframes fadeIn {
      0% { opacity: 0; }
      100% { opacity: 1; } 
    }

    @-moz-keyframes fadeIn {
        0% { opacity: 0;}
        100% { opacity: 1; }
    }

    @-o-keyframes fadeIn {
        0% { opacity: 0; }
        100% { opacity: 1; }
    }

    @keyframes fadeIn {
        0% { opacity: 0; }
        100% { opacity: 1; }
    }

    header{
      color: #fff;
      background-color: #2f4fa2;
      align-items: center;
    }

    .fadeIn {
        -webkit-animation: fadeIn 3s ease-in-out;
        -moz-animation: fadeIn 3s ease-in-out;
        -o-animation: fadeIn 3s ease-in-out;
        animation: fadeIn 3s ease-in-out;
    }

    .fadeIn1 {
        -webkit-animation: fadeIn 0.5s ease-in-out;
        -moz-animation: fadeIn 0.5s ease-in-out;
        -o-animation: fadeIn 0.5s ease-in-out;
        animation: fadeIn 0.5s ease-in-out;
    }

    .logo{
        padding: 10%;
    }
    span{
      padding-left: 5px;
    }
    .menu{
      display: block;      
      padding-bottom: 5px;
      color: #fff;
      font-size: 100%;
    }
    .main-menu{
      margin-right: 2%;
    }
    .router-link-exact-active{
      color: orange;
    }
    

</style>
