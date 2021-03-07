<template>
  <div class="home fadeIn1">
    <div class="home-img fadeIn"></div>
    <div class="home-card md-elevation-20 text-center"> 
      <h1 class="md-display-3"><b>Sistema de Gerenciamento de Equipamentos</b></h1>
    </div>  
  </div>  
</template>

<script>
export default {
    name: 'HomeApp'
}
</script>

<style>
  .home{    
    height: 50vh;
    width: 100%;    
  }
  .home-img{
    background: url(../assets/background-20anos.png) no-repeat right bottom;
    background-size: contain;
    height: 100%;
    width: 50%;
    position: absolute;
    right: 0;
    bottom: 0;
    margin-bottom: 12vh;
    z-index: -1;
  }
  .home-card{
    margin-left: 2%;
    margin-right: 2%;
    margin-top: 10px;
    width: auto;
  }
  .home-card h1{
    color: #2f4fa2;
    padding: 2%;
    font-size: 200%;
  }
</style>