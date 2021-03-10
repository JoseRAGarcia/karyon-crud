<template>
  <div class="home fadeIn1">
    <div class="home-img fadeIn"></div>
    <div class="home-card md-elevation-20 text-center">
      <h1 class="md-display-3">Login</h1>
    <form @submit.prevent="submit()">
        <div>
            <input class="login-input" required type="text" v-model="email" placeholder="E-mail">
        </div>
        <div>
            <input class="login-input" required type="password" v-model="senha" placeholder="Senha">
        </div>
        <button class="btn btn-primary btnFormGroup">Entrar</button>
    </form>
    </div>
  </div>  
</template>

<script>
import { http } from '../services/config'

export default {
    name: 'HomeApp',

    data() {
        return{
            email: '',
            senha: ''
        }        
    },
    methods: {
        async submit() {
           await http.post('login', {
                    email: this.email,
                    senha: this.senha
                }).then(res => {
                    localStorage.setItem('token',res.data.token)
                })

            this.$router.push('/gerenciamento')
        }
    }

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
    margin: 0 2% 0 2%;
    padding: 0 2% 0 2%;
    width: 50%;
  }
  .home-card h1{
    color: #2f4fa2;
    padding: 2%;
    font-size: 200%;
  }

  .login-input {
    width: 10%
  }

  @media only screen and (max-width: 1096px){
		.home-card{
      margin-right: 2%;
			width: auto;
		}
	}
</style>