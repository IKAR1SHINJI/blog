---
title: 用一首歌的时间介绍Steam资料页面的美化过程
date: 2017-09-09 18:34:50
tags: [经验]
---


- 观光车：[**IKAR1SHINJI君的Steam主页**](https://steamcommunity.com/id/IKAR1SHINJI/)

- 必要条件：Steam账号10级+，小钱钱(¥0.1~+∞)

- 可选技能：Ps基础技巧

- 资源链接：[**百度云**](https://pan.baidu.com/s/1hs3jVP6)

- BGM：[**Cloud 9**](http://music.163.com/#/song?id=28565309)

*在电脑端阅读全文可获得最佳体验*

<!--more-->

**用一首歌的时间介绍Steam资料页面的美化过程**

<embed height="415" width="544" quality="high" allowfullscreen="true" type="application/x-shockwave-flash" src="//static.hdslb.com/miniloader.swf" flashvars="aid=11999398&page=1" pluginspage="//www.adobe.com/shockwave/download/download.cgi?P1_Prod_Version=ShockwaveFlash"></embed>




----------


<iframe frameborder="no" border="0" marginwidth="0" marginheight="0" width=330 height=86 src="//music.163.com/outchain/player?type=2&id=28565309&auto=1&height=66"></iframe>
# 挑选合适的背景 #


**Q：我不知道有哪些好看的背景呀？**

A：广交友，勤视奸。看到好看的背景拿小本本记下用户ID。

**Q：看到了很好看的背景，可是不知道名字，怎么办？**

A：[**点我输入目标用户SteamID查询背景**](https://martyn.me/projects/steam-profile-background/)

**Q：背景好好看，一看价格怎么这么贵！能不能便宜点？**

A：欧皇可以尝试购买款游戏，挂卡、合卡爆出背景。非酋退散。![泪流成河](https://ws1.sinaimg.cn/large/8c2c3e6bly1fjdlwtqpg1j2027028t8i.jpg)

*注：不购买游戏也可以合卡，不同游戏价格不一，请自行计算购买游戏掉卡和购买卡片哪个更划算。*

# 制作展示的人物 #

想让喜欢的角色融入背景，但没有合适的图片？不如去P站找找→[**插画网站pixiv**](https://www.pixiv.net)

找到合适的图片，放进[**Photoshop模板**](https://pan.baidu.com/s/1hs3jVP6)中进行适配，导出"左"、"右"两张图片。
![流程展示](https://ws1.sinaimg.cn/large/8c2c3e6bly1fjdmpda4ucg20ao060ac1.gif)

# 上传到Steam #

1. 在个人资料页面点击右侧“艺术作品”，然后进入上传艺术作品界面。

2. 选好制作的图片，填写相应信息，在点击上传按钮之前按F12(以[**Chrome浏览器**](https://www.google.com/chrome/browser/desktop/index.html)为例)打开浏览器控制台，输入以下控制台代码，按下回车后再点击上传按钮。
	```Javascript
	var num= document.getElementsByName("image_width")[0].value;
	document.getElementsByName("image_height")[0].value = num-(num-1);
	document.getElementsByName("image_width")[0].value= num*100;
	```

4. 这样我们就得到了"左"、"右"两个艺术作品。在编辑个人资料页面选择展示的展柜为"艺术作品展柜"，载入刚刚上传的两个艺术作品，完成个人资料页的美化。

*P.S.对Steam平台及挂卡合卡不熟悉的话可以访问[**SteamCN**](https://steamcn.com/t275678-1-1)来获取相关信息。*
