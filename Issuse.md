# 代码高亮 #


## Next采用Tomorrow Theme作为代码高亮 ##
 
	```Javascript
	var num= document.getElementsByName("image_width")[0].value;
	document.getElementsByName("image_height")[0].value = num-(num-1);
	document.getElementsByName("image_width")[0].value= num*100;
	```
![](https://ws1.sinaimg.cn/large/8c2c3e6bly1fjek02bd42j20g5029glh.jpg)

## CodeBlock代码块 ##

	{% codeblock c++ Array Syntax lang:js http://j.mp/pPUUmW MDN Documentation %}
	var num= document.getElementsByName("image_width")[0].value;
	document.getElementsByName("image_height")[0].value = num-(num-1);
	document.getElementsByName("image_width")[0].value= num*100;
	{% endcodeblock %}
![](https://ws1.sinaimg.cn/large/8c2c3e6bly1fjek02cnx0j20hb031mx3.jpg)

# 如何更改内容区域的宽度？ #

NexT 对于内容的宽度的设定如下：



- 700px，当屏幕宽度 < 1600px


- 900px，当屏幕宽度 >= 1600px


- 移动设备下，宽度自适应
如果你需要修改内容的宽度，同样需要编辑样式文件。 编辑主题的` source/css/_variables/custom.styl `文件，新增变量：

		// 修改成你期望的宽度
		$content-desktop = 700px
		
		// 当视窗超过 1600px 后的宽度
		$content-desktop-large = 900px

此方法不适用于 Pisces Scheme，关于如何修改 Pisces Scheme 的宽度请参看 [这个 Issue](https://github.com/iissnan/hexo-theme-next/issues/759#issuecomment-202242848)

> ### iissnan commented on 28 Mar 2016 ###
> 
> 对于 Pisces Scheme，需要同时修改 header 的宽度、.main-inner 的宽度以及 .content-wrap 的宽度。例如，使用百分比（Pisces 的布局定义在 `source/css/_schemes/Picses/_layout.styl` 中）：
> 
	 header{ width: 90%; }
	 .container .main-inner { width: 90%; }
	 .content-wrap { width: calc(100% - 260px); }
> 我并未对这个布局进行测试，自定义修改需要自己进行测试。另外，我觉得超过一定宽度后（一行内文字太多导致换行跨度太大），阅读体验都不怎么样。

