<template>
  <div class="header">
    <div class="nav">
      <div class="icon"></div>
      <div class="nav-content">
        <ul>
          <li @click="linkTo('/index')">首页</li>
          <li @click="linkTo('/freeRead')">解决方案</li>
          <li @click="linkTo('/price')">价格</li>
          <li @click="linkTo('/custom')">定制</li>
          <li @click="linkTo('/join')">加盟</li>
          <li @click="linkTo('/document')">文档</li>
          <li @click="linkTo('/about')">关于我们</li>
        </ul>
      </div>
      <div></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Header',
  data () {
    return {
    }
  },
  methods: {
    linkTo(href) {
      this.$router.push({
        path: href
      }).catch(err => {})
    }
  }
}
</script>

<style scoped>
.header {
  background: red;
  width: 100%;
  height: 80px;
}
.nav {
  max-width: 1200px;
  margin: 0 auto;
}
.nav-content ul li {
  float: left;
  cursor: pointer;
}
.nav-content ul li+li {
  margin-left: 20px;
}
</style>
