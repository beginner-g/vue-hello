<template>
  <div class="post-body">
    {{postId}}
    <div class="post-length">评论数：{{length}}</div>
  </div>
</template>
<script>
  export default {
    name:'post-body',
    props: ['postId'],
    computed:{
      length(){
        return this.$store.state.comment.all.length
      }
    }
  }
</script>
<style scoped>
  .post-body{
    height:150px;
    width:80%;
    margin: 0 auto;
    background-color:#fff;
    text-align: center;
    border: 1px solid #ccc;
  }
</style>
