import styles from "./Bottom.module.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'

export default function Bottom() {
    return (
        <div className={styles.bottomBar}>
           <FontAwesomeIcon icon={faBars} className={styles.icon}/>
           Menu
        </div>
    );
}