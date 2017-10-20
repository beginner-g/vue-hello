import axios from 'axios'
const state= {
  all:[]
}
const mutations ={
  'ADD_COMMENT'(state,{text,postId}){
    state.all.push({text,postId})
  }
}
const actions ={
  addComment({commit},{text,postId}){
    axios.post('http://localhost:3008/comments',{text,postId}).then(
      res=>{
        commit('ADD_COMMENT',{text,postId})
      }
    )
  },
  loadComments({commit}){
    axios.get('http://localhost:3008/comments').then(
      res=>{
        state.all=res.data
      }
    )
  }
}
export default {
  state,
  mutations,
  actions
}
