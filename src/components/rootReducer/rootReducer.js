const initialState = {
    name: localStorage.getItem('userName') ? localStorage.getItem('userName') : '',
    posts : []
}

const rootReducer = (state = initialState, action) =>{
  switch(action.type){

    case "L":
      return{
      ...state,
       name: action.payload
      }
  

    case "POSTDATA":
      return {
        ...state,
        posts: [...state.posts, action.payload]
      }

    case 'ADDLIKE':
      let singlePostLike = state.posts.find((stateId)=>{
       return stateId.id === action.payload
      });
      return {
         ...state, 
         posts: state.posts.map(post => post.id === action.payload
           ? {...post, like: singlePostLike.like +1} : post)
      }
    
    case "ADDSHARE":
      let singlePostShare = state.posts.find((stateId)=>{
        return stateId.id === action.payload
       });
       return {
        ...state, 
        posts: state.posts.map(post => post.id === action.payload
          ? {...post, share: singlePostShare.share +1} : post)
     }

    default:
      return{
        ...state
      } 
  }
}

export default rootReducer;