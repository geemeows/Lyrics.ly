<template>
  <app-carousel
    :autoplay="true"
    :nav="false"
    :dots="false"
    :items="4"
    :responsive="{0:{items:1,nav:false},768:{items:2,nav:false},1200:{items:4,nav:false}}"
  >
    <template slot="prev" style="display:block">
      <div class="prev">
        <a-icon type="left" class="arrow-left"/>
      </div>
    </template>
    <a-col :xs="{span: 24}" :lg="{span: 6}" v-for="(track,i) in topTracks" :key="i">
      <router-link
        v-if="topTracks.length !== 0"
        :to="{name: 'lyrics', params: {track_id: track.trackID}, query: {trackName: track.trackName, artistName: track.artistName}}"
      >
        <a-card hoverable style="width: 300px">
          <img alt="example" src="../../assets/card-img.png" slot="cover">
          <div class="genre">{{track.genre}}</div>
          <a-card-meta :title="track.trackName" :description="track.artistName">
            <a-avatar
              slot="avatar"
              style="color: #f56a00; backgroundColor: #fde3cf"
            >{{track.artistName.charAt(0)}}</a-avatar>
          </a-card-meta>
        </a-card>
      </router-link>
    </a-col>
    <template slot="next">
      <div class="next">
        <a-icon type="right" class="arrow-right"/>
      </div>
    </template>
  </app-carousel>
</template>

<script>
import appCarousel from 'vue-owl-carousel'
export default {
  props: ['topTracks'],
  components: {
    appCarousel
  }
}
</script>

<style scoped>
.next,
.prev {
  position: absolute;
  top: 82px;
  z-index: 2000;
  display: block !important;
  width: 50px;
  height: 50px;
  background: rgb(194, 194, 194);
  border-radius: 50%;
  color: black;
  cursor: pointer;
}
.next {
  right: -6px;
  opacity: 0.6;
  transition: opacity 0.3s;
}
.prev {
  left: -20px;
  opacity: 0.6;
  transition: opacity 0.3s;
}
.prev:hover,
.next:hover {
  opacity: 1;
}
.arrow-right {
  position: absolute;
  top: 14px;
  left: 16px;
  font-size: 20px;
}
.arrow-left {
  position: absolute;
  top: 14px;
  left: 14px;
  font-size: 20px;
}
.genre {
  position: absolute;
  top: 121px;
  left: 0;
  background: #ee3723;
  padding: 3px 10px;
  color: white;
}
@media (min-width: 320px) and (max-width: 480px) {
  .prev,
  .next {
    display: none !important;
  }
}
</style>
