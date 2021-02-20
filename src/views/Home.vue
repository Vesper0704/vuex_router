<template>
  <div class="home">
<!--    <img alt="Vue logo" src="../assets/logo.png">-->
    This is home page
<!--    这里的view用来盛放children路由里面定义的组件-->

    <hr/>
    <router-link to="/home/news">news</router-link>
    <br/>
    <router-link to="/home/shop">shop</router-link>
    <hr/>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'Home',
}
</script>
