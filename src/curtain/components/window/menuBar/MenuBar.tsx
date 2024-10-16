import styles from "./MenuBar.module.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faWrench, faGear, faCode, faPlay } from '@fortawesome/free-solid-svg-icons'
import { MenuBarItem, MenuBarState, MenuBarStateComponent } from "src/types/Menu";

export default function MenuBar(props: MenuBarStateComponent) {
    const menuState = props.currentState

    const setSelectedItem : Function = (selectedItem : MenuBarItem) => {
        const newState : MenuBarState = {...menuState}
        newState.selectedItem = selectedItem
        props.setState(newState)
    }

    const setHovered : Function = (isHovered : boolean) => {
        const newState : MenuBarState = {...menuState}
        newState.isHovered = isHovered
        props.setState(newState)
    }

    return (
        <div className={styles.menubar} onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)}>
            <div className={styles.top}>
                <div onClick={() => setSelectedItem(MenuBarItem.MODS)} className={styles.category}><FontAwesomeIcon icon={faWrench} className={styles.icon}/>Mods</div>
                <div onClick={() => setSelectedItem(MenuBarItem.CODES)} className={styles.category}><FontAwesomeIcon icon={faCode} className={styles.icon}/>Codes</div>
            </div>
            <div className={styles.bottom}>
                <div onClick={() => setSelectedItem(MenuBarItem.SETTINGS)} className={`${styles.category} ${styles.action}`}><FontAwesomeIcon icon={faGear} className={styles.icon}/>Settings</div>
                <div onClick={() => setSelectedItem(MenuBarItem.PLAY)} className={`${styles.category} ${styles.action}`}><FontAwesomeIcon icon={faPlay} className={styles.icon}/>Play</div>
            </div>
        </div>
    );
}