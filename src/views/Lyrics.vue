<template>
  <a-layout style="margin-top: 25px; padding: 0 40px">
    <a-row type="flex" justify="space-around" style="padding: 0 40px">
      <a-col :xs="{span: 24}" :lg="{span: 16}">
        <a-row>
          <a-col :xs="{span: 24}" :lg="{span: 16}">
            <h2 class="trackTitle">{{trackTitle}}</h2>
            <span class="author">{{author}}</span>
          </a-col>
          <a-col :xs="{span: 24}" :lg="{span: 8}">
            <social-share :trackTitle="trackTitle"></social-share>
          </a-col>
        </a-row>

        <a-spin v-if="lyrics == ''" tip="Fetching Lyrics...">
          <div class="spin-content">Getting lyrics from the server。。。</div>
        </a-spin>
        <p v-else class="lyrics">{{ lyrics }}</p>
      </a-col>

      <a-col :xs="{span: 24}" :lg="{span: 8}">
        <h3 class="topUKTracks">Top Tracks in UK</h3>

        <a-list itemLayout="horizontal" :dataSource="topTracks">
          <a-list-item slot="renderItem" slot-scope="item">
            <a-list-item-meta :description="item.artistName">
              <a slot="title" href="#">{{item.trackName}}</a>
              <a-avatar
                slot="avatar"
                style="color: #f56a00; backgroundColor: #fde3cf"
              >{{item.artistName.charAt(0)}}</a-avatar>
            </a-list-item-meta>
          </a-list-item>
        </a-list>

      </a-col>
    </a-row>
  </a-layout>
</template>

<script>
import axios from 'axios'
import SocialShare from '../components/SocialShare'
export default {
  components: {
    SocialShare
  },
  data () {
    return {
      trackID: this.$route.params.track_id,
      trackTitle: this.$route.query.trackName,
      author: this.$route.query.artistName,
      lyrics: '',
      topTracks: []
    }
  },
  created () {
    // Getting Lyrics
    this.getLyrics()
    // Getting Top 5 in UK
    this.getTopTracks('uk', 10)
  },
  methods: {
    getLyrics () {
      axios
        .get('track.lyrics.get', {
          params: {
            track_id: this.trackID
          }
        })
        .then(res => {
          this.lyrics = res.data.message.body.lyrics.lyrics_body
        })
        .catch(err => console.log(err))
    },
    getTopTracks (country, size) {
      axios
        .get('chart.tracks.get', {
          params: {
            chart_name: 'top',
            page: 1,
            page_size: size,
            country,
            f_has_lyrics: 1
          }
        })
        .then(res => {
          let resTracks = res.data.message.body.track_list
          this.topTracks = resTracks.map(
            ({
              track: {
                track_name: trackName,
                artist_name: artistName,
                track_id: trackID,
                primary_genres: { music_genre_list: genreList }
              }
            }) => {
              return {
                trackName,
                artistName,
                trackID,
                genre:
                  genreList.length === 0
                    ? 'No Genre'
                    : genreList[0].music_genre.music_genre_name
              }
            }
          )
        })
        .catch(err => console.log(err))
    }
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
h3.topUKTracks {
  font-weight: 500;
  font-size: 20px;
  margin-top: 20px !important;
}
.author {
  font-weight: 500;
}
.lyrics {
  margin-top: 20px;
  padding-right: 60px;
  text-align: justify;
  white-space: pre-wrap;
}
.ant-list-item-meta-title {
  margin-bottom: 0 !important;
}
.ant-list-item-meta-title > a:hover {
  color: inherit !important;
}
@media (min-width: 320px) and (max-width: 480px) {
  .lyrics {
    padding-right: 0;
  }
}
</style>
