## 使用js原生实现的基础库，兼容jquery部分API
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
