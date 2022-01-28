import useModal from "../hooks/useModal";
import styles from "../styles/UtilityPalette.module.css";
import Modal from "./Modal";
import EmailModal from "./EmailModal";
import AddTimeModal from "./AddTimeModal";
import UserRemoveModal from "./UserRemoveModal";

import { MdOutlineAttachEmail } from "react-icons/md";
import { RiTimerFlashLine } from "react-icons/ri";
import { TiUserDeleteOutline } from "react-icons/ti";

export default function UtilityPalette() {
  const [state, dispatch] = useModal()
  
  const toggle = () => {
    dispatch("close")
  }
  return (
    <>
      <Modal 
        show={state.show} 
        toggle={toggle}
        overflow
      >
        {
        state.email ? 
        (<EmailModal />)
        : state.time ?
        (<AddTimeModal />)
        :state.user ?
        (<UserRemoveModal />)
        : null
        }
      </Modal>
    
      <div className={styles.paletteContainer}>
        <div 
          onClick={()=>dispatch("email")}
          className={styles.emailBtn}
        >
           <MdOutlineAttachEmail style={{verticalAlign: 'middle' }} />
        </div>
        
        <div 
          onClick={()=>dispatch("time")}
          className={styles.addTimeBtn}
        >
           <RiTimerFlashLine style={{verticalAlign: 'middle' }} />
        </div>
        
        <div 
          onClick={()=>dispatch("user")}
          className={styles.cookieClearBtn}
        >
           <TiUserDeleteOutline style={{verticalAlign: 'middle'}} />
        </div>
      </div>
    </>
    )
}