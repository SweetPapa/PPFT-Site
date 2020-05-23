<template>
  <div class="home">
    <div>Pizza Party for Two</div>
    <div id="pageContainer" class="md-layout">
      <div class="md-layout-item"><audioHeader id="audioHeader>" /></div>
      <div class="md-layout-item"><audioTable id="audioTableDiv"/></div>
  </div> 
  </div>
</template>

<script>
import audioTable from "../components/audioTable"
import audioHeader from "../components/audioCard"
import store from "../store"
export default {
  name: "Home",
  data: () => {
    return {
    };
  },
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
    audioTable,
    audioHeader  
  },
};
</script>

<style lang="scss" scoped>
  #pageContainer {
    position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  }
</style>
