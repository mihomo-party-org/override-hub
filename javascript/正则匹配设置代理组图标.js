// 正则匹配设置代理组图标

const iconMap = [
  {
    reg: /Google/,
    url: "https://fastly.jsdelivr.net/gh/Koolson/Qure@master/IconSet/Color/Google_Search.png",
  },
  // 参考上面的格式在这里添加更多条目
];
const keepOrigin = true; // 是否保留配置中原本存在的图标

function main(config) {
  if (!config["proxy-groups"]) return config;
  for (let group of config["proxy-groups"]) {
    if (keepOrigin && group.icon) continue;
    for (let { reg, url } of iconMap) {
      if (group.name.match(reg)) {
        group.icon = url;
        break;
      }
    }
  }
  return config;
}
