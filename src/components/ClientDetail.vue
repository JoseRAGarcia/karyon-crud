<template>
<div class="dadosCliente">
    <h1>{{ cliente.nomeFantasia }} (Nome Fantasia)</h1>
    <hr>
    <div class="md-layout">
        <div class="dadosGerais text-left md-layout-item">
            <p><b>ID: </b>{{ cliente.idCliente }}</p>
            <p><b>Razão Social: </b>{{ cliente.razaoSocial }}</p>
            <p><b>CNPJ: </b>{{ cliente.cnpj }}</p>
            <p><b>E-mail: </b>{{ cliente.email }}</p>
            <p><b>Telefone: </b>{{ cliente.telefone }}</p>        
        </div>
        <div class="dadosEndereco text-left md-layout-item">
            <p><b>Endereço: </b>{{ cliente.endereco }}</p>
            <p><b>Cidade: </b>{{ cliente.cidade }}</p>
            <p><b>CEP: </b>{{ cliente.cep }}</p>
            <p><b>UF: </b>{{ cliente.uf }}</p>                  
        </div>
        <div class="dadosKaryon text-left md-layout-item">
            <p><b>Cliente Bioslab: </b>{{ cliente.clienteBioslab }}</p>
            <p><b>Cliente Facelab: </b>{{ cliente.clienteFacelab }}</p>
            <p><b>Cliente Midialab: </b>{{ cliente.clienteMidialab }}</p>
            <p><b>Expiração Contrato Bioslab: </b>{{ cliente.dataExpiracaoContratoBioslab }}</p>
            <p><b>Situação Contrato Bioslab: </b>{{ cliente.situacaoContratoBioslab }}</p>
            <p><b>Valor Equipamento: </b>{{ cliente.valorEquipamento }}</p>
            <p><b>Versão Bioslab: </b>{{ cliente.versaoBioslab }}</p>
            <p><b>Versão Banco Bioslab: </b>{{ cliente.versaoBancoBioslab }}</p>
        </div>
    </div>    
</div>  
</template>

<script>
import { http } from '../services/config'

export default {
    name: 'ClientDetail',

    data() {
        return{
            cliente: [],            
            
        }
    },

    async created() {
        await http.get('cliente/' + this.$route.params.idCliente, {
            headers: {
                    Authorization: 'Bearer ' + localStorage.getItem('token')
            } 
        }).then(res => {
            this.cliente = res.data
            console.log(this.cliente)
        })
    },

    methods: {
        
    }
}
</script>

<style>
.dadosCliente{
    margin: 0 2% 0 2%;
    padding-bottom: 12vh;
    width: auto;
}

.dadosCliente h1{
    color: #2f4fa2;
    font-size: 200%;
}

</style>