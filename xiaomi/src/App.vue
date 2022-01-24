<template>
    <div>
        <!-- 顶部链接 -->
        <sectioncom></sectioncom>
        <!-- 头部列表 -->
        <headercom></headercom>
        <!-- 右侧工具条 -->
        <toolbarcom></toolbarcom>
        <!-- 轮播图 -->
        <carouselcom></carouselcom>
        <!-- 主页 -->
        <homemiancom></homemiancom>
        <!-- 相关链接 -->
        <footercom></footercom>
        <!-- 网站详情 -->
        <siteinfocom></siteinfocom>
    </div>
</template>
<script>
import sectioncom from './components/sectionCom.vue'
import headercom from './components/headerCom.vue'
import footercom from './components/footerCom.vue'
import siteinfocom from './components/siteinfoCom.vue'
import toolbarcom from './components/toolbarCom.vue'
import carouselcom from './components/carouselCom.vue'
import homemiancom from './components/homemainCom.vue'

export default {
    components:{
        sectioncom,
        headercom,
        footercom,
        siteinfocom,
        toolbarcom,
        carouselcom,
        homemiancom
    }
}
</script>
<style scoped>
div{
    background-color:#F5F5F5; 
}

</style>

