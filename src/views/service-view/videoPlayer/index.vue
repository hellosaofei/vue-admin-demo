<template>
  <div class="app-container">
    <live-player :options="videoOptions"></live-player>
  </div>
</template>

<script>
import livePlayer from "./components/livePlayer.vue";
export default {
  name: "VideoPlayer",
  components: {
    livePlayer,
  },
  data() {
    return {
      videoOptions: {
        autoplay: false,
        muted: true,
        controls: true,
        sources: [
          {
            src: "https://gcalic.v.myalicdn.com/gc/glxs01_1/index.m3u8?contentid=2820180516001",
            type: "application/x-mpegURL",
          },
        ],
      },
    };
  },
};
</script>

<style></style>
