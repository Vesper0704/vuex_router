<template>
  <div id="app">

    <el-button @click="pushLogin()">
      login
    </el-button>


    <el-button @click="pushUser()">
     user
    </el-button>

    <div class="link">

    <router-link to="/Home" tag="button">Home</router-link>
    </div>
<!--      router-link 会被默认渲染成a标签  通过tag可以改变渲染成的元素类型-->
    <div class="link">
    <router-link to="/about">About</router-link>
    </div>

  <div class="link">
    <router-link to="/user">User</router-link>
  </div>

    <div class="link">
      <router-link :to="/pro/+proID">Pro</router-link>
    </div>


    <div>
      <div>这是测试count</div>
      {{$store.state.counter}}
      <div>----GetCount组件----</div>
      <get-count></get-count>
    </div>


<hr/>

    <router-view></router-view>
<!--    router-view 决定组件放在什么位置 动态渲染-->


<!--    <img src="./assets/logo.png">-->


<!--    <div>-->
<!--      <p>-->
<!--        If Element is successfully added to this project, you'll see an-->
<!--        <code v-text="'<el-button>'"></code>-->
<!--        below-->
<!--      </p>-->
<!--      <el-button>el-button</el-button>-->
<!--    </div>-->

  </div>
</template>

<script>
import GetCount from "./vuexTest/GetCount";
export default {
  name: 'app',
  components:{
    GetCount
  },
  data(){
    return{
      proID:'product'
    }
  },
  methods:{
    pushLogin(){
      this.$router.push('/login')
    },
    pushUser(){
      this.$router.push('/user')
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

/*点击变色*/
.router-link-active{
  color: indianred;
}

.link{
  padding:10px
}
</style>
