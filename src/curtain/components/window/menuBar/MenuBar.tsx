import styles from "./MenuBar.module.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faWrench, faGear, faCode, faPlay } from '@fortawesome/free-solid-svg-icons'
import { MenuBarItemType, MenuBarState, MenuBarStateComponent } from "src/types/Menu";
import MenuBarItem from "./MenuBarItem";
import gameIcon from "assets/games/SonicGenerations.png"
import MenuBarGameSelector from "./MenuBarGameSelector";

export default function MenuBar(props: MenuBarStateComponent) {
    const menuState = props.currentState

    const setHovered : Function = (isHovered : boolean) => {
        const newState : MenuBarState = {...menuState}
        newState.isHovered = isHovered
        props.setState(newState)
    }

    return (
        <div className={styles.menubar} onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)}>
            <div className={styles.top}>
                <img draggable={false} src={gameIcon} className={styles.gameicon}></img>
                <MenuBarGameSelector isHidden={!menuState.isHovered}/>
            </div>
            <div className={styles.middle}>
                <MenuBarItem type={MenuBarItemType.MODS} currentState={menuState} setState={props.setState}>
                    <FontAwesomeIcon icon={faWrench} className={styles.icon}/>Mods
                </MenuBarItem>
                <MenuBarItem type={MenuBarItemType.CODES} currentState={menuState} setState={props.setState}>
                    <FontAwesomeIcon icon={faCode} className={styles.icon}/>Codes
                </MenuBarItem>
                <MenuBarItem type={MenuBarItemType.SETTINGS} currentState={menuState} setState={props.setState}>
                    <FontAwesomeIcon icon={faGear} className={styles.icon}/>Settings
                </MenuBarItem>
                <div className={styles.actions}>
                    <MenuBarItem type={MenuBarItemType.PLAY} currentState={menuState} setState={props.setState} isAction={true}>
                        <FontAwesomeIcon icon={faPlay} className={styles.icon}/>Play
                    </MenuBarItem>
                </div>
            </div>
            <div className={styles.bottom}>
            </div>
        </div>
    );
}