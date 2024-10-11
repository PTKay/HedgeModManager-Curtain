import styles from "./Side.module.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faWrench, faGear, faCode, faPlay } from '@fortawesome/free-solid-svg-icons'

export default function Side(props: SideStateComponent) {
    return (
        <div className={styles.sidebar} onMouseEnter={() => props.setSideHovered(true)} onMouseLeave={() => props.setSideHovered(false)}>
            <div className={styles.top}>
                <div className={styles.category}><FontAwesomeIcon icon={faWrench} className={styles.icon}/>Mods</div>
                <div className={styles.category}><FontAwesomeIcon icon={faCode} className={styles.icon}/>Codes</div>
            </div>
            <div className={styles.bottom}>
                <div className={`${styles.category} ${styles.action}`}><FontAwesomeIcon icon={faGear} className={styles.icon}/>Settings</div>
                <div className={`${styles.category} ${styles.action}`}><FontAwesomeIcon icon={faPlay} className={styles.icon}/>Play</div>
            </div>
        </div>
    );
}