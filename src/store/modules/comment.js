import axios from 'axios'
const state= {
  all:[
    {text:'第一条评论'},
    {text:'第二条评论'}
  ]
}
const mutations ={
  'ADD_COMMENT'(state,{text}){
    state.all.push({text})
  },
  'LOAD_COMMENTS'(state,{comments}){
    this.state.all=comments
  }
}
const actions ={
  'FETCH_COMMENTS' ({ commit }) {
    console.log('FETCH_COMMENTS')
    axios.get(`http://localhost:3008/comments`)
      .then( res => {
        console.log(res.data)
        const comments = res.data
        commit('LOAD_COMMENTS', { comments })
      })
  }
}
export default {
  state,
  mutations,
  actions
}
