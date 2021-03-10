<template>
  <div class="crud fadeIn1">
      
    <div class="selectCrud form-group">        
        <select name="" id="categoria" class="form-control">
            <option value="0">Escolha a categoria</option>
            <option value="1">Categoria 1</option>
            <option value="2">Categoria 2</option>
        </select>
    </div>
    <div id="hiden" class="hiden">
		<form @submit.prevent="">
			<div class="formCrud form-group">
				<input type="text" name="" class="form-control" placeholder="Nome Fantasia">
				<input type="text" name="" class="form-control" placeholder="Razão Social">
				<input type="text" name="" class="form-control" placeholder="CNPJ">
				<select name="" id="bioslab" class="form-control select-cliente">
                    <option value="0">Cliente Bioslab?</option>
                    <option value="1">Sim</option>
                    <option value="2">Não</option>
                </select>
                <select name="" id="facelab" class="form-control select-cliente">
                    <option value="0">Cliente Facelab?</option>
                    <option value="1">Sim</option>
                    <option value="2">Não</option>
                </select>
                <select name="" id="midialab" class="form-control select-cliente">
                    <option value="0">Cliente Midialab?</option>
                    <option value="1">Sim</option>
                    <option value="2">Não</option>
                </select>
                <select name="" id="versaBioslab" class="form-control select-cliente">
                    <option value="0">Versão do Bioslab</option>
                    <option value="1">PREMIUM</option>                    
                </select>
                <select name="" id="situacaoContrato" class="form-control">
                    <option value="0">Situação do Contrato do Bioslab</option>
                    <option value="1">AT</option>                    
                </select>                
                <input type="date" id="expiracaoBioslab" name="" class="form-control">
                <label for="expiracaoBioslab">Expiração do Contrato Bioslab</label>
                <div>
                    <input type="submit" name="" value="ENVIAR" class="btn btn-primary btnFormGroup">
                    <button @click="mudaClasse" class="btn btn-primary btnFormGroup">CANCELAR</button>
                </div>
			</div>
		</form>
		<hr>
	</div>
    <div>
        <button @click="mudaClasse" class="btn btn-primary btnCadastro">CADASTRAR NOVO</button>
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
            
        }
    },
    
    async created() {
        await http.get('cliente', {
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
    
    methods: {
        mudaClasse() {
            if(document.querySelector('#hiden').className == "hiden"){
                document.querySelector('#hiden').className = "shown"; 
            }else{
                document.querySelector('#hiden').className = "hiden"; 
            }
                       
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
        display: inline;
        margin: 2.5%;
    }
	@media only screen and (max-width: 800px){
		.formCrud, .selectCrud{
			width: 80%;
		}
	}
</style>