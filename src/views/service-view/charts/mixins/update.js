const updateMixin = {
  methods: {
    startInterval() {
      if (this.timer) {
        clearInterval(this.timer);
      }
      this.timer = setInterval(() => {
        this.updateChart();
      }, 3000);
    },
  },
};

export default updateMixin;
