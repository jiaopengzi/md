# 适配 DAX 微信 markdown 编辑器



## 一、致谢

>感谢开源项目： **[md](https://gitee.com/Doocs/md)**  **[wechat-format](https://github.com/lyricat/wechat-format)**
>
>感谢 WordPress 插件 **[Mine云点播](https://www.zwtt8.com/)** 作者  [mine27](https://www.zwtt8.com/) 的指导。



## 二、如何使用

打开如下地址，直接编辑，可以实时看到符合微信公众排版的效果。

- Gitee Pages：https://doocs.gitee.io/md 推荐国内用户使用。
- GitHub Pages：[https://doocs.github.io/md](https://gitee.com/link?target=https%3A%2F%2Fdoocs.github.io%2Fmd)

图内用是建议使用 gittee 效果会更快。

直接点击复制，在微信公众号中粘贴。



## 二、项目说明

- 根据开源项目 md 修改而来。

- markdown 编辑，实时格式化出符合微信公众号排版的页面。

- 适配 dax 语言在微信公众号中的高亮显示。



根据大家反馈，更新 M 语言的适配。



## 三、项目运行

### 1、克隆项目

```
git clone git@gitee.com:jiaopengzi/Markdown2WeChatOfficialAccount.git
```



### 2、node 版本要求

`node` 版本：`v16.17.0`

`npm`  版本 `9.5.0`



### 3、安装插件

```
npm i
```



### 4、启动项目

```
npm start
```



### 5、访问

```
http://127.0.0.1:8800/md/
```





## 四、防止重新 `npm i` 后修改的源码被覆盖



### 1、安装 patch-package

```
npm install patch-package --save-dev
```



### 2、修改`package.json`配置文件

下项目根目录 `package.json` 在 `scripts` 下增加键值对，并保存

```
"postinstall":"patch-package"
```



### 3、修改 node_modules 文件夹下插件的源码



### 4、执行命令保存修改记录

执行如下命令，保存已经修改的插件记录，以便于后续 `npm i` 的时候恢复使用。

```
npx patch-package 插件包名称
```



当前修改的是 `highlight.js` 这个插件就执行。

```
npx patch-package highlight.js
```



### 5、查看修改的记录

执行上述命令后，会在 `node_modules` 文件夹平行的路径上创建一个新的文件夹 ：`patches`。

可以看到其中对比原来插件，自行修改的记录就保存下来了，下次 `npm i` 就会根据这里对比恢复自己记录了。



