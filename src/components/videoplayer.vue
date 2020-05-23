<template>
    <div class="VideoPlayer" v-on:click="checkIfPlaying()">
        <center>
            <mini-audio id="audio-player" :src="sFileURL" ></mini-audio>
        </center>
        <br>
    </div>
</template>

<script>
export default {
    props : {
        sFileURL : String
        },
        methods:{
            checkIfPlaying(){
                const auidoElement = document.getElementById('audio-player');
                console.log(auidoElement.dataset)
                if (auidoElement.playing == true){
                    console.log("Something is Playing Already, We Should Stop It...")
                } else {
                    console.log("Starting Playing")
                }

            }
        }
    }
</script>