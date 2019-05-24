export default [
  {
    path: '/',
    redirect: '/app'
  },
  {
    path: '/app',
    props: true,
    components: () => import('../views/todo/item.vue')
  }
]
