import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    topTenTraks: [],
    lyrics: "",
    searchTracks: []
  },
  mutations: {
    setTopTracks: (state, payload) => {
      state.topTenTraks = payload;
    },
    setLyrics: (state, payload) => {
      state.lyrics = payload;
    },
    setSearchTracks: (state, payload) => {
      state.searchTracks = payload;
    }
  },
  actions: {
    setTopTracks: ({ commit }) => {
      axios
        .get(
          "https://cors-anywhere.herokuapp.com/https://api.musixmatch.com/ws/1.1/chart.tracks.get?chart_name=top&page=1&page_size=10&country=us&f_has_lyrics=1&apikey=bff837ad705a5f43d18e5e69c8a98269"
        )
        .then(res => {
          let tracks = [];
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
          // console.log(res.data.message.body.track_list);
          commit("setTopTracks", tracks);
        })
        .catch(err => console.log(err));
    },
    findLyrics: ({ commit }, id) => {
      axios
        .get(
          "https://cors-anywhere.herokuapp.com/https://api.musixmatch.com/ws/1.1/track.lyrics.get?track_id=" +
            id +
            "&apikey=bff837ad705a5f43d18e5e69c8a98269"
        )
        .then(res => {
          let lyrics = "";
          // console.log(res.data.message.body.lyrics.lyrics_body)
          lyrics = res.data.message.body.lyrics.lyrics_body;

          commit("setLyrics", lyrics);
        })
        .catch(err => console.log(err));
    },
    setSearchTracks: ({ commit }, payload) => {
      axios
        .get(
          "https://cors-anywhere.herokuapp.com/https://api.musixmatch.com/ws/1.1/track.search?q_track=" +
            payload +
            "&page_size=12&page=1&s_track_rating=desc&apikey=bff837ad705a5f43d18e5e69c8a98269"
        )
        .then(res => {
          // console.log(res)
          let tracks = [];
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
          // console.log(tracks)
          commit("setSearchTracks", tracks);
        })
        .catch(err => console.log(err));
    }
  },
  getters: {
    getTopTracks: state => {
      return state.topTenTraks;
    },
    getLyrics: state => {
      return state.lyrics;
    },
    getSearchTracks: state => {
      return state.searchTracks;
    }
  }
});
