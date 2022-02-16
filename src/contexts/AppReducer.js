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
         files: [...state.files, action.payload]
      }
    
    case 'DELETE_FILE':
      return {
         ...state,
         files: state.files.filter((file) => file.id !== action.payload)
      }
      
    case 'ADD_STATUS':
      return   {
        ...state,
        status: [...state.status, action.payload]
      }
      
    case 'CHANGE_STATUS':
      return {
        ...state,
        status: statusChange(state.status, action.id, action.field, action.payload)
      }
      
    case 'SET_EXPIRE':
      return {
        ...state,
        expire: action.payload
      }
      
    case 'SET_EMAIL_SEND_NUM':
      return addEmailNum(state, action)
      
    case 'SET_ADD_TIME_NUM':
      return addTimeNum(state, action)
      
    default:
      return state;
  }
}

function statusChange(statusArr, id, field, data){
  if(statusArr.length === 0) {
    return []
  } else {
    return statusArr.map(stat => {
      return stat.id === id ? {
        ...stat,
        [field]: data
      } : stat
    })
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

function addEmailNum(state, action) {
  if(action.isDone && action.payload){
    return {
      ...state,
      emailSendNum: action.payload
    }
  } else {
    return {
      ...state,
      emailSendNum: action.isDone ? state.emailSendNum - 1 : state.emailSendNum
   }
  }
}