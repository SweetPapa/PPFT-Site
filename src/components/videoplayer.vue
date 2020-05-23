<template>
    <div class="VideoPlayer">
        <center>
            <mini-audio id="audio-player" :html5="true" :src="sFileURL" :autoplay="true" ></mini-audio>
        </center>
        <br>
    </div>
</template>

<script>
import vuexStore from "../store"

export default {
    props : {
        sFileURL : String
        },
        data:() => {
            return {
                
            }
        },
        computed:{
            isPlaying: () => {return vuexStore.state.filePlaying}
        },
        methods:{
            checkIfPlaying(){
                let listOfPlayers = this.$parent.$children
                for (let players in listOfPlayers){
                    console.log(players)
                    let currentPlayer = listOfPlayers[players]
                        if (currentPlayer.playing == true){
                            console.log("Something Appears to be Playing Already")
                            vuexStore.commit("setPlayingState",true)
                        } else if (currentPlayer.playing == false && this.isPlaying == false){
                            return
                        } else {
                            vuexStore.commit("setPlayingState",false)
                        }
                }
            }
        }
    }
</script>