# Making Wechat Mini-Program with Vue.js - A Brief Introduction to mpvue

```
1. What is Wechat mini-program
2. The official development kit is hard to use
3. mpvue
4. mpvue example: a note list
   - wechat startup preparement
   - the codes
   - 
```

## What is Wechat Mini-Program


## Problems About the Official Development Kit

The main problem about Mini-Program native development kit is not very friendly to developers. And here is why:

1. The basic codes of Mini-Program are 4 types of files:

- `.json` configuration file, includes path / UI / network timeout / tab etc.
- `.wxml` template file, for page structure, like HTML in web page.
- `.wxss` style file, for page style, like CSS in web page.
- `.js` function file.

The `.wxml` and `.wxss` are similar to `HTML` and `CSS` but still different, you need to learn about them.

2. The codes are split into **Page**s, each **Page** contains its own `.json`, `.wxml`, `.wxss` and `.js` files. This is hard for code re-use.

3. No global state management. Only **Page** gets its own data object. So for a practical Mini-Program the developer needs to maintain a global data object as state and follow every single data changing manually, which is complicated and buggy.

4. Hard to use third libraries. For example, if you want to use `lodash` in Mini-Program, you need to manually copy the entire library into project. And that means when you don't need the library it will make you to remove from codes manually too. Not even mention about the version, updating, codes committment issues.


## Here Comes mpvue to Help

Since almost every frontend developer loves `Vue.js`, why don't use `Vue.js` to develope all Apps on all platforms (and yes this is actually the trending)? Now we get a framework named **mpvue** which could use to develope Wechat Mini-Program in `Vue.js` way.

[mpvue](https://github.com/Meituan-Dianping/mpvue) is based on `Vue.js` and modified the `runtime` and `compiler` to make it could run in Mini-Program environment. So you could develope the Mini-Program just like whatever you do with `Vue.js` in normal web SPAs!


## Simple Demo: A Note List

Now let's take a look at how to make a simple note list app for Wechat Mini-Program, with mpvue of course!

First of all, initializing the project.

```
$ vue init mpvue/mpvue-quickstart note-list
$ cd note-list
$ npm install
$ npm run dev
```

We created a new project from mpvue quickstart template and then started a build server in local. It will compile all source codes into a directory named **dist** in our new project path.

Download the wechat developer tools from [https://developers.weixin.qq.com/miniprogram/dev/devtools/download.html](https://developers.weixin.qq.com/miniprogram/dev/devtools/download.html).

Install the developer tool, open it up, and choose Mini-Program Development.

![click the red circled one](imgs/1.png)

In the next screen, let's select our project path and input the AppID.

![select dist path; input AppID](imgs/2.png)

And you will get this.

![the developer tool](imgs/3.png)



