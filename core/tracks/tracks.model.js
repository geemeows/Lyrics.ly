/* In this file, I handle and format data of tracks
Extracting the data we need to display */
export const formatTracks = (track) => {
  const genreList = track.track.primary_genres.music_genre_list
  return {
    trackName: track.track.track_name,
    artistName: track.track.artist_name,
    trackID: track.track.track_id,
    genre: genreList.length === 0 ? 'No Genre' : genreList[0].music_genre.music_genre_name
  }
}
