<template>
  <social-sharing
    :url="`https://lyricsly.netlify.com${$route.fullPath}`"
    :title="`Check out ${trackTitle} lyrics on lyrics.ly app. Just open the app and search for the track you want`"
    :description="`${trackTitle} Lyrics on Lyrics.ly app is available now`"
    quote="No quote"
    hashtags="lyrics,lyrics.ly"
    twitter-user="iGazouly"
    inline-template
  >
    <div class="share">
      <network class="network" network="email">
        <i class="fas fa-envelope-open-text"></i>
      </network>
      <network class="network" network="facebook">
        <i class="fab fa-facebook-square"></i>
      </network>
      <network class="network" network="sms">
        <i class="fas fa-sms"></i>
      </network>
      <network class="network" network="twitter">
        <i class="fab fa-twitter-square"></i>
      </network>
      <network class="network" network="whatsapp">
        <i class="fab fa-whatsapp-square"></i>
      </network>
    </div>
  </social-sharing>
</template>

<script>
export default {
  props: ['trackTitle']
}
</script>

<style scoped>
.share >>> .network {
  font-size: 30px !important;
  padding: 0 5px !important;
  cursor: pointer !important;
}
.share {
  margin-top: 25px !important;
}
</style>
