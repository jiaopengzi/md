# 微信编辑器修改说明



## 1、git

```
git@gitee.com:Doocs/md.git
```



## 2、克隆项目

```
git clone git@gitee.com:Doocs/md.git
```



## 3、安装模块

```
npm i
```

`node` 版本需要是：`v16.17.0`

`npm`  版本 `9.5.0`



## 4、修改文件

将当前文件夹根目录的文件复制到 md 文件夹下替换即可。



## 5、启动项目

```
npm start
```



## 6、访问

```
http://127.0.0.1:8800/md/
```





## 防止重新 `npm i` 后修改的源码被覆盖



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

当前修改的是 `highlight.js` 这个插件就执行

```
npx patch-package highlight.js
```



### 5、查看修改的记录

执行上述命令后，会在 `node_modules` 文件夹平行的路径上创建一个新的文件夹 ：`patches`。

可以看到其中对比原来插件，自行修改的记录就保存下来了，下次 `npm i` 就会根据这里对比恢复自己记录了。



