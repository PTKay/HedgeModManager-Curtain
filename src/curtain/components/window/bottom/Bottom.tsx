import styles from "./Bottom.module.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faCircle, faA } from '@fortawesome/free-solid-svg-icons'

export default function Bottom() {
    return (
        <div className={styles.bottomBar}>
            <div className={styles.bottomBarLeftSide}>
                <div className={styles.bottomBarItem}>
                    <FontAwesomeIcon icon={faBars} className={styles.icon}/>
                    Menu
                </div>
            </div>
            <div className={styles.bottomBarRightSide}>
                <div className={styles.bottomBarItem}>
                    <FontAwesomeIcon icon={faCircle} className={styles.icon}/>
                    Options
                </div>
                <div className={styles.bottomBarItem}>
                <FontAwesomeIcon icon={faCircle} className={styles.icon}/>
                    Enable
                </div>
            </div>
        </div>
    );
}