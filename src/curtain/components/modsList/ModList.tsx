import { Fragment } from "react";
import Mod from "../mod/Mod";
import styles from "./ModsList.module.css"
import ModInfo from "../modInfo/ModInfo";

export default function ModsList(props: ModsComponent) {
    const mods = props.mods

    return (
        <div className={styles.modsList}>
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
                    {mods.map(mod => <Mod mod={mod} key={mod.id}/>)}
                    {mods.map(mod => <Mod mod={mod} key={mod.id}/>)}
                    {mods.map(mod => <Mod mod={mod} key={mod.id}/>)}
                    {mods.map(mod => <Mod mod={mod} key={mod.id}/>)}
                    {mods.map(mod => <Mod mod={mod} key={mod.id}/>)}
                    {mods.map(mod => <Mod mod={mod} key={mod.id}/>)}
                    {mods.map(mod => <Mod mod={mod} key={mod.id}/>)}
                    {mods.map(mod => <Mod mod={mod} key={mod.id}/>)}
                    {mods.map(mod => <Mod mod={mod} key={mod.id}/>)}
                    {mods.map(mod => <Mod mod={mod} key={mod.id}/>)}
                    {mods.map(mod => <Mod mod={mod} key={mod.id}/>)}
                    {mods.map(mod => <Mod mod={mod} key={mod.id}/>)}
                    {mods.map(mod => <Mod mod={mod} key={mod.id}/>)}
                    {mods.map(mod => <Mod mod={mod} key={mod.id}/>)}
                    {mods.map(mod => <Mod mod={mod} key={mod.id}/>)}
                </div>
            </div>
            <ModInfo />
        </div>
    );
}