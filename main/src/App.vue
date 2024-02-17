<template>
  <div>
    <div class="bens">


      <!--      <button type="primary" @click="$router.push('/child-vue')">vue子应用</button>-->
      <!--      <button type="primary" @click="$router.push('/child-ng')">angular 子应用</button>-->
      <!--      <button type="primary" @click="$router.push('/child-react')">react 子应用</button>-->


      <el-menu
          :default-active="activeIndex"
          class="el-menu-demo"
          mode="horizontal"
          @select="handleSelect"
          background-color="#545c64"
          text-color="#fff"
          active-text-color="#ffd04b">
        <el-menu-item index="vue">vue 子应用</el-menu-item>
        <el-menu-item index="angular">angular 子应用</el-menu-item>
        <el-menu-item index="react">react 子应用</el-menu-item>
      </el-menu>


    </div>
    <router-view></router-view>
  </div>
</template>
<script>
export default {
  data() {
    return {
      activeIndex: '1',
    };
  },
  methods: {
    handleSelect(key, keyPath) {
      const currentPath = this.$route.path;

      if (key === 'vue' && currentPath !== '/child-vue') {
        this.$router.push("/child-vue");
      }
      if (key === 'angular' && currentPath !== '/child-ng') {
        this.$router.push("/child-ng");
      }
      if (key === 'react' && currentPath !== '/child-react') {
        this.$router.push("/child-react");
      }
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
