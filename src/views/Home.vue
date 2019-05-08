<template>
  <div style="margin-bottom: 20px">
    <h2 class="heading-2">TOP 10 SINGLES CHART IN US</h2>
    <a-row type="flex" justify="space-around" align="middle" style="padding: 0 40px">
      <a-col :xs="{span: 24}">
        <!-- Top 10 Charts in US Loader -->
        <a-row v-if="topTracks.length == 0">
          <a-col>
            <a-spin tip="Fetching Data...">
              <div class="spin-content">
                <a-row>
                  <a-col :xs="{span: 24}" :lg="{span: 6}" v-for="(item,i) in 4" :key="i">
                    <a href="#">
                      <a-card hoverable style="width: 300px" :loading="true">
                        <img
                          alt="example"
                          src="http://www.clipartroo.com/images/69/mountains-animated-gifs-animated-clipart-69683.gif"
                          slot="cover"
                        >
                        <div class="genre">Genre</div>
                        <a-card-meta title="Track Title" description="Author">
                          <a-avatar slot="avatar" style="color: #f56a00; backgroundColor: #fde3cf">A</a-avatar>
                        </a-card-meta>
                      </a-card>
                    </a>
                  </a-col>
                </a-row>
              </div>
            </a-spin>
          </a-col>
        </a-row>

        <!-- Top 10 Charts in US -->
        <a-row v-if="topTracks.length !== 0">
          <top-carousel :topTracks='topTracks'></top-carousel>
        </a-row>

        <!-- Search Loader -->
        <a-row v-if="searchLoading">
          <a-col>
            <a-spin tip="Fetching Data...">
              <div class="spin-content">
                <a-row>
                  <a-col :xs="{span: 24}" :lg="{span: 6}" v-for="(item,i) in 4" :key="i">
                    <a href="#">
                      <a-card hoverable style="width: 300px" :loading="true">
                        <img
                          alt="example"
                          src="http://www.clipartroo.com/images/69/mountains-animated-gifs-animated-clipart-69683.gif"
                          slot="cover"
                        >
                        <div class="genre">Genre</div>
                        <a-card-meta title="Track Title" description="Author">
                          <a-avatar slot="avatar" style="color: #f56a00; backgroundColor: #fde3cf">A</a-avatar>
                        </a-card-meta>
                      </a-card>
                    </a>
                  </a-col>
                </a-row>
              </div>
            </a-spin>
          </a-col>
        </a-row>

        <!-- Search Results -->
        <a-row v-if="searchTracks.length !== 0">
          <h2 class="heading-2">
            Search Results for
            <span class="searchQuery">{{ $route.query.search }}</span>
            <search-results :searchTracks="searchTracks"></search-results>
          </h2>
        </a-row>
      </a-col>
    </a-row>
  </div>
</template>

<script>
import TopCarousel from '../components/Carousel'
import SearchResults from '../components/SearchResults'
import axios from 'axios'

export default {
  components: {
    TopCarousel,
    SearchResults
  },
  created () {
    this.getTopTracks('us')
  },
  data () {
    return {
      topTracks: [],
      searchTracks: [],
      searchLoading: false
    }
  },
  watch: {
    '$route.query.search': {
      handler (payload) {
        // Search here
        this.doSearch(payload)
      },
      immediate: true
    }
  },
  methods: {
    doSearch (payload) {
      if (payload === null || payload === undefined) return
      this.searchLoading = true
      axios
        .get('track.search', {
          params: {
            q_track: payload,
            page_size: 12,
            page: 1,
            s_track_rating: 'desc'
          }
        })
        .then(res => {
          let resTracks = res.data.message.body.track_list
          // Extracting the data we need to display
          this.searchTracks = resTracks.map(
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
          this.searchLoading = false
        })
        .catch(err => console.log(err))
    },
    getTopTracks (country) {
      axios
        .get('chart.tracks.get', {
          params: {
            chart_name: 'top',
            page: 1,
            page_size: 10,
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
h2.heading-2 {
  text-align: center;
  font-weight: 500;
  font-size: 30px;
  margin-top: 20px !important;
}

.searchQuery {
  color: #ee3723;
}

</style>
