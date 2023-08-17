/*
    Router : routes의 path와 component만 수정
*/

import { createWebHistory, createRouter } from "vue-router";

import List from './components/blogList.vue';

const routes = [
  {
    path: "/list", // 1) 위 경로를 통해 들어가면은
    component: List, // 2) 아래 컴포넌트로 이동해서 보여줌 // import한 파일 이름(= List)를 적음
  },
  // 2.5) 다른 페이지도 작성하여 사용 가능
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router; // 3) export router : 밖에서도 쓸 수 있게끔 만들고 main.js에서 사용