# DAX 微信 markdown 编辑器



## 一、致谢

>感谢开源项目： [md](https://gitee.com/Doocs/md)  [wechat-format](https://github.com/lyricat/wechat-format)
>
>感谢 WordPress 插件 [Mine云点播](https://www.zwtt8.com/) 作者  [mine27](https://www.zwtt8.com/) 的指导。



## 二、如何使用

打开如下地址，直接编辑，可以实时看到符合微信公众排版的效果。

- **推荐访问**：https://jiaopengzi.com/md/ 
- GitHub Pages：https://jiaopengzi.github.io/md/

在左侧输入对应的 markdown 内容后，右边实时作出排版。

直接点击  **复制** ，在微信公众号中粘贴即可。



![167-1](https://image.jiaopengzi.com/wp-content/uploads/2023/02/167-0.gif)



## 二、项目说明

- 根据开源项目 md 修改而来。

- markdown 编辑，实时格式化出符合微信公众号排版的页面。

- 适配 dax 语言在微信公众号中的高亮显示。



![167-1](https://image.jiaopengzi.com/wp-content/uploads/2023/02/167-1.png)

```dax
Map_Drill_L2 =
VAR PARENT_ID =
    SELECTEDVALUE ( 'D02_城市表'[F_01_省ID] )
VAR TABLEY =
    ADDCOLUMNS (
        'D02_城市表',
        "@VALUE",
            VAR p = [F_01_省ID]
            RETURN
                IF ( p = PARENT_ID, '00_Measure'[0001_销售金额] + 0, '00_Measure'[0001_销售金额] )
    )
VAR TABLEZ =
    FILTER ( TABLEY, [F_01_省ID] = PARENT_ID )
RETURN
    SUMX ( TABLEZ, [@VALUE] )
```



根据大家反馈，更新 M 语言的适配。



## 三、项目运行

1、克隆项目

```shell
git clone git@gitee.com:jiaopengzi/md.git
```



2、node 版本要求

```shell
# node 版本：v16.17.0
# npm  版本 9.5.0
```



3、安装插件

```shell
npm i
```



4、启动项目

```shell
npm start
```



5、部署

```shell
# 部署在 /md 目录
npm run build
# 访问 http://127.0.0.1:9000/md

# 部署在根目录
npm run build:h5-netlify
# 访问 http://127.0.0.1:9000/
```



6、访问

```http
http://127.0.0.1:8800/md/
```





## 四、解决 npm i 后修改的源码被覆盖问题



1、安装 patch-package

```shell
npm install patch-package --save-dev
```



2、修改`package.json`配置文件

下项目根目录 `package.json` 在 `scripts` 下增加键值对，并保存

```json
"postinstall":"patch-package"
```



3、修改 node_modules 文件夹下插件的源码



4、执行命令保存修改记录

执行如下命令，保存已经修改的插件记录，以便于后续 `npm i` 的时候恢复使用。

```shell
npx patch-package 插件包名称
```



当前修改的是 `highlight.js` 这个插件就执行。

```shell
npx patch-package highlight.js
```



5、查看修改的记录

执行上述命令后，会在 `node_modules` 文件夹平行的路径上创建一个新的文件夹 ：`patches`。

可以看到其中对比原来插件，自行修改的记录就保存下来了，下次 `npm i` 就会根据这里对比恢复自己记录了。

## 五、gh-pages 部署

 1.先用npm安装 gh-pages

```shell
npm install gh-pages --save-dev
```



2.修改 `package.json` 文件

增加 `homepage`，在 `scripts` 下增加 `predeploy ` `deploy` 。

```json
"homepage": "https://jiaopengzi.github.io/md",
        
"predeploy": "npm run build",
"deploy": "gh-pages -d dist"
```

![167-2](https://image.jiaopengzi.com/wp-content/uploads/2023/02/167-2.png)



### 自动打包并上传分支gh-pages

```shell
npm run deploy
```



![167-3](https://image.jiaopengzi.com/wp-content/uploads/2023/02/167-3.png)



访问是否部署成功

```http
https://jiaopengzi.github.io/md/
```

![167-4](https://image.jiaopengzi.com/wp-content/uploads/2023/02/167-4.png)





## 参考：dax 语言 css 颜色参考

```css
.Keyword {
    /* 关键字 公式背景色为：FFFFFE*/
    color: #0000FF;
    background-color: #FFFFFE
}

.Function {
    /* 关键字 */
    color: #3165BB
}

.Variable {
    /* 变量 */
    color: #009999
}

.Comment {
    /* 注释 */
    color: #5F9742
}

.StringLiteral {
    /* 双引号字符串 */
    color: #A31515
}

.Parenthesis {
    /* 圆括号 */
    color: #390000
}

.Number {
    /* 数字 */
    color: #09885A
}

.String2 {
    /* 函数内部 */
    color: #001080
}

```



by 焦棚子
