<template>
  <div class="home fadeIn1">  
    <div class="home-img fadeIn"></div>
    <div class="sobre-card md-elevation-20 text-left"> 
      <h1 class="md-display-3"><b>Projeto de CRUD desenvolvido em VueJS por <b>José Rosaldo Araujo Garcia</b> como parte de processo seletivo para vaga de Desenvolvedor Júnior para empresa de consultoria em informática <b>Karyon</b></b></h1>
    </div>  
  </div>  
</template>

<script>
export default {
    name: 'SobreApp',  
}
</script>

<style>
.sobre-card{
    margin-left: 2%;    
    width: 50%;
  }
  .sobre-card h1{
    color: #2f4fa2;
    padding: 2%;
    font-size: 200%;
    font-weight: 300;
  }
  @media only screen and (max-width: 1096px){
		.sobre-card{
      margin-right: 2%;
			width: auto;
		}
	}
</style>