<template>
  <a-layout style="margin-top: 25px; padding: 0 40px">
    <a-row type="flex" justify="space-around" style="padding: 0 40px">
      <a-col :xs="{span: 24}" :lg="{span: 16}">
        <h2>Track Title</h2>
        <span class="author">Author</span>
        <p
          class="lyrics"
        >{{ getLyrics }}</p>
      </a-col>
      <a-col :xs="{span: 24}" :lg="{span: 8}">
        <h3>Tracks you may like</h3>
        <a-list itemLayout="horizontal" :dataSource="listItems">
          <a-list-item slot="renderItem" slot-scope="item, index">
            <a-list-item-meta description="Author">
              <a slot="title" href="https://vue.ant.design/">{{item.title}}</a>
              <a-avatar slot="avatar" style="color: #f56a00; backgroundColor: #fde3cf">U</a-avatar>
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
      listItems: [
        {
          title: "Track Title 1"
        },
        {
          title: "Track Title 2"
        },
        {
          title: "Track Title 3"
        },
        {
          title: "Track Title 4"
        },
        {
          title: "Track Title 5"
        }
      ]
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
      }
  }
};
</script>

<style scoped>
h2 {
  font-weight: 500;
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
