
<template>
  <div id="audioTable">
    
<div v-if="jAlbums.length > 0">
     <md-table>
        <md-table-row>
        <md-table-head md-numeric>ID</md-table-head>
        <md-table-head>Song Title</md-table-head>
        <md-table-head>Artist</md-table-head>
        <md-table-head>Album</md-table-head>
      </md-table-row>

      <md-table-row v-for="songs in jAlbums[0].songs" v-bind:key="songs.URL" v-on:click='applySong(songs.URL, songs.Title, songs.Artist, jAlbums[0].albumTitle)'>
        <md-table-cell md-numeric>{{songs.id}}</md-table-cell>
        <md-table-cell>{{songs.Title}}</md-table-cell>
        <md-table-cell>{{songs.Artist}}</md-table-cell>
        <md-table-cell>{{jAlbums[0].albumTitle}}</md-table-cell>
      </md-table-row>
    </md-table>
</div>
  </div>
</template>

<style lang="scss" scoped>

</style>

<script>

import { albumsCollection } from "../js/firebaseConfig";
import store from "../store"
export default {
  name: "audioTable",
  data: () => {
    return {
      jAlbums: [],
    };
  },
  components: {
    
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
  methods:{
    applySong(sURL, sTitle, sArtist, sAlbum){
      let aData = {
        sURL : sURL,
        sTitle : sTitle,
        sArtist: sArtist,
        sAlbum: sAlbum
      }
      store.commit("setSong", aData)
    }
  },
  async created() {
    // Let us load all the songs from the database
    let albumsRef = albumsCollection;
    await albumsRef.get().then((albums) => {
        albums.forEach((album) => {
          let songsRef = albumsRef.doc(album.id);
          let newAlbum = album.data()
          let newAlbumObj = {
            albumTitle: newAlbum["Album Title"],
            songs: []
          }
          
          songsRef.collection("Songs").get()
            .then((songs) => {
                songs.forEach((song) => {
                  let jsong = song.data()
                  jsong.id = song.id
                  newAlbumObj.songs.push(jsong)
                });
              })
            .finally(() => { this.jAlbums.push(newAlbumObj)})
              });
            })
            .catch((err) => {
              console.log("Error getting documents", err);
            });
  },
};
</script>