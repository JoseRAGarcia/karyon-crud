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
				<input type="text" name="" class="form-control" placeholder="Nome">
				<input type="text" name="" class="form-control" placeholder="Idade">
				<input type="text" name="" class="form-control" placeholder="Profissão">
				<input type="text" name="" class="form-control" placeholder="Nacionalidade">
				<input type="submit" name="" value="ENVIAR" class="btn btn-primary btnFormGroup">
                <button @click="mudaClasse" class="btn btn-primary btnFormGroup">CANCELAR</button>
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
			<th scope="col">Nome</th>
			<th scope="col">Idade</th>
			<th scope="col">Profissão</th>
			<th scope="col">Nacionalidade</th>
			<th scope="col"></th>
			<th scope="col"></th>
		</thead>
		<tbody>
			<tr>
				<th scope="row">1</th>
				<td></td>
				<td></td>
				<td></td>
				<td></td>
				<td><a href="#"><i class="material-icons" style="color: #2f4fa2">mode_edit</i></a></td>
				<td><a href="#"><i class="material-icons" style="color: red">delete</i></a></td>
			</tr>
		</tbody>
	</table>
  </div>
</template>

<script>
export default {
    name: 'TableCrud',
    
    methods: {
        mudaClasse(){
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
	@media only screen and (max-width: 800px){
		.formCrud, .selectCrud{
			width: 80%;
		}
	}
</style>