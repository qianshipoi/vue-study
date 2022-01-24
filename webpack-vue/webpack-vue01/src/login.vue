<template>
    <div>
        <h1>这是一个使用.vue文件创建的login组件---{{msg}}</h1>
    </div>
</template>
<script>
// ES6 向外暴露成员 export default 并且在一个模块中只能向外暴露一次
export default{
    data:function(){
        return{
            msg:'111'
        }
    },
    methods:{
        show(){
            console.log('这是 .vue 文件的 show方法');
        }
    },
    created(){
        this.show()
    }
}
// export 向外暴露成员 
export var name = '张三'
export var content = '111'
</script>

<style></style>