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
    name: 'About',
    component: loadPage('AboutPage'),
  },
  {
    path: '/services',
    name: 'Services',
    component: loadPage('StandardPage'),
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
        {
          path: '/services/everything-else',
          name: 'Everything Else',
          component: loadView('EverythingElseView')
        },
        {
          path: "/services/free-website-audit",
          name: "Free Website Audit",
          component: loadView('WebsiteAuditView')
        }
      ]
  },
  {
    path: '/apps',
    name: 'Apps',
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
    name: 'BlogHost',
    component: loadPage('BlogPage'),
    children: [
      {
        path: "/blog/all",
        name: "Blog",
        component: loadLayout('BlogPostsList')
      },
      {
        path: "/blog/:instance",
        name: "posts",
        props: true,
        component: loadView('BlogPostView')
      }
    ]

  },
  {
    path: '/contact',
    name: 'Contact',
    component: loadPage('ContactPage'),
  },
]


export const router = createRouter({
  // Provide the history implementation to use. We are using the hash history for simplicity here.
  history: createWebHistory(),
  scrollBehavior(to, from, savedPosition) {
    if (to.hash) {
      // This ensures that if hash is provided to router.push it works as expected.
      //  & since we have used "behavior: 'smooth'" the browser will slowly come to this hash position.
      return {
        el: document.getElementById(to.hash),
        behavior: 'smooth',
      }
    }
    if (to.path !== from.path) {
      // always scroll to top

      return { top: 0 }
    }
  },
  routes, // short for `routes: routes`
})
