import HelloWorld from '@/components/HelloWorld'

const routes = [
    {
      path: '/sub-vue2',
      name: 'sub-vue2',
      component: HelloWorld,
    }
  ]
    // {
    //   path: '/home',
    //   name: 'Home',
    //   component: () => import('../views/main/index')
    // }
export default routes
