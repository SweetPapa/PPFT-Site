<template>
  <div class="home">
    <div>Pizza Party for Two</div>
    <br>
    <div v-if="sURL != ''">
    Currently Playing: {{sTitle}} - {{sArtist}} - {{sAlbum}}
    <playerWidget :sFileURL="sURL"> </playerWidget>
    </div>

    
  
    <br>
      <div v-if="jAlbums.length > 0">
        <div v-for="songs in jAlbums[0].songs" v-bind:key="songs.URL" v-on:click='applySong(songs.URL, songs.Title, songs.Artist, jAlbums[0].albumTitle)'>
          <audioTile :sTitle="songs.Title" :sArtist="songs.Artist" /> 
        </div>
      </div>
  </div>
</template>

<script>
import { albumsCollection } from "../js/firebaseConfig";
import playerWidget from "../components/videoplayer"
import audioTile from "../components/audioTileGrid"
import store from "../store"
export default {
  name: "Home",
  data: () => {
    return {
      jAlbums: [],
    };
  },
  components: {
    playerWidget,
    audioTile
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
