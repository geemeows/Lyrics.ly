<template>
  <div style="margin-bottom: 20px">
    {{ setTracks() }}
    <h2>TOP 10 SINGLES CHART IN US</h2>
    <a-row type="flex" justify="space-around" align="middle" style="padding: 0 40px">
      <!-- Top 10 Charts in US -->
      <a-col :xs="{span: 24}">
        <a-row>
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
            <a-col :xs="{span: 24}" :lg="{span: 6}" v-for="(item,i) in 10" :key="i">
              <router-link
                :to="{name: 'lyrics', params: {track_id: getTopTracks[i].trackID}, query: {trackName: getTopTracks[i].trackName, artistName: getTopTracks[i].artistName}}"
              >
                <a-card hoverable style="width: 300px">
                  <img alt="example" src="../assets/card-img.png" slot="cover">
                  <div class="genre">{{getTopTracks[i].genre}}</div>
                  <a-card-meta
                    :title="getTopTracks[i].trackName"
                    :description="getTopTracks[i].artistName"
                  >
                    <a-avatar
                      slot="avatar"
                      style="color: #f56a00; backgroundColor: #fde3cf"
                    >{{getTopTracks[i].artistName.charAt(0)}}</a-avatar>
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
        </a-row>
        <a-row v-if="tracks.length != 0">
          <h2>Search Results</h2>
            <a-col :xs="{span: 24}" :lg="{span: 6}" v-for="(item,i) in 12" :key="i">
              <router-link
                :to="{name: 'lyrics', params: {track_id: getSearchTracks[i].trackID}, query: {trackName: getSearchTracks[i].trackName, artistName: getSearchTracks[i].artistName}}"
              >
                <a-card hoverable style="width: 300px; margin-bottom: 15px">
                  <img alt="example" src="../assets/card-img.png" slot="cover">
                  <div class="genre">{{getSearchTracks[i].genre}}</div>
                  <a-card-meta
                    :title="getSearchTracks[i].trackName"
                    :description="getSearchTracks[i].artistName.substring(0,25)"
                  >
                    <a-avatar
                      slot="avatar"
                      style="color: #f56a00; backgroundColor: #fde3cf"
                    >{{getSearchTracks[i].artistName.charAt(0)}}</a-avatar>
                  </a-card-meta>
                </a-card>
              </router-link>
            </a-col>
        </a-row>
      </a-col>
    </a-row>
  </div>
</template>

<script>
import appCarousel from "vue-owl-carousel";

export default {
  components: {
    appCarousel
  },
  data() {
    return {
      tracks: []
    };
  },
  computed: {
    getTopTracks() {
      return this.$store.getters.getTopTracks;
    },
    getSearchTracks() {
      return this.$store.getters.getSearchTracks
    }
  },
  methods: {
    setTracks() {
      this.tracks = this.getSearchTracks
    }
  }
};
</script>

<style>
h2 {
  text-align: center;
  font-weight: 500;
  font-size: 30px;
  margin-top: 20px !important;
}
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
  right: 0;
}
.prev {
  left: -15px;
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
.ant-card-meta-detail > div:not(:last-child) {
  margin-bottom: -5px !important;
}
</style>
