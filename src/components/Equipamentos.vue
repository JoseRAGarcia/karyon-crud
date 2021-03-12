<template>
  <div class="fadeIn1 crud">     
    <div id="hiden" class="hiden">       
		<form @submit.prevent="salvarEquipamento">
			<div class="formCrud form-group">				
                <input list="equipamentos" placeholder="ID" class="form-control" v-model="novoEquipamento.equipamento.id">
                <datalist id="equipamentos" >                    
                    <option v-for="e in equipamentos" :key="e.id" :value="e.id"></option>                
                </datalist>
                <input list="fornecedores" placeholder="Fornecedor" class="form-control" v-model="novoEquipamento.empresaDistribuidora">
                <datalist id="fornecedores" >                    
                    <option v-for="f in fornecedores" :key="f.id" :value="f.descricao"></option>                
                </datalist>
                <input list="status" placeholder="Status" class="form-control" v-model="novoEquipamento.status">
                <datalist id="status" >                  
                    <option value="SO"></option>
                    <option value="CA"></option>
                    <option value="EU"></option>            
                </datalist>
                <input type="date" id="dataCancelamento" v-model="novoEquipamento.dtCancelamento">
                <label for="dataCancelamento">Data de Cancelamento</label>
                <input type="text" id="nrSerial" placeholder="Nº de Série" class="form-control" v-model="novoEquipamento.nrSerial">
                <input type="text"  id="observacao" placeholder="Observação" class="form-control" v-model="novoEquipamento.observacao">
                <input type="text" id="estacao" placeholder="Estação" class="form-control" v-model="novoEquipamento.estacao">

                <label class="select-cliente">
                    <input type="checkbox" v-model="novoEquipamento.atualizarDriver" />
                    <span>Atualizar Driver?</span>
                </label> 

                
                <input type="text" id="versaoDriver" placeholder="Versão de driver para atualização" class="form-control" v-model="novoEquipamento.versaoDriverAtualizacao">
                <div>
                    <input type="submit" name="" value="ENVIAR" class="btn btn-primary btnFormGroup">
                    <div @click="mudarClasse" class="btn btn-primary btnFormGroup">CANCELAR</div>
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
				<th scope="row"></th>
                <td>{{ equipamento.equipamento.id }}</td>
                <td>{{ equipamento.equipamento.equipamento }}</td>
                <td>{{ equipamento.empresaDistribuidora }}</td>
                <td>{{ equipamento.status }}</td>
                <td>{{ equipamento.dtCancelamento }}</td>
                <td>{{ equipamento.nrSerial }}</td>
                <td>{{ equipamento.observacao }}</td>
                <td>{{ equipamento.estacao }}</td>
                <td>{{ equipamento.atualizarDriver }}</td>          
                <td @click="editarEquipamento(equipamento)"><i class="material-icons" style="color: #2f4fa2; cursor: pointer">mode_edit</i></td>
				<td><i class="material-icons" style="color: red; cursor: pointer">delete</i></td>
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
            fornecedores: [],
            equipamentoId: '',
            novoEquipamento: {
                equipamento: {
                    id: ''
                },
                status: '',
                nrSerial: '',
                observacao: '',
                empresaDistribuidora: '',
                dtCancelamento: '',
                tipoSubstiticao: false,
                idEquipamentoCliente: '',
                servidorCliente: null,
                dtValidade: null,
                fatutadoPor: 0,
                valorEquipamento: 0.0,
                versaoDriver: '',
                atualizarDriver: false,
                versaoDriverAtualizacao: null,
                estacao: null,
                flagDiasSemExames: 0
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
        this.listarEquipamentosCliente()
    },

    methods: {
        //Lista todos os equipamentos do cliente
        listarEquipamentosCliente() {
            http.get('equipamento-cliente/cliente/' + this.$route.params.idCliente, {
                headers: {
                    Authorization: 'Bearer ' + localStorage.getItem('token')
                }            
            }).then(res => {
                this.equipamentosCliente = res.data                
            })
            this.listaEquipamentos()
            this.listaFornecedores()
        },

        //Muda a classe hiden para cadastro ou atualização de um equipamento
        mudarClasse() {
            if(document.querySelector('#hiden').className == "hiden"){
                document.querySelector('#hiden').className = "shown"; 
            }else{
                document.querySelector('#hiden').className = "hiden"; 
            }                                  
        },

        //Lista todos equipamentos
        listaEquipamentos() {
            http.get('equipamento', {
                headers: {
                    Authorization: 'Bearer ' + localStorage.getItem('token')
                } 
            }).then(res => {
                this.equipamentos = res.data                
            })
        },

        //Lista todos os fornecedores
        listaFornecedores() {
            http.get('fornecedor-equipamento', {
                headers: {
                    Authorization: 'Bearer ' + localStorage.getItem('token')
                }
            }).then(res => {
                this.fornecedores = res.data
                
            })
        },

        //Faz o cadastro ou atualização de equipamentos
        salvarEquipamento() {
            if(this.equipamentoId == '') {
                http.post('equipamento-cliente/cliente/' + this.$route.params.idCliente, this.novoEquipamento, {
                    headers: {
                        Authorization: 'Bearer ' + localStorage.getItem('token')
                    } 
                }).then(() => {
                    this.novoEquipamento = {}
                    alert('Equipamento salvo com sucesso!')
                    this.mudarClasse()
                    this.listarEquipamentosCliente()
                })
            }else{
                http.put('equipamento-cliente/' + this.equipamentoId, this.novoEquipamento, {
                    headers: {
                        Authorization: 'Bearer ' + localStorage.getItem('token')
                    } 
                }).then(() => {
                    this.novoEquipamento = {}
                    alert('Equipamento atualizado com sucesso!')
                    this.equipamentoId = ''
                    this.mudarClasse()
                    this.listarEquipamentosCliente()
                })
            }
        },

        //Prepara para a atualização do equipamento
        editarEquipamento(equipamento) {
            this.mudarClasse()
            this.equipamentoId = equipamento.equipamento.id
            this.novoEquipamento = equipamento
        }
    }

}
</script>

<style>
.tableCrud{
        margin-top:70px;
    }
</style>