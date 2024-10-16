import { ModsComponent } from "src/types/Mod";
import Mod from "../mod/Mod";
import ModInfo from "../modInfo/ModInfo";


import styles from "./ModsList.module.css"
import animations from "src/curtain/stylesheets/modules/animations.module.css"

export default function ModsList(props: ModsComponent) {
    const mods = props.mods

    return (
        <div className={`${styles.modsList} ${animations.scaleIn}`}>
            <div className={styles.mods}>
                <div className={styles.header}>
                    <span></span>
                    <span className={styles.title}>Name</span>
                    <span className={styles.version}>Version</span>
                    <span className={styles.author}>Author</span>
                    <span className={styles.author}>Features</span>
                </div>
                <div className={styles.list}>
                    {mods.map(mod => <Mod mod={mod} key={mod.id}/>)}
                </div>
            </div>
            <ModInfo />
        </div>
    );
}