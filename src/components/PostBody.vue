<template>
  <div class="post-body">
    <div v-if="ready">
      <h1>{{ title }}</h1>
      {{ content }}
      评论数：{{ length }}
    </div>
  </div>
</template>
<script>
  export default {
    name:'post-body',
    computed:{
      length(){
        return this.$store.state.comment.all.length
      },
      ready:function(){
        return this.post
      },
      postId:function(){
        return this.$route.params.id
      },
      post:function () {
        const posts = this.$store.state.post.all
        const post = posts.find( t => t.id == this.postId)
        return post
      },
      content:function () {
        return this.post.content
      },
      title:function () {
        return this.post.title
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
