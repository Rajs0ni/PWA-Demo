
const routes = [
  {
    path: '/',
    component: () => import('layouts/MyLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Index.vue') },
      { path:'all', component: () => import('components/all.vue')},
      { path:'mymemo', component: () => import('components/mymemo.vue')},
      { path:'item', component: () => import('components/item.vue')}
    ]
  },
  {
    path:'/form',
    component: () => import('components/form.vue') 
  }
]

// Always leave this as last one
if (process.env.MODE !== 'ssr') {
  routes.push({
    path: '*',
    component: () => import('pages/Error404.vue')
  })
}

export default routes
