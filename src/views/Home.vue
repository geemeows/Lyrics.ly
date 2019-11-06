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
                <spin-skeleton></spin-skeleton>
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
                <spin-skeleton></spin-skeleton>
              </div>
            </a-spin>
          </a-col>
        </a-row>
        <!-- Search Results -->
        <a-row v-if="!searchLoading && searchTracks.length !== 0">
          <h2 class="heading-2">
            Search Results for
            <span class="searchQuery">{{ $route.query.search }}</span>
          </h2>
          <search-results :searchTracks="searchTracks"></search-results>
        </a-row>
      </a-col>
    </a-row>
  </div>
</template>

<script>
import TopCarousel from '../components/Home/TopCarousel'
import SearchResults from '../components/Home/SearchResults'
import SpinSkeleton from '../components/Home/SpinSkeleton'
import { getTopTracks, searchForTrack } from '../../core/tracks/tracks.services'

export default {
  components: {
    TopCarousel,
    SearchResults,
    SpinSkeleton
  },
  created () {
    this.fetchTopTracks()
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
        this.doSearch(payload)
      },
      immediate: true
    }
  },
  methods: {
    doSearch (payload) {
      if (!payload) return
      this.searchLoading = true
      searchForTrack(payload)
        .then(res => {
          this.searchTracks = res
          this.searchLoading = false
        })
        .catch(err => console.log(err))
    },
    fetchTopTracks () {
      getTopTracks()
        .then(res => {
          this.topTracks = res
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
