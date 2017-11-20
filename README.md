## 使用js原生实现的基础库
并在此基础库上实现一个博客前端demo，兼容IE6。
    
## 附带插件
* [拖拽插件](https://github.com/l20/base.js/blob/master/base_drag.js)
* [表单插件](https://github.com/l20/base.js/blob/master/base_form.js)

## 插件接口
```js
Base.prototype.extend = function(name, fn){
    Base.prototype[name] = fn;
};
```

## 插件扩展开发
```js
$().extend('pluginName', function () {
    // to do something
});
```

### e.g

```html
<!-- base js -->
<script type="text/javascript" src="compatible.js"></script>
<script type="text/javascript" src="base.js"></script>

<!-- plugins -->
<script type="text/javascript" src="base_drag.js"></script>
<script type="text/javascript" src="base_form.js"></script>
...

```

使用：
```js
$(function() {
// your code
});
```
像jquery一样使用：
``` js
$('#header .member').hover(function(){
    ...
});
```
API：
```js
//DOM加载
$(elm).ready(function(){...});
//获取元素节点数组
$(elm).getTagName(tag, parentNode);
//获取CLASS节点数组
$(elm).getClass(className, parentNode);
// 查找元素
$(elm).find(string);
//获取某一节点，返回这个节点对象
$(elm).ge(number);
//获取第一个节点
$(elm).first();
//获取最后一个节点
$(elm).last();
//获取某组节点长度
$(elm).length();
//获取某一个节点的属性
$(elm).attr(attr, value);
//获取某一个节点在整个节点组中是第几个索引
$(elm).index();
//设置某一节点透明度
$(elm).opacity(number);
// 根据索引值获取节点
$(elm).eq(number);
//获取当前节点的下一个元素节点
$(elm).next();
//获取当前节点的上一个元素节点
$(elm).prev();
//设置CSS
$(elm).css(attr, value);
//动画
$(elm).animate(obj);
//添加类操作
$(elm).addClass(className);
//移除类操作
$(elm).removeClass(className);
//设置表单字段
$(elm).form(name);
//设置表单字段|内容获取
$(elm).value(string);
//设置innerHTML
$(elm).html(string);
//设置innerText
$(elm).text(string);
// 设置事件绑定发生器
$(elm).bind(event, callback);
//设置鼠标移入移出方法
$(elm).hover(overcallback, outcallback);
//设置点击切换方法
$(elm).toggle();
//设置显示
$(elm).show();
//设置隐藏
//设置物体水平居中
$(elm).center(width, height);
//锁屏功能
$(elm).lock();
$(elm).unlock();
//点击事件
$(elm).click(callback);
//浏览器窗口事件
$(elm).resize(callback);

```

全局工具函数：
```js
//跨浏览器默认设置
prevdef(event)
//获取下一个节点下标
nextIndex(current, parent)
//获取上一个节点下标
prevIndex(current, parent)
//某一个值是否存在某一个数组中
inArray(array, value)
//删除左后空格
trim(string)
//获取某一个元素到最外层顶点的位置
offsetTop(element)
//跨浏览器设置innerText
setInnerText(element, text)
// 跨浏览器获取innerText
getInnerText(element)
//跨浏览器移出link规则
deleteRule(sheet, index)
//跨浏览器添加link规则
insertRule(sheet, selectorText, cssText, position)
//判断class是否存在
hasClass(element, className)
//跨浏览器获取Style
getStyle(element, attr)
//跨浏览器获取滚动条位置
getScroll()
//跨浏览器获取视口大小
getInner()
//跨浏览器删除事件
removeEvent(obj, type, fn)
//跨浏览器添加事件绑定
addEvent(obj, type, fn)
//DOM加载
addDomLoaded(callback)
```

## 博客demo简介
实现功能：登录、注册、注销、表单验证、皮肤设置、图片延迟加载、文章发布、导航切换动画。
### 兼容IE6。

### 截屏
* 主页：
<img src="https://github.com/l20/base.js/blob/master/screenshot/home.png" alt="home">
* 注册：
<img src="https://github.com/l20/base.js/blob/master/screenshot/reg.png" alt="register">
* 登录：
<img src="https://github.com/l20/base.js/blob/master/screenshot/login.png" alt="login">
