import { createContext, useReducer } from "react";
import AppReducer from "./AppReducer";

const initialState = {
  files : [],
  uploads: [],
  expire: "",
  emailSendNum: 2,
  addTimeNum: 2
}

export const GlobalContext = createContext(initialState);

export default function GlobalProvider({ children }) {
  const [state, dispatch] = useReducer(AppReducer, initialState);
  
  function addFiles(files) {
    dispatch({
      type: "ADD_FILES",
      payload: files
    })
  }
  
  function addFile(file) {
    dispatch({
      type: "ADD_FILE",
      payload: file,
    })
  }
  
  function deleteFile(id) {
    dispatch({
      type: "DELETE_FILE",
      payload: id,
    })
  }
  
  function setExpire(time) {
    dispatch({
      type: "SET_EXPIRE",
      payload: time
    })
  }
  
  function setEmailSendNum(isDone) {
    dispatch({
      type: "SET_EMAIL_SEND_NUM",
      payload: isDone
    })
  }
  
  function setAddTimeNum(isDone, number) {
    dispatch({
      type: "SET_ADD_TIME_NUM",
      payload: number,
      isDone
    })
  }
  
  const value = {
    files: state.files,
    uploads: state.uploads,
    expire: state.expire,
    emailSendNum: state.emailSendNum,
    addTimeNum: state.addTimeNum,
    addFiles,
    addFile,
    deleteFile,
    setExpire,
    setEmailSendNum,
    setAddTimeNum
  }
  
  return (
    <GlobalContext.Provider value={value}>
      {children}
    </GlobalContext.Provider>)
}