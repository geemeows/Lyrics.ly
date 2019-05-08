import axios from 'axios'
const API_KEY = 'bff837ad705a5f43d18e5e69c8a98269'

// Top 10 Tracks in US
export function getTopTracks (country) {
  console.log('in function')
  let tracks = []
  axios
    .get('chart.tracks.get', {
      params: {
        chart_name: 'top',
        page: 1,
        page_size: 10,
        country,
        f_has_lyrics: 1,
        apikey: API_KEY
      }
    })
    .then(res => {
      let resTracks = res.data.message.body.track_list
      tracks = resTracks.map(
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
    //   console.table(tracks)
    })
    .catch(err => console.log(err))
  return tracks
}
