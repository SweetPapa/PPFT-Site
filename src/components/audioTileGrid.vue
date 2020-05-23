<template>
  <div>
    <md-card>
        <md-card-header-text>
          <div class="md-title">{{sTitle}}</div>
          <div class="md-subhead">{{sArtist}}</div>
        </md-card-header-text>

        <md-card-media>
          <img src="../assets/demo.png" alt="Album Cover">
        </md-card-media>

      <md-card-actions>
          <md-button>Play</md-button>
        
      </md-card-actions>
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
export default {
  name: 'Media',
  props: {
      sTitle: String,
      sArtist: String
  }
}
</script>