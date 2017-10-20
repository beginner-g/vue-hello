<template>
  <div class='comment-box'>
    <div class="comment-form">
      <input v-model='text'/>
      <button v-on:click="handleClick">提交</button>
    </div>
    <ul>
      <li v-for='comment in reversedComments'>
        {{comment.text}}
      </li>
    </ul>
  </div>
</template>
<script>
  export default {
    name:'comment-box',
    computed:{
      comments:function(){
        const allComments = this.$store.state.comment.all
         return allComments.filter(t =>
           {
             console.log(this.postId)
             return t.postId == this.postId
           }
         )
      },
      reversedComments:function(){
        return this.comments.slice().reverse()
      },
      postId:function(){
        return this.$route.params.id
      }
    },
    data:()=>(
      {
        text:''
      }
    ),
    methods:{
      handleClick:function(){
        // const input =document.getElementById('comment-value')
        if(this.text!==''){
          // this.comments.push({text:this.text})
          this.$store.dispatch({type:'addComment',text:this.text,postId:this.postId})
          this.text=''
        }
      },
      handleClear:function(){
        console.log(1);
      }
    }
  }
</script>
<style scoped>
  .comment-box{
    min-height:150px;
    width:80%;
    margin: 0 auto;
    background-color:#fff;
    text-align: center;
    border: 1px solid #ccc;
  }
  .comment-form{
    display: flex;
  }
  input{
    width: 100%;
    height: 60px;
    line-height: 60px;
    font-size: 18px;
    border: 0;
    border-bottom: 1px solid #ccc;
  }
  input:focus{
    outline: 0;

  }
  button{
    width: 80px;
    color: #fff;
    background-color: deeppink;
    border: 0;
  }
  li{
    display: flex;
    justify-content: space-between;
    margin-bottom: 5px;
  }
  .clear{
    background-color: lightblue;
    color: red;
    line-height: 20px;
  }
</style>
