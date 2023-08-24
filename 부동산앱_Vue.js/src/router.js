/*
    Router : routes의 path와 component만 수정
*/

import { createWebHistory, createRouter } from "vue-router";

import List from './components/List.vue';
import Home from './components/Home.vue';
import Main from './components/Main.vue';
import Detail from './components/Detail.vue';

const routes = [
  {
    path: "/list", // 1) 위 경로를 통해 들어가면은
    component: List, // 2) 아래 컴포넌트로 이동해서 보여줌 // import한 파일 이름(= List)를 적음
  },
  {
    path: "/home",
    component: Home,
  },
  {
    path: "/main",
    component: Main,
  },
  {
    path: "/detail", // /:id  아무 문자나 입력으로 받아서 id에 저장. ex) 100 입력 시, id=100
    component: Detail,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router; // 3) export router : 밖에서도 쓸 수 있게끔 만들고 main.js에서 사용