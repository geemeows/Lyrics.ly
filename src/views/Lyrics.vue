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
            <social-sharing
              :url="`https://lyricsly.netlify.com${$route.fullPath}`"
              :title="`Check out ${trackTitle} lyrics on lyrics.ly app. Just open the app and search for the track you want`"
              :description="`${trackTitle} Lyrics on Lyrics.ly app is available now`"
              quote="No quote"
              hashtags="lyrics,lyrics.ly"
              twitter-user="iGazouly"
              inline-template
            >
              <div class="share">
                <network class="network" network="email">
                  <i class="fas fa-envelope-open-text"></i>
                </network>
                <network class="network" network="facebook">
                  <i class="fab fa-facebook-square"></i>
                </network>
                <network class="network" network="sms">
                  <i class="fas fa-sms"></i>
                </network>
                <network class="network" network="twitter">
                  <i class="fab fa-twitter-square"></i>
                </network>
                <network class="network" network="whatsapp">
                  <i class="fab fa-whatsapp-square"></i>
                </network>
              </div>
            </social-sharing>
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
export default {
  data () {
    return {
      apiKey: 'bff837ad705a5f43d18e5e69c8a98269',
      trackID: this.$route.params.track_id,
      trackTitle: this.$route.query.trackName,
      author: this.$route.query.artistName,
      lyrics: '',
      topTracks: []
    }
  },
  created () {
    // Getting Lyrics
    axios
      .get(
        'track.lyrics.get?track_id=' + this.trackID + '&apikey=' + this.apiKey
      )
      .then(res => {
        this.lyrics = res.data.message.body.lyrics.lyrics_body
      })
      .catch(err => console.log(err))

    // Getting Top 5 in UK
    axios
      .get(
        'chart.tracks.get?chart_name=top&page=1&page_size=5&country=uk&f_has_lyrics=1&apikey=' +
          this.apiKey
      )
      .then(res => {
        let resTracks = res.data.message.body.track_list
        for (let i = 0; i < resTracks.length; i++) {
          if (resTracks[i].track.primary_genres.music_genre_list.length !== 0) {
            this.topTracks.push({
              trackName: resTracks[i].track.track_name,
              artistName: resTracks[i].track.artist_name,
              trackID: resTracks[i].track.track_id,
              genre:
                resTracks[i].track.primary_genres.music_genre_list[0]
                  .music_genre.music_genre_name
            })
          } else {
            this.topTracks.push({
              trackName: resTracks[i].track.track_name,
              artistName: resTracks[i].track.artist_name,
              trackID: resTracks[i].track.track_id,
              genre: 'No Genre'
            })
          }
        }
      })
      .catch(err => console.log(err))
  }
}
</script>

<style scoped>

.share >>> .network{
  font-size: 30px !important;
  padding: 0 5px !important;
  cursor: pointer !important;
}
.share {
    margin-top: 25px !important;
}
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
