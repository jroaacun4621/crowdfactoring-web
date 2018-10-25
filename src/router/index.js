import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import CreateLoan from '@/components/CreateLoan'
import ListLoans from '@/components/ListLoans'
import Callback from '@/components/Callback'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/home',
      name: 'Home',
      component: Home
    },
    {
      path: '/callback',
      name: 'Callback',
      component: Callback
    },
    {
      path: '/listloans',
      name: 'ListLoans',
      component: ListLoans
    },
    {
      path: '/createloan',
      name: 'CreateLoan',
      component: CreateLoan
    },
    {
      path: '*',
      redirect: '/home'
    }
  ]
})
