<template>
  <div id="app">
    <!-- <img src="./assets/logo.png"> -->
    <Home/>
  </div>
</template>

<script>
import Home from './views/Home.vue';

export default {
    name: "App",
    components: { Home }
}
</script>

<style lang="scss">
@import "assets/scss/reset";
  .lemon-container .lemon-container__title{
    border-bottom:solid 1px #e6e6e6 !important
  }
  .el-transfer-panel .el-transfer-panel__body {
    height: 280px !important; 
  }
  .lemon-editor__submit .lemon-button{
    background: #409EFF;
    color:#fff;
  }
   .lemon-editor__submit .lemon-button:hover{
    background: #409EEE;
    color:#fff !important;
    border:solid 1px #409EEE !important;
  }
  .lemon-editor__submit button[disabled],.lemon-editor__submit button[disabled]:hover{
    background: #fff;
    color:#aaa;
    border:solid 1px #aaa;
  }

  .el-scrollbar__wrap {
      overflow-x: hidden !important;
  }
  .lemon-contact{
    padding:10px;
  }
  hr {
    height: 1px;
    background-color: #e6e6e6;
    border: none;
  }
</style>
