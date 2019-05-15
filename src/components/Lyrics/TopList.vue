<template>
  <a-list itemLayout="horizontal" :dataSource="topTracks" :loading="topTracks.length === 0">
    <a-list-item slot="renderItem" slot-scope="track">
      <a-list-item-meta :description="track.artistName">
        <router-link @click="$router.go()" slot="title" :to="{name: 'lyrics', params: {track_id: track.trackID}, query: {trackName: track.trackName, artistName: track.artistName}}">
            {{track.trackName}}
        </router-link>
        <a-avatar
          slot="avatar"
          style="color: #f56a00; backgroundColor: #fde3cf"
        >{{track.artistName.charAt(0)}}</a-avatar>
      </a-list-item-meta>
    </a-list-item>
  </a-list>
</template>

<script>
/* I have a problem here :D, When i click on a track from the list the route changes
but the component is reused not replaced with the new data. How to force it to refresh?
I tried to add click event listener with $router.go() to refresh the component but
it doesn't work */
export default {
  props: ['topTracks']
}
</script>

<style scoped>
.ant-list-item-meta-title {
  margin-bottom: 0 !important;
}
.ant-list-item-meta-title > a:hover {
  color: inherit !important;
}
</style>
