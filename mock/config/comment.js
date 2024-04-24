const { mock } = require("mockjs");
const { handleRandomImage } = require("../utils");

const List = [];
const count = 50;
for (let i = 0; i < count; i++) {
  List.push(
    mock({
      good_id: "@id()",
      good_name: "@csentence(5)",
      good_image: handleRandomImage(40, 40),
      "rate|1": [1, 2, 3, 4, 5],
      comment_content: "@cparagraph(1)",
      reply_content: "@cparagraph(1)",
      user_name: "@csentence(2,4)",
      user_ip: "@province()",
      "status|1": [1, 2], //已通过 未审核
      date: "@datetime()",
    })
  );
}
/**
 * good_id   @id()
 * good_name     @csentence(5)
 * good_image    handleRandomImg
 * rate        "rate|1": [1,2,3,4,5],
 * comment_content  @cparagraph(1)
 * reply_content    @cparagraph(1)
 * user_name    @csentence(2,4)
 * user_ip       @province()
 * status   "status|1": ["1", "2", "3"],已通过 未审核
 * date     @datetime()
 * manage
 */
module.exports = [
  {
    url: "/comment/getList",
    type: "post",
    response(config) {
      if (!config.body) {
        return {
          code: 200,
          msg: "success",
          totalCount: count,
          data: List,
        };
      }
      const { title = "", pageNo = 1, pageSize = 20 } = config.body;
      let mockList = List.filter((item) => {
        return !(title && item.title.indexOf(title) < 0);
      });
      const pageList = mockList.filter(
        (item, index) =>
          index < pageSize * pageNo && index >= pageSize * (pageNo - 1)
      );
      return {
        code: 200,
        msg: "success",
        totalCount: count,
        data: pageList,
      };
    },
  },
];
