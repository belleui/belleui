import { Router } from '@vaadin/router'

const outlet = document.querySelector('main-page')

const router = new Router(outlet)

router.setRoutes([
  {
    path: '/',
    component: 'home-page',
    action: async () => {
      await import('./pages/home.js')
    }
  },
  {
    path: '/components',
    component: 'app-layout',
    children: [
      // { path: '/', component: 'docs-component' },
      {
        path: '/:component',
        component: 'docs-component',
      }
    ]
  }
])
