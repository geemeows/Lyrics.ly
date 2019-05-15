import axios from 'axios'

// Top Tracks
export function getTopTracks (country, size) {
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
      return resTracks.map(
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

// Search for Tracks
export function doSearch (payload) {
  if (payload === null || payload === undefined) return
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
      return resTracks.map(
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

export function getLyrics () {
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
}
