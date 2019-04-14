<template>
  <a-layout>
    <app-search></app-search>
    <router-view></router-view>
    <a-layout-footer style="textAlign: center">Made with <a-icon type="heart" theme="filled"/> and <a href="#">Vue.js</a></a-layout-footer>
  </a-layout>
</template>
<script>
import appSearch from "./components/Search";

export default {
  components: {
    appSearch
  }
};
</script>
<style>
  .spin-content{
    border: 1px solid rgba(253, 110, 70, 0.3);
    background-color: linear-gradient(360deg,rgba(253, 110, 70, 0.8) 10%,rgba(251, 150, 50, 0.7) 360%);
    padding: 30px;
  }
</style>

