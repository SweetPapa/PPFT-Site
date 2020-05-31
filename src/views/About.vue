<template>
  <div class="videos-page">
    <h1>Coming Soon...</h1>
    <div id="pageContainer" class="md-layout">
      <div class="md-layout-item">

        <iframe width="560" height="800" src="https://www.youtube.com/embed/VZK_4t5orkQ" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

      </div>
      </div>
  </div>
</template>

<style lang="scss" scoped>

  #pageContainer {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    }

</style>

<script>

export default {
  name: "Videos",
  data: () => {
    return {
    };
  },
    computed: {

  },
  components: {

  },
};
</script>