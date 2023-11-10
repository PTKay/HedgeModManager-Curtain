import ModsList from "../modsList/ModList";
import styles from "./Content.module.css"

export default function Content() {
    const mods: Array<Mod> = [
        {
            id: 1,
            title: "Free Camera",
            version: "1.2",
            author: "Skyth"
        },
        {
            id: 2,
            title: "Generations Raytracing",
            version: "0.9",
            author: "Skyth"
        }
]

    return (
        <div className={styles.content}>
            <ModsList mods={mods} />
        </div>
    );
}