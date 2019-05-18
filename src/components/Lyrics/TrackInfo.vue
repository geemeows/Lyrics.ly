<template>
  <a-row>
    <a-col :xs="{span: 24}" :lg="{span: 16}">
      <h2 class="trackTitle">{{trackInfo.trackTitle}}</h2>
      <span class="author">{{trackInfo.author}}</span>
    </a-col>
    <a-col :xs="{span: 24}" :lg="{span: 8}">
      <social-share :trackTitle="trackInfo.trackTitle"></social-share>
    </a-col>
  </a-row>
</template>

<script>
import SocialShare from './SocialShare'
export default {
  props: ['trackInfo'],
  components: {
    SocialShare
  }
}
</script>

<style scoped>
h2.trackTitle {
  font-weight: 500;
  text-align: left;
  font-size: 30px;
  margin-top: 20px !important;
  margin-bottom: 0;
}
.author {
  font-weight: 500;
}
</style>
