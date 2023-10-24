import { createRouter, createWebHistory } from 'vue-router'

function loadPage(page) {
  return () => import(`./pages/${page}.vue`)
}
function loadView(view) {
  return () => import(`./views/${view}.vue`)
}
function loadLayout(layout) {
  return () => import(`./layouts/${layout}.vue`)
}
function loadComponent(component) {
  return () => import(`./components/${component}.vue`)
}
function loadComposable(composable) {
  return () => import(`./components/composables/${composable}.vue`)
}

export const routes = [
  {
    path: '/',
    name: 'home',
    component: loadPage('HomePage')
  },
  {
    path: '/about',
    name: 'about',
    component: loadPage('AboutPage'),
  },
  {
    path: '/services',
    name: 'services',
    component: loadPage('ServicesPage'),
    children:
      [
        {
          path: '/services/all',
          name: 'Our Services',
          component: loadLayout('ServicesList')
        },
        {
          path: '/services/:instance',
          name: 'service',
          props: true,
          component: loadView('ServiceView')
        },

      ]
  },
  {
    path: '/apps',
    name: 'apps',
    components: loadPage('AppPage'),
    children:
      [
        {
          path: "/apps/all",
          name: "Our Apps",
          component: loadLayout('AppsList')
        },
        {
          path: "/apps/:instance",
          name: "app",
          props: true,
          component: loadView('AppView')
        }
      ]
  },

  {
    path: '/blog',
    name: 'blog',
    // children:
    //   [
    //     {
    //       path: 'app-development',
    //       name: 'App Development',
    //       component: loadView('AppView')
    //     }
    //   ]
  },
  // {
  //   path: '/portfolio',
  //   name: 'portfolio',
  //   component: loadPage('PortfolioPage'),
  //   children:
  //     [
  //       {
  //         path: "/all",
  //         name: "all portfolio",
  //         component: loadLayout('AppsList')
  //       },
  //       {
  //         path: "/:instance",
  //         name: "portfolio piece",
  //         component: loadView('AppView')
  //       }
  //     ]
  // },


]


export const router = createRouter({
  // 4. Provide the history implementation to use. We are using the hash history for simplicity here.
  history: createWebHistory(),
  routes, // short for `routes: routes`
})
