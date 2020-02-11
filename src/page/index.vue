<template>
  <div class="index">
  	<div class="nav clear-float">
  		<ul>
          <li @click="changeActive('1')" :class="{ 'active': isActive=='1'}">硬核优势</li>
          <li @click="changeActive('2')" :class="{ 'active': isActive=='2'}">功能界面</li>
          <li @click="changeActive('3')" :class="{ 'active': isActive=='3'}">客户案例</li>
          <li @click="changeActive('4')" :class="{ 'active': isActive=='4'}">产品价格</li>
          <li @click="changeActive('5')" :class="{ 'active': isActive=='5'}">常见问题</li>
        </ul>
  	</div>
  </div>
</template>

<script>
export default {
  name: 'index',
  data () {
    return {
    	isActive: "1"
    }
  },
  methods: {
  	changeActive(flag) {
  		this.isActive = flag
  	}
  }
}
</script>

<style scoped>
.index {

}
.nav {
	width: 100%;
	background: #999;
	border-bottom: 1px solid #666;
	height: 20px;
}
.nav ul {
	margin: 0 auto;
	max-width: 800px;
  	display: flex;
  	justify-content: center;
}
.nav ul li {
	height: 19px;
	line-height: 19px;
	text-align: center;
	cursor: pointer;
}
.nav ul li+li {
	margin-left: 50px;
}
.nav ul li.active {
  border-bottom: 1px solid red;
}
</style>
