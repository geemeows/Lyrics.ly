<template>
  <a href="#">
    <a-card hoverable style="width: 270px">
      <img alt="example" src="../assets/card-img.png" slot="cover">
      <div class="genre">Genre</div>
      <a-card-meta title="data.trackName" description="data.artistName ">
        <a-avatar slot="avatar" style="color: #f56a00; backgroundColor: #fde3cf">U</a-avatar>
      </a-card-meta>
    </a-card>
  </a>
</template>

<script>
export default {
  data() {
    return {
  
    }
  }
};
</script>

<style>
.ant-card-meta-detail > div:not(:last-child) {
  margin-bottom: 0 !important;
}
.genre {
  position: absolute;
  top: 121px;
  left: 0;
  background: #ee3723;
  padding: 3px 10px;
  color: white;
}
</style>
