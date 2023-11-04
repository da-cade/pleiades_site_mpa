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

const routes = [
  {
    path: '/',
    name: 'home',
    component: loadPage('HomePage')
  },
  {
    path: '/about',
    name: 'about',
    component: loadPage('StandardPage'),
    children: [
      {
        path: '/about/so-you-want-to-know-about-us-huh',
        name: "What's Our Deal?",
        component: loadView('AboutUsView')
      },
      {
        path: '/about/frequently-asked-questions',
        name: 'FAQ',
        component: loadView('FAQView')
      },
      {
        path: '/about/portfolio-and-more',
        name: 'Porfolio',
        component: loadView('FAQView')
      },
    ]
  },
  {
    path: '/services',
    name: 'services',
    component: loadPage('StandardPage'),
    children:
      [
        {
          path: "/services/free-website-audit",
          name: "Free Website Audit",
          component: loadView('WebsiteAuditView')
        },
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
        {
          path: '/services/everything-else',
          name: 'Everything Else',
          component: loadView('EverythingElseView')
        },

      ]
  },
  {
    path: '/apps',
    name: 'apps',
    component: loadPage('StandardPage'),
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
    name: 'Blog',
    component: loadPage('StandardPage')
  },
  {
    path: '/contact',
    name: 'Contact',
    component: loadPage('ContactPage'),
  },
]


export const router = createRouter({
  // 4. Provide the history implementation to use. We are using the hash history for simplicity here.
  history: createWebHistory(),
  routes, // short for `routes: routes`
})
