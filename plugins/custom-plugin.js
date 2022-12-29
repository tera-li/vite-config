const fileRegex = /\.(custom)$/;

export default () => {
  return {
    name: "transform-file",
    // 该钩子触发时进行转换
    transform(source, id) {
      // 匹配文件后缀
      if (fileRegex.test(id)) {
        // source 源文件输出
        return {
          code: source.replace("source", "plugin处理后的结果"),
          map: null, // 如果可行将提供 source map
        };
      }
    },
  };
};
