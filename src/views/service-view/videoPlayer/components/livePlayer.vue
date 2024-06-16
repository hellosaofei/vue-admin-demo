<template>
  <content-card cardName="直播中国-魅力区县">
    <video ref="videoPlayer" class="video-js"></video>
  </content-card>
</template>

<script>
import videojs from "video.js";
import ContentCard from "@/components/ContentCard";
export default {
  name: "livePlayer",
  components: {
    ContentCard,
  },
  props: {
    options: {
      type: Object,
      default: {},
    },
  },
  data() {
    return {
      player: null,
    };
  },
  mounted() {
    this.player = videojs(this.$refs.videoPlayer, this.options, () => {
      this.player.log("onPlayerReady");
    });
  },
  beforeDestroy() {
    if (this.player) {
      this.player.dispose();
    }
  },
};
</script>

<style scoped>
.video-js {
  width: 440px;
  height: 240px;
}
</style>
