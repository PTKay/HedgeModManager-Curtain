import styles from "./MenuBarItem.module.css"
import { MenuBarItemComponent, MenuBarItemType, MenuBarState } from "src/types/Menu"

export default function MenuBarItem(props: MenuBarItemComponent) {
    const menuState = props.currentState
    const isActive = menuState.selectedItem == props.type


    const setSelectedItem : Function = (selectedItem : MenuBarItemType) => {
        const newState : MenuBarState = {...menuState}
        newState.selectedItem = selectedItem
        props.setState(newState)
    }

    return (
        <div 
            onClick={() => setSelectedItem(props.type)} 
            className={`${styles.category} ${props.isAction ? styles.action : ''} ${isActive ? styles.active : ''}`}
        >
            {props.children}
        </div>
    )
}