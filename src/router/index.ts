import {createRouter,createWebHashHistory, createWebHistory} from 'vue-router'

const routes = [
      {
        path: "/about",
        redirect: "/about/index",
        name: "About",
        component: () => import('@/view/about/index.vue'),
        children: [
            {
                path: "index",
                name: "AboutPage",
                component: () => import('@/view/about/index.vue')
            },
        ]
      },
      {
        path: "/home",
        redirect: "/home/index",
        name: "Home",
        component: () => import('@/view/home/index.vue'),
        children: [
            {
                path: "index",
                name: "HomePage",
                component: () => import('@/view/home/index.vue')
            },
        ]
      },
    {
        path: "/login",
        redirect: "/login/index",
        name: "Login",
        component: () => import('@/view/login/index.vue'),
        children: [
            {
                path: "index",
                name: "LoginPage",
                component: () => import('@/view/login/index.vue')
            },
        ]
    },
]
const router = createRouter({
    // 4. 内部提供了 history 模式的实现。为了简单起见，我们在这里使用 hash 模式。
    history: createWebHashHistory(),
    routes, // `routes: routes` 的缩写
  })

  export default router;
