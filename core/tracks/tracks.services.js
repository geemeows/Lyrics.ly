import musixHttp from '../httpClient'
import { formatTracks } from './tracks.model'

// Top Tracks
export const getTopTracks = (country = 'us', size = 10) => {
  return musixHttp
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
        (track) => {
          return formatTracks(track)
        }
      )
    })
}

// Search for Tracks
export const searchForTrack = (payload) => {
  return musixHttp
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
      return resTracks.map(
        (track) => {
          return formatTracks(track)
        }
      )
    })
}
