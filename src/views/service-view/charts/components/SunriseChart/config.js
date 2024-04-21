const data1 = [
  {
    value: 8,
    children: [
      {
        value: 4,
        children: [
          {
            value: 2,
          },
          {
            value: 1,
          },
          {
            value: 1,
          },
          {
            value: 0.5,
          },
        ],
      },
      {
        value: 2,
      },
    ],
  },
  {
    value: 4,
    children: [
      {
        children: [
          {
            value: 2,
          },
        ],
      },
    ],
  },
  {
    value: 4,
    children: [
      {
        children: [
          {
            value: 2,
          },
        ],
      },
    ],
  },
  {
    value: 3,
    children: [
      {
        children: [
          {
            value: 1,
          },
        ],
      },
    ],
  },
];
const data2 = [
  {
    value: 5,
    children: [
      {
        children: [
          {
            value: 3,
          },
        ],
      },
    ],
  },
  {
    value: 3,
    children: [
      {
        children: [
          {
            value: 2,
          },
        ],
      },
    ],
  },
  {
    value: 9,
    children: [
      {
        value: 6,
        children: [
          {
            value: 1,
          },
          {
            value: 0.5,
          },
          {
            value: 0.5,
          },
        ],
      },
      {
        value: 2,
      },
    ],
  },
  {
    value: 2,
    children: [
      {
        children: [
          {
            value: 1,
          },
        ],
      },
    ],
  },
];
// 指定图表的配置项和数据
let initOption = {
  silent: true,
  series: [
    {
      radius: ["15%", "80%"],
      type: "sunburst",
      sort: undefined,
      emphasis: {
        focus: "ancestor",
      },
      data: data1,
      levels: [
        {
          itemStyle: {
            color: "#CD4949",
          },
          label: {
            rotate: "radial",
          },
        },
        {
          itemStyle: {
            color: "#F47251",
          },
          label: {
            rotate: "tangential",
          },
        },
        {
          itemStyle: {
            color: "#FFC75F",
          },
          label: {
            rotate: 0,
          },
        },
      ],
    },
  ],
};
export { data1, data2, initOption };
