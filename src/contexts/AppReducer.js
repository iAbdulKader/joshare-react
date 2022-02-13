export default function AppReducer(state, action) {
  switch (action.type) {
    case 'ADD_FILES':
      return  {
         ...state,
         files: action.payload
      }
    
    case 'ADD_FILE':
      return  {
         ...state,
         files: state.files.push(action.payload)
      }
    
    case 'DELETE_FILE':
      return {
         ...state,
         files: state.files.filter((file) => file.id !== action.payload)
      }
      
    case 'SET_EXPIRE':
      return {
        ...state,
        expire: action.payload
      }
      
    case 'SET_EMAIL_SEND_NUM':
      return {
        ...state,
        emailSendNum: action.payload ? state.emailSendNum - 1 : state.emailSendNum
      }
      
    case 'SET_ADD_TIME_NUM':
      return addTimeNum(state, action)
      
    default:
      return state;
  }
}

function addTimeNum(state, action) {
  if(action.isDone && action.payload){
    return {
      ...state,
      addTimeNum: action.payload
    }
  } else {
    return {
      ...state,
      addTimeNum: action.isDone ? state.addTimeNum - 1 : state.addTimeNum
   }
  }
}