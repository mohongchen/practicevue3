// vite中没有require，所以必须使用url找到文件
export const getAssetUrl = image => {
  // 参数一：相对路径，参数二：
  return new URL(`../assets/img/${image}`, import.meta.url).href
}
