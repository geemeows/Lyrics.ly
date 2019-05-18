<template>
  <a-layout style="margin-top: 25px; padding: 0 40px">
    <a-row type="flex" justify="space-around" style="padding: 0 40px">
      <a-col :xs="{span: 24}" :lg="{span: 16}">
        <track-info :trackInfo="{trackTitle, author}"></track-info>
        <a-row>
          <a-col :xs="{span: 24}">
            <a-spin v-if="lyrics == ''" tip="Fetching Lyrics...">
              <div class="spin-content">Getting lyrics from the server。。。</div>
            </a-spin>
            <p v-else class="lyrics">{{ lyrics }}</p>
          </a-col>
        </a-row>
      </a-col>

      <a-col :xs="{span: 24}" :lg="{span: 8}">
        <h3 class="topUKTracks">Top Tracks in UK</h3>
        <top-list :topTracks="topTracks"></top-list>
      </a-col>
    </a-row>
  </a-layout>
</template>

<script>
import TrackInfo from '../components/Lyrics/TrackInfo'
import TopList from '../components/Lyrics/TopList'
import { fetchLyrics } from '../../core/lyrics/lyrics.services'
import { getTopTracks } from '../../core/tracks/tracks.services'
export default {
  components: {
    TrackInfo,
    TopList
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
    this.fetchTopTracks('uk', 10)
  },
  methods: {
    getLyrics () {
      fetchLyrics(this.trackID)
        .then(res => {
          this.lyrics = res
        })
        .catch(err => console.log(err))
    },
    fetchTopTracks (country, size) {
      getTopTracks(country, size)
        .then(res => {
          this.topTracks = res
        })
        .catch(err => console.log(err))
    }
  }
}
</script>

<style scoped>
h3.topUKTracks {
  font-weight: 500;
  font-size: 20px;
  margin-top: 20px !important;
}
.lyrics {
  margin-top: 20px;
  padding-right: 60px;
  text-align: justify;
  white-space: pre-wrap;
}
@media (min-width: 320px) and (max-width: 480px) {
  .lyrics {
    padding-right: 0;
  }
}
</style>
