<template>
  <div class="fadeIn1 crud">
     <div class="selectCrud form-group">        
        <input type="search" placeholder="Pesquisar" class="form-control">
    </div>
    <hr>
    <div id="hiden" class="hiden">        
		<form @submit.prevent="">
			<div class="formCrud form-group">				
                <input list="equipamentos" placeholder="ID" class="form-control">
                <datalist id="equipamentos" >                    
                    <option v-for="e in equipamentos" :key="e.id" :value="e.id"></option>                
                </datalist>
                <input list="fornecedores" placeholder="Fornecedor" class="form-control">
                <datalist id="fornecedores" >                    
                    <option v-for="f in fornecedores" :key="f.id" :value="f.descricao"></option>                
                </datalist>
                <input list="status" placeholder="Status" class="form-control">
                <datalist id="status" >                  
                    <option value="SO"></option>
                    <option value="CA"></option>
                    <option value="EU"></option>            
                </datalist>
                <input type="date" id="dataCancelamento">
                <label for="dataCancelamento">Data de Cancelamento</label>
                <input type="text" id="nrSerial" placeholder="Nº de Série" class="form-control">
                <input type="text"  id="observacao" placeholder="Observação" class="form-control">
                <input type="text" id="estacao" placeholder="Estação" class="form-control">

                <label class="select-cliente">
                    <input type="checkbox" />
                    <span>Atualizar Driver?</span>
                </label> 

                
                <input type="text" id="versaoDriver" placeholder="Versão de driver para atualização" class="form-control">
                <div>
                    <input type="submit" name="" value="ENVIAR" class="btn btn-primary btnFormGroup">
                    <button @click="mudarClasse" class="btn btn-primary btnFormGroup">CANCELAR</button>
                </div>
			</div>
		</form>
		<hr>
	</div>
    <div>        
        <button @click="mudarClasse" class="btn btn-primary btnCadastro">CADASTRAR NOVO EQUIPAMENTO</button>
        <p class="md-title" >Equipamentos do Cliente {{ this.$route.params.idCliente }}</p>
    </div>   
    <table class="table table-striped table-hover table-sm tableCrud text-left">
		<thead>
			<th scope="col"></th>
			<th scope="col">ID</th>
			<th scope="col">Equipamento</th>
            <th scope="col">Empresa Distribuidora</th>
            <th scope="col">Status</th>
            <th scope="col">Data Cancelamento</th>
			<th scope="col">Nº de Série</th>
            <th scope="col">Observação</th>
            <th scope="col">Estação</th>
            <th scope="col">Atualizar Driver</th>
			<th scope="col"></th>
			<th scope="col"></th>
		</thead>
        <tbody>
            <tr v-for="equipamento of equipamentosCliente" :key="equipamento.equipamento.id" >
				<th scope="row">
                    <router-link :to="{path: '/cliente/'}">
                        <i class="material-icons" style="color: #2f4fa2">add</i>
                    </router-link>
                </th>
                <td>{{ equipamento.equipamento.id }}</td>
                <td>{{ equipamento.equipamento.equipamento }}</td>
                <td>{{ equipamento.empresaDistribuidora }}</td>
                <td>{{ equipamento.status }}</td>
                <td>{{ equipamento.dtCancelamento }}</td>
                <td>{{ equipamento.nrSerial }}</td>
                <td>{{ equipamento.observacao }}</td>
                <td>{{ equipamento.estacao }}</td>
                <td>{{ equipamento.atualizarDriver }}</td>          
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
    name: 'EquipamentosApp',

    data() {
        return {
            equipamentosCliente: [],
            equipamentos: [],
            fornecedores: []
        }
    },

    beforeCreate(){
        if(!localStorage.getItem('token')) {
            this.$router.push('/')
            alert('Realizar login')
        }
    },

    async created() {
        await http.get('equipamento-cliente/cliente/' + this.$route.params.idCliente, {
                headers: {
                    Authorization: 'Bearer ' + localStorage.getItem('token')
                }            
        }).then(res => {
            this.equipamentosCliente = res.data
            console.log(this.equipamentosCliente)
        })
        this.listaEquipamentos()
        this.listaFornecedores()
    },

    methods: {
        mudarClasse() {
            if(document.querySelector('#hiden').className == "hiden"){
                document.querySelector('#hiden').className = "shown"; 
            }else{
                document.querySelector('#hiden').className = "hiden"; 
            }                                  
        },
        listaEquipamentos() {
            http.get('equipamento', {
                headers: {
                    Authorization: 'Bearer ' + localStorage.getItem('token')
                } 
            }).then(res => {
                this.equipamentos = res.data                
            })
        },
        listaFornecedores() {
            http.get('fornecedor-equipamento', {
                headers: {
                    Authorization: 'Bearer ' + localStorage.getItem('token')
                }
            }).then(res => {
                this.fornecedores = res.data
                console.log(this.fornecedores)
            })
        }
    }

}
</script>

<style>
.tableCrud{
        margin-top:70px;
    }
</style>