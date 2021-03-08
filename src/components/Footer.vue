<template>
  <footer>
      <div class="assinatura text-right">
         Desenvolvido com
         <md-icon id="heart">favorite</md-icon>
         por <strong id="nome">José Garcia</strong>
      </div>
  </footer>
</template>

<script>
export default {
    name: 'FooterApp',
}
</script>

<style>
    footer{
        background-color: #2f4fa2;
        position: absolute;        
        bottom: 0;
        display: flex;
        justify-content: flex-end;
        width: 100%;        
        height: 12vh;
        align-items: center;
        color: #fff;
    }

    .assinatura{
        font-weight: 300;
        font-size: 1.1rem;
        padding-right: 2%;
    }

    #heart{
        color: red;
    }

    #nome{
        color: gray;
    }
</style>