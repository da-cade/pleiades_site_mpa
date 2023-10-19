import { createRouter, createWebHistory } from 'vue-router'

function loadPage(page) {
  return () => import(`./pages/${page}.vue`)
}
function loadView(view) {
  return () => import(`./views/${view}.vue`)
}
function loadLayout(layout) {
  return () => import(`./components/layouts/${layout}.vue`)
}
function loadComponent(component) {
  return () => import(`./components/components/${component}.vue`)
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
    name: 'About',
    component: loadPage('AboutPage')
  },
  {
    path: '/portfolio',
    name: 'Our Work',
    component: loadPage('OurWork')
  },
  {
    path: '/services',
    name: 'Services',
    component: loadPage('ServicesPage'),
    children:
      [
        {
          path: 'seo',
          name: 'SEO',
          component: loadView('SeoView')
        },
        {
          path: 'hosting',
          name: 'Domains & Hosting',
          component: loadView('HostingView')
        },
        {
          path: 'google-ads',
          name: 'Google Ads',
          component: loadView('AdsView')
        },
        {
          path: 'website-design',
          name: 'Website Design',
          component: loadView('DesignView')
        },
        {
          path: 'app-development',
          name: 'App Development',
          component: loadView('AppView')
        },
        {
          path: 'ecommerce',
          name: 'E-Commerce',
          component: loadView('EcommerceView')
        },
        // {
        //   path: 'logo-design',
        //   name: 'Logos and Assets',
        //   component: loadView('LogoView')
        // },
        {
          path: 'everything-else',
          name: 'Odd Jobs',
          component: loadView('MiscServicesView')
        },
      ]
  },
  {
    path: '/blog',
    name: 'Blog',
    children:
      [
        {
          path: 'app-development',
          name: 'App Development',
          component: loadView('AppView')
        }
      ]
  }
]


export const router = createRouter({
  // 4. Provide the history implementation to use. We are using the hash history for simplicity here.
  history: createWebHistory(),
  routes, // short for `routes: routes`
})
