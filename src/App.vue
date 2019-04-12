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

</style>

