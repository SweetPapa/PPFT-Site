
<template>
  <div>
    
    <md-card v-if="sURL != ''">
        <md-card-header-text>
          <div class="md-title">{{sTitle}}</div>
          <div class="md-subhead">{{sArtist}}</div>
          <div class="md-subhead">{{sAlbum}}</div>
        </md-card-header-text>

        <md-card-media>
          <img src="../assets/demo.png" alt="Album Cover">
        </md-card-media>

        <playerWidget :sFileURL="sURL"> </playerWidget>

    </md-card>
  </div>
</template>

<style lang="scss" scoped>
  .md-card {
    width: 320px;
    margin: 4px;
    display: inline-block;
    vertical-align: top;
  }
</style>

<script>
import playerWidget from "../components/videoplayer"
import store from "../store"

export default {
  name: 'Media',
    computed: {
      sURL : () => {
      return store.state.sURL
    },
      sTitle : () => {
      return store.state.sTitle
    },
      sAlbum : () => {
      return store.state.sAlbum
    },
      sArtist : () => {
      return store.state.sArtist
    },
  },
  components: {
    playerWidget,  
  },
}
</script>