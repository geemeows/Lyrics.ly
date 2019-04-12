<template>
  <a-layout style="margin-top: 25px; padding: 0 40px">
    <a-row type="flex" justify="space-around" style="padding: 0 40px">
      <a-col :xs="{span: 24}" :lg="{span: 16}">
        <h2>{{trackTitle}}</h2>
        <span class="author">{{author}}</span>
        <p
          class="lyrics"
        >{{ getLyrics }}</p>
      </a-col>
      <a-col :xs="{span: 24}" :lg="{span: 8}">
        <h3>Tracks you may like</h3>
        <a-list itemLayout="horizontal" :dataSource="getTopTracks">
          <a-list-item slot="renderItem" slot-scope="item, index">
            <a-list-item-meta :description="item.artistName">
              <a slot="title" href="#">{{item.trackName}}</a>
              <a-avatar slot="avatar" style="color: #f56a00; backgroundColor: #fde3cf">{{item.artistName.charAt(0)}}</a-avatar>
            </a-list-item-meta>
          </a-list-item>
        </a-list>
      </a-col>
    </a-row>
  </a-layout>
</template>

<script>
export default {
  data() {
    return {
      trackID: this.$route.params.track_id,
      trackTitle: this.$route.query.trackName,
      author: this.$route.query.artistName
    };
  },
  watch: {
      '$route'(to, from) {
          this.trackID = to.params.track_id
      }
  },
  created() {
      this.$store.dispatch('findLyrics', this.$route.params.track_id)
  },
  computed: {
      getLyrics() {
          return this.$store.getters.getLyrics
      },
      getTopTracks() {
        return this.$store.getters.getTopTracks
      }
  }
};
</script>

<style scoped>
h2 {
  font-weight: 500;
  text-align: left;
  font-size: 30px;
  margin-top: 20px !important;
  margin-bottom: 0;
}
h3 {
  font-weight: 500;
  font-size: 20px;
  margin-top: 20px !important;
}
.author {
  font-weight: 500;
}
.lyrics {
  margin-top: 20px;
}
.ant-list-item-meta-title {
  margin-bottom: 0 !important;
}
.ant-list-item-meta-title > a:hover {
  color: inherit !important;
}
</style>
