<template>
  <content-card cardName="大转盘抽奖">
    <lucky-wheel
      ref="myLucky"
      :width="width"
      :height="width"
      :prizes="prizes"
      :blocks="blocks"
      :buttons="buttons"
      @start="startCallback"
      @end="endCallback"
    />
  </content-card>
</template>

<script>
import VueLuckyCanvas from "@lucky-canvas/vue";

import ContentCard from "@/components/ContentCard";
export default {
  name: "Award1",
  components: {
    ContentCard,
    VueLuckyCanvas,
  },
  data() {
    const images = [
      {
        id: 1,
        icon: "https://img.iwave.net.cn/bmw/b365029b17e0e1fc972b52080f58cc80.png",
        title: "iphone15 Pro",
      },
      {
        id: 2,
        icon: "https://img.iwave.net.cn/bmw/bbb9c678305a2f55ce7b285561744596.png",
        title: "普通红包",
      },
      {
        id: 3,
        icon: "https://img.iwave.net.cn/bmw/9b03fe2dcbb6be8c02ac63ff0927c92f.png",
        title: "5元话费券",
      },
      {
        id: 4,
        icon: "https://img.iwave.net.cn/bmw/7cffe2c789279a83ef577283535a2c1b.png",
        title: "每日红包",
      },
      {
        id: 5,
        icon: "https://img.iwave.net.cn/bmw/a3731dd942951974b9be1da171735d82.png",
        title: "幸运红包",
      },
      {
        id: 6,
        icon: "https://img.iwave.net.cn/bmw/dc3c6e7624f6b8291c82a36b552785f6.png",
        title: "10元话费券",
      },
      {
        id: 7,
        icon: "https://img.iwave.net.cn/bmw/a6b978fd0064a45ebcd6b649d49714ea.png",
        title: "惊喜福袋",
      },
      {
        id: 8,
        icon: "https://img.iwave.net.cn/bmw/873a940855c837b4d6622fe8da442b8b.png",
        title: "谢谢参与",
      },
    ];
    return {
      blocks: [
        {
          padding: "10px",
          imgs: [
            {
              src: "https://img.iwave.net.cn/jeep/51c95637a377c3a12d09abe8b0f975e6.png",
              width: "300px",
              height: "300px",
              rotate: true,
            },
          ],
        },
      ],
      buttons: [
        {
          radius: "30.8%",
          imgs: [
            {
              src: "https://img.iwave.net.cn/jeep/8e38bb871f79ef8950da8697603cde94.png",
              width: "3rem",
              height: "3rem",
              top: "-1.7rem",
            },
          ],
        },
      ],
      images,
      width: "300px",
    };
  },
  computed: {
    prizes() {
      return this.images.map((item) => ({
        fonts: [
          {
            text: item.title,
            top: "20%",
            fontColor: "#FF7002",
            fontSize: "12px",
            fontWeight: 600,
            wordWrap: false,
          },
        ],
        imgs: [
          {
            src: item.icon,
            top: "40%",
            width: "40%",
          },
        ],
      }));
    },
  },
  methods: {
    startCallback() {
      this.$refs.myLucky.play();

      setTimeout(() => {
        const index = 0;

        this.$refs.myLucky.stop(index);
      }, 3000);
    },

    endCallback(prize) {
      alert("恭喜中奖: " + prize.fonts[0].text);
    },
  },
};
</script>

<style></style>
