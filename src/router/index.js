import Vue from 'vue'
import Router from 'vue-router'
import index from '@/page/index'
import mixRead from '@/page/mixRead'
import payRead from '@/page/payRead'
import freeRead from '@/page/freeRead'
import internationRead from '@/page/internationRead'
import price from '@/page/price'
import custom from '@/page/custom'
import join from '@/page/join'
import document from '@/page/document'
import about from '@/page/about'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [{
    path: '*',
    redirect: '/'
  }, {
    path: '/',
    name: 'index',
    component: index,
    meta: {
      title: '首页',
    }
  }, {
    path: '/mixRead',
    name: 'mixRead',
    component: mixRead,
    meta: {
      title: '付费+免费阅读',
    }
  }, {
    path: '/payRead',
    name: 'payRead',
    component: payRead,
    meta: {
      title: '付费阅读',
    }
  }, {
    path: '/freeRead',
    name: 'freeRead',
    component: freeRead,
    meta: {
      title: '免费阅读',
    }
  }, {
    path: '/internationRead',
    name: 'internationRead',
    component: internationRead,
    meta: {
      title: '国际化阅读',
    }
  }, {
    path: '/price',
    name: 'price',
    component: price,
    meta: {
      title: '价格',
    }
  }, {
    path: '/custom',
    name: 'custom',
    component: custom,
    meta: {
      title: '定制',
    }
  }, {
    path: '/join',
    name: 'join',
    component: join,
    meta: {
      title: '加盟',
    }
  }, {
    path: '/document',
    name: 'document',
    component: document,
    meta: {
      title: '文档',
    }
  }, {
    path: '/about',
    name: 'about',
    component: about,
    meta: {
      title: '关于我们',
    }
  }]
})
