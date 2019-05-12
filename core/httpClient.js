import axios from 'axios'

const musixHttp = axios.create({
  baseURL: 'https://api.musixmatch.com/ws/1.1/',
  params: {
    apikey: process.env.VUE_APP_API_KEY
  }
})

export default musixHttp
