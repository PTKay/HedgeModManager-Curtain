import { MenuBarGameSelectorComponent } from "src/types/Menu"
import styles from "./MenuBarGameSelector.module.css"

export default function MenuBarGameSelector(props : MenuBarGameSelectorComponent) {
    return (
        <select className={`${styles.select} ${props.isHidden ? styles.hidden : ''}`}>
            <option value="volvo">Sonic Generations</option>
        </select>
    )
}