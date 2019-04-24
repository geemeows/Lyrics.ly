<template>
  <div style="margin-bottom: 20px">
    <h2>TOP 10 SINGLES CHART IN US</h2>
    <a-row type="flex" justify="space-around" align="middle" style="padding: 0 40px">
      <!-- Top 10 Charts in US -->
      <a-col :xs="{span: 24}">
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
        <a-row v-if="topTracks.length != 0">
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
                v-if="topTracks.length != 0"
                :to="{name: 'lyrics', params: {track_id: topTracks[i].trackID}, query: {trackName: topTracks[i].trackName, artistName: topTracks[i].artistName}}"
              >
                <a-card hoverable style="width: 300px">
                  <img alt="example" src="../assets/card-img.png" slot="cover">
                  <div class="genre">{{topTracks[i].genre}}</div>
                  <a-card-meta
                    :title="topTracks[i].trackName"
                    :description="topTracks[i].artistName"
                  >
                    <a-avatar
                      slot="avatar"
                      style="color: #f56a00; backgroundColor: #fde3cf"
                    >{{topTracks[i].artistName.charAt(0)}}</a-avatar>
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
        <a-row v-if="searchTracks.length != 0">
          <h2>Search Results</h2>
          <a-col :xs="{span: 24}" :lg="{span: 6}" v-for="(item,i) in 12" :key="i">
            <router-link
              :to="{name: 'lyrics', params: {track_id: searchTracks[i].trackID}, query: {trackName: searchTracks[i].trackName, artistName: searchTracks[i].artistName}}"
            >
              <a-card hoverable style="width: 300px; margin-bottom: 15px">
                <img alt="example" src="../assets/card-img.png" slot="cover">
                <div class="genre">{{searchTracks[i].genre}}</div>
                <a-card-meta
                  :title="searchTracks[i].trackName"
                  :description="searchTracks[i].artistName.substring(0,25)"
                >
                  <a-avatar
                    slot="avatar"
                    style="color: #f56a00; backgroundColor: #fde3cf"
                  >{{searchTracks[i].artistName.charAt(0)}}</a-avatar>
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
import axios from "axios";
import { eventBus } from "../main.js";

export default {
  components: {
    appCarousel
  },
  created() {
    // Search Results
    eventBus.$on("searchResults", trackTitle => {
      this.searchLoading = true
      let tracks = [];
      axios
        .get(
          "track.search?q_track=" +
            trackTitle +
            "&page_size=12&page=1&s_track_rating=desc&apikey=" +
            this.apiKey
        )
        .then(res => {
          let resTracks = res.data.message.body.track_list;
          for (let i = 0; i < resTracks.length; i++) {
            if (
              resTracks[i].track.primary_genres.music_genre_list.length != 0
            ) {
              tracks.push({
                trackName: resTracks[i].track.track_name,
                artistName: resTracks[i].track.artist_name,
                trackID: resTracks[i].track.track_id,
                genre:
                  resTracks[i].track.primary_genres.music_genre_list[0]
                    .music_genre.music_genre_name
              });
            } else {
              tracks.push({
                trackName: resTracks[i].track.track_name,
                artistName: resTracks[i].track.artist_name,
                trackID: resTracks[i].track.track_id,
                genre: "No Genre"
              });
            }
          }
          this.searchLoading = false
        })
        .catch(err => console.log(err));
      this.searchTracks = tracks;
    });

    // Top 10 Tracks in US
    axios
      .get(
        "chart.tracks.get?chart_name=top&page=1&page_size=10&country=us&f_has_lyrics=1&apikey=" +
          this.apiKey
      )
      .then(res => {
        let resTracks = res.data.message.body.track_list;
        for (let i = 0; i < resTracks.length; i++) {
          if (resTracks[i].track.primary_genres.music_genre_list.length != 0) {
            this.topTracks.push({
              trackName: resTracks[i].track.track_name,
              artistName: resTracks[i].track.artist_name,
              trackID: resTracks[i].track.track_id,
              genre:
                resTracks[i].track.primary_genres.music_genre_list[0]
                  .music_genre.music_genre_name
            });
          } else {
            this.topTracks.push({
              trackName: resTracks[i].track.track_name,
              artistName: resTracks[i].track.artist_name,
              trackID: resTracks[i].track.track_id,
              genre: "No Genre"
            });
          }
        }
      })
      .catch(err => console.log(err));
  },
  data() {
    return {
      apiKey: "bff837ad705a5f43d18e5e69c8a98269",
      topTracks: [],
      searchTracks: [],
      searchLoading: false,
      searchString: this.$route.query.search
    };
  },
  computed: {
    getSearchTracks() {
      return this.$store.getters.getSearchTracks;
    }
  },
  watch: {
    searchString: function() {
      console.log("changed")
    }
  },
  methods: {
    doSearch(resTracks) {
      let tracks = [];
      for (let i = 0; i < resTracks.length; i++) {
        if (resTracks[i].track.primary_genres.music_genre_list.length != 0) {
          tracks.push({
            trackName: resTracks[i].track.track_name,
            artistName: resTracks[i].track.artist_name,
            trackID: resTracks[i].track.track_id,
            genre:
              resTracks[i].track.primary_genres.music_genre_list[0].music_genre
                .music_genre_name
          });
        } else {
          tracks.push({
            trackName: resTracks[i].track.track_name,
            artistName: resTracks[i].track.artist_name,
            trackID: resTracks[i].track.track_id,
            genre: "No Genre"
          });
        }
      }
      return tracks;
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
  right: -6px;
  opacity: 0.6;
  transition: opacity 0.3s;
}
.prev {
  left: -20px;
  opacity: 0.6;
  transition: opacity 0.3s;
}
.prev:hover,
.next:hover {
  opacity: 1;
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
@media (min-width: 320px) and (max-width: 480px) {
  .prev,
  .next {
    display: none !important;
  }
}
</style>
