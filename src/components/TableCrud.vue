<template>
  <div class="crud fadeIn1">
      
    <div class="selectCrud form-group">        
        <input type="search" placeholder="Pesquisar" class="form-control">
    </div>
    <hr> 
    <div id="hiden" class="hiden">
		<form @submit.prevent="criarCliente">
			<div class="formCrud form-group">
				<input type="text" name="" class="form-control" placeholder="Nome Fantasia" v-model="novoCliente.nomeFantasia">    
				<input type="text" name="" class="form-control" placeholder="Razão Social" v-model="novoCliente.razaoSocial">
				<input type="text" name="" class="form-control" placeholder="CNPJ" v-model="novoCliente.cnpj">
                
                <label class="select-cliente">
                    <input type="checkbox" v-model="novoCliente.clienteBioslab" />
                    <span>Cliente Bioslab?</span>
                </label>
                <label class="select-cliente">
                    <input type="checkbox" v-model="novoCliente.clienteFacelab" />
                    <span>Cliente Facelab?</span>
                </label>
                <label class="select-cliente">
                    <input type="checkbox" v-model="novoCliente.clienteMidialab" />
                    <span>Cliente Midialab?</span>
                </label>     
        
                <input list="versaoBioslab" placeholder="Versão do Bioslab" class="form-control select-cliente" v-model="novoCliente.versaoBioslab">	
                <datalist id="versaoBioslab">              
                    <option value=" "></option>
                    <option value="PREMIUM"></option>            
                </datalist>
                <input list="versaoBancoBioslab" placeholder="Versão Banco Bioslab" class="form-control select-cliente" v-model="novoCliente.versaoBancoBioslab">	
                <datalist id="versaoBancoBioslab">              
                    <option value=" "></option>
                    <option value="4.1.0"></option>            
                </datalist>
                <input list="situacaoContrato" placeholder="Situação do Contrato do Bioslab" class="form-control select-cliente" v-model="novoCliente.situacaoContratoBioslab">	
                <datalist id="situacaoContrato">              
                    <option value=" "></option>
                    <option value="AT"></option>            
                </datalist>
                               
                <input type="date" id="expiracaoBioslab" name="" class="form-control" v-model="novoCliente.dataExpiracaoContratoBioslab">
                <label for="expiracaoBioslab">Expiração do Contrato Bioslab</label>
                <div>
                    <input type="submit" name="" value="ENVIAR" class="btn btn-primary btnFormGroup">
                    <button @click="mudarClasse" class="btn btn-primary btnFormGroup">CANCELAR</button>
                </div>
			</div>
		</form>
		<hr>
	</div>
    <div>        
        <button @click="mudarClasse" class="btn btn-primary btnCadastro">CADASTRAR NOVO CLIENTE</button>
        <p class="md-title" >Clientes Facelab</p>
    </div>
    <table class="table table-striped table-hover table-sm tableCrud text-left">
		<thead>
			<th scope="col"></th>
			<th scope="col">Id do Cliente</th>
			<th scope="col">Nome Fantasia</th>
			<th scope="col"></th>
			<th scope="col"></th>
			<th scope="col"></th>
			<th scope="col"></th>
		</thead>
		<tbody>
			<tr v-for="cliente of clientes" :key="cliente.idCliente" >
				<th scope="row">
                    <router-link :to="{path: '/cliente/' + cliente.idCliente}">
                        <i class="material-icons" style="color: #2f4fa2">add</i>
                    </router-link>
                </th>
				<td>{{ cliente.idCliente }}</td>
				<td>{{ cliente.nomeFantasia }}</td>
				<td>{{ cliente.clienteFacelab }}</td>
				<td></td>
				<td><a href="#"><i class="material-icons" style="color: #2f4fa2">mode_edit</i></a></td>
				<td><a href="#"><i class="material-icons" style="color: red">delete</i></a></td>
			</tr>
		</tbody>
	</table>
  </div>
</template>

<script>
import { http } from '../services/config'

export default {
    name: 'TableCrud',

    data() {
        return{
            clientes: [],
            novoCliente: {
                nomeFantasia: '',
                razaoSocial: '',
                cnpj: '',
                clienteBioslab: false,
                clienteFacelab: false,
                clienteMidialab: false,
                versaoBioslab: '',
                versaoBancoBioslab: '',
                situacaoContratoBioslab: '',
                dataExpiracaoContratoBioslab: null
            }
        }
    },
    
    beforeCreate(){
        if(!localStorage.getItem('token')) {
            this.$router.push('/')
            alert('Realizar login')
        }
    },

    async created() {
        this.listarClientes() 
    },
    
    methods: {
        listarClientes() {
            http.get('cliente', {
                headers: {
                    Authorization: 'Bearer ' + localStorage.getItem('token')
                }            
            }).then(res => {            
                for(var cliente in res.data){
                    if(res.data[cliente].clienteFacelab){
                        this.clientes.push(res.data[cliente])                    
                    }  
                }           
                // console.log(res.data)
            })
        },

        mudarClasse() {
            if(document.querySelector('#hiden').className == "hiden"){
                document.querySelector('#hiden').className = "shown"; 
            }else{
                document.querySelector('#hiden').className = "hiden"; 
            }                       
        },
        criarCliente() {
           http.post('cliente', this.novoCliente, {
                headers: {
                    Authorization: 'Bearer ' + localStorage.getItem('token')
                } 
            }).then(() => {
                this.novoCliente = {}
                alert('Cliente salvo com sucesso!')
                this.listarClientes()                
            }).catch(e => {
                console.log(e.response)
            })          
        }
    }
}

</script>

<style>
    .crud{
        margin: 10px;
        padding-bottom: 12vh;
    }
    .formCrud, .selectCrud{
        width: 30%;
        position: relative;
        left: 50%;
        transform: translateX(-50%);
    }
    .btnFormGroup{
        width: 45%;
        margin: 2.5%;
    }
    .btn{
        background-color: #2f4fa2 !important;
    }
    .btnCadastro{
        position: absolute;
        left: 0;
        margin: 10px;        
    }
    .tableCrud{
        margin-top:70px;
    }
    .hiden{
        display: none;
    }
    .select-cliente{
        width: 45%;
        display: block;
        margin: 2.5%;
    }
	@media only screen and (max-width: 800px){
		.formCrud, .selectCrud{
			width: 80%;
		}
	}
</style>