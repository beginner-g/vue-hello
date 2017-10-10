<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
  export default {
    name: 'app',
    created:function(){
      this.$store.dispatch('FETCH_COMMENTS')
    }
  }
</script>
