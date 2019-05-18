import musixHttp from '../httpClient'

export const fetchLyrics = (trackID) => {
  return musixHttp
    .get('track.lyrics.get', {
      params: {
        track_id: trackID
      }
    })
    .then(res => {
      return res.data.message.body.lyrics.lyrics_body
    })
}
