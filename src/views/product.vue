<template>
<div>
  This is product.<br/>
  {{proID}}
</div>
</template>

<script>
export default {
name: "product",
  computed:{
  proID(){
    return this.$route.params.proId  //这个参数需要和router.js里面配置的动态路由匹配
  }
  }
}
</script>

<style scoped>

</style>
