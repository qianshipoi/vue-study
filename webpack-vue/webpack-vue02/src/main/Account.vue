<template>
   <div>
       <h1>这是一个 aacount 组件</h1>
       <router-link to='/account/login'>登录</router-link>
       <router-link to='/account/reg'>注册</router-link>
       <router-view></router-view>
       </div> 
</template>

<script>
export default {
    
}
</script>

<style lang='scss' scoped>
/* style 内的样式默认为全局样式  scoped 属性 让样式只在该组件内生效 */
/* lang 指定样式语言 不指定为默认 css */ 
    body{
        div{
            font-style:italic;
        }
    }
</style>