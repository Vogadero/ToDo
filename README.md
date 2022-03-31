[![](https://img.shields.io/badge/ToDo-@Vogadero-success.svg?style=plastic)](https://github.com/Vogadero/ToDo)
![](https://img.shields.io/npm/v/drone.svg?style=plastic)
![](https://img.shields.io/badge/language-JavaScript-orange.svg?style=plastic)
![](https://img.shields.io/badge/express/v/drone.svg?style=plastic)
![](https://img.shields.io/badge/language-Html-9cf.svg?style=plastic)
![](https://img.shields.io/badge/language-Css-blueviolet.svg?style=plastic)
![](https://img.shields.io/npm/l/express?style=plastic)

# 项目简介🚩

- ToDo备忘录，今日事今日毕。

## 1. 功能模块🎨

#### 1.1 首页🛫

| 功能               |
| ------------------ |
| 展示任务列表       |
| 添加每日任务       |
| 删除任务           |
| 更改任务状态       |
| 修改任务名称       |
| 计算未完成任务数量 |
| 显示未完成任务     |
| 清除已完成任务     |

## 2. 截图⭐

#### ![](https://github.com/Vogadero/ToDo/tree/master/public/todo/assets/image/ToDo.jpeg)

## 3. 项目架构🍽️

| 系统分层 | 使用技术                   |
| -------- | -------------------------- |
| 数据层   | mongoDB v4.0.28            |
| 服务层   | node.js (express) v16.14.0 |
| 客户端   | art-template、jQuery       |

## 4. 项目运行环境搭建🌈

1. 安装node.js软件并测试其是否安装成功

   - win + R 开启windows系统中的运行程序，在运行程序中输入powershell回车，打开命令行程序

   - 输入`node -v`命令查看node.js的版本，在命令行程序中输出了版本号没有报错即说明安装成功

2. 安装mongodb、mongodb-compass软件

3. 数据库配置，为todo数据库创建普通账号

   - `mongo` 进入mongodb数据库操作环境
   - `use admin` 切换到admin数据库
   - `db.auth('root', 'root')` 登录admin数据库
   - `use todo` 切换到todo数据库
   - `db.createUser({user: 'todo', pwd: 'todo', roles: ['readWrite']})`  创建账号
   - `exit` 退出mongodb数据库操作环境

4. 在app.js中配置数据库账号密码

5. 将todo项目文件夹复制到硬盘中（服务器端程序）

6. 在命令行工具中进入到项目根目录中

   - 按住shift键，点击鼠标右键，选择在此处打开powershell窗口

7. 使用`npm install`命令安装项目所需依赖文件

8. 将todo静态页面复制到public文件夹中

9. 在命令行工具中输入node app.js开启项目

# 功能介绍🦷

## :card_index:展示任务列表
1. 准备一个放置任务列表的数组
2. 向服务器端发送请求，获取已存在的任务
3. 将已存在的任务存储在任务列表数组中
4. 通过模板引擎将任务列表数组中的任务显示在页面中



## :woman_technologist:添加每日任务
1. 为文本框绑定键盘抬起事件，在事件处理函数中判断当前用户敲击的是否是回车键
2. 当用户敲击回车键的时候，判断用户在文本框中是否输入了任务名称
3. 向服务器端发送请求，将用户输入的任务名称添加到数据库中，同时将任务添加到任务数组中
4. 通过模板引擎将任务列表数组中的任务显示在页面中



## :thermometer:删除任务

1. 为删除按钮添加点击事件（因为li是动态的，所以利用事件委托，将事件绑定在ul标签上，当用户点击li里的删除按钮时，由于事件具有冒泡特性，事件会一层一层向上传递，当传递到ul标签时就能触发它身上的点击事件）
2. 在事件处理函数中获取到要删任务的id
3. 向服务器端发送请求，根据ID删除任务，同时将任务数组中的相同任务删除
4. 通过模板引擎将任务列表数组中的任务重新显示在页面中



## :four_leaf_clover:更改任务状态

1. 为任务复选框添加onchange事件
2. 在事件处理函数中获取复选框是否选中
3. 向服务器端发送请求，将当前复选框的是否选中状态提交到服务器端
4. 将任务状态同时也更新到任务列表数组中
5. 通过模板引擎将任务列表数组中的任务重新显示在页面中并且根据任务是否完成为li元素添加completed类名



## 🕵️‍♀️修改任务名称

1. 为任务名称外层的label标签添加双击事件，同时为当前任务外层的li标签添加editing类名，开启编辑状态
2. 将任务名称显示在文本框中并让文本框获取焦点
3. 当文本框离开焦点时，将用户在文本框中输入值提交到服务器端，并将最新的任务名称更新到任务列表数组中
4. 使用模板引擎重新渲染页面中的任务列表



## :six_pointed_star:计算未完成任务数量

1. 准备一个用于存储未完成任务数量的变量
2. 将未完成任务从任务数组中过滤出来
3. 将过滤结果数组的长度赋值给任务数量变量
4. 将结果更新到页面中



## :sunrise_over_mountains:显示未完成任务

1. 为active按钮添加点击事件
2. 从任务列表数组中将未完成任务过滤出来
3. 使用模板引擎将过滤结果显示在页面中



## 👩‍🚒清除已完成任务

1. 为clear completed按钮添加点击事件
2. 向服务器端发送请求将数据库中的已完成任务删除掉
3. 将任务列表中的已完成任务删除调用
4. 使用模板引擎将任务列表中的最后结果显示在页面中



# Tree🌵    

```
ToDo
├─ .gitignore
├─ README.md
├─ server
│  ├─ app.js
│  ├─ model
│  │  └─ task.js
│  ├─ package-lock.json
│  ├─ package.json
│  ├─ public
│  │  ├─ assets
│  │  │  └─ bootstrap
│  │  │     ├─ CHANGELOG.md
│  │  │     ├─ dist
│  │  │     │  ├─ css
│  │  │     │  │  ├─ bootstrap-theme.css
│  │  │     │  │  ├─ bootstrap-theme.css(1).map
│  │  │     │  │  ├─ bootstrap-theme.min.css
│  │  │     │  │  ├─ bootstrap-theme.min.css.map
│  │  │     │  │  ├─ bootstrap.css
│  │  │     │  │  ├─ bootstrap.css.map
│  │  │     │  │  ├─ bootstrap.min.css
│  │  │     │  │  └─ bootstrap.min.css.map
│  │  │     │  ├─ fonts
│  │  │     │  │  ├─ glyphicons-halflings-regular.eot
│  │  │     │  │  ├─ glyphicons-halflings-regular.svg
│  │  │     │  │  ├─ glyphicons-halflings-regular.ttf
│  │  │     │  │  ├─ glyphicons-halflings-regular.woff
│  │  │     │  │  └─ glyphicons-halflings-regular.woff2
│  │  │     │  └─ js
│  │  │     │     ├─ bootstrap.js
│  │  │     │     ├─ bootstrap.min.js
│  │  │     │     └─ npm.js
│  │  │     ├─ fonts
│  │  │     │  ├─ glyphicons-halflings-regular.eot
│  │  │     │  ├─ glyphicons-halflings-regular.svg
│  │  │     │  ├─ glyphicons-halflings-regular.ttf
│  │  │     │  ├─ glyphicons-halflings-regular.woff
│  │  │     │  └─ glyphicons-halflings-regular.woff2
│  │  │     ├─ grunt
│  │  │     │  ├─ .jshintrc
│  │  │     │  ├─ bs-commonjs-generator.js
│  │  │     │  ├─ bs-glyphicons-data-generator.js
│  │  │     │  ├─ bs-lessdoc-parser.js
│  │  │     │  ├─ bs-raw-files-generator.js
│  │  │     │  ├─ change-version.js
│  │  │     │  ├─ configBridge.json
│  │  │     │  ├─ npm-shrinkwrap.json
│  │  │     │  └─ sauce_browsers.yml
│  │  │     ├─ Gruntfile.js
│  │  │     ├─ js
│  │  │     │  ├─ affix.js
│  │  │     │  ├─ alert.js
│  │  │     │  ├─ button.js
│  │  │     │  ├─ carousel.js
│  │  │     │  ├─ collapse.js
│  │  │     │  ├─ dropdown.js
│  │  │     │  ├─ modal.js
│  │  │     │  ├─ popover.js
│  │  │     │  ├─ scrollspy.js
│  │  │     │  ├─ tab.js
│  │  │     │  ├─ tooltip.js
│  │  │     │  └─ transition.js
│  │  │     ├─ less
│  │  │     │  ├─ alerts.less
│  │  │     │  ├─ badges.less
│  │  │     │  ├─ bootstrap(1).less
│  │  │     │  ├─ breadcrumbs.less
│  │  │     │  ├─ button-groups.less
│  │  │     │  ├─ buttons.less
│  │  │     │  ├─ carousel.less
│  │  │     │  ├─ close.less
│  │  │     │  ├─ code.less
│  │  │     │  ├─ component-animations.less
│  │  │     │  ├─ dropdowns.less
│  │  │     │  ├─ forms.less
│  │  │     │  ├─ glyphicons.less
│  │  │     │  ├─ grid.less
│  │  │     │  ├─ input-groups.less
│  │  │     │  ├─ jumbotron.less
│  │  │     │  ├─ labels.less
│  │  │     │  ├─ list-group.less
│  │  │     │  ├─ media.less
│  │  │     │  ├─ mixins
│  │  │     │  │  ├─ alerts.less
│  │  │     │  │  ├─ background-variant.less
│  │  │     │  │  ├─ border-radius.less
│  │  │     │  │  ├─ buttons.less
│  │  │     │  │  ├─ center-block.less
│  │  │     │  │  ├─ clearfix.less
│  │  │     │  │  ├─ forms.less
│  │  │     │  │  ├─ gradients.less
│  │  │     │  │  ├─ grid-framework.less
│  │  │     │  │  ├─ grid.less
│  │  │     │  │  ├─ hide-text.less
│  │  │     │  │  ├─ image.less
│  │  │     │  │  ├─ labels.less
│  │  │     │  │  ├─ list-group.less
│  │  │     │  │  ├─ nav-divider.less
│  │  │     │  │  ├─ nav-vertical-align.less
│  │  │     │  │  ├─ opacity.less
│  │  │     │  │  ├─ pagination.less
│  │  │     │  │  ├─ panels.less
│  │  │     │  │  ├─ progress-bar.less
│  │  │     │  │  ├─ reset-filter.less
│  │  │     │  │  ├─ reset-text.less
│  │  │     │  │  ├─ resize.less
│  │  │     │  │  ├─ responsive-visibility.less
│  │  │     │  │  ├─ size.less
│  │  │     │  │  ├─ tab-focus.less
│  │  │     │  │  ├─ table-row.less
│  │  │     │  │  ├─ text-emphasis.less
│  │  │     │  │  ├─ text-overflow.less
│  │  │     │  │  └─ vendor-prefixes.less
│  │  │     │  ├─ mixins.less
│  │  │     │  ├─ modals.less
│  │  │     │  ├─ navbar.less
│  │  │     │  ├─ navs.less
│  │  │     │  ├─ normalize.less
│  │  │     │  ├─ pager.less
│  │  │     │  ├─ pagination.less
│  │  │     │  ├─ panels.less
│  │  │     │  ├─ popovers.less
│  │  │     │  ├─ print.less
│  │  │     │  ├─ progress-bars.less
│  │  │     │  ├─ responsive-embed.less
│  │  │     │  ├─ responsive-utilities.less
│  │  │     │  ├─ scaffolding.less
│  │  │     │  ├─ tables.less
│  │  │     │  ├─ theme.less
│  │  │     │  ├─ thumbnails.less
│  │  │     │  ├─ tooltip.less
│  │  │     │  ├─ type.less
│  │  │     │  ├─ utilities.less
│  │  │     │  ├─ variables.less
│  │  │     │  └─ wells.less
│  │  │     ├─ LICENSE
│  │  │     ├─ package.json
│  │  │     └─ README.md
│  │  ├─ js
│  │  │  ├─ jquery.min.js
│  │  │  ├─ nprogress
│  │  │  │  ├─ nprogress.css
│  │  │  │  └─ nprogress.js
│  │  │  └─ template-web.js
│  │  └─ todo
│  │     ├─ assets
│  │     │  ├─ css
│  │     │  │  ├─ base.css
│  │     │  │  └─ index.css
│  │     │  └─ image
│  │     │     └─ ToDo.jpeg
│  │     └─ index.html
│  └─ route
│     └─ todo.js
└─ 接口文档.md

```
