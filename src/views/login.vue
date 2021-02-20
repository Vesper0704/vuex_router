<template>
<div>

<form>
  <h5>This is login form</h5>
  username:<input v-model="username"/>
  <div v-if="!isUser">Sorry</div>
  <br/><br/><br/>
  password:<input v-model="password"/>

</form>
  <el-button>
    submit
  </el-button>
</div>
</template>

<script>
export default {
  name: "login",
  data(){
    return{
      username:'',
      password:'',
      isUser:true
    }
  },
  watch:{
    username:{
      handler(newValue){
        console.log(newValue)
        if(newValue.length<=5){
          this.isUser=false
        }else{
          this.isUser=true
        }
      },
      deep:true
    }
  }
}
</script>

<style scoped>
form{
  padding:20px
}
input{
  font-family: "Comic Sans MS";
}
</style>
