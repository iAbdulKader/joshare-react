import { useReducer } from "react";

export default function useModal() {
  const initialState = {}
  
  const reduceFunc = (state, action) => {
    switch (action) {
      case 'email':
        return { email: true, show: true }
      
      case 'time':
        return { time: true, show: true }
      
      case 'user':
        return { user: true, show: true }
      
      case 'close':
        return { show: false }
        
      default:
        return state
    }
  }
  const [ state, dispatch ] = useReducer(reduceFunc, initialState)
  
  return [state, dispatch]
  
}