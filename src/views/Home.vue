<template>
  <div class="home">
    <div>Pizza Party for Two</div>
    <br>
      <div v-if="jAlbums.length > 0">
        <div v-for="songs in jAlbums[0].songs" v-bind:key="songs.URL">
          Song Info - Title: {{songs.Title}} Artist: {{songs.Artist}}
          <playerWidget :sFileURL="songs.URL"> </playerWidget>
        </div>
      </div>
  </div>
</template>

<script>
import { albumsCollection } from "../js/firebaseConfig";
import playerWidget from "../components/videoplayer"

export default {
  name: "Home",
  data: () => {
    return {
      jAlbums: [],
    };
  },
  components: {
    playerWidget
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
