# vue3的笔记

[vue3官方中文文档](https://cn.vuejs.org/)

Vue3里的Vue-router

安装vue4.x:

```bash
npm install vue-router@4
```

建一个router文件夹，下面一个index.js:

```js
import { createRouter, createWebHashHistory } from "vue-router";
import Home from "@/views/Home";
import About from "@/views/About";

const routes = [
  { path: "/", component: Home },
  { path: "/about", component: About },
];

const router = createRouter({ history: createWebHashHistory(), routes });
export default router;
```

main.js

```js
import { createApp } from "vue";
import App from "./App.vue";
import router from "@/router/index.js"


const app = createApp(App);
app.use(router);
app.mount("#app");
```

示例在App.vue里：

```js
<template>
  <router-link to="/">Go to Home</router-link>
  <router-link to="/about">Go to About</router-link>
  <router-view></router-view>
</template>

<script lang="js">
import About from "./views/About.vue";
import Home from "./views/Home.vue";
export default {
    setup() {

        return {

        };
    },
    components: { About,Home }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
```

vuex/pinia:

安装vuex: npm install vuex@4 --save
安装pinia: npm install pinia --save

现在官方建议使用pinia,但是用法和vuex差不多,详情见
[pinia中文文档](https://pinia.web3doc.top/)

新建一个store文件夹， 新建一个index.js

```js
import {createStore} from 'vuex'

const actions = {
    jia(context,value){
        console.log("action里的jia被调用了")
        context.commit('JIA',value)
    },
    jian(context,value){
        console.log("action里的jian被调用了")
        context.commit('JIAN',value)
    },
    jiaOdd(context,value){
        console.log("action里的jiaOdd被调用了")
        if(context.state.sum%2){
        context.commit('JIA',value)
        }
    },
    jiaWait(context,value){
        console.log("action里的jiaWait被调用了")
        setTimeout(() => {
            context.commit('JIA',value)
        }, 500);

    }
}
const mutations = {
    JIA(state,value){
        console.log("mutations里的JIA被调用了")
        state.sum += value
    },
    JIAN(state,value){
        console.log("mutations里的JIAN被调用了")
        state.sum -= value
    }
}
const state = {
    sum:0
}

const store = createStore({
    actions,
    mutations,
    state
})

export default store;
```

main.js:

```js
import { createApp } from "vue";
import App from "./App.vue";
import router from "@/router/index.js"
import store from "@/store/index.js"


const app = createApp(App);
app.use(router);
app.use(store);
app.mount("#app");
```

关于moke.js
[vue-vue项目中mock.js的使用 - 掘金](https://juejin.cn/post/6844903847660371982)
