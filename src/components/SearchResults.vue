<template>
<div class="searchResults">
  <a-col :xs="{span: 24}" :lg="{span: 6}" v-for="(track,i) in searchTracks" :key="i">
    <router-link
      :to="{name: 'lyrics', params: {track_id: track.trackID}, query: {trackName: track.trackName, artistName: track.artistName}}"
    >
      <a-card hoverable style="width: 300px; margin-bottom: 15px">
        <img alt="example" src="../assets/card-img.png" slot="cover">
        <div class="genre">{{track.genre}}</div>
        <a-card-meta :title="track.trackName" :description="track.artistName.substring(0,25)">
          <a-avatar
            slot="avatar"
            style="color: #f56a00; backgroundColor: #fde3cf"
          >{{track.artistName.charAt(0)}}</a-avatar>
        </a-card-meta>
      </a-card>
    </router-link>
  </a-col>
  </div>
</template>

<script>
export default {
  props: ['searchTracks']
}
</script>

<style>
.ant-card-meta-detail > div:not(:last-child) {
  margin-bottom: -5px !important;
}
.ant-card-meta-detail{
    text-align: left !important;
}
.genre {
  position: absolute;
  top: 121px;
  left: 0;
  background: #ee3723;
  padding: 3px 10px;
  color: white;
}
.searchResults {
    margin-top: 20px;
}
</style>
