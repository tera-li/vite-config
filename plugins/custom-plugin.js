const fileRegex = /\.(custom)$/;

export default () => {
  return {
    name: "transform-file",
    transform(source, id) {
      // 匹配文件后缀
      if (fileRegex.test(id)) {
        console.log("====================================");
        // console.log(src);
        console.log(source);
        console.log("====================================");
        return {
          code: source.replace("source", "plugin处理后的结果"),
          map: null, // 如果可行将提供 source map
        };
      }
    },
  };
};
