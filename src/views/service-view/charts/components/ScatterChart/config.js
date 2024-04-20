const femaleData = [
  [161.2, 51.6],
  [167.5, 59.0],
  [159.5, 49.2],
  [157.0, 63.0],
  [155.8, 53.6],
  [170.0, 59.0],
  [159.1, 47.6],
  [166.0, 69.8],
  [176.2, 66.8],
  [160.2, 75.2],
];

const maleDeta = [
  [174.0, 65.6],
  [175.3, 71.8],
  [193.5, 80.7],
  [186.5, 72.6],
  [187.2, 78.8],
  [181.5, 74.8],
  [184.0, 86.4],
  [184.5, 78.4],
  [175.0, 62.0],
  [184.0, 81.6],
];
function calculateAverage(data, dim) {
  let total = 0;
  for (var i = 0; i < data.length; i++) {
    total += data[i][dim];
  }
  return (total /= data.length);
}
const scatterOption = {
  xAxis: {
    scale: true,
  },
  yAxis: {
    scale: true,
  },
  series: [
    {
      type: "scatter",
      id: "female",
      dataGroupId: "female",
      universalTransition: {
        enabled: true,
        delay: function (idx, count) {
          return Math.random() * 400;
        },
      },
      data: femaleData,
    },
    {
      type: "scatter",
      id: "male",
      dataGroupId: "male",
      universalTransition: {
        enabled: true,
        delay: function (idx, count) {
          return Math.random() * 400;
        },
      },
      data: maleDeta,
    },
  ],
};
const barOption = {
  xAxis: {
    type: "category",
    data: ["Female", "Male"],
  },
  yAxis: {},
  series: [
    {
      type: "bar",
      id: "total",
      data: [
        {
          value: calculateAverage(maleDeta, 0),
          groupId: "male",
        },
        {
          value: calculateAverage(femaleData, 0),
          groupId: "female",
        },
      ],
      universalTransition: {
        enabled: true,
        seriesKey: ["female", "male"],
        delay: function (idx, count) {
          return Math.random() * 400;
        },
      },
    },
  ],
};

export { scatterOption, barOption };
